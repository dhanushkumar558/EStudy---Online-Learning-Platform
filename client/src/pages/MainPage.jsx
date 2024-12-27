import { useState } from "react";
import Webcard from "../components/WebCard";
import NavbarInMain from "../components/NavbarInMain";
import PythonCard from "../components/PythonCard";
import DS from "../components/DataScienceCard";

const MainPage = () => {
  const [wishlist, setWishlist] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const toggleWishlist = (id, card) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((item) => item !== id));
      setWishlistItems(wishlistItems.filter((item) => item.id !== id));
    } else {
      setWishlist([...wishlist, id]);
      setWishlistItems([...wishlistItems, card]);
    }
  };

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item !== id));
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  const enroll = (item) => {
    // Handle enrollment logic here
    alert(`Enrolled in ${item.title}`);
  };

  return (
    <>
      <NavbarInMain
        wishlistCount={wishlist.length}
        wishlistItems={wishlistItems}
        removeFromWishlist={removeFromWishlist}
        enroll={enroll}
      />
      <br />
      <Webcard wishlist={wishlist} toggleWishlist={toggleWishlist} />
      <br />
      <PythonCard wishlist={wishlist} toggleWishlist={toggleWishlist} />
      <br />
      <DS wishlist={wishlist} toggleWishlist={toggleWishlist} />
    </>
  );
};

export default MainPage;
