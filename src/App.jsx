import { useState, useEffect } from "react";
import ThemeCard from "./components/ThemeCard";
import CounterCard from "./components/CounterCard";
import TodoCard from "./components/ToDoCard";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="app">
      <h1>React Cards Dashboard</h1>
      <div className="card-container">
        <ThemeCard darkMode={darkMode} setDarkMode={setDarkMode} />
        <CounterCard />
        <TodoCard />
      </div>
    </div>
  );
}

export default App;
