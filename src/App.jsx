import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastProvider } from './contexts/ToastContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Directory from './pages/Directory';
import Events from './pages/Events';
import Mentorship from './pages/Mentorship';
import Jobs from './pages/Jobs';
import Donate from './pages/Donate';
import Login from './pages/Login';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    // In a real app, you'd also save to localStorage or sessionStorage
    console.log('User logged in:', userData);
  };

  const handleLogout = () => {
    setUser(null);
    // In a real app, you'd also clear localStorage or sessionStorage
    console.log('User logged out');
  };

  const isLoggedIn = !!user;

  return (
    <ToastProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
          
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/directory" element={<Directory />} />
              <Route path="/events" element={<Events />} />
              <Route path="/mentorship" element={<Mentorship />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/donate" element={<Donate />} />
              <Route 
                path="/login" 
                element={
                  isLoggedIn ? (
                    <Navigate to="/" replace />
                  ) : (
                    <Login onLogin={handleLogin} />
                  )
                } 
              />
              {/* Catch all route - redirect to home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </Router>
    </ToastProvider>
  );
}

export default App;
