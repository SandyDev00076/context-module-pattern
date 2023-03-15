import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ColorProvider from "./data/colorContext";
import ErrorBoundary from "./ErrorBoundary";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ColorProvider>
        <App />
      </ColorProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
