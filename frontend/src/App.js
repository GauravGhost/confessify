import logo from "./logo.svg";
import "./App.css";
import AllRoutes from "./routes/routes";
import Main from "./views/HeroSection/herosection";
import Home from "./views/home/home";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main />} />
      </Routes>
      <AllRoutes />
    </div>
  );
}

export default App;
