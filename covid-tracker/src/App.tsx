import React from 'react';
import './App.css';
import Login from './pages/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/UserPage/Home/Home';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/portal/login-organ" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route
              path="/portal/password-forgot"
              element={<ForgotPassword />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
