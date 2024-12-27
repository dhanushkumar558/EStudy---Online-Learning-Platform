import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState } from 'react';

const NavbarInMain = ({ wishlistCount, wishlistItems, removeFromWishlist, enroll }) => {
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
                  <div className="d-flex flex-column">
                    {wishlistItems.map((item, index) => (
                      <div key={index} className="card mb-2" style={{ width: '100%' }}>
                        <div className="card-body d-flex justify-content-between align-items-center">
                          <div className="d-flex align-items-center">
                            <img
                              src={`https://picsum.photos/200/100?random=${item.id}`}
                              className="card-img-top"
                              alt={item.title}
                              style={{ height: "50px", width: "80px", objectFit: "cover", marginRight: "10px" }}
                            />
                            <div>
                              <h6 className="card-title" style={{ fontSize: "1rem", marginBottom: "0.5rem", height: "2rem", overflow: "hidden" }}>
                                {item.title}
                              </h6>
                              <p className="card-text" style={{ fontSize: "0.9rem", height: "3rem", overflow: "hidden" }}>
                                {item.description}
                              </p>
                            </div>
                          </div>
                          <div className="d-flex justify-content-center mt-2">
  <button
    className="btn btn-danger btn-sm ms-2"
    onClick={() => removeFromWishlist(item.id)}
  >
    Delete
  </button>
  <button
    className="btn btn-success btn-sm ms-2"
    onClick={() => enroll(item)}
  >
    Enroll
  </button>
</div>

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
  removeFromWishlist: PropTypes.func.isRequired,
  enroll: PropTypes.func.isRequired,
};

export default NavbarInMain;
