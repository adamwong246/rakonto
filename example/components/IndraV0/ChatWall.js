import React, { useState, useContext, useRef, useEffect } from "react";
import { ChatInputForm } from "./ChatInputForm.js";
import { SearchForm } from "./SearchForm.js";
import { usePosts } from "./usePosts.js";
import { ProfileBanner } from "./ProfileBanner.js";
import { LikabilityModal } from "./LikabilityModal.js";
import { FocusedPostBanner } from "./FocusedPostBanner.js";
import { ChatWallContent } from "./ChatWallContent.js";
import { BackendContext } from "./Backend.js";

export function ChatWall({
  showInputForm = false,
  context = "profile",
  scrollDirection = "down",
  room = null,
  profileUser = null,
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
  const [userLikabilityScore, setUserLikabilityScore] = useState(null);
  const [averageLikability, setAverageLikability] = useState(0);
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
    if (Array.isArray(queryOrResults)) {
      // If it's an array, it's already formatted results from the backend
      setSearchResults(queryOrResults);
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

  // Scroll to bottom when component first mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      const scrollingElement = document.getElementById('scrolling-main-content-container');
      if (scrollingElement) {
        scrollingElement.scrollTop = scrollingElement.scrollHeight;
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Track if we should auto-scroll
  const shouldAutoScrollRef = useRef(true);

  // Scroll to bottom when posts are loaded or updated, but only if we're near the bottom
  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        const scrollingElement = document.getElementById('scrolling-main-content-container');
        if (scrollingElement && shouldAutoScrollRef.current) {
          scrollingElement.scrollTop = scrollingElement.scrollHeight;
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
        context === "following") && (
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
      
      {/* Content area that scrolls beneath the search form */}
      <div 
        ref={contentRef}
        style={{ 
          flex: 1, 
          minHeight: 0, 
          overflow: "auto",
        }}
      >
        {/* Focused Post Banner */}
        {focusedPostId && (
          <FocusedPostBanner
            focusedPost={focusedPost}
            onBack={handleBack}
            onShowLikabilityModal={() => setShowLikabilityModal(true)}
          />
        )}
        
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
        
        {/* Profile Banner - Only show for profile context */}
        {context === "profile" && !focusedPostId && (
          <ProfileBanner user={profileUser} />
        )}
      </div>

      {/* Fixed footer section */}
      <div style={{ flexShrink: 0 }}>
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
    </div>
  );
}
