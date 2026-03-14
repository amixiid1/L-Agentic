import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import About from "./components/about";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/footer" element={<Footer />} />
    </Routes>
  );
};

export default App;
