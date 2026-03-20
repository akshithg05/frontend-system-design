import { useContext } from "react";
import { ThemeContext } from "./App";

export default function Header() {
  const { setTheme, theme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  console.log(theme);
  return (
    <header
      className={`bg-${theme === "dark" ? "black" : "white"} flex flex-wrap justify-between`}
    >
      <div className="flex">
        <a href="/">
          <h1
            className={`px-10 py-5 text-2xl font-bold text-${theme === "dark" ? "white" : "black"}`}
          >
            Photos
          </h1>
        </a>
        <nav
          className={`py-6 text-${theme === "dark" ? "white" : "black"} flex flex-wrap gap-4`}
        >
          <a href="/login">Login</a>
          <a href="/about">About us</a>
          <a href="/team">Team</a>
        </nav>
      </div>
      <button
        className="my-4 px-4 mx-5 bg-purple-700 hover:bg-purple-400 transition-colors duration-300 rounded-lg"
        onClick={handleThemeChange}
      >
        <p className="text-white">Change theme</p>
      </button>
    </header>
  );
}
