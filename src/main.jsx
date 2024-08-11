import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { MenuProvider } from './context/MenuContext';
import { ThemeContext, ThemeProvider } from './context/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <MenuProvider>
          <App />

        </MenuProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
)
