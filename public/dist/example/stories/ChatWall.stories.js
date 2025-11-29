import {
  ChatWall
} from "../../chunk-76BWYKNN.js";
import "../../chunk-RGPEW3OZ.js";
import "../../chunk-65LQHSH5.js";
import {
  __toESM,
  require_jsx_runtime,
  require_react
} from "../../chunk-2GIMI7UT.js";

// example/stories/ChatWall.stories.js
var import_react = __toESM(require_react(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
function ChatWallStory() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: "20px" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Default ChatWall (Flat List, No Input)" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatWall, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "ChatWall with Input Form (Flat List)" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatWall, { showInputForm: true })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "ChatWall as Chat Thread (No Input)" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatWall, { isFlatList: false })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "ChatWall as Chat Thread with Input" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatWall, { showInputForm: true, isFlatList: false })
    ] })
  ] });
}
export {
  ChatWallStory as default
};
//# sourceMappingURL=ChatWall.stories.js.map
