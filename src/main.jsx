import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";

import './index.css'
import AuthContextProvider from './context/AuthContextProvider.jsx';
import Router from './Router.jsx';
import GeminiContextProvider from './context/GeminiContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <GeminiContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </GeminiContextProvider>
    </AuthContextProvider>
  </StrictMode>
)
