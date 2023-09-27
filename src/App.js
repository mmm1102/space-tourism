import "./App.css";
// import backgroundMain from "./assets/home/background-home-desktop.jpg";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/destination"
            element={<Destination></Destination>}
          ></Route>
          <Route path="/crew" element={<Crew></Crew>}></Route>
          <Route path="/technology" element={<Technology></Technology>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
