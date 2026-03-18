import AboutUs from "./AboutUs";
import Body from "./Body";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Team from "./Team";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";

export default function App() {
  return (
    <div>
      <header className="bg-black flex flex-wrap">
        <a href="/">
          <h1 className="px-10 py-5 text-2xl font-bold text-white">Photos</h1>
        </a>
        <nav className="py-6 text-white flex flex-wrap gap-4">
          <a href="/login">Login</a>
          <a href="/about">About us</a>
          <a href="/team">Team</a>
        </nav>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}></Route>
          {/*We want to make the about us route a protected route*/}
          <Route element={<ProtectedRoute />}>
            <Route path="/about" element={<AboutUs />}></Route>
          </Route>
          <Route path="/team" element={<Team />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
