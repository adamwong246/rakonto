import {
  ChatWall,
  Col_default,
  Container_default,
  Nav_default,
  Row_default,
  Tab_default
} from "../../chunk-DAYCMFXP.js";
import "../../chunk-65LQHSH5.js";
import {
  __toESM,
  require_jsx_runtime,
  require_react
} from "../../chunk-2GIMI7UT.js";

// example/stories/IndraV0.stories.js
var import_react3 = __toESM(require_react(), 1);

// example/components/IndraV0.js
var import_react2 = __toESM(require_react(), 1);

// example/components/IndraV0/Sidebar.js
var import_react = __toESM(require_react(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
function Sidebar({ activeTab, setActiveTab }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Nav_default, { variant: "pills", className: "flex-column", style: { padding: "20px 0" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Nav_default.Link,
      {
        eventKey: "profile",
        active: activeTab === "profile",
        onClick: () => setActiveTab("profile"),
        style: {
          color: "white",
          borderRadius: 0,
          backgroundColor: activeTab === "profile" ? "#611f69" : "transparent"
        },
        children: "\u{1F464} Profile"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Nav_default.Link,
      {
        eventKey: "feed",
        active: activeTab === "feed",
        onClick: () => setActiveTab("feed"),
        style: {
          color: "white",
          borderRadius: 0,
          backgroundColor: activeTab === "feed" ? "#611f69" : "transparent"
        },
        children: "\u{1F4F0} Feed"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Nav_default.Link,
      {
        eventKey: "recommendations",
        active: activeTab === "recommendations",
        onClick: () => setActiveTab("recommendations"),
        style: {
          color: "white",
          borderRadius: 0,
          backgroundColor: activeTab === "recommendations" ? "#611f69" : "transparent"
        },
        children: "\u{1F50D} Recommendations"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Nav_default.Link,
      {
        eventKey: "alice",
        active: activeTab === "alice",
        onClick: () => setActiveTab("alice"),
        style: {
          color: "white",
          borderRadius: 0,
          backgroundColor: activeTab === "alice" ? "#611f69" : "transparent"
        },
        children: "\u{1F4AC} Alice"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Nav_default.Link,
      {
        eventKey: "bob",
        active: activeTab === "bob",
        onClick: () => setActiveTab("bob"),
        style: {
          color: "white",
          borderRadius: 0,
          backgroundColor: activeTab === "bob" ? "#611f69" : "transparent"
        },
        children: "\u{1F4AC} Bob"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Nav_default.Link,
      {
        eventKey: "alice-bob",
        active: activeTab === "alice-bob",
        onClick: () => setActiveTab("alice-bob"),
        style: {
          color: "white",
          borderRadius: 0,
          backgroundColor: activeTab === "alice-bob" ? "#611f69" : "transparent"
        },
        children: "\u{1F4AC} Alice & Bob"
      }
    ) })
  ] });
}

// example/components/IndraV0.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
function IndraV0() {
  const [activeTab, setActiveTab] = (0, import_react2.useState)("profile");
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Container_default, { fluid: true, style: { height: "100vh", padding: 0 }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Row_default, { style: { height: "100%" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Col_default, { xs: 2, style: { backgroundColor: "#4A154B", padding: 0 }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Sidebar, { activeTab, setActiveTab }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Col_default, { xs: 10, style: { padding: 0, backgroundColor: "white", display: "flex", flexDirection: "column" }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { flex: 1, padding: "20px", overflow: "auto" }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Tab_default.Content, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Tab_default.Pane, { active: activeTab === "profile", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ChatWall, { showInputForm: true, context: "profile" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Tab_default.Pane, { active: activeTab === "feed", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ChatWall, { showInputForm: true, context: "feed" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Tab_default.Pane, { active: activeTab === "recommendations", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ChatWall, { showInputForm: false, context: "profile" }) }),
      ["alice", "bob", "alice-bob"].map((room) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Tab_default.Pane, { active: activeTab === room, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ChatWall, { showInputForm: true, context: "chat" }) }, room))
    ] }) }) })
  ] }) });
}

// example/stories/IndraV0.stories.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
function IndraV0Story() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(IndraV0, {}) });
}
export {
  IndraV0Story as default
};
//# sourceMappingURL=IndraV0.stories.js.map
