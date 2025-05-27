import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Dashboard from './pages/Dashboard';
import Directory from './pages/Directory';
import ITRequest from './pages/ITRequest';
import Tickets from './pages/Tickets';
import ToDo from './pages/ToDo';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="home">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/itrequest" element={<ITRequest />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/todo" element={<ToDo />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

