import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { APIProvider } from "@vis.gl/react-google-maps";

// ✅ DOĞRU YER: JSX DIŞINDA
console.log(
  "API KEY:",
  import.meta.env.VITE_GOOGLE_MAPS_API_KEY
);

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root container missing");
}

createRoot(container).render(
  <React.StrictMode>
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <App />
    </APIProvider>
  </React.StrictMode>
);
