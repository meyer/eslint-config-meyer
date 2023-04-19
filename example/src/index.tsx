import { createRoot } from "react-dom/client";

import { App } from "./App";

const root = createRoot(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  document.getElementById(".example")!
);
root.render(<App />);
