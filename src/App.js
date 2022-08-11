import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <header>
        <Navbar
        />
      </header>
      <div>
        <Routes>
          <Route
          path='/'
          element={<Dashboard/>}
          />

        </Routes>

      </div>

    </div>
  );
}

export default App;
