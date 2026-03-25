import AboutUs from "./AboutUs";
import Body from "./Body";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Team from "./Team";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import { createContext, useState } from "react";
import Header from "./Header";
import Accordion from "./Accordion";

export const ThemeContext = createContext();
export default function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div>
      <ThemeContext.Provider value={{ setTheme, theme }}>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Body />}></Route>
            {/*We want to make the about us route a protected route*/}
            <Route element={<ProtectedRoute />}>
              <Route path="/about" element={<AboutUs />}></Route>
            </Route>
            <Route path="/team" element={<Team />}></Route>
            <Route path="/accordion" element={<Accordion />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </div>
  );
}
