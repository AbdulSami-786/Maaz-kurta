import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// Full site (App.jsx) is kept intact; restore by rendering <App /> again.
// import App from './App.jsx'
import HostingExpired from './HostingExpired.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HostingExpired />
  </StrictMode>,
)
