import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect  } from 'react'
import { auth } from './firebase';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Features from './components/Features';
import Banner from './components/Banner';
import Youtube from './components/Youtube';
import Services from './components/Services';
import Footer from './components/Footer';
import Login from './pages/Login';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Users from './pages/Users';
import Report from './pages/Report';
import Chatbot from './pages/Chatbot';
import History from './pages/History';
import SignUp from './components/SignUp';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  const ProtectedRoute = ({ children }) => {
    return user ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/daftar" element={<SignUp />} />
        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          }
        />
        <Route path="/lapor" element={<Report />} />
        <Route path="/chatbot" element={<Chatbot />} /> 
        <Route path="/riwayat" element={<History />} /> 
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
