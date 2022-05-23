import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Browser from "./pages/Browser";
import Paths from "./pages/Paths";
import LocationsList from "./Components/LocationsList";
import LocationDetails from "./Components/LocationDetails";
import SideBar from "./Components/SideBar";

function App() {
  const sideBarOpened = useSelector((state) => state.sideBar.opened);

  return (
    <div className="relative flex flex-col justify-stretch h-screen">
      <header
        className={`flex items-center gap-2 box-border max-w-full h-26 sm:h-16 px-6 z-50 ${
          sideBarOpened ? "bg-white" : ""
        }`}
      >
        <NavBar />
      </header>
      <main className="flex-1 flex h-full overflow-y-hidden">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Browser content={<LocationsList />} />} />
            <Route
              path=":locationId"
              element={<Browser content={<LocationDetails />} />}
            />
            <Route path="paths" element={<Paths />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
