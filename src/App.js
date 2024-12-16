import "./App.css";
import Header from "../src/MyComponents/Header.js";
import { Route, Routes } from 'react-router-dom'; // You don't need Router here
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Footer from "./MyComponents/Footer.js";

function App() {
  return (
    <>
      <Header /> {/* Your header with links */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      <Footer/>
      
    </>
  );
}

export default App;
