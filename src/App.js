import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Project';
import Footer from "./components/Footer";
import Experience from "./components/Experience";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<About />} />
      <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
