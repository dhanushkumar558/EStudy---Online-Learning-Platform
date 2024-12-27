// NavbarInMain.jsx
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState } from 'react';

const NavbarInMain = ({ wishlistCount, wishlistItems }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="container-fluid-100">
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "red" }}>
          <div className="container-fluid d-flex justify-content-center">
            <a className="navbar-brand" href="#" style={{ color: "yellow" }}>
              E-Study
            </a>
            <button
              className="navbar-toggler ms-auto"
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
                  <a className="nav-link" href="#" style={{ color: "yellow" }}>
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" style={{ color: "yellow" }}>
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" style={{ color: "yellow" }}>
                    Contact
                  </a>
                </li>
                {/* Wishlist Button */}
                <li className="nav-item">
                  <button
                    className="nav-link btn"
                    style={{ color: "yellow" }}
                    onClick={handleModalToggle}
                  >
                    Wishlist ({wishlistCount})
                  </button>
                </li>
              </ul>
            </div>
            <Link to="/" className="btn btn-danger ms-auto d-none d-lg-block">
              Logout
            </Link>
          </div>
        </nav>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Your Wishlist</h5>
                <button type="button" className="btn-close" onClick={handleModalToggle}></button>
              </div>
              <div className="modal-body">
                {wishlistItems.length === 0 ? (
                  <p>Your wishlist is empty.</p>
                ) : (
                  <div className="d-flex flex-wrap justify-content-start">
                    {wishlistItems.map((item, index) => (
                      <div key={index} className="card mx-2" style={{ width: '10rem', marginBottom: '1rem' }}>
                        <img
                          src={`https://picsum.photos/200/100?random=${item.id}`}
                          className="card-img-top"
                          alt={item.title}
                          style={{
                            height: "80px",
                            objectFit: "cover",
                          }}
                        />
                        <div className="card-body p-2">
                          <h6 className="card-title" style={{ fontSize: "0.9rem", height: "2rem", overflow: "hidden" }}>
                            {item.title}
                          </h6>
                          <p className="card-text" style={{ fontSize: "0.8rem", height: "3rem", overflow: "hidden" }}>
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleModalToggle}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

NavbarInMain.propTypes = {
  wishlistCount: PropTypes.number.isRequired,
  wishlistItems: PropTypes.array.isRequired,
};

export default NavbarInMain;
