import React from 'react';
import { Routes , Route, useNavigate  } from 'react-router-dom';
import CoverPage from '../src/components/CoverPage/CoverPage';
import AboutUs from './components/AboutUs/AboutUs';
import MainPage from './components/MainPage/MainPage';
import FavoritesPage from './components/FavoritesPage';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ForgotPassword from './components/Auth/ForgotPassword';

const App = () => {
  const navigate  = useNavigate(); 
  return (
    <>
    <Routes>
      <Route exact path="/" element={<CoverPage/>} />
      <Route exact path="/about" element={<AboutUs/>} />
      <Route exact path="/mainpage" element={<MainPage/>} />
      <Route exact path="/favorites" element={<FavoritesPage/>} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
    </>
  );
};

export default App;
