import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Components/index.css'
import App from './Components/App.jsx'
import './Components/App.css'
import './Components/header.css'
import './Components/intro.css'
import './Components/menu.css'
import './Components/contact.css'
import './Components/footer.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
