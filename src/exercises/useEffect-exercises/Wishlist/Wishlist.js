import { useEffect, useState } from "react";
import uuid from "react-uuid";

export const Wishlist = () => {
  const [wishText, setWishText] = useState("");
  const [wishList, setWishList] = useState(
    JSON.parse(localStorage.getItem("myWishList")) || []
  );

  const handleWishAdd = () => {
    setWishList((list) => list.concat({ id: uuid(), wish: wishText }));
    setWishText("");
  };

  const handleWishInput = (e) => setWishText(e.target.value);

  useEffect(() => {
    if (wishList.length === 0) {
      localStorage.removeItem("myWishList");
    } else {
      localStorage.setItem("myWishList", JSON.stringify(wishList));
      console.log("Data updated!");
    }
  }, [wishList]);

  return (
    <div>
      <input
        onChange={handleWishInput}
        value={wishText}
        placeholder={"I wish..."}
      />
      <button onClick={handleWishAdd}>Add </button>
      <ul>
        {wishList.map(({ id, wish }) => (
          <li key={id}> {wish} </li>
        ))}
      </ul>
    </div>
  );
};
