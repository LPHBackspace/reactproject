import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <HeroSection/>
        <Routes>
          <Route path='/' exact/>
        </Routes>
      </Router>
    </>
  );
}

export default App;