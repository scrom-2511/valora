import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      {/* Make this relative so children absolute elements can position inside it */}
      <div className="relative bg-primary min-h-screen w-screen overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
