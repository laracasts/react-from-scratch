import ReactDOM from 'react-dom/client'
import './app.css'

function App() {
  return <h1 className="font-mono text-4xl">Hello React and Vite!</h1>
}

const app = document.getElementById('app')
const root = ReactDOM.createRoot(app)

root.render(<App />)
