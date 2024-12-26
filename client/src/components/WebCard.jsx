import { useState, useEffect, useRef } from "react";
import axios from "axios";


const InfiniteScrollingCards_WEB = () => {
  const [cards, setCards] = useState([]);

  const scrollRef = useRef(null);

  useEffect(() => {
    // Fetch cards data from the backend
    axios.get('http://localhost:5000/api/cards')
      .then(response => {
        setCards(response.data);  // Set the cards data from API response
      })
      .catch(error => {
        console.error('Error fetching cards data', error);
      });
  }, []);

  const scrollLeft = () => {
    const container = scrollRef.current;

    // Ensure scroll position is maintained when we reach the start
    if (container.scrollLeft <= 0) {
      container.scrollLeft = container.scrollWidth - container.offsetWidth;
    } else {
      container.scrollBy({
        left: -300, // Adjust scroll distance
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    const container = scrollRef.current;

    // Ensure scroll position is maintained when we reach the end
    if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
      container.scrollLeft = 0;
    } else {
      container.scrollBy({
        left: 300, // Adjust scroll distance
        behavior: "smooth",
      });
    }
  };

  return (
    <>
    
      <div
        className="container-fluid d-flex justify-content-center align-items-center"
        style={{ textAlign: "center" }}
      >
        <h2>Web Development</h2>
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
          {/* Duplicate the cards to create an infinite loop effect */}
          {[...cards, ...cards, ...cards].map((card) => (
            <div
              key={card.id}
              className="card mx-3 text-center"
              style={{
                width: "18rem", // Same size for all cards
                flex: "0 0 auto",
                height: "20rem",
              }}
            >
              {/* Placeholder image */}
              <img
                src={`https://picsum.photos/200/100?random=${card.id}`} // Random placeholder image with 200x100 size
                alt="Card placeholder"
                style={{
                  width: "100%", // Full width of the card
                  height: "35%", // 35% of the card height
                  objectFit: "cover", // Ensure the image fills the space correctly
                }}
              />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>

                {/* Truncated Description */}
                <p className="card-text" style={{
                    display: '-webkit-box',
                    '-webkit-line-clamp': 3,  // Show only 3 lines
                    '-webkit-box-orient': 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    height: '5rem' // Adjust height based on the number of lines
                  }}>
                  {card.description}
                </p>

                <p className="card-text">{card.price}</p>
                <p className="card-text">{card.author}</p>
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

export default InfiniteScrollingCards_WEB;
