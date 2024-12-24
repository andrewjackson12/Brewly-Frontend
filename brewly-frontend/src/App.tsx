import { useEffect, useState } from 'react';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignInPage from './pages/SignInPage';
import PostsPage from './pages/PostsPage';
import RegisterPage from './pages/RegisterPage'

function App() {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    fetch('/api/coffee')
      .then(response => response.json())
      .then(data => setCoffees(data));
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/register" element={<RegisterPage />} />

      </Routes>
    </div>
  );
};



export default App;

