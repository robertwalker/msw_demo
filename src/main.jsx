import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { setupWorker } from "msw";
import { handlers } from "./mocks/handlers.js";

const worker = setupWorker(...handlers);
async function prepare() {
  if (import.meta.env.DEV) {
    return worker.start({
      options: {
        waitUntilReady: true,
      },
    });
  }
}

prepare().then(() => {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
