import React, { useState, useContext, useRef, useEffect } from "react";
import { ChatInputForm } from "./ChatInputForm.js";
import { SearchForm } from "./SearchForm.js";
import { usePosts } from "./usePosts.js";
import { ProfileBanner } from "./ProfileBanner.js";
import { LikabilityModal } from "./LikabilityModal.js";
import { FocusedPostBanner } from "./FocusedPostBanner.js";
import { ChatWallContent } from "./ChatWallContent.js";
import { BackendContext } from "./Backend.js";
import { SubjectModal } from "./SubjectModal.js";
import { SubjectBanner } from "./SubjectBanner.js";

export function ChatWall({
  showInputForm = false,
  context = "profile",
  scrollDirection = "down",
  room = null,
  profileUser = null,
  focusedSubject = null,
  onUserClick = null,
}) {
  const [message, setMessage] = useState("");
  // Pass profileUser to usePosts to filter posts by the profile user
  const { posts, addPost, sortPosts, searchPosts, isLoading } = usePosts(
    context,
    room,
    profileUser
  );
  const [searchResults, setSearchResults] = useState(null);
  const [focusedPostId, setFocusedPostId] = useState(null);
  const [focusedPost, setFocusedPost] = useState(null);
  const [postHierarchy, setPostHierarchy] = useState([]);
  const [showLikabilityModal, setShowLikabilityModal] = useState(false);
  const [showSubjectModal, setShowSubjectModal] = useState(false);
  const [userLikabilityScore, setUserLikabilityScore] = useState(null);
  const [averageLikability, setAverageLikability] = useState(0);
  // Use the focusedSubject passed from parent
  const backend = useContext(BackendContext);
  const [currentUser, setCurrentUser] = useState(null);
  const contentRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      addPost(message, focusedPostId);
      setMessage("");
      // Don't reset focusedPostId here - stay in the focused view to see the new reply
    }
  };

  // Find a post by ID in the posts tree
  const findPostById = (posts, postId) => {
    for (const post of posts) {
      if (post.id === postId) {
        return post;
      }
      if (post.children) {
        const found = findPostById(post.children, postId);
        if (found) return found;
      }
    }
    return null;
  };

  // Build hierarchy when focusing on a post
  const handleReply = (postId) => {
    const post = findPostById(displayPosts, postId);
    if (post) {
      setFocusedPostId(postId);
      setFocusedPost(post);

      // Build hierarchy - for now, we'll just track the immediate parent
      // In a real implementation, you'd want to build the full path
      const hierarchy = [post];
      setPostHierarchy(hierarchy);
    }
  };

  const handleBack = () => {
    if (postHierarchy.length > 1) {
      // Go up one level
      const newHierarchy = [...postHierarchy];
      newHierarchy.pop();
      const newFocusedPost = newHierarchy[newHierarchy.length - 1];
      setFocusedPostId(newFocusedPost.id);
      setFocusedPost(newFocusedPost);
      setPostHierarchy(newHierarchy);
    } else {
      // Back to root view
      setFocusedPostId(null);
      setFocusedPost(null);
      setPostHierarchy([]);
    }
  };

  const handleSearch = async (queryOrResults) => {
    console.log("handleSearch called with:", queryOrResults);
    if (Array.isArray(queryOrResults)) {
      // If it's an array, it's the new combined search results
      // Convert them to the post format expected by ChatWallContent
      const formattedResults = await Promise.all(queryOrResults.map(async (item) => {
        console.log("Processing search result item:", item);
        switch (item.type) {
          case 'user':
            return {
              id: `search-user-${item.data.uid}`,
              uid: item.data.uid,
              user: item.data.name,
              content: `User: ${item.data.name} - ${item.data.aboutMe || 'No description available'}`,
              time: 'User',
              type: 'search-user',
              timestamp: Date.now(),
              hasLikability: false
            };
          case 'post':
            // Get user for the post
            let postUser;
            if (item.data.uid === "0") {
              postUser = await backend.getCurrentUser();
            } else {
              try {
                postUser = await backend.getUser(item.data.uid);
              } catch (error) {
                postUser = { name: 'Unknown User' };
              }
            }
            return {
              id: `search-post-${item.data.id}`,
              uid: item.data.uid,
              user: postUser.name,
              content: item.data.text,
              time: new Date(item.data.timestamp).toLocaleDateString(),
              type: 'search-post',
              timestamp: item.data.timestamp,
              hasLikability: !['notification', 'user', 'blocked', 'following'].includes(item.data.type)
            };
          case 'subject':
            console.log("Processing subject search result:", item.data);
            return {
              id: `search-subject-${item.data.id}`,
              uid: item.data.id, // Use subject ID as uid
              user: 'System',
              content: `Subject: ${item.data.name} - ${item.data.description}`,
              time: new Date(item.data.createdAt).toLocaleDateString(),
              type: 'search-subject',
              timestamp: item.data.createdAt,
              hasLikability: false,
              subject: item.data // Make sure subject data is included
            };
          default:
            return null;
        }
      }));
      
      setSearchResults(formattedResults.filter(Boolean));
    } else {
      // If it's a string, use the existing searchPosts function
      const results = await searchPosts(queryOrResults);
      setSearchResults(results);
    }
  };

  const displayPosts = searchResults || posts;
  const sortedPosts = sortPosts(displayPosts, scrollDirection);

  // Fetch current user
  React.useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const user = await backend.getCurrentUser();
        setCurrentUser(user);
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    };

    fetchCurrentUser();
  }, [backend]);

  // Trigger initial search for search context when component mounts
  React.useEffect(() => {
    const performInitialSearch = async () => {
      if (context === "search" && !searchResults && currentUser) {
        const [userResults, postResults, subjectResults] = await Promise.all([
          backend.searchUsers('', currentUser.uid),
          backend.searchPosts(''),
          backend.searchSubjects('')
        ]);
        
        const allResults = [
          ...userResults.map(user => ({ type: 'user', data: user })),
          ...postResults.map(post => ({ type: 'post', data: post })),
          ...subjectResults.map(subject => ({ type: 'subject', data: subject }))
        ];
        
        console.log("Initial search results:", allResults);
        handleSearch(allResults);
      }
    };

    performInitialSearch();
  }, [context, searchResults, currentUser, backend]);

  // Scroll to appropriate position when component first mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      const scrollingElement = document.getElementById('scrolling-main-content-container');
      if (scrollingElement) {
        if (focusedPostId) {
          // When focused on a post, scroll to the top to see oldest replies first
          scrollingElement.scrollTop = 0;
        } else {
          // When not focused, scroll to the bottom
          scrollingElement.scrollTop = scrollingElement.scrollHeight;
        }
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [focusedPostId]);

  // Track if we should auto-scroll
  const shouldAutoScrollRef = useRef(true);

  // Scroll to appropriate position when posts are loaded or updated
  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        const scrollingElement = document.getElementById('scrolling-main-content-container');
        if (scrollingElement && shouldAutoScrollRef.current) {
          if (focusedPostId) {
            // When focused on a post, scroll to the top to see oldest replies first
            scrollingElement.scrollTop = 0;
          } else {
            // When not focused, scroll to the bottom
            scrollingElement.scrollTop = scrollingElement.scrollHeight;
          }
        }
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [posts, isLoading, focusedPostId, searchResults]);

  // Track user scrolling to determine if we should auto-scroll
  useEffect(() => {
    const scrollingElement = document.getElementById('scrolling-main-content-container');
    if (!scrollingElement) return;

    const handleScroll = () => {
      const threshold = 100; // pixels from bottom
      const isNearBottom = 
        scrollingElement.scrollHeight - scrollingElement.scrollTop - scrollingElement.clientHeight < threshold;
      shouldAutoScrollRef.current = isNearBottom;
    };

    scrollingElement.addEventListener('scroll', handleScroll);
    return () => scrollingElement.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", position: "relative" }}>
      {/* Always visible search form at the top */}
      {(context === "profile" ||
        context === "feed" ||
        context === "search" ||
        context === "friends" ||
        context === "blocked" ||
        context === "following" ||
        context === "subject") && (
        <div
          style={{
            position: "sticky",
            top: 0,
            zIndex: 100,
            backgroundColor: "white",
            borderBottom: "1px solid #ddd",
            height: '80px', // Fixed height to ensure consistent spacing
          }}
        >
          <SearchForm onSearch={handleSearch} context={context} />
        </div>
      )}
      
      {/* Different layout when focused on a post */}
      {focusedPostId ? (
        <>
          {/* Scrollable content area for replies */}
          <div 
            ref={contentRef}
            style={{ 
              flex: 1, 
              minHeight: 0, 
              overflow: "auto",
              display: "flex",
              flexDirection: "column-reverse" // This makes it up-scrollable (newest at bottom)
            }}
          >
            <ChatWallContent
              isLoading={isLoading}
              focusedPostId={focusedPostId}
              focusedPost={focusedPost}
              displayPosts={displayPosts}
              sortedPosts={sortedPosts}
              context={context}
              onReply={handleReply}
              onUserClick={onUserClick}
            />
          </div>
          
          {/* Reply input form */}
          {showInputForm && (
            <div style={{ flexShrink: 0 }}>
              <div
                style={{
                  backgroundColor: "white",
                  borderTop: "1px solid #ddd",
                  boxSizing: "border-box",
                }}
              >
                <ChatInputForm
                  message={message}
                  setMessage={setMessage}
                  handleSubmit={handleSubmit}
                  position="bottom"
                  replyingTo={focusedPostId}
                />
              </div>
            </div>
          )}
          
          {/* Focused post at the very bottom */}
          <div style={{ flexShrink: 0 }}>
            <FocusedPostBanner
              focusedPost={focusedPost}
              onBack={handleBack}
              onShowLikabilityModal={() => setShowLikabilityModal(true)}
            />
          </div>
        </>
      ) : (
        // Original layout when not focused on a post
        <>
          {/* Content area that scrolls */}
          <div 
            ref={contentRef}
            style={{ 
              flex: 1, 
              minHeight: 0, 
              overflow: "auto",
            }}
          >
            <ChatWallContent
              isLoading={isLoading}
              focusedPostId={focusedPostId}
              focusedPost={focusedPost}
              displayPosts={displayPosts}
              sortedPosts={sortedPosts}
              context={context}
              onReply={handleReply}
              onUserClick={onUserClick}
            />
          </div>

          {/* Fixed footer section */}
          <div style={{ flexShrink: 0 }}>
            {/* Banners at the bottom */}
            {context === "profile" && !focusedPostId && (
              <div>
                <ProfileBanner user={profileUser} />
              </div>
            )}
            
            {context === "subject" && !focusedPostId && (
              <div>
                {console.log("Rendering SubjectBanner in ChatWall with focusedSubject:", focusedSubject)}
                <SubjectBanner 
                  subject={focusedSubject} 
                  onShowSubjectModal={() => {
                    console.log("Opening subject modal for subject:", focusedSubject);
                    setShowSubjectModal(true);
                  }}
                />
              </div>
            )}
            
            {/* Input form at the bottom for contexts that need it */}
            {showInputForm &&
              // Only show input form if we're on our own profile or in a chat
              (context !== "profile" ||
                (profileUser &&
                  currentUser &&
                  profileUser.uid === currentUser.uid)) && (
                <div
                  style={{
                    backgroundColor: "white",
                    borderTop: "1px solid #ddd",
                    boxSizing: "border-box",
                  }}
                >
                  <ChatInputForm
                    message={message}
                    setMessage={setMessage}
                    handleSubmit={handleSubmit}
                    position="bottom"
                    replyingTo={focusedPostId}
                  />
                </div>
              )}
          </div>
        </>
      )}

      {/* Likability Modal */}
      <LikabilityModal
        show={showLikabilityModal}
        onHide={() => setShowLikabilityModal(false)}
        postId={focusedPostId}
        userLikabilityScore={userLikabilityScore}
        setUserLikabilityScore={setUserLikabilityScore}
        averageLikability={averageLikability}
        setAverageLikability={setAverageLikability}
      />
      
      {/* Subject Modal */}
      {console.log("showSubjectModal state:", showSubjectModal)}
      <SubjectModal
        show={showSubjectModal}
        onHide={() => {
          console.log("Hiding subject modal");
          setShowSubjectModal(false);
        }}
        subject={focusedSubject}
        currentUser={currentUser}
      />
    </div>
  );
}
