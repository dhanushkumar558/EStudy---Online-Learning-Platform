import { useState } from "react";
import Webcard from "../components/WebCard";
import NavbarInMain from "../components/NavbarInMain";
import PythonCard from "../components/PythonCard";
import DS from "../components/DataScienceCard";

const MainPage = () => {
  const [wishlist, setWishlist] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [mylearnings, setMylearnings] = useState([]);  // New state for Mylearnings

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
    setMylearnings([...mylearnings, item]);  // Add item to Mylearnings
    alert(`Enrolled in ${item.title}`);
  };

  return (
    <>
      <NavbarInMain
        wishlistCount={wishlist.length}
        wishlistItems={wishlistItems}
        removeFromWishlist={removeFromWishlist}
        enroll={enroll}
        mylearningsCount={mylearnings.length}  // Add count for Mylearnings
        mylearningsItems={mylearnings}        // Pass Mylearnings items to Navbar
      />
      <br />
      <Webcard wishlist={wishlist} toggleWishlist={toggleWishlist} enroll={enroll} />
      <br />
      <PythonCard wishlist={wishlist} toggleWishlist={toggleWishlist} enroll={enroll} />
      <br />
      <DS wishlist={wishlist} toggleWishlist={toggleWishlist} enroll={enroll} />
    </>
  );
};

export default MainPage;
