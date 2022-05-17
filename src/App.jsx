import { useState, useEffect } from "react";
import "./App.css";
import Map from "./Components/Map";
import NavBar from "./Components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevState) => prevState + 1);
  };

  const decrement = () => {
    setCount(prevState => prevState - 1);
  };

  useEffect(() => {
    const fetchData = async () => await fetch("https://api.openbrewerydb.org/breweries")
  
    fetchData().then(response => response.json().then(data => console.log(data)));
  }, [])

  return (
    <div className="flex flex-col justify-stretch">
      <header className="flex items-center gap-2 h-16 px-6">
        <h1 className="tracking-tight uppercase font-extrabold">Monkemap</h1>
        <NavBar />
      </header>
      <main className="flex-1">
        <Map />
      </main>
    </div>
  );
}

export default App;
