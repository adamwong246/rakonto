import posts from "./Posts";

export const InitDb = {
  users: [
    { uid: "1", name: "Alice Johnson" },
    { uid: "2", name: "Bob Smith" },
    { uid: "3", name: "Carol Davis" },
    { uid: "4", name: "David Wilson" },
    { uid: "5", name: "Eva Brown" },
    { uid: "6", name: "Frank Miller" },
    { uid: "7", name: "Grace Lee" },
    { uid: "8", name: "Henry Taylor" },
    { uid: "9", name: "Ivy Chen" },
    { uid: "10", name: "Jack Robinson" },
    { uid: "11", name: "Katherine Moore" },
    { uid: "12", name: "Liam Anderson" },
    { uid: "13", name: "Mia Thompson" },
    { uid: "14", name: "Noah Garcia" },
    { uid: "15", name: "Olivia Martinez" },
    { uid: "16", name: "Peter White" },
    { uid: "17", name: "Quinn Harris" },
    { uid: "18", name: "Rachel Clark" },
    { uid: "19", name: "Samuel Lewis" },
    { uid: "20", name: "Tina Walker" },
    { uid: "21", name: "Uma Hall" },
    { uid: "22", name: "Victor Young" },
    { uid: "23", name: "Wendy King" },
    { uid: "24", name: "Xavier Scott" },
    { uid: "25", name: "Yvonne Green" },
    { uid: "26", name: "Zachary Adams" },
  ],

  relationships: [
    // Add some initial relationships for testing
    { fromUid: "0", toUid: "1", type: "follow" },
    { fromUid: "1", toUid: "0", type: "follow" }, // Alice and current user are friends
    { fromUid: "0", toUid: "2", type: "follow" }, // Current user follows Bob
    { fromUid: "3", toUid: "0", type: "follow" }, // Carol follows current user
    { fromUid: "0", toUid: "4", type: "block" }, // Current user blocks David
    { fromUid: "5", toUid: "0", type: "block" }, // Eva blocks current user
    // Add more relationships to create a rich social graph
    { fromUid: "0", toUid: "6", type: "follow" },
    { fromUid: "7", toUid: "0", type: "follow" },
    { fromUid: "0", toUid: "8", type: "follow" },
    { fromUid: "9", toUid: "0", type: "follow" },
    { fromUid: "10", toUid: "0", type: "follow" },
    { fromUid: "0", toUid: "11", type: "follow" },
    { fromUid: "12", toUid: "0", type: "follow" },
    { fromUid: "0", toUid: "13", type: "follow" },
    { fromUid: "14", toUid: "0", type: "follow" },
    // Add relationships between other users
    { fromUid: "1", toUid: "2", type: "follow" },
    { fromUid: "2", toUid: "1", type: "follow" },
    { fromUid: "1", toUid: "3", type: "follow" },
    { fromUid: "3", toUid: "1", type: "follow" },
    { fromUid: "4", toUid: "5", type: "follow" },
    { fromUid: "6", toUid: "7", type: "follow" },
    { fromUid: "7", toUid: "6", type: "follow" },
    { fromUid: "8", toUid: "9", type: "follow" },
    { fromUid: "9", toUid: "8", type: "follow" },
    { fromUid: "10", toUid: "11", type: "follow" },
    { fromUid: "11", toUid: "10", type: "follow" },
    { fromUid: "12", toUid: "13", type: "follow" },
    { fromUid: "13", toUid: "12", type: "follow" },
    { fromUid: "14", toUid: "15", type: "follow" },
    { fromUid: "15", toUid: "14", type: "follow" },
  ],
  
  chatRooms: [
    {
      id: "private-1-0",
      name: "Chat with Alice Johnson",
      type: "private-1-1",
      participants: ["0", "1"],
      isPrivate: true,
    },
    {
      id: "private-group-1",
      name: "Team Discussion",
      type: "private-group",
      participants: ["0", "1", "2"],
      isPrivate: true,
    },
    {
      id: "public-group-1",
      name: "General Discussion",
      type: "public-group",
      participants: [],
      isPrivate: false,
    },
    {
      id: "private-1-2",
      name: "Chat with Bob Smith",
      type: "private-1-1",
      participants: ["0", "2"],
      isPrivate: true,
    },
    {
      id: "private-1-3",
      name: "Chat with Carol Davis",
      type: "private-1-1",
      participants: ["0", "3"],
      isPrivate: true,
    },
    {
      id: "public-group-2",
      name: "Tech Enthusiasts",
      type: "public-group",
      participants: [],
      isPrivate: false,
    },
    {
      id: "public-group-3",
      name: "Art & Design",
      type: "public-group",
      participants: [],
      isPrivate: false,
    },
    {
      id: "private-group-2",
      name: "Family Chat",
      type: "private-group",
      participants: ["0", "1", "4", "5"],
      isPrivate: true,
    },
  ],

  posts: [
    ...posts,
    // Add profile posts for all users
    {
      id: "profile-post-1",
      uid: "1",
      text: "Just finished reading an amazing book about AI ethics! Highly recommend it to everyone interested in technology.",
      timestamp: Date.now() - 86400000, // 1 day ago
      type: "profile"
    },
    {
      id: "profile-post-2",
      uid: "1",
      text: "Beautiful sunset today. Sometimes we need to pause and appreciate the simple things in life.",
      timestamp: Date.now() - 172800000, // 2 days ago
      type: "profile"
    },
    {
      id: "profile-post-3",
      uid: "2",
      text: "Working on a new React project. The new features are really exciting!",
      timestamp: Date.now() - 43200000, // 12 hours ago
      type: "profile"
    },
    {
      id: "profile-post-4",
      uid: "2",
      text: "Just had the best coffee in town. If you're in the area, you have to try this place!",
      timestamp: Date.now() - 129600000, // 1.5 days ago
      type: "profile"
    },
    {
      id: "profile-post-5",
      uid: "3",
      text: "Learning a new programming language. It's challenging but rewarding!",
      timestamp: Date.now() - 21600000, // 6 hours ago
      type: "profile"
    },
    {
      id: "profile-post-6",
      uid: "3",
      text: "Weekend hiking trip was amazing. Nature always helps me recharge.",
      timestamp: Date.now() - 86400000, // 1 day ago
      type: "profile"
    },
    {
      id: "profile-post-7",
      uid: "4",
      text: "Just released a new version of my open source project. Check it out!",
      timestamp: Date.now() - 7200000, // 2 hours ago
      type: "profile"
    },
    {
      id: "profile-post-8",
      uid: "4",
      text: "Thinking about the future of web development. So many exciting possibilities!",
      timestamp: Date.now() - 86400000, // 1 day ago
      type: "profile"
    },
    {
      id: "profile-post-9",
      uid: "5",
      text: "Started a new painting today. The colors are coming together beautifully.",
      timestamp: Date.now() - 3600000, // 1 hour ago
      type: "profile"
    },
    {
      id: "profile-post-10",
      uid: "5",
      text: "Visited the art museum yesterday. So much inspiration!",
      timestamp: Date.now() - 172800000, // 2 days ago
      type: "profile"
    },
    // Add 50 more profile posts from various users
    ...Array.from({ length: 50 }, (_, i) => ({
      id: `profile-post-extra-${i + 11}`,
      uid: `${(i % 26) + 1}`, // Distribute across users 1-26
      text: `Profile post content ${i + 1} from user ${(i % 26) + 1}. This is sample content to populate the feed.`,
      timestamp: Date.now() - (i * 3600000), // Stagger timestamps
      type: "profile"
    })),
    // Add feed posts
    ...Array.from({ length: 30 }, (_, i) => ({
      id: `feed-post-${i + 1}`,
      uid: `${(i % 26) + 1}`,
      text: `Feed post ${i + 1}: Sharing something interesting with my followers!`,
      timestamp: Date.now() - (i * 1800000), // Stagger timestamps
      type: "feed"
    })),
    // Add popular posts
    ...Array.from({ length: 20 }, (_, i) => ({
      id: `popular-post-${i + 1}`,
      uid: `${(i % 26) + 1}`,
      text: `Popular post ${i + 1}: This is trending right now!`,
      timestamp: Date.now() - (i * 3600000),
      type: "popular"
    })),
    // Add notification posts
    ...Array.from({ length: 15 }, (_, i) => ({
      id: `notification-${i + 1}`,
      uid: "system",
      text: `Notification ${i + 1}: You have a new message or update.`,
      timestamp: Date.now() - (i * 7200000),
      type: "notification",
      subtype: i % 5 === 0 ? 'like' : 
               i % 5 === 1 ? 'follow' : 
               i % 5 === 2 ? 'comment' : 
               i % 5 === 3 ? 'mention' : 'trending'
    })),
    // Add messages for Team Discussion (private-group)
    {
      id: "team-discussion-1",
      uid: "1",
      text: "Hey team, let's discuss the project timeline",
      timestamp: Date.now() - 3600000,
      type: "chat",
      room: "private-group-1"
    },
    {
      id: "team-discussion-2",
      uid: "0",
      text: "I think we can finish by next Friday",
      timestamp: Date.now() - 1800000,
      type: "chat",
      room: "private-group-1"
    },
    {
      id: "team-discussion-3",
      uid: "2",
      text: "Sounds good. I'll have my part ready by Wednesday",
      timestamp: Date.now() - 600000,
      type: "chat",
      room: "private-group-1"
    },
    // Add more chat messages for various rooms
    ...Array.from({ length: 20 }, (_, i) => ({
      id: `chat-message-${i + 1}`,
      uid: `${(i % 26) + 1}`,
      text: `Chat message ${i + 1} in the conversation.`,
      timestamp: Date.now() - (i * 300000),
      type: "chat",
      room: i % 3 === 0 ? "public-group-1" : 
            i % 3 === 1 ? "public-group-2" : "public-group-3"
    })),
    // Add profile posts for current user
    {
      id: "profile-post-current-1",
      uid: "0",
      text: "Welcome to my profile! I'm excited to connect with everyone on this platform.",
      timestamp: Date.now() - 3600000, // 1 hour ago
      type: "profile"
    },
    {
      id: "profile-post-current-2",
      uid: "0",
      text: "Working on some exciting new features for our project. Can't wait to share more soon!",
      timestamp: Date.now() - 86400000, // 1 day ago
      type: "profile"
    },
    {
      id: "profile-post-current-3",
      uid: "0",
      text: "Just finished a great workout. Staying active is important for both body and mind.",
      timestamp: Date.now() - 172800000, // 2 days ago
      type: "profile"
    }
  ],
};
