import { createRoot } from "react-dom/client";
import App from "./App";
// CSS is processed by the bundler and has no TypeScript module declaration.
// @ts-expect-error -- side-effect CSS import handled by the bundler
import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
    createRoot(rootElement).render(<App />);
}
