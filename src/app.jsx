import ReactDOM from 'react-dom/client'

function App() {
  return <h1>Hello React and Vite!</h1>
}

const app = document.getElementById('app')
const root = ReactDOM.createRoot(app)

root.render(<App />)
