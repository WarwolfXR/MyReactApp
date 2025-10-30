function ThemeCard({ darkMode, setDarkMode }) {
  return (
    <div className="card">
      <h2>Theme Toggle</h2>
      <p>Current theme: {darkMode ? "Dark" : "Light"}</p>
      <button onClick={() => setDarkMode(!darkMode)}>
        Switch to {darkMode ? "Light" : "Dark"}
      </button>
    </div>
  );
}

export default ThemeCard;
