import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Addarticl from "./pages/Addarticl";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addarticle" element={<Addarticl />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
