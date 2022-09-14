import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Team from './components/Team/Team';
import Work from './components/Work/Work';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename="/landing-page/">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
