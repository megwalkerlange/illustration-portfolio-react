import { NavLink } from "react-router-dom";
import "./../navbar/navbar.css";

function Navbar() {
  return (
    <>
      <ul className="nav nav-underline">
        {/* <<h1 className="nav-item title">Megan Walker-Lange Illustration</h1>> */}
        <img src="src\components\assets\meg-wl-illo-2.png" width="50%"></img>
        <li className="nav-item">
          <NavLink to="Images">Images</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="Books">Books</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="About">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="Contact">Contact</NavLink>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
