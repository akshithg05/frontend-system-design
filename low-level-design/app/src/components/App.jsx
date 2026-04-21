import AboutUs from "./AboutUs";
import Body from "./Body";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Team from "./Team";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import { createContext, useState } from "react";
import Header from "./Header";
import Accordion from "./Accordion";
import NestedComments from "./Comments/NestedComments";
import ImageSlider from "./ImageSlider";
import Pagination from "./Pagination";
import LiveChat from "./LiveChat/LiveChat";

export const ThemeContext = createContext();

export default function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div>
      <ThemeContext.Provider value={{ setTheme, theme }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Body />}></Route>
            {/*We want to make the about us route a protected route*/}
            <Route element={<ProtectedRoute />}>
              <Route path="/about" element={<AboutUs />}></Route>
            </Route>
            <Route path="/team" element={<Team />}></Route>
            <Route path="/accordion" element={<Accordion />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/nestedComments" element={<NestedComments />}></Route>
            <Route path="/imageSlider" element={<ImageSlider />}></Route>
            <Route path="/pagination" element={<Pagination />}></Route>
            <Route path="/livechat" element={<LiveChat />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </div>
  );
}
