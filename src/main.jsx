import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import appStore from './reduxstore/appstore.js'
import {Provider}  from "react-redux"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store ={appStore}>
      <App />
    </Provider>
  </StrictMode>,
)
