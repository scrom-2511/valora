import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import YourWallets from './pages/YourWallets'
import YourAccounts from './pages/YourAccounts'

function App() {
  return (
    <Router>
      <div className="bg-primary h-screen w-screen flex justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/yourwallets/:accID" element={<YourWallets />} />
          <Route path="/youraccounts" element={<YourAccounts />} />
        </Routes>
        {/* <div className="absolute h-60 w-60 bg-blue-500 rounded-full blur-[180px] top-60 left-100 z-0"></div> */}
      {/* <div className="absolute h-60 w-60 bg-blue-500 rounded-full blur-[180px] bottom-60 right-100 z-0"></div> */}
      </div>
    </Router>
  )
}

export default App
