import { useState } from "react";
import uuid from "react-uuid";
import { useLocalStorage } from "./useLocalStorage";

export const LocalStorageHook = () => {
  const [wishText, setWishText] = useState("");
  const [wishList, setWishList] = useState([]);
  const wishSaved = useLocalStorage(wishList);

  const handleWishAdd = () => {
    setWishList((list) => list.concat({ id: uuid(), wish: wishText }));
    setWishText("");
  };

  const handleWishInput = (e) => setWishText(e.target.value);

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

      <span> wishes saved {wishSaved} </span>
    </div>
  );
};
