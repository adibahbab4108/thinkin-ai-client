import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";

import './index.css'
import AuthContextProvider from './context/AuthContextProvider.jsx';
import Router from './Router.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AuthContextProvider>
  </StrictMode>
)
