import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from "@/components/theme-provider"
import { BrowserRouter} from "react-router-dom";

import './assets/css/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
