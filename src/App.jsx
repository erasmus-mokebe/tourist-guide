import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { LocationDetails } from "./features/location-details/LocationDetails";
import { LocationList } from "./features/location-list/LocationList";
import PathList from "./features/paths/PathList";
import { SideBar } from "./features/sidebar/Sidebar";
import { Browser } from "./pages/Browser";
import { Paths } from "./pages/Paths";
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
          <Route
            path="paths/:pathId"
            element={
              <Browser>
                <SideBar>
                  <PathList />
                </SideBar>
              </Browser>
            }
          />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
