import React from 'react';
import './App.css';
import Login from './pages/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Home from './pages/UserPage/Home/Home';
import Register from './pages/Register/Register';
import VaccineRegistration from './components/portal/VaccineRegistrationPage/VaccineRegistration';
import ContainerHome from './components/ContainerHome/ContainerHome';

function App() {
  return (
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
            <Route path="/" element={<Home />}>
              <Route path="/" element={<ContainerHome />} />
              <Route
                path="/portal/vaccine-registration"
                element={<VaccineRegistration />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
