import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import './App.css'

import Home from "./components/home/Home";
import AboutUs from "./components/about-us/AboutUs";
import HowWeAre from "./components/howWeAre/HowWeAre.jsx";
import Career from "./components/career/Career.jsx";
import Contact from "./components/contact/Contact.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/whoweare" element={<HowWeAre />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
