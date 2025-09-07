import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import YourWallets from './pages/YourWallets'

function App() {
  return (
    <Router>
      <div className="bg-primary h-screen w-screen flex justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/yourwallets" element={<YourWallets />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
