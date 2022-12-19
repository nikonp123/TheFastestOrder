import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Router from './pages/router';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router />
    </div>
  );
}

export default App;
