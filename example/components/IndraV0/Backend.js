import React from "react";

import { InitDb } from "./InitDb";
 
class FakeBackend {
  constructor() {
    this.users = InitDb.users;

    this.currentUser = { uid: "0", name: "You" };

    // Track relationships: each entry is { fromUid, toUid, type }
    // type can be: 'follow', 'block'
    this.relationships = InitDb.relationships;

    // Track chat rooms: each room has id, name, type, participants, isPrivate
    this.chatRooms = InitDb.chatRooms;

    // Track posts: each post has id, uid, text, timestamp, and type
    this.posts = InitDb.posts;
  
    // Track likability scores: each entry is { postId, userId, score }
    this.likabilityScores = [];
  }

  // Get all users
  getUsers() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...this.users]);
      }, 100);
    });
  }

  // Get user by uid
  getUser(uid) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = this.users.find((u) => u.uid === uid);
        if (user) {
          resolve(user);
        } else {
          reject(new Error("User not found"));
        }
      }, 100);
    });
  }

  // Get current user
  getCurrentUser() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.currentUser);
      }, 50);
    });
  }

  // Add a new user
  addUser(name) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newUser = {
          uid: (this.users.length + 1).toString(),
          name: name,
        };
        this.users.push(newUser);
        resolve(newUser);
      }, 200);
    });
  }

  // Search users by name
  async searchUsers(query, currentUserUid = null) {
    return new Promise((resolve) => {
      setTimeout(() => {
        let results = this.users.filter((user) =>
          user.name.toLowerCase().includes(query.toLowerCase())
        );
        
        // Filter out users blocked by or blocking the current user
        if (currentUserUid) {
          results = results.filter(user => {
            // Check if current user blocks this user or is blocked by this user
            const isBlocked = this.relationships.some(r => 
              (r.fromUid === currentUserUid && r.toUid === user.uid && r.type === "block") ||
              (r.fromUid === user.uid && r.toUid === currentUserUid && r.type === "block")
            );
            return !isBlocked;
          });
        }
        
        resolve(results);
      }, 150);
    });
  }

  // Get relationship between two users
  getRelationship(fromUid, toUid) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const fromFollowsTo = this.relationships.some(
          (r) =>
            r.fromUid === fromUid && r.toUid === toUid && r.type === "follow"
        );
        const toFollowsFrom = this.relationships.some(
          (r) =>
            r.fromUid === toUid && r.toUid === fromUid && r.type === "follow"
        );
        const fromBlocksTo = this.relationships.some(
          (r) =>
            r.fromUid === fromUid && r.toUid === toUid && r.type === "block"
        );
        const toBlocksFrom = this.relationships.some(
          (r) =>
            r.fromUid === toUid && r.toUid === fromUid && r.type === "block"
        );

        // Determine relationship type
        // Check if either user blocks the other
        if (fromBlocksTo) {
          // Current user blocks target user
          resolve("blocked");
        } else if (toBlocksFrom) {
          // Target user blocks current user
          resolve("blocked-by");
        } else if (fromFollowsTo && toFollowsFrom) {
          resolve("friends");
        } else if (fromFollowsTo) {
          resolve("following");
        } else if (toFollowsFrom) {
          resolve("followed-by");
        } else {
          resolve("none");
        }
      }, 100);
    });
  }

  // Update relationship between users
  updateRelationship(fromUid, toUid, action) {
    return new Promise((resolve) => {
      setTimeout(() => {
        // For follow/unfollow, only manage follow relationships
        if (action === "follow" || action === "unfollow") {
          // Remove existing follow relationship
          this.relationships = this.relationships.filter(
            (r) => !(r.fromUid === fromUid && r.toUid === toUid && r.type === "follow")
          );
          
          // Add follow if requested
          if (action === "follow") {
            this.relationships.push({ fromUid, toUid, type: "follow" });
          }
        }
        // For block/unblock, only manage block relationships
        else if (action === "block" || action === "unblock") {
          // Remove existing block relationship
          this.relationships = this.relationships.filter(
            (r) => !(r.fromUid === fromUid && r.toUid === toUid && r.type === "block")
          );
          
          // Add block if requested
          if (action === "block") {
            this.relationships.push({ fromUid, toUid, type: "block" });
          }
        }

        resolve({ success: true });
      }, 150);
    });
  }

  // Get all relationships for a user
  getUserRelationships(uid) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const userRelationships = this.relationships.filter(
          (r) => r.fromUid === uid
        );
        resolve(userRelationships);
      }, 100);
    });
  }

  // Get posts based on context and room
  getPosts(context, room = null) {
    return new Promise((resolve) => {
      setTimeout(() => {
        let filteredPosts = [];

        switch (context) {
          case "profile":
            // Get the profile user's UID from the request
            // For now, we'll use a simple approach - in a real app, this would be passed as a parameter
            // Since we can't pass parameters directly, we'll need to track the profile user differently
            // For now, we'll show all profile posts
            filteredPosts = this.posts.filter(
              (post) => post.type === "profile"
            );
            break;
          case "feed":
            // Show profile posts and feed posts from followed users
            const followedUids = this.relationships
              .filter((r) => r.fromUid === "0" && r.type === "follow")
              .map((r) => r.toUid);
            followedUids.push("0"); // Include current user's posts
            filteredPosts = this.posts.filter(
              (post) =>
                (post.type === "profile" || post.type === "feed") &&
                followedUids.includes(post.uid)
            );
            break;
          case "recommendations":
            // Get users you're not friends with
            const currentUserUid = "0";
            const followedUidsForRecs = this.relationships
              .filter(r => r.fromUid === currentUserUid && r.type === "follow")
              .map(r => r.toUid);
            
            // Add current user to exclude them
            followedUidsForRecs.push(currentUserUid);
            
            const recommendedUsers = this.users
              .filter(user => !followedUidsForRecs.includes(user.uid))
              .map(user => ({
                id: `user-rec-${user.uid}`,
                uid: user.uid,
                text: `You might know ${user.name}`,
                timestamp: Date.now(),
                type: "user-recommendation",
                user: user,
              }));
            
            // Get public group chats
            const publicGroupChats = this.chatRooms
              .filter(room => room.type === "public-group")
              .map(room => ({
                id: `room-rec-${room.id}`,
                uid: "system",
                text: `Public group: ${room.name}`,
                timestamp: Date.now(),
                type: "room-recommendation",
                room: room,
              }));
            
            // Get some posts (mix of different types)
            const recommendedPosts = this.posts
              .filter(post => 
                post.type === "feed" || 
                post.type === "profile" || 
                post.type === "popular"
              )
              .slice(0, 5)
              .map(post => ({
                ...post,
                type: "post-recommendation"
              }));
            
            // Combine all recommendations
            filteredPosts = [
              ...recommendedUsers,
              ...publicGroupChats,
              ...recommendedPosts
            ];
            break;
          case "notifications":
            filteredPosts = this.posts.filter(
              (post) => post.type === "notification"
            );
            break;
          case "popular":
            filteredPosts = this.posts.filter(
              (post) => post.type === "popular"
            );
            break;
          case "chat":
            if (room) {
              filteredPosts = this.posts.filter(
                (post) => post.type === "chat" && post.room === room
              );
            }
            break;
          case "friends":
            // For friends context, show all users as potential friends
            // We'll format users as posts
            const allUsers = this.users;
            // Convert users to the post format
            const userPosts = allUsers.map((user) => ({
              id: `user-${user.uid}`,
              uid: user.uid,
              text: `User: ${user.name} - Connect and chat!`,
              timestamp: Date.now(),
              type: "user",
              user: user,
            }));
            filteredPosts = userPosts;
            break;
          case "blocked":
            // Get blocked users
            const blockedRelationships = this.relationships.filter(
              (r) => r.fromUid === "0" && r.type === "block"
            );
            const blockedUsers = blockedRelationships
              .map((rel) => this.users.find((u) => u.uid === rel.toUid))
              .filter(Boolean);

            const blockedUserPosts = blockedUsers.map((user) => ({
              id: `blocked-${user.uid}`,
              uid: user.uid,
              text: `You have blocked this user`,
              timestamp: Date.now(),
              type: "blocked",
              user: user,
            }));
            filteredPosts = blockedUserPosts;
            break;
          case "following":
            // Get following users
            const followingRelationships = this.relationships.filter(
              (r) => r.fromUid === "0" && r.type === "follow"
            );
            const followingUsers = followingRelationships
              .map((rel) => this.users.find((u) => u.uid === rel.toUid))
              .filter(Boolean);

            const followingUserPosts = followingUsers.map((user) => ({
              id: `following-${user.uid}`,
              uid: user.uid,
              text: `You are following this user`,
              timestamp: Date.now(),
              type: "following",
              user: user,
            }));
            filteredPosts = followingUserPosts;
            break;
          case "followers":
            // Get followers (users who follow the current user)
            const followerRelationships = this.relationships.filter(
              (r) => r.toUid === "0" && r.type === "follow"
            );
            const followers = followerRelationships
              .map((rel) => this.users.find((u) => u.uid === rel.fromUid))
              .filter(Boolean);

            const followerUserPosts = followers.map((user) => ({
              id: `follower-${user.uid}`,
              uid: user.uid,
              text: `This user follows you`,
              timestamp: Date.now(),
              type: "followers",
              user: user,
            }));
            filteredPosts = followerUserPosts;
            break;
          case "search":
            // For search, return some sample posts that could be search results
            filteredPosts = this.posts.slice(0, 5).map((post) => ({
              ...post,
              type: "search",
            }));
            break;
          default:
            filteredPosts = [];
        }

        // Sort by timestamp (newest first)
        filteredPosts.sort((a, b) => b.timestamp - a.timestamp);

        // Build a tree structure for nested posts
        const postMap = new Map();
        const rootPosts = [];
        
        // First pass: create a map and identify root posts
        filteredPosts.forEach(post => {
          const formattedPost = {
            id: post.id,
            uid: post.uid,
            user: null, // Will be set later
            content: post.text,
            time: null, // Will be set later
            type: post.type,
            subtype: post.subtype,
            mutualFriends: Math.floor(Math.random() * 10) + 1,
            likability: post.likability || Math.floor(Math.random() * 101),
            hasLikability: !['notification', 'user', 'blocked', 'following'].includes(post.type) &&
              (post.type !== 'chat' || (post.room && post.room.startsWith('public'))),
            parentId: post.parentId,
            children: []
          };
          
          // Handle user posts (for friends, blocked, following contexts)
          if (post.type === "user" || post.type === "blocked" || post.type === "following") {
            const user = post.user;
            formattedPost.user = user.name;
            formattedPost.content = post.text;
            formattedPost.time = "Online";
            formattedPost.timestamp = post.timestamp; // Add timestamp for sorting
            formattedPost.hasLikability = false;
          } else {
            // Handle regular posts
            const user =
              post.uid === "system"
                ? { name: "System" }
                : post.uid === "0"
                  ? this.currentUser
                  : this.users.find((u) => u.uid === post.uid);

            // Format time
            const timeDiff = Date.now() - post.timestamp;
            let time;
            if (timeDiff < 60000) time = "Just now";
            else if (timeDiff < 3600000)
              time = `${Math.floor(timeDiff / 60000)} minutes ago`;
            else if (timeDiff < 86400000)
              time = `${Math.floor(timeDiff / 3600000)} hours ago`;
            else time = `${Math.floor(timeDiff / 86400000)} days ago`;

            formattedPost.user = user?.name || "Unknown User";
            formattedPost.time = time;
            formattedPost.timestamp = post.timestamp; // Preserve original timestamp for sorting
          }
          
          postMap.set(post.id, formattedPost);
          
          if (!post.parentId) {
            rootPosts.push(formattedPost);
          }
        });
        
        // Second pass: build the tree
        filteredPosts.forEach(post => {
          if (post.parentId) {
            const parent = postMap.get(post.parentId);
            if (parent) {
              parent.children.push(postMap.get(post.id));
            }
          }
        });
        
        // Sort children by timestamp (newest first)
        const sortChildren = (posts) => {
          posts.sort((a, b) => b.timestamp - a.timestamp);
          posts.forEach(post => {
            if (post.children.length > 0) {
              sortChildren(post.children);
            }
          });
        };
        
        sortChildren(rootPosts);
        const formattedPosts = rootPosts;
        
        resolve(formattedPosts);
      }, 150);
    })
  }
    

  // Add a new post
  addPost(uid, text, type, room = null, parentId = null) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newPost = {
          id: (this.posts.length + 1).toString(),
          uid: uid,
          text: text,
          timestamp: Date.now(),
          type: type,
          room: room,
          parentId: parentId, // Track parent post for nesting
        };
        this.posts.push(newPost);
        resolve(newPost);
      }, 100);
    })
  }

  // Add or update likability score for a post
  setLikabilityScore(postId, userId, score) {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Check if user already rated this post
        const existingIndex = this.likabilityScores.findIndex(
          ls => ls.postId === postId && ls.userId === userId
        );
        
        if (existingIndex !== -1) {
          // Update existing score
          this.likabilityScores[existingIndex].score = score;
        } else {
          // Add new score
          this.likabilityScores.push({ postId, userId, score });
        }
        
        resolve({ success: true });
      }, 100);
    });
  }

  // Get likability scores for a post
  getLikabilityScores(postId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const scores = this.likabilityScores.filter(ls => ls.postId === postId);
        resolve(scores);
      }, 100);
    });
  }

  // Get user's likability score for a post
  getUserLikabilityScore(postId, userId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const score = this.likabilityScores.find(
          ls => ls.postId === postId && ls.userId === userId
        );
        resolve(score ? score.score : null);
      }, 100);
    });
  }

  // Get chat rooms for current user
  getChatRooms() {
    return new Promise((resolve) => {
      setTimeout(() => {
        // For now, return all rooms. In a real app, you'd filter based on user permissions
        resolve([...this.chatRooms]);
      }, 100);
    });
  }

  // Create a new chat room
  createChatRoom(name, type, participants = []) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newRoom = {
          id: `room-${Date.now()}`,
          name: name,
          type: type,
          participants: participants,
          isPrivate: type !== "public-group",
        };
        this.chatRooms.push(newRoom);
        resolve(newRoom);
      }, 100);
    });
  }

  // Track user ratings: each entry is { raterUid, targetUid, ratings }
  userRatings = [];

  // Set user ratings
  setUserRatings(raterUid, targetUid, ratings) {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Check if user already rated this target user
        const existingIndex = this.userRatings.findIndex(
          ur => ur.raterUid === raterUid && ur.targetUid === targetUid
        );
        
        if (existingIndex !== -1) {
          // Update existing ratings
          this.userRatings[existingIndex].ratings = ratings;
        } else {
          // Add new ratings
          this.userRatings.push({ raterUid, targetUid, ratings });
        }
        
        resolve({ success: true });
      }, 100);
    });
  }

  // Get user ratings
  getUserRatings(raterUid, targetUid) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const rating = this.userRatings.find(
          ur => ur.raterUid === raterUid && ur.targetUid === targetUid
        );
        resolve(rating ? rating.ratings : null);
      }, 100);
    });
  }

  // Get all ratings for a target user
  getAllUserRatings(targetUid) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const ratings = this.userRatings.filter(ur => ur.targetUid === targetUid);
        resolve(ratings);
      }, 100);
    });
  }
}

// Create a singleton instance
const backend = new FakeBackend();

// React context for backend
const BackendContext = React.createContext();

export { backend, BackendContext };
