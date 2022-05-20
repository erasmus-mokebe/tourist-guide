import { useState, useEffect } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Browser from './pages/Browser';
import Paths from './pages/Paths';

function App() {
  return (
    <div className='relative flex flex-col justify-stretch h-screen'>
      <header className='absolute top-8 left-0 right-0 box-border sm:static flex items-center gap-2 h-16 px-6'>
        <NavBar />
      </header>
      <main className='flex-1 flex'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Browser />} />
            <Route path='paths' element={<Paths />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
