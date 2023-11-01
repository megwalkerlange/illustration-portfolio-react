// import bootstrap from "bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/index.jsx";
import About from "./components/pages/about/index.jsx";
import Images from "./components/pages/images/index.jsx";
import Books from "./components/pages/books/index.jsx";
import Contact from "./components/pages/contact/index.jsx";

// import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="About" element={<About />} />
            <Route path="Images" element={<Images />} />
            <Route path="Books" element={<Books />} />
            <Route path="Contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
