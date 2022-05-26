import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Browser } from "./pages/Browser";
import { Paths } from "./pages/Paths";
import { LocationList } from "./features/location-list/LocationList";
import { LocationDetails } from "./features/location-details/LocationDetails";
import { SideBar } from "./features/sidebar/Sidebar";
import { Profile } from "./pages/Profile";

function App() {
  return (
    <div className="relative flex flex-col justify-stretch h-screen">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Browser>
                <SideBar>
                  <LocationList />
                </SideBar>
              </Browser>
            }
          />
          <Route
            path=":locationId"
            element={
              <Browser>
                <SideBar>
                  <LocationDetails />
                </SideBar>
              </Browser>
            }
          />
          <Route path="paths" element={<Paths />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
