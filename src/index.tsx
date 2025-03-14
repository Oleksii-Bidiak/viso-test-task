import { createRoot } from 'react-dom/client'
import '@/app/styles/index.css'
import App from './app/App'
import { HashRouter as Router } from 'react-router-dom'

const container = document.getElementById('root')

if (!container) {
  throw new Error('Container root not found')
}

const root = createRoot(container)
root.render(
  <Router>
    <App />
  </Router>,
)
