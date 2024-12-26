import { useState, useEffect, useRef } from "react";
import axios from "axios";

const DS = () => {
  const [cards, setCards] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const scrollRef = useRef(null);

  useEffect(() => {
    // Fetch cards data from the backend
    axios
      .get("http://localhost:5000/api/ds")
      .then((response) => {
        setCards(response.data); // Set the cards data from API response
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

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((item) => item !== id)); // Remove from wishlist
    } else {
      setWishlist([...wishlist, id]); // Add to wishlist
    }
  };

  return (
    <>
      <div
        className="container-fluid d-flex justify-content-center align-items-center"
        style={{ textAlign: "center" }}
      >
        <h2>Data Science Courses</h2>
      </div>

      <div className="container-fluid position-relative">
        {/* Left Arrow */}
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

        {/* Cards Container */}
        <div
          ref={scrollRef}
          className="d-flex justify-content-center align-items-center position-relative"
          style={{
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {[...cards, ...cards, ...cards].map((card) => (
            <div
              key={card.id}
              className="card mx-3 text-center position-relative"
              style={{
                width: "18rem",
                flex: "0 0 auto",
                height: "22rem",
              }}
            >
              {/* Heart-shaped Wishlist Button */}
              <button
                className="position-absolute btn"
                style={{
                  top: "10px",
                  right: "10px",
                  background: "none",
                  border: "none",
                  outline: "none",
                  color: wishlist.includes(card.id) ? "red" : "gray",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                }}
                onClick={() => toggleWishlist(card.id)}
              >
                ❤
              </button>

              {/* Placeholder Image */}
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
                <h5
                  className="card-title"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    height: "1.5rem",
                  }}
                >
                  {card.title}
                </h5>

                {/* Truncated Description */}
                <p
                  className="card-text"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    
                  }}
                >
                  {card.description}
                </p>

                <p className="card-text">{card.price}</p>
                <p className="card-text">{card.author}</p>

                {/* Enroll Button */}
                <button
                  className="btn btn-success mt-2"
                  style={{
                    width: "100%",
                  }}
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
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

export default DS;
