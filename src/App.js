import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ContactManager from './ContactManager';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <ContactManager />
      </div>
    </Router>
  );
};

export default App;