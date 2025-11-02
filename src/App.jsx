import { useState, useEffect } from "react";
import ThemeCard from "./components/ThemeCard";
import CounterCard from "./components/CounterCard";
import ToDoCard from "./components/ToDoCard";
import "./App.css";

function App() {

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme === "true";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className="app">
      <h1>React Cards Dashboard</h1>
      <div className="card-container">
        <ThemeCard darkMode={darkMode} setDarkMode={setDarkMode} />
        <CounterCard />
        <ToDoCard />
      </div>
    </div>
  );
}

export default App;
