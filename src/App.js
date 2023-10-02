import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Tracker } from './pages/expens-tracker/Tracker'
import { Home } from './pages/home/index'
import { Navbar } from './components/Navbar'
import { Login } from './pages/auth/login'
import { useState, useEffect, createContext } from 'react';
import { auth } from './config/firebase-config'

export const AppContext = createContext();

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUserData(user)
    })
  })

  return (
    <div className="App">
      <AppContext.Provider value={{ userData }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tracker" element={<Tracker />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
