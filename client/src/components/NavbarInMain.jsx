
import { Link } from 'react-router-dom';


const NavbarInMain =()=>
{
    return (<>
    

    <div className="container-fluid-100">
          
<nav className="navbar navbar-expand-lg" style={{ backgroundColor: "red" }}>
  <div className="container-fluid d-flex justify-content-center">
    <a className="navbar-brand" href="#" style={{ color: "yellow" }}>
      E-Study
    </a>
    <button
      className="navbar-toggler ms-auto"  // Ensures hamburger stays on the right
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" style={{ color: "yellow" }}>
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="#"
            style={{ color: "yellow" }}
           
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="#"
            style={{ color: "yellow" }}
           
          >
            Services
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="#"
            style={{ color: "yellow" }}
            
          >
            Contact
          </a>
        </li>
      </ul>
    </div>

    {/* Link to the login page ("/") when the logout button is clicked */}
    <Link to="/" className="btn btn-danger ms-auto d-none d-lg-block">
      Logout
    </Link>
  </div>

  {/* Mobile Logout button in the collapsible menu */}
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/" className="btn btn-danger w-100 d-block d-lg-none">
          Logout
        </Link>
      </li>
    </ul>
  </div>
</nav>
        </div>
    
    
    </>)
}
export default NavbarInMain;