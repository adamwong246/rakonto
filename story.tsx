import { ReactNode } from "react";
import { createRoot } from "react-dom/client";

export default function Story(children: ReactNode) {

  const container = document.getElementById("story-root");
  const root = createRoot(container);

  root.render(children)
    
}
