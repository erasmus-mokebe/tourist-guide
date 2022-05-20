import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import NavBar from './Components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Browser from './pages/Browser';
import Paths from './pages/Paths';

function App() {
  const sideBarOpened = useSelector(state => state.sideBar.opened);

  // useEffect(() => {
  //   const fetchData = async () => await fetch("https://api.openbrewerydb.org/breweries")

  //   fetchData().then(response => response.json().then(data => console.log(data)));
  // }, [])

  return (
    <div className='relative flex flex-col justify-stretch h-screen'>
      <header className={`flex items-center gap-2 h-20 sm:h-16 px-6 z-50 ${sideBarOpened ? 'bg-white' : ''}`}>
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
