import { useState, useEffect, useRef } from "react";
import axios from "axios";
import PropTypes from 'prop-types';

const DS = ({ wishlist, toggleWishlist, enroll }) => {
  const [cards, setCards] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/ds")
      .then((response) => {
        setCards(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cards data", error);
      });
  }, []);

  const scrollLeft = () => {
    const container = scrollRef.current;
    if (container.scrollLeft <= 0) {
      container.scrollLeft = container.scrollWidth - container.offsetWidth;
    } else {
      container.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    const container = scrollRef.current;
    if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
      container.scrollLeft = 0;
    } else {
      container.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="container-fluid d-flex justify-content-center align-items-center" style={{ textAlign: "center" }}>
        <h2>Data Science Courses</h2>
      </div>
      <br />
      <div className="container-fluid position-relative">
        <button
          className="btn btn-primary position-absolute"
          style={{
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
            zIndex: 1,
          }}
          onClick={scrollLeft}
        >
          &#8592;
        </button>

        <div
          ref={scrollRef}
          className="d-flex justify-content-center align-items-center position-relative"
          style={{
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {cards.map((card) => (
            <div key={card.id} className="card mx-3 text-center position-relative" style={{ width: "18rem", flex: "0 0 auto", height: "22rem" }}>
              <button
                className="position-absolute btn"
                style={{
                  top: "10px",
                  right: "10px",
                  background: "none",
                  border: "none",
                  outline: "none",
                  backgroundColor: wishlist.includes(card.id) ? "pink" : "white",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                }}
                onClick={() => toggleWishlist(card.id, card)}
              >
                ❤
              </button>
              <img
                src={`https://picsum.photos/200/100?random=${card.id}`}
                alt="Card placeholder"
                style={{
                  width: "100%",
                  height: "35%",
                  objectFit: "cover",
                }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 1,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  height: "1.5rem",
                }}>
                  {card.title}
                </h5>
                <p className="card-text" style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}>
                  {card.description}
                </p>
                <p className="card-text">{card.price}</p>
                <p className="card-text">{card.author}</p>
                <button 
                  className="btn btn-success mt-2" 
                  onClick={() => enroll(card)}  // Added enroll functionality here
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          className="btn btn-primary position-absolute"
          style={{
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
            zIndex: 1,
          }}
          onClick={scrollRight}
        >
          &#8594;
        </button>
      </div>
    </>
  );
};

DS.propTypes = {
  wishlist: PropTypes.array.isRequired,
  toggleWishlist: PropTypes.func.isRequired,
  enroll: PropTypes.func.isRequired,  // Add this prop type for enroll
};

export default DS;
