// import bootstrap from "bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/index.jsx";
import About from "./components/pages/about/index.jsx";
import Images from "./components/pages/images/index.jsx";
import Books from "./components/pages/books/index.jsx";
import Contact from "./components/pages/contact/index.jsx";

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar>
            <Routes>
              <Route path="About" element={<About />} />
              <Route path="Images" element={<Images />} />
              <Route path="Books" element={<Books />} />
              <Route path="Contact" element={<Contact />} />
            </Routes>
          </Navbar>
        </div>
      </Router>
      <h1>Welcome!</h1>
      <p>
        My name is Meg and I am an Illustrator based in Birmingham, UK. You can
        find out more about my work here and feel free to contact me if you have
        a project in mind!
      </p>
      <img src="../src/assets/dino.jpg" width="350px" height="400px"></img>
    </>
  );
}

export default App;
