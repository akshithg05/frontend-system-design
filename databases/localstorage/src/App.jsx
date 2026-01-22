import { useState } from "react";
import "./App.css";

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem("mode") || "light");

  return (
    <div className={`app-container ${theme}`}>
      <h1 className="heading">This is the heading</h1>
      <button
        className="button"
        onClick={() => {
          const newTheme = theme === "light" ? "dark" : "light";
          setTheme(newTheme);
          localStorage.setItem("mode", newTheme);
        }}
      >
        Toggle theme
      </button>
    </div>
  );
}
