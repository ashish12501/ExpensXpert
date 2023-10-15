import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Tracker } from './pages/expens-tracker/Tracker';
import { Home } from './pages/home/index';
import { Navbar } from './components/Navbar';
import { Login } from './pages/auth/login';
import { Transaction } from './pages/transactions/transaction';
import { useState, useEffect, createContext } from 'react';
import { auth } from './config/firebase-config';

export const AppContext = createContext();

function App() {
  const [userData, setUserData] = useState(null); // Set the initial state to null
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUserData(user);
      setLoading(false); // Set loading to false when authentication status is checked
    });

    return () => {
      unsubscribe(); // Unsubscribe from the auth state listener when the component unmounts
    };
  }, []);

  return (
    <div className="App">
      <AppContext.Provider value={{ userData, loading }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tracker" element={<Tracker />} />
            <Route path="/login" element={<Login />} />
            <Route path="/transaction-history" element={<Transaction />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
