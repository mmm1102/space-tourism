import "./App.css";
import backgroundMain from "./assets/home/background-home-desktop.jpg";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div
        className="App"
        style={{
          backgroundImage: `url(${backgroundMain})`,
          width: "100%",
          height: "100vh",
          backgroundSize: "cover",
          backgroundColor: "black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
      
        <Navigation></Navigation>
        <Home></Home>
      </div>
    </BrowserRouter>
  );
}

export default App;
