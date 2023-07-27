import React from 'react';
import './App.css';
import Login from './pages/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Home from './pages/UserPage/Home/Home';
import Register from './pages/Register/Register';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="App">
        {
          <BrowserRouter>
            <Routes>
              <Route path="/portal/login-organ" element={<Login />} />
              <Route path="/portal/register-organ" element={<Register />} />
              <Route
                path="/portal/password-forgot"
                element={<ForgotPassword />}
              />
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        }
      </div>
    </LocalizationProvider>
  );
}

export default App;
