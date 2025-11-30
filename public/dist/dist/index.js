import {
  __toESM,
  require_client,
  require_jsx_runtime,
  require_react
} from "../chunk-C26QU2JX.js";

// dist/index.js
var import_react = __toESM(require_react(), 1);
var import_client = __toESM(require_client(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
function initRakonto(config) {
  const App = () => {
    const [selectedStory, setSelectedStory] = (0, import_react.useState)(null);
    const [storiesTree, setStoriesTree] = (0, import_react.useState)({});
    const [iframeContent, setIframeContent] = (0, import_react.useState)("");
    const [isLoading, setIsLoading] = (0, import_react.useState)(false);
    (0, import_react.useEffect)(() => {
      const tree = {};
      config.stories.forEach((storyPath) => {
        const parts = storyPath.split("/");
        let current = tree;
        for (let i = 0; i < parts.length; i++) {
          const part = parts[i];
          if (i === parts.length - 1) {
            current[part] = {
              path: storyPath
            };
          } else {
            if (!current[part]) {
              current[part] = {};
            }
            current = current[part];
          }
        }
      });
      setStoriesTree(tree);
      if (config.stories.length > 0 && !selectedStory) {
        setSelectedStory(config.stories[0]);
      }
    }, []);
    (0, import_react.useEffect)(() => {
      if (selectedStory) {
        setIsLoading(true);
        console.log("Setting selected story:", selectedStory);
        const iframeUrl = `/story-iframe.html?story=${encodeURIComponent(selectedStory)}`;
        console.log("Iframe URL:", iframeUrl);
        setIframeContent(iframeUrl);
      }
    }, [selectedStory]);
    const findStoryInTree = (tree, path) => {
      const parts = path.split("/");
      let current = tree;
      for (const part of parts) {
        current = current[part];
        if (!current) return null;
      }
      return current;
    };
    const renderTree = (node, path = "") => {
      return Object.keys(node).map((key) => {
        const currentPath = path ? `${path}/${key}` : key;
        if (node[key].path) {
          const storyPath = node[key].path;
          const displayName2 = key.replace(".stories.js", "").replace(".js", "");
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "div",
            {
              onClick: () => setSelectedStory(storyPath),
              style: {
                padding: "8px 12px 8px 20px",
                margin: "2px 0",
                cursor: "pointer",
                borderRadius: "4px",
                backgroundColor: selectedStory === storyPath ? "grey" : "transparent",
                color: selectedStory === storyPath ? "white" : "#333",
                fontWeight: selectedStory === storyPath ? "bold" : "normal",
                fontSize: "14px",
                transition: "all 0.2s ease"
              },
              children: displayName2
            },
            storyPath
          );
        } else {
          return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { marginLeft: "0px" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
              fontWeight: "bold",
              margin: "8px 0 4px 0",
              padding: "6px 12px",
              fontSize: "14px",
              color: "#666",
              textTransform: "uppercase",
              letterSpacing: "0.5px"
            }, children: key }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { marginLeft: "10px" }, children: renderTree(node[key], currentPath) })
          ] }, currentPath);
        }
      });
    };
    const displayName = selectedStory ? selectedStory.split("/").pop().replace(".stories.js", "").replace(".js", "") : "";
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", height: "100vh" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: {
        width: "280px",
        borderRight: "1px solid #ddd",
        backgroundColor: "#f8f9fa",
        padding: "20px",
        overflow: "auto"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { style: { marginTop: 0, marginBottom: "20px", color: "#333" }, children: "Stories" }),
        renderTree(storiesTree)
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: {
        flex: 1,
        padding: "20px",
        overflow: "auto",
        backgroundColor: "#fff"
      }, children: [
        isLoading && !iframeContent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Loading story..." }),
        iframeContent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "iframe",
          {
            src: iframeContent,
            style: {
              width: "100%",
              height: "100%",
              border: "none",
              borderRadius: "8px",
              display: isLoading ? "none" : "block"
            },
            title: "Story Preview",
            onLoad: () => {
              console.log("Iframe loaded successfully:", iframeContent);
              setIsLoading(false);
            },
            onError: (e) => {
              console.log("Iframe failed to load:", iframeContent, e);
              setIsLoading(false);
            }
          },
          iframeContent
        ),
        !isLoading && selectedStory && !iframeContent && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
          "Error loading story: ",
          selectedStory
        ] })
      ] })
    ] });
  };
  const container = document.getElementById("root");
  const root = (0, import_client.createRoot)(container);
  root.render(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(App, {}));
}
export {
  initRakonto
};
//# sourceMappingURL=index.js.map
