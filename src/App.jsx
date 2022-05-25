import { useSelector } from 'react-redux';
import './App.css';
import { Navigation } from './features/navigation/Navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Browser from './pages/Browser';
import Paths from './pages/Paths';
import { LocationList } from './features/location-list/LocationList';
import { LocationDetails } from './features/location-details/LocationDetails';
import { SideBar } from './features/sidebar/Sidebar';

function App() {

  return (
    <div className='relative flex flex-col justify-stretch h-screen'>
      <Navigation />
      <main className='flex-1 flex h-full overflow-y-hidden'>
        <BrowserRouter>
          <Routes>
            <Route
              path='/'
              element={
                <Browser>
                  <SideBar>
                    <LocationList />
                  </SideBar>
                </Browser>
              }
            />
            <Route
              path=':locationId'
              element={
                <Browser>
                  <SideBar>
                    <LocationDetails />
                  </SideBar>
                </Browser>
              }
            />
            <Route path='paths' element={<Paths />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
