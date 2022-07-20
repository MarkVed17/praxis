import { useEffect, useState } from "react";

export const useLocalStorage = (wishList) => {
  const [wishSaved, setWishSaved] = useState(-2);

  useEffect(() => {
    localStorage.setItem("wishes", JSON.stringify(wishList));
    setWishSaved((savedWishes) => savedWishes + 1);
  }, [wishList]);

  return wishSaved;
};
