import { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import DashboardLayout from './components/DashboardLayout';
import LoginPage from './components/LoginPage';
import './index.css';

export default function App() {
  const [loggedInDirector, setLoggedInDirector] = useState(null);

  const handleLogin = (directorId) => {
    setLoggedInDirector(directorId);
  };

  const handleLogout = () => {
    setLoggedInDirector(null);
  };

  return (
    <ThemeProvider>
      {loggedInDirector ? (
        <DashboardLayout
          initialDirectorId={loggedInDirector}
          onLogout={handleLogout}
        />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </ThemeProvider>
  );
}
