import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import "./assets/css/globals.css";
import { ThemeProvider } from "./components/ThemeProvider.tsx";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
