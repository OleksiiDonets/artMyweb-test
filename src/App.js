import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Routing } from './pages/routing';

const App =() => {

  return (
    <>
     <Navbar />
     <Routing />
    </>
  );
}

export default App;
