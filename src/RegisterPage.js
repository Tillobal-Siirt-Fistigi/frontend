import React, { useState } from 'react';
import './App.css';
import Register from './register'; 
import Login from './login'; 

function App() {
  const [activePage, setActivePage] = useState('register'); 

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <div className="App">
      <div className="navigation">
        <button onClick={() => handlePageChange('register')}>
          Register
        </button>
        <button onClick={() => handlePageChange('login')}>
          Login
        </button>
      </div>
      
      {/* register to login (dynamic) */}
      {activePage === 'register' ? <Register /> : <Login />}
    </div>
  );
}

export default App;
