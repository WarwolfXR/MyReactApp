import { useState } from "react";
import ThemeCard from "./components/ThemeCard";
import CounterCard from "./components/CounterCard";
import TodoCard from "./components/TodoCard";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app"}>
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
