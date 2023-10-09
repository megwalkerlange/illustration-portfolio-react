import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink to="About">About</NavLink>
              <NavLink to="Images">Images</NavLink>
              <NavLink to="Books">Books</NavLink>
              <NavLink to="Contact">Contact</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
