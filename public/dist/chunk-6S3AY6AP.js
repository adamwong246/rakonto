import {
  BackendContext,
  Button_default,
  Col_default,
  Form_default,
  InputGroup_default,
  Modal_default,
  ProfileBanner,
  Row_default
} from "./chunk-5ZPPOQ6L.js";
import {
  __toESM,
  require_jsx_runtime,
  require_react
} from "./chunk-2GIMI7UT.js";

// example/components/IndraV0/ChatWall.js
var import_react14 = __toESM(require_react(), 1);

// example/components/IndraV0/ChatInputForm.js
var import_react = __toESM(require_react(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
function ChatInputForm({ message, setMessage, handleSubmit, position = "top", replyingTo = null }) {
  const getPlaceholder = () => {
    return replyingTo ? "Type your reply..." : "Type your message...";
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      style: {
        padding: "20px 0",
        [position === "top" ? "borderBottom" : "borderTop"]: "1px solid #ddd",
        [position === "top" ? "marginBottom" : "marginTop"]: "20px"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form_default, { onSubmit: handleSubmit, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InputGroup_default, { children: [
        replyingTo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputGroup_default.Text, { style: { fontSize: "12px", backgroundColor: "#e9ecef" }, children: "Replying..." }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          Form_default.Control,
          {
            type: "text",
            placeholder: getPlaceholder(),
            value: message,
            onChange: (e) => setMessage(e.target.value)
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button_default, { variant: "primary", type: "submit", children: replyingTo ? "Reply" : "Send" })
      ] }) })
    }
  );
}

// example/components/IndraV0/SearchForm.js
var import_react2 = __toESM(require_react(), 1);
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
function SearchForm({ onSearch, context }) {
  const [query, setQuery] = (0, import_react2.useState)("");
  const backend = (0, import_react2.useContext)(BackendContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentUser = await backend.getCurrentUser();
    const [userResults, postResults, subjectResults] = await Promise.all([
      backend.searchUsers(query, currentUser.uid),
      backend.searchPosts(query),
      backend.searchSubjects(query)
    ]);
    const allResults = [
      ...userResults.map((user) => ({ type: "user", data: user })),
      ...postResults.map((post) => ({ type: "post", data: post })),
      ...subjectResults.map((subject) => ({ type: "subject", data: subject }))
    ];
    onSearch(allResults);
  };
  const getPlaceholder = () => {
    if (context === "friends") {
      return "Search for friends...";
    } else if (context === "search") {
      return "Search users, posts, and subjects...";
    } else {
      return "Search...";
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "div",
    {
      style: {
        padding: "20px 0",
        borderBottom: "1px solid #ddd",
        marginBottom: "20px"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Form_default, { onSubmit: handleSubmit, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(InputGroup_default, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          Form_default.Control,
          {
            type: "text",
            placeholder: getPlaceholder(),
            value: query,
            onChange: (e) => setQuery(e.target.value)
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Button_default, { variant: "primary", type: "submit", children: "Search" })
      ] }) })
    }
  );
}

// example/components/IndraV0/usePosts.js
var import_react3 = __toESM(require_react(), 1);
function usePosts(context, room, profileUser = null) {
  const backend = (0, import_react3.useContext)(BackendContext);
  const [posts, setPosts] = (0, import_react3.useState)([]);
  const [isLoading, setIsLoading] = (0, import_react3.useState)(true);
  (0, import_react3.useEffect)(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        if (context === "profile") {
          const allPosts = await backend.getPosts(context, room);
          const profileUserPosts = allPosts.filter((post) => {
            if (profileUser && profileUser.uid) {
              return post.uid === profileUser.uid;
            }
            return post.uid === "0";
          });
          setPosts(profileUserPosts);
        } else if (["feed", "recommendations", "notifications", "popular", "chat", "search", "friends", "blocked", "following", "followers"].includes(context)) {
          const backendPosts = await backend.getPosts(context, room);
          setPosts(backendPosts);
        } else {
          const backendPosts = await backend.getPosts(context, room);
          setPosts(backendPosts);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, [context, backend, room, profileUser]);
  const addPost = async (content, parentId = null) => {
    try {
      const currentUser = await backend.getCurrentUser();
      let postType;
      let targetUid = currentUser.uid;
      switch (context) {
        case "profile":
          postType = "profile";
          break;
        case "feed":
          postType = "feed";
          break;
        case "chat":
          postType = "chat";
          break;
        default:
          postType = "feed";
      }
      const newPost = await backend.addPost(targetUid, content, postType, room, parentId);
      const formattedPost = {
        id: newPost.id,
        uid: newPost.uid,
        user: "You",
        content: newPost.text,
        time: "Just now",
        timestamp: newPost.timestamp,
        // Add timestamp for sorting
        type: newPost.type,
        parentId: newPost.parentId
      };
      if (parentId) {
        const backendPosts = await backend.getPosts(context, room);
        setPosts(backendPosts);
      } else {
        setPosts((prevPosts) => {
          const updatedPosts = [...prevPosts, formattedPost];
          return updatedPosts;
        });
      }
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };
  const searchPosts = async (query) => {
    if (context === "friends") {
      try {
        const results = await backend.searchUsers(query);
        const formattedResults = results.map((user) => ({
          id: user.uid,
          user: user.name,
          content: `User found: ${user.name}`,
          time: "Just now",
          mutualFriends: Math.floor(Math.random() * 10) + 1
        }));
        return formattedResults;
      } catch (error) {
        console.error("Search error:", error);
        return [];
      }
    } else {
      let additionalPosts = [
        {
          id: 100,
          user: "Search Result",
          content: `Found result for "${query}" - This is a sample search result`,
          time: "Just now"
        },
        {
          id: 101,
          user: "React Expert",
          content: `Tutorial on ${query} - Learn how to implement this in your projects`,
          time: "2 hours ago"
        },
        {
          id: 102,
          user: "Tech News",
          content: `Breaking: New developments in ${query} technology`,
          time: "1 day ago"
        }
      ];
      const allPosts = [...posts, ...additionalPosts];
      return allPosts.filter(
        (post) => post.content.toLowerCase().includes(query.toLowerCase()) || post.user.toLowerCase().includes(query.toLowerCase())
      );
    }
  };
  const sortPosts = (posts2, scrollDirection) => {
    const sortedPosts = [...posts2];
    if (scrollDirection === "down") {
      sortedPosts.sort((a, b) => b.timestamp - a.timestamp);
    } else {
      sortedPosts.sort((a, b) => a.timestamp - b.timestamp);
    }
    return sortedPosts;
  };
  return { posts, setPosts, addPost, sortPosts, searchPosts, isLoading };
}

// example/components/IndraV0/LikabilityModal.js
var import_react8 = __toESM(require_react(), 1);

// example/components/IndraV0/LikabilitySection.js
var import_react4 = __toESM(require_react(), 1);
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
function LikabilitySection({
  averageLikability: averageLikability2,
  score,
  onScoreChange,
  scoreMessage,
  color
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Col_default, { md: 6, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: { textAlign: "center", marginBottom: "30px" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h5", { children: "Likability" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: {
      fontSize: "36px",
      fontWeight: "bold",
      color,
      margin: "10px 0"
    }, children: [
      averageLikability2,
      "/100"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { style: {
      height: "15px",
      backgroundColor: "#e9ecef",
      borderRadius: "10px",
      overflow: "hidden",
      margin: "10px 0"
    }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "div",
      {
        style: {
          height: "100%",
          backgroundColor: color,
          width: `${averageLikability2}%`,
          transition: "width 0.3s ease"
        }
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { style: { color: "#666", fontSize: "14px" }, children: scoreMessage }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(Form_default.Group, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Form_default.Label, { children: "Your Likability Rating" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        Form_default.Range,
        {
          min: "0",
          max: "100",
          value: score,
          onChange: onScoreChange
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
        score,
        "/100"
      ] })
    ] })
  ] }) });
}

// example/components/IndraV0/MetricSection.js
var import_react5 = __toESM(require_react(), 1);
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
function MetricSection({
  title,
  score,
  userScore,
  onUserScoreChange,
  scoreMessage,
  color
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Col_default, { md: 6, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { style: { textAlign: "center", marginBottom: "30px" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h5", { children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { style: {
      fontSize: "24px",
      fontWeight: "bold",
      color,
      margin: "10px 0"
    }, children: [
      score,
      "/100"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { style: {
      height: "15px",
      backgroundColor: "#e9ecef",
      borderRadius: "10px",
      overflow: "hidden",
      margin: "10px 0"
    }, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "div",
      {
        style: {
          height: "100%",
          backgroundColor: color,
          width: `${score}%`,
          transition: "width 0.3s ease"
        }
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { style: { color: "#666", fontSize: "14px" }, children: scoreMessage }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Form_default.Group, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Form_default.Label, { children: "Your Rating" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        Form_default.Range,
        {
          min: "0",
          max: "100",
          value: userScore,
          onChange: onUserScoreChange
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { children: [
        userScore,
        "/100"
      ] })
    ] })
  ] }) });
}

// example/components/IndraV0/AllScoresList.js
var import_react6 = __toESM(require_react(), 1);
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
function AllScoresList({ allScores }) {
  if (allScores.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("hr", {}),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("h5", { children: [
      "All Likability Ratings (",
      allScores.length,
      ")"
    ] }),
    allScores.map((ls, index) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { style: {
      display: "flex",
      justifyContent: "space-between",
      margin: "5px 0"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("span", { children: [
        "User ",
        ls.userId
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("span", { children: [
        ls.score,
        "/100"
      ] })
    ] }, index))
  ] });
}

// example/components/IndraV0/ActionButtons.js
var import_react7 = __toESM(require_react(), 1);
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
function ActionButtons({
  onSaveAllRatings,
  onSetLikability,
  userLikabilityScore
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { style: { textAlign: "center", marginTop: "20px" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      Button_default,
      {
        variant: "primary",
        onClick: onSaveAllRatings,
        style: { marginRight: "10px" },
        children: "Save All Ratings"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      Button_default,
      {
        variant: "primary",
        onClick: onSetLikability,
        style: { marginRight: "10px" },
        children: userLikabilityScore !== null ? "Update Likability" : "Set Likability"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      Button_default,
      {
        variant: "danger",
        onClick: () => alert("Report submitted! Thank you for helping keep our community safe."),
        children: "Report Post"
      }
    )
  ] });
}

// example/components/IndraV0/LikabilityModal.js
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
function LikabilityModal({ show, onHide, postId, userLikabilityScore, setUserLikabilityScore, averageLikability: averageLikability2, setAverageLikability }) {
  const backend = (0, import_react8.useContext)(BackendContext);
  const [score, setScore] = (0, import_react8.useState)(userLikabilityScore || 0);
  const [allScores, setAllScores] = (0, import_react8.useState)([]);
  const [currentUser, setCurrentUser] = (0, import_react8.useState)(null);
  const [factScore, setFactScore] = (0, import_react8.useState)(50);
  const [humanScore, setHumanScore] = (0, import_react8.useState)(50);
  const [truthScore, setTruthScore] = (0, import_react8.useState)(50);
  const [adultnessScore, setAdultnessScore] = (0, import_react8.useState)(50);
  const [userFactScore, setUserFactScore] = (0, import_react8.useState)(50);
  const [userHumanScore, setUserHumanScore] = (0, import_react8.useState)(50);
  const [userTruthScore, setUserTruthScore] = (0, import_react8.useState)(50);
  const [userAdultnessScore, setUserAdultnessScore] = (0, import_react8.useState)(50);
  (0, import_react8.useEffect)(() => {
    if (show) {
      setScore(userLikabilityScore || 0);
      fetchAllScores();
      fetchCurrentUser();
      setFactScore(Math.floor(Math.random() * 101));
      setHumanScore(Math.floor(Math.random() * 101));
      setTruthScore(Math.floor(Math.random() * 101));
      setAdultnessScore(Math.floor(Math.random() * 101));
    }
  }, [show, userLikabilityScore, postId]);
  const fetchCurrentUser = async () => {
    try {
      const user = await backend.getCurrentUser();
      setCurrentUser(user);
    } catch (error) {
      console.error("Error fetching current user:", error);
    }
  };
  const fetchAllScores = async () => {
    try {
      const scores = await backend.getLikabilityScores(postId);
      setAllScores(scores);
      if (scores.length > 0) {
        const avg = scores.reduce((sum, ls) => sum + ls.score, 0) / scores.length;
        setAverageLikability(Math.round(avg));
      } else {
        setAverageLikability(0);
      }
    } catch (error) {
      console.error("Error fetching likability scores:", error);
    }
  };
  const handleSetScore = async () => {
    try {
      await backend.setLikabilityScore(postId, currentUser.uid, score);
      setUserLikabilityScore(score);
      await fetchAllScores();
    } catch (error) {
      console.error("Error setting likability score:", error);
    }
  };
  const handleSetAllScores = async () => {
    alert("All ratings saved! (Fact: " + userFactScore + ", Human: " + userHumanScore + ", Truth: " + userTruthScore + ", Adultness: " + userAdultnessScore + ")");
  };
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(Modal_default, { show, onHide, centered: true, size: "lg", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Modal_default.Header, { closeButton: true, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Modal_default.Title, { children: "Post Assessment" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(Modal_default.Body, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(Row_default, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          LikabilitySection,
          {
            averageLikability: averageLikability2,
            score,
            onScoreChange: (e) => setScore(parseInt(e.target.value)),
            scoreMessage: getLikabilityMessage(averageLikability2),
            color: getMetricColor(averageLikability2)
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          MetricSection,
          {
            title: "Fact vs Fiction",
            score: factScore,
            userScore: userFactScore,
            onUserScoreChange: (e) => setUserFactScore(parseInt(e.target.value)),
            scoreMessage: factScore >= 50 ? "Mostly Factual" : "Mostly Fictional",
            color: getMetricColor(factScore)
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(Row_default, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          MetricSection,
          {
            title: "Human vs AI",
            score: humanScore,
            userScore: userHumanScore,
            onUserScoreChange: (e) => setUserHumanScore(parseInt(e.target.value)),
            scoreMessage: humanScore >= 50 ? "Likely Human" : "Likely AI",
            color: getMetricColor(humanScore)
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          MetricSection,
          {
            title: "Truthful vs Deceptive",
            score: truthScore,
            userScore: userTruthScore,
            onUserScoreChange: (e) => setUserTruthScore(parseInt(e.target.value)),
            scoreMessage: truthScore >= 50 ? "Mostly Truthful" : "Mostly Deceptive",
            color: getMetricColor(truthScore)
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Row_default, { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        MetricSection,
        {
          title: "Adultness",
          score: adultnessScore,
          userScore: userAdultnessScore,
          onUserScoreChange: (e) => setUserAdultnessScore(parseInt(e.target.value)),
          scoreMessage: adultnessScore >= 50 ? "Adult Content" : "Child-Friendly",
          color: getMetricColor(adultnessScore)
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        ActionButtons,
        {
          onSaveAllRatings: handleSetAllScores,
          onSetLikability: handleSetScore,
          userLikabilityScore
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(AllScoresList, { allScores })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Modal_default.Footer, { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Button_default, { variant: "secondary", onClick: onHide, children: "Close" }) })
  ] });
}
function getMetricColor(score) {
  if (score >= 80) return "#28a745";
  if (score >= 60) return "#17a2b8";
  if (score >= 40) return "#ffc107";
  if (score >= 20) return "#fd7e14";
  return "#dc3545";
}
function getLikabilityMessage(score) {
  if (score >= 80) return "Very well-liked!";
  if (score >= 60) return "Quite popular.";
  if (score >= 40) return "Average engagement.";
  if (score >= 20) return "Could use more attention.";
  return "Needs more love.";
}

// example/components/IndraV0/FocusedPostBanner.js
var import_react9 = __toESM(require_react(), 1);
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
function FocusedPostBanner({ focusedPost, onBack, onShowLikabilityModal }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { style: {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    borderRadius: "12px",
    padding: "20px",
    marginBottom: "20px",
    color: "white",
    position: "relative"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      "button",
      {
        onClick: onBack,
        style: {
          position: "absolute",
          top: "10px",
          left: "10px",
          background: "rgba(255, 255, 255, 0.2)",
          border: "none",
          borderRadius: "50%",
          width: "30px",
          height: "30px",
          color: "white",
          cursor: "pointer"
        },
        children: "\u2190"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { style: { marginLeft: "40px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: "15px", marginBottom: "10px" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { style: {
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "16px",
          fontWeight: "bold",
          border: "2px solid rgba(255, 255, 255, 0.3)"
        }, children: focusedPost.user?.charAt(0) || "U" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h4", { style: { margin: 0, fontWeight: "bold" }, children: focusedPost.user }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { style: { fontSize: "14px", opacity: 0.9 }, children: focusedPost.time })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { style: { fontSize: "16px", lineHeight: "1.4", marginBottom: "10px" }, children: focusedPost.content }),
      focusedPost.hasLikability && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
        "button",
        {
          onClick: onShowLikabilityModal,
          style: {
            fontSize: "14px",
            padding: "8px 16px",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            borderRadius: "20px",
            cursor: "pointer",
            color: "white",
            fontWeight: "bold"
          },
          children: [
            "Assess Post: ",
            focusedPost.likability || 0,
            "%"
          ]
        }
      )
    ] })
  ] });
}

// example/components/IndraV0/ChatWallContent.js
var import_react11 = __toESM(require_react(), 1);

// example/components/IndraV0/Post.js
var import_react10 = __toESM(require_react(), 1);
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
function Post({ post, context, onReply, onUserClick, depth = 0 }) {
  const backend = (0, import_react10.useContext)(BackendContext);
  const [relationship, setRelationship] = (0, import_react10.useState)("none");
  const [currentUser, setCurrentUser] = (0, import_react10.useState)(null);
  (0, import_react10.useEffect)(() => {
    const fetchCurrentUserAndRelationship = async () => {
      try {
        const user = await backend.getCurrentUser();
        setCurrentUser(user);
        let targetUid = post.uid;
        if (post.type === "user-recommendation") {
          targetUid = post.user.uid;
        }
        if (targetUid && targetUid !== user.uid) {
          const rel = await backend.getRelationship(user.uid, targetUid);
          setRelationship(rel);
        }
      } catch (error) {
        console.error("Error fetching relationship:", error);
      }
    };
    fetchCurrentUserAndRelationship();
  }, [backend, post.uid, post.id, post.hasLikability]);
  const handleRelationshipAction = async (action) => {
    try {
      const targetUid = post.type === "user-recommendation" ? post.user.uid : post.uid;
      await backend.updateRelationship(currentUser.uid, targetUid, action);
      const newRel = await backend.getRelationship(currentUser.uid, targetUid);
      setRelationship(newRel);
    } catch (error) {
      console.error("Error updating relationship:", error);
    }
  };
  const renderRelationshipActions = () => {
    if (!currentUser || post.uid === currentUser.uid || post.uid === "system" || context !== "friends" && context !== "blocked" && context !== "following") return null;
    switch (relationship) {
      case "none":
        return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { style: { marginTop: "10px" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            "button",
            {
              onClick: () => handleRelationshipAction("follow"),
              style: { marginRight: "5px", fontSize: "12px", padding: "5px 10px" },
              children: "Follow"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            "button",
            {
              onClick: () => handleRelationshipAction("block"),
              style: { fontSize: "12px", padding: "5px 10px" },
              children: "Block"
            }
          )
        ] });
      case "following":
        return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { style: { marginTop: "10px" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { style: { fontSize: "12px", color: "#666", marginRight: "10px" }, children: "Following" }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            "button",
            {
              onClick: () => handleRelationshipAction("unfollow"),
              style: { fontSize: "12px", padding: "5px 10px" },
              children: "Unfollow"
            }
          )
        ] });
      case "followed-by":
        return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { style: { marginTop: "10px" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { style: { fontSize: "12px", color: "#666", marginRight: "10px" }, children: "Follows you" }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            "button",
            {
              onClick: () => handleRelationshipAction("follow"),
              style: { marginRight: "5px", fontSize: "12px", padding: "5px 10px" },
              children: "Follow back"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            "button",
            {
              onClick: () => handleRelationshipAction("block"),
              style: { fontSize: "12px", padding: "5px 10px" },
              children: "Block"
            }
          )
        ] });
      case "friends":
        return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { style: { marginTop: "10px" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { style: { fontSize: "12px", color: "#666", marginRight: "10px" }, children: "Friends" }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            "button",
            {
              onClick: () => handleRelationshipAction("unfollow"),
              style: { fontSize: "12px", padding: "5px 10px" },
              children: "Unfriend"
            }
          )
        ] });
      case "blocked":
        return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { style: { marginTop: "10px" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { style: { fontSize: "12px", color: "#666", marginRight: "10px" }, children: "Blocked" }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            "button",
            {
              onClick: () => handleRelationshipAction("unblock"),
              style: { fontSize: "12px", padding: "5px 10px" },
              children: "Unblock"
            }
          )
        ] });
      default:
        return null;
    }
  };
  const getPostStyle = () => {
    if (context === "notifications") {
      let backgroundColor = "#f8f9fa";
      let borderColor = "#e9ecef";
      if (post.subtype === "like") {
        backgroundColor = "#fff3cd";
        borderColor = "#ffeaa7";
      } else if (post.subtype === "follow") {
        backgroundColor = "#d1ecf1";
        borderColor = "#bee5eb";
      } else if (post.subtype === "comment") {
        backgroundColor = "#d4edda";
        borderColor = "#c3e6cb";
      } else if (post.subtype === "trending") {
        backgroundColor = "#f8d7da";
        borderColor = "#f5c6cb";
      } else if (post.subtype === "mention") {
        backgroundColor = "#e2e3e5";
        borderColor = "#d6d8db";
      } else if (post.subtype === "digest") {
        backgroundColor = "#cce7ff";
        borderColor = "#b3d9ff";
      } else if (post.subtype === "event") {
        backgroundColor = "#fff0f6";
        borderColor = "#ffdeeb";
      } else if (post.subtype === "friend_joined") {
        backgroundColor = "#f0f8ff";
        borderColor = "#e1f5fe";
      }
      return {
        margin: "10px 0",
        padding: "15px",
        borderRadius: "8px",
        backgroundColor,
        maxWidth: "100%",
        border: `1px solid ${borderColor}`
      };
    } else if (context === "friends" || context === "blocked" || context === "following") {
      return {
        margin: "10px 0",
        padding: "15px",
        borderRadius: "8px",
        backgroundColor: "#f8f9fa",
        maxWidth: "100%",
        border: "1px solid #e9ecef"
      };
    } else if (context === "profile" || context === "search") {
      return {
        margin: "10px 0",
        padding: "10px",
        borderRadius: "8px",
        backgroundColor: "#f5f5f5",
        maxWidth: "100%"
      };
    } else if (context === "feed") {
      return {
        margin: "10px 0",
        padding: "10px",
        borderRadius: "8px",
        backgroundColor: post.user === "You" ? "#e3f2fd" : "#f5f5f5",
        alignSelf: post.user === "You" ? "flex-end" : "flex-start",
        maxWidth: "70%",
        marginLeft: post.user === "You" ? "auto" : "0",
        marginRight: post.user === "You" ? "0" : "auto"
      };
    } else if (context === "recommendations") {
      return {
        margin: "10px 0",
        padding: "15px",
        borderRadius: "8px",
        backgroundColor: "#f0f8ff",
        maxWidth: "100%",
        border: "1px solid #d1ecf1"
      };
    } else {
      return {
        margin: "10px 0",
        padding: "10px",
        borderRadius: "8px",
        backgroundColor: post.user === "You" ? "#e3f2fd" : "#f5f5f5",
        alignSelf: post.user === "You" ? "flex-end" : "flex-start",
        maxWidth: "70%",
        marginLeft: post.user === "You" ? "auto" : "0",
        marginRight: post.user === "You" ? "0" : "auto"
      };
    }
  };
  const handleReply = () => {
    if (onReply) {
      onReply(post.id);
    }
  };
  const handleUserNameClick = () => {
    if (onUserClick && post.uid) {
      onUserClick({ name: post.user, uid: post.uid });
    }
  };
  const handleSubjectClick = () => {
    console.log("handleSubjectClick called with post:", post);
    if (onUserClick && post.subject) {
      console.log("Calling onUserClick with subject:", post.subject);
      onUserClick({
        name: post.subject.name,
        uid: post.subject.id,
        type: "subject",
        subject: post.subject
        // Pass the full subject data
      });
    } else {
      console.log("onUserClick not available or post.subject missing");
    }
  };
  const handleReplyToSubject = () => {
    console.log("handleReplyToSubject called with post:", post);
    if (onUserClick && post.subject) {
      console.log("Calling onUserClick with subject:", post.subject);
      onUserClick({
        name: post.subject.name,
        uid: post.subject.id,
        type: "subject",
        subject: post.subject
        // Pass the full subject data
      });
    } else {
      console.log("onUserClick not available or post.subject missing");
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { style: getPostStyle(), children: [
    context !== "notifications" && context !== "friends" && context !== "blocked" && context !== "following" && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { style: { display: "flex", justifyContent: "flex-end", marginBottom: "5px" }, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      "button",
      {
        onClick: handleReply,
        style: {
          fontSize: "12px",
          padding: "2px 8px",
          backgroundColor: "transparent",
          border: "1px solid #ddd",
          borderRadius: "4px",
          cursor: "pointer"
        },
        children: "Reply"
      }
    ) }),
    context === "notifications" ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_jsx_runtime9.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "flex-start"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            "div",
            {
              style: {
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                backgroundColor: "#4A154B",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                marginRight: "12px",
                fontSize: "14px",
                fontWeight: "bold",
                flexShrink: 0,
                cursor: onUserClick && post.uid ? "pointer" : "default"
              },
              onClick: handleUserNameClick,
              children: post.user.charAt(0)
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { style: { flex: 1 }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                "strong",
                {
                  style: {
                    fontSize: "14px",
                    cursor: onUserClick && post.uid ? "pointer" : "default",
                    textDecoration: onUserClick && post.uid ? "underline" : "none"
                  },
                  onClick: handleUserNameClick,
                  children: post.user
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { style: {
                fontSize: "12px",
                color: "#666"
              }, children: post.time })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { style: { fontSize: "14px", color: "#495057", lineHeight: "1.4", marginTop: "4px" }, children: post.content })
          ] }),
          post.hasLikability && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { style: {
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "10px"
          }, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
            "button",
            {
              onClick: () => setShowLikabilityModal(true),
              style: {
                fontSize: "12px",
                padding: "5px 10px",
                backgroundColor: "#f8f9fa",
                border: "1px solid #dee2e6",
                borderRadius: "4px",
                cursor: "pointer"
              },
              children: [
                "Likability: ",
                averageLikability,
                "%"
              ]
            }
          ) })
        ]
      }
    ) }) : context === "friends" ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_jsx_runtime9.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "flex-start",
          marginBottom: "10px"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            "div",
            {
              style: {
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                backgroundColor: "#4A154B",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                marginRight: "15px",
                fontSize: "18px",
                fontWeight: "bold",
                flexShrink: 0,
                cursor: onUserClick && post.uid ? "pointer" : "default"
              },
              onClick: handleUserNameClick,
              children: post.user.charAt(0)
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { style: { flex: 1 }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                "strong",
                {
                  style: {
                    fontSize: "16px",
                    cursor: onUserClick && post.uid ? "pointer" : "default",
                    textDecoration: onUserClick && post.uid ? "underline" : "none"
                  },
                  onClick: handleUserNameClick,
                  children: post.user
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { style: {
                fontSize: "12px",
                color: post.time === "Online" ? "#28a745" : "#666",
                fontWeight: post.time === "Online" ? "bold" : "normal"
              }, children: post.time })
            ] }),
            post.mutualFriends && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { style: { fontSize: "14px", color: "#6c757d", marginBottom: "5px" }, children: [
              post.mutualFriends,
              " mutual friends"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { style: { fontSize: "14px", color: "#495057", lineHeight: "1.4" }, children: post.content })
          ] })
        ]
      }
    ) }) : context === "profile" || context === "search" ? /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_jsx_runtime9.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            marginBottom: "5px"
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
              "div",
              {
                style: {
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  backgroundColor: "#4A154B",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  marginRight: "10px",
                  fontSize: "14px",
                  fontWeight: "bold",
                  cursor: onUserClick && post.uid ? "pointer" : "default"
                },
                onClick: handleUserNameClick,
                children: post.user.charAt(0)
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                "strong",
                {
                  style: {
                    cursor: onUserClick && post.uid ? "pointer" : "default",
                    textDecoration: onUserClick && post.uid ? "underline" : "none"
                  },
                  onClick: handleUserNameClick,
                  children: post.user
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { style: { fontSize: "12px", color: "#666" }, children: post.time })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { style: { marginLeft: "42px" }, children: [
        post.content,
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { style: {
          marginTop: "10px"
        }, children: renderRelationshipActions() })
      ] })
    ] }) : context === "search" ? (
      // Special rendering for search results
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_jsx_runtime9.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              marginBottom: "5px"
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                "div",
                {
                  style: {
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    backgroundColor: "#4A154B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    marginRight: "10px",
                    fontSize: "14px",
                    fontWeight: "bold",
                    cursor: onUserClick && post.uid || onUserClick && post.type === "search-subject" ? "pointer" : "default"
                  },
                  onClick: post.type === "search-subject" ? handleSubjectClick : handleUserNameClick,
                  children: post.type === "search-user" ? "\u{1F464}" : post.type === "search-subject" ? "\u{1F4DA}" : "\u{1F4DD}"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                  "strong",
                  {
                    style: {
                      cursor: onUserClick && post.uid || onUserClick && post.type === "search-subject" ? "pointer" : "default",
                      textDecoration: onUserClick && post.uid || onUserClick && post.type === "search-subject" ? "underline" : "none"
                    },
                    onClick: post.type === "search-subject" ? handleSubjectClick : handleUserNameClick,
                    children: post.user
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { style: { fontSize: "12px", color: "#666" }, children: post.time })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { style: { marginLeft: "42px" }, children: [
          post.content,
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { style: {
            marginTop: "10px"
          }, children: [
            post.type === "search-user" && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
              "button",
              {
                onClick: () => {
                  if (onUserClick) {
                    onUserClick({ name: post.user, uid: post.uid });
                  }
                },
                style: {
                  marginRight: "5px",
                  fontSize: "12px",
                  padding: "5px 10px",
                  backgroundColor: "#4A154B",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer"
                },
                children: "View Profile"
              }
            ),
            post.type === "search-subject" && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
              "button",
              {
                onClick: handleSubjectClick,
                style: {
                  fontSize: "12px",
                  padding: "5px 10px",
                  backgroundColor: "#4A154B",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer"
                },
                children: "View Subject"
              }
            ),
            post.type === "search-post" && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
              "button",
              {
                onClick: handleReply,
                style: {
                  fontSize: "12px",
                  padding: "5px 10px",
                  backgroundColor: "transparent",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  cursor: "pointer"
                },
                children: "Reply"
              }
            )
          ] })
        ] })
      ] })
    ) : context === "recommendations" ? (
      // Special rendering for recommendations
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_jsx_runtime9.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              marginBottom: "5px"
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                "div",
                {
                  style: {
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    backgroundColor: "#4A154B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    marginRight: "10px",
                    fontSize: "14px",
                    fontWeight: "bold",
                    cursor: onUserClick && post.uid ? "pointer" : "default"
                  },
                  onClick: handleUserNameClick,
                  children: post.type === "user-recommendation" ? "\u{1F464}" : post.type === "room-recommendation" ? "\u{1F4AC}" : "\u{1F4DD}"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                  "strong",
                  {
                    style: {
                      cursor: onUserClick && post.uid ? "pointer" : "default",
                      textDecoration: onUserClick && post.uid ? "underline" : "none"
                    },
                    onClick: handleUserNameClick,
                    children: post.user || "System"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { style: { fontSize: "12px", color: "#666" }, children: post.time })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { style: { marginLeft: "42px" }, children: [
          post.content,
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { style: {
            marginTop: "10px"
          }, children: [
            post.type === "user-recommendation" && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
              "button",
              {
                onClick: () => handleRelationshipAction("follow"),
                style: {
                  marginRight: "5px",
                  fontSize: "12px",
                  padding: "5px 10px",
                  backgroundColor: "#4A154B",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer"
                },
                children: "Follow"
              }
            ),
            post.type === "room-recommendation" && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
              "button",
              {
                onClick: () => {
                  alert(`Joining ${post.room.name}`);
                },
                style: {
                  fontSize: "12px",
                  padding: "5px 10px",
                  backgroundColor: "#4A154B",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer"
                },
                children: "Join Chat"
              }
            ),
            post.type === "post-recommendation" && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
              "button",
              {
                onClick: handleReply,
                style: {
                  fontSize: "12px",
                  padding: "5px 10px",
                  backgroundColor: "transparent",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  cursor: "pointer"
                },
                children: "Reply"
              }
            )
          ] })
        ] })
      ] })
    ) : /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_jsx_runtime9.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        "div",
        {
          style: {
            fontWeight: "bold",
            cursor: onUserClick && post.uid ? "pointer" : "default",
            textDecoration: onUserClick && post.uid ? "underline" : "none"
          },
          onClick: handleUserNameClick,
          children: post.user
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { children: post.content }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "10px"
      }, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { style: { fontSize: "12px", color: "#666" }, children: post.time }) }),
      renderRelationshipActions()
    ] })
  ] });
}

// example/components/IndraV0/ChatWallContent.js
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
function ChatWallContent({
  isLoading,
  focusedPostId,
  focusedPost,
  displayPosts,
  sortedPosts,
  context,
  onReply,
  onUserClick
}) {
  console.log("ChatWallContent rendering with onUserClick:", onUserClick);
  if (isLoading) {
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { style: { textAlign: "center", padding: "20px" }, children: "Loading..." });
  }
  if (focusedPostId) {
    return focusedPost.children && focusedPost.children.length > 0 ? focusedPost.children.map((post) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      Post,
      {
        post,
        context,
        onReply,
        onUserClick
      },
      post.id
    )) : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { style: { textAlign: "center", padding: "20px", color: "#666" }, children: "No replies yet. Be the first to reply!" });
  }
  if (sortedPosts.length > 0) {
    return sortedPosts.map((post) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      Post,
      {
        post,
        context,
        onReply,
        onUserClick
      },
      post.id
    ));
  } else {
    let message = "No posts found";
    if (context === "profile") {
      message = "This user hasn't posted anything yet.";
    }
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { style: { textAlign: "center", padding: "20px", color: "#666" }, children: message });
  }
}

// example/components/IndraV0/SubjectModal.js
var import_react12 = __toESM(require_react(), 1);
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
function SubjectModal({ show, onHide, subject, currentUser }) {
  const backend = (0, import_react12.useContext)(BackendContext);
  const [userLoveHate, setUserLoveHate] = (0, import_react12.useState)(null);
  const [allLoveHates, setAllLoveHates] = (0, import_react12.useState)([]);
  const [users, setUsers] = (0, import_react12.useState)([]);
  const displaySubject = subject || {
    id: "default-subject",
    name: "General Discussion",
    description: "Discuss various topics and subjects"
  };
  (0, import_react12.useEffect)(() => {
    const fetchData = async () => {
      if (!currentUser) return;
      try {
        const userList = await backend.getUsers();
        setUsers(userList);
        const userItems = currentUser.loveHateItems || [];
        const userItem = userItems.find((item) => item.subjectId === displaySubject.id);
        setUserLoveHate(userItem ? userItem.isLove ? "love" : "hate" : null);
        const allItems = [];
        for (const user of userList) {
          if (user.loveHateItems) {
            const item = user.loveHateItems.find((i) => i.subjectId === displaySubject.id);
            if (item) {
              allItems.push({
                user,
                isLove: item.isLove
              });
            }
          }
        }
        setAllLoveHates(allItems);
      } catch (error) {
        console.error("Error fetching subject data:", error);
      }
    };
    if (show) {
      fetchData();
    }
  }, [show, displaySubject, currentUser, backend]);
  const handleLoveHate = async (action) => {
    if (!currentUser) return;
    try {
      const newLoveHate = action === "love";
      const updatedItems = (currentUser.loveHateItems || []).filter((item) => item.subjectId !== displaySubject.id);
      updatedItems.push({
        subjectId: displaySubject.id,
        isLove: newLoveHate
      });
      await backend.updateUser(currentUser.uid, {
        loveHateItems: updatedItems
      });
      setUserLoveHate(action);
      const userIndex = allLoveHates.findIndex((item) => item.user.uid === currentUser.uid);
      if (userIndex !== -1) {
        const newAllLoveHates = [...allLoveHates];
        newAllLoveHates[userIndex].isLove = newLoveHate;
        setAllLoveHates(newAllLoveHates);
      } else {
        setAllLoveHates([...allLoveHates, {
          user: currentUser,
          isLove: newLoveHate
        }]);
      }
    } catch (error) {
      console.error("Error updating love/hate:", error);
    }
  };
  const loves = allLoveHates.filter((item) => item.isLove);
  const hates = allLoveHates.filter((item) => !item.isLove);
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(Modal_default, { show, onHide, centered: true, size: "lg", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Modal_default.Header, { closeButton: true, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(Modal_default.Title, { children: [
      "Subject: ",
      displaySubject.name
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(Modal_default.Body, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { style: { textAlign: "center", marginBottom: "30px" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { style: {
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          backgroundColor: "#4A154B",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "36px",
          fontWeight: "bold",
          marginBottom: "20px"
        }, children: "\u{1F4DA}" }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h4", { children: displaySubject.name }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { style: { color: "#666" }, children: displaySubject.description })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { style: { marginBottom: "30px" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h5", { style: { color: "#4A154B", marginBottom: "15px" }, children: "Your Reaction" }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { style: { display: "flex", gap: "10px", justifyContent: "center" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
            Button_default,
            {
              variant: userLoveHate === "love" ? "success" : "outline-success",
              onClick: () => handleLoveHate("love"),
              style: { padding: "10px 20px" },
              children: "\u2764\uFE0F Love"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
            Button_default,
            {
              variant: userLoveHate === "hate" ? "danger" : "outline-danger",
              onClick: () => handleLoveHate("hate"),
              style: { padding: "10px 20px" },
              children: "\u{1F494} Hate"
            }
          ),
          userLoveHate && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
            Button_default,
            {
              variant: "outline-secondary",
              onClick: () => handleLoveHate("remove"),
              style: { padding: "10px 20px" },
              children: "Remove"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("h5", { style: { color: "#4A154B", marginBottom: "15px" }, children: [
            "Loved By (",
            loves.length,
            ")"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { style: { maxHeight: "200px", overflowY: "auto" }, children: [
            loves.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { style: {
              padding: "8px",
              backgroundColor: "#f8f9fa",
              marginBottom: "5px",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              gap: "10px"
            }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { style: {
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                backgroundColor: "#4A154B",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "12px",
                fontWeight: "bold"
              }, children: item.user.name.charAt(0) }),
              item.user.name
            ] }, index)),
            loves.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { style: { color: "#666", textAlign: "center" }, children: "No loves yet" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("h5", { style: { color: "#4A154B", marginBottom: "15px" }, children: [
            "Hated By (",
            hates.length,
            ")"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { style: { maxHeight: "200px", overflowY: "auto" }, children: [
            hates.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { style: {
              padding: "8px",
              backgroundColor: "#f8f9fa",
              marginBottom: "5px",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              gap: "10px"
            }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { style: {
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                backgroundColor: "#4A154B",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "12px",
                fontWeight: "bold"
              }, children: item.user.name.charAt(0) }),
              item.user.name
            ] }, index)),
            hates.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { style: { color: "#666", textAlign: "center" }, children: "No hates yet" })
          ] })
        ] })
      ] })
    ] })
  ] });
}

// example/components/IndraV0/SubjectBanner.js
var import_react13 = __toESM(require_react(), 1);
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
function SubjectBanner({ subject, onShowSubjectModal }) {
  console.log("SubjectBanner rendering with subject:", subject);
  console.log("onShowSubjectModal function:", onShowSubjectModal);
  const displaySubject = subject || {
    name: "General Discussion",
    description: "Discuss various topics and subjects"
  };
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { style: {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    borderRadius: "12px",
    padding: "30px",
    marginBottom: "20px",
    color: "white",
    display: "flex",
    alignItems: "center",
    gap: "20px",
    position: "relative"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      "div",
      {
        style: {
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "36px",
          fontWeight: "bold",
          border: "4px solid rgba(255, 255, 255, 0.3)",
          cursor: "pointer"
        },
        onClick: onShowSubjectModal,
        children: "\u{1F4DA}"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { style: { flex: 1 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h2", { style: { margin: 0, fontWeight: "bold" }, children: displaySubject.name }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { style: { margin: "5px 0 0 0", opacity: 0.9 }, children: displaySubject.description })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { style: { display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-end" }, children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      "button",
      {
        onClick: onShowSubjectModal,
        style: {
          padding: "10px 20px",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          borderRadius: "20px",
          cursor: "pointer",
          color: "white",
          fontWeight: "bold",
          fontSize: "14px",
          transition: "background-color 0.2s ease"
        },
        onMouseEnter: (e) => {
          e.target.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        },
        onMouseLeave: (e) => {
          e.target.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
        },
        children: "View Subject Details"
      }
    ) })
  ] });
}

// example/components/IndraV0/ChatWall.js
var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
function ChatWall({
  showInputForm = false,
  context = "profile",
  scrollDirection = "down",
  room = null,
  profileUser = null,
  focusedSubject = null,
  onUserClick = null
}) {
  const [message, setMessage] = (0, import_react14.useState)("");
  const { posts, addPost, sortPosts, searchPosts, isLoading } = usePosts(
    context,
    room,
    profileUser
  );
  const [searchResults, setSearchResults] = (0, import_react14.useState)(null);
  const [focusedPostId, setFocusedPostId] = (0, import_react14.useState)(null);
  const [focusedPost, setFocusedPost] = (0, import_react14.useState)(null);
  const [postHierarchy, setPostHierarchy] = (0, import_react14.useState)([]);
  const [showLikabilityModal, setShowLikabilityModal2] = (0, import_react14.useState)(false);
  const [showSubjectModal, setShowSubjectModal] = (0, import_react14.useState)(false);
  const [userLikabilityScore, setUserLikabilityScore] = (0, import_react14.useState)(null);
  const [averageLikability2, setAverageLikability] = (0, import_react14.useState)(0);
  const backend = (0, import_react14.useContext)(BackendContext);
  const [currentUser, setCurrentUser] = (0, import_react14.useState)(null);
  const contentRef = (0, import_react14.useRef)(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      addPost(message, focusedPostId);
      setMessage("");
    }
  };
  const findPostById = (posts2, postId) => {
    for (const post of posts2) {
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
  const handleReply = (postId) => {
    const post = findPostById(displayPosts, postId);
    if (post) {
      setFocusedPostId(postId);
      setFocusedPost(post);
      const hierarchy = [post];
      setPostHierarchy(hierarchy);
    }
  };
  const handleBack = () => {
    if (postHierarchy.length > 1) {
      const newHierarchy = [...postHierarchy];
      newHierarchy.pop();
      const newFocusedPost = newHierarchy[newHierarchy.length - 1];
      setFocusedPostId(newFocusedPost.id);
      setFocusedPost(newFocusedPost);
      setPostHierarchy(newHierarchy);
    } else {
      setFocusedPostId(null);
      setFocusedPost(null);
      setPostHierarchy([]);
    }
  };
  const handleSearch = async (queryOrResults) => {
    console.log("handleSearch called with:", queryOrResults);
    if (Array.isArray(queryOrResults)) {
      const formattedResults = await Promise.all(queryOrResults.map(async (item) => {
        console.log("Processing search result item:", item);
        switch (item.type) {
          case "user":
            return {
              id: `search-user-${item.data.uid}`,
              uid: item.data.uid,
              user: item.data.name,
              content: `User: ${item.data.name} - ${item.data.aboutMe || "No description available"}`,
              time: "User",
              type: "search-user",
              timestamp: Date.now(),
              hasLikability: false
            };
          case "post":
            let postUser;
            if (item.data.uid === "0") {
              postUser = await backend.getCurrentUser();
            } else {
              try {
                postUser = await backend.getUser(item.data.uid);
              } catch (error) {
                postUser = { name: "Unknown User" };
              }
            }
            return {
              id: `search-post-${item.data.id}`,
              uid: item.data.uid,
              user: postUser.name,
              content: item.data.text,
              time: new Date(item.data.timestamp).toLocaleDateString(),
              type: "search-post",
              timestamp: item.data.timestamp,
              hasLikability: !["notification", "user", "blocked", "following"].includes(item.data.type)
            };
          case "subject":
            console.log("Processing subject search result:", item.data);
            return {
              id: `search-subject-${item.data.id}`,
              uid: item.data.id,
              // Use subject ID as uid
              user: "System",
              content: `Subject: ${item.data.name} - ${item.data.description}`,
              time: new Date(item.data.createdAt).toLocaleDateString(),
              type: "search-subject",
              timestamp: item.data.createdAt,
              hasLikability: false,
              subject: item.data
              // Make sure subject data is included
            };
          default:
            return null;
        }
      }));
      setSearchResults(formattedResults.filter(Boolean));
    } else {
      const results = await searchPosts(queryOrResults);
      setSearchResults(results);
    }
  };
  const displayPosts = searchResults || posts;
  const sortedPosts = sortPosts(displayPosts, scrollDirection);
  import_react14.default.useEffect(() => {
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
  import_react14.default.useEffect(() => {
    const performInitialSearch = async () => {
      if (context === "search" && !searchResults && currentUser) {
        const [userResults, postResults, subjectResults] = await Promise.all([
          backend.searchUsers("", currentUser.uid),
          backend.searchPosts(""),
          backend.searchSubjects("")
        ]);
        const allResults = [
          ...userResults.map((user) => ({ type: "user", data: user })),
          ...postResults.map((post) => ({ type: "post", data: post })),
          ...subjectResults.map((subject) => ({ type: "subject", data: subject }))
        ];
        console.log("Initial search results:", allResults);
        handleSearch(allResults);
      }
    };
    performInitialSearch();
  }, [context, searchResults, currentUser, backend]);
  (0, import_react14.useEffect)(() => {
    const timer = setTimeout(() => {
      const scrollingElement = document.getElementById("scrolling-main-content-container");
      if (scrollingElement) {
        if (focusedPostId) {
          scrollingElement.scrollTop = 0;
        } else {
          scrollingElement.scrollTop = scrollingElement.scrollHeight;
        }
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [focusedPostId]);
  const shouldAutoScrollRef = (0, import_react14.useRef)(true);
  (0, import_react14.useEffect)(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        const scrollingElement = document.getElementById("scrolling-main-content-container");
        if (scrollingElement && shouldAutoScrollRef.current) {
          if (focusedPostId) {
            scrollingElement.scrollTop = 0;
          } else {
            scrollingElement.scrollTop = scrollingElement.scrollHeight;
          }
        }
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [posts, isLoading, focusedPostId, searchResults]);
  (0, import_react14.useEffect)(() => {
    const scrollingElement = document.getElementById("scrolling-main-content-container");
    if (!scrollingElement) return;
    const handleScroll = () => {
      const threshold = 100;
      const isNearBottom = scrollingElement.scrollHeight - scrollingElement.scrollTop - scrollingElement.clientHeight < threshold;
      shouldAutoScrollRef.current = isNearBottom;
    };
    scrollingElement.addEventListener("scroll", handleScroll);
    return () => scrollingElement.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { style: { display: "flex", flexDirection: "column", height: "100%", position: "relative" }, children: [
    (context === "profile" || context === "feed" || context === "search" || context === "friends" || context === "blocked" || context === "following" || context === "subject") && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      "div",
      {
        style: {
          position: "sticky",
          top: 0,
          zIndex: 100,
          backgroundColor: "white",
          borderBottom: "1px solid #ddd",
          height: "80px"
          // Fixed height to ensure consistent spacing
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SearchForm, { onSearch: handleSearch, context })
      }
    ),
    focusedPostId ? /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_jsx_runtime13.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        "div",
        {
          ref: contentRef,
          style: {
            flex: 1,
            minHeight: 0,
            overflow: "auto",
            display: "flex",
            flexDirection: "column-reverse"
            // This makes it up-scrollable (newest at bottom)
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            ChatWallContent,
            {
              isLoading,
              focusedPostId,
              focusedPost,
              displayPosts,
              sortedPosts,
              context,
              onReply: handleReply,
              onUserClick
            }
          )
        }
      ),
      showInputForm && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { style: { flexShrink: 0 }, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        "div",
        {
          style: {
            backgroundColor: "white",
            borderTop: "1px solid #ddd",
            boxSizing: "border-box"
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            ChatInputForm,
            {
              message,
              setMessage,
              handleSubmit,
              position: "bottom",
              replyingTo: focusedPostId
            }
          )
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { style: { flexShrink: 0 }, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        FocusedPostBanner,
        {
          focusedPost,
          onBack: handleBack,
          onShowLikabilityModal: () => setShowLikabilityModal2(true)
        }
      ) })
    ] }) : (
      // Original layout when not focused on a post
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_jsx_runtime13.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          "div",
          {
            ref: contentRef,
            style: {
              flex: 1,
              minHeight: 0,
              overflow: "auto"
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              ChatWallContent,
              {
                isLoading,
                focusedPostId,
                focusedPost,
                displayPosts,
                sortedPosts,
                context,
                onReply: handleReply,
                onUserClick
              }
            )
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { style: { flexShrink: 0 }, children: [
          context === "profile" && !focusedPostId && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(ProfileBanner, { user: profileUser }) }),
          context === "subject" && !focusedPostId && /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
            console.log("Rendering SubjectBanner in ChatWall with focusedSubject:", focusedSubject),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              SubjectBanner,
              {
                subject: focusedSubject,
                onShowSubjectModal: () => {
                  console.log("Opening subject modal for subject:", focusedSubject);
                  setShowSubjectModal(true);
                }
              }
            )
          ] }),
          showInputForm && // Only show input form if we're on our own profile or in a chat
          (context !== "profile" || profileUser && currentUser && profileUser.uid === currentUser.uid) && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            "div",
            {
              style: {
                backgroundColor: "white",
                borderTop: "1px solid #ddd",
                boxSizing: "border-box"
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                ChatInputForm,
                {
                  message,
                  setMessage,
                  handleSubmit,
                  position: "bottom",
                  replyingTo: focusedPostId
                }
              )
            }
          )
        ] })
      ] })
    ),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      LikabilityModal,
      {
        show: showLikabilityModal,
        onHide: () => setShowLikabilityModal2(false),
        postId: focusedPostId,
        userLikabilityScore,
        setUserLikabilityScore,
        averageLikability: averageLikability2,
        setAverageLikability
      }
    ),
    console.log("showSubjectModal state:", showSubjectModal),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      SubjectModal,
      {
        show: showSubjectModal,
        onHide: () => {
          console.log("Hiding subject modal");
          setShowSubjectModal(false);
        },
        subject: focusedSubject,
        currentUser
      }
    )
  ] });
}

export {
  ChatWall
};
//# sourceMappingURL=chunk-6S3AY6AP.js.map
