import { useContext } from "react";
import { ThemeContext } from "./App";

export default function Card({ image }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`px-3 py-2 w-sm ${theme === "dark" ? "bg-black" : "bg-white"} rounded-sm shadow-md hover:shadow-xl`}
    >
      <h2
        className={`font-bold ${theme === "dark" ? "text-white" : "text-black"}`}
      >
        {image?.author}
      </h2>
      <img src={image?.download_url} alt="random image" />
    </div>
  );
}
