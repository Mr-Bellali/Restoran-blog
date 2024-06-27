import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Subnavbar from './components/Subnavbar';
import About from './pages/About';
import Addarticl from './pages/Addarticl';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Subnavbar />
        <div className="pt-[118px]">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/addarticle' element={<Addarticl />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
