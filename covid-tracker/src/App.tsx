import React from 'react';
import './App.css';
import Login from './pages/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Home from './pages/UserPage/Home/Home';

function App() {
  return (
    <div className="App">
      {
        <BrowserRouter>
          <Routes>
            <Route path="/portal/login-organ" element={<Login />} />
            <Route
              path="/portal/password-forgot"
              element={<ForgotPassword />}
            />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
