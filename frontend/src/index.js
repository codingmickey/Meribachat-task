import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ul>
      <li>
        <Link to="/">Login</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/signup">Signup</Link>
      </li>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/cart">Cart</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <Link to="/hehe">NotFound</Link>
      </li>
    </ul>
    <Navbar />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <App />
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
