import { useState } from "react";

export const CharacterCounter = () => {
  const [charCount, setCharCount] = useState(10);

  const calcLength = (e) => {
    const charlength = e.target.value.length;
    setCharCount(10 - charlength);
  };

  return (
    <>
      <textarea onChange={calcLength} />
      <p>Characters Left: {charCount}</p>
    </>
  );
};
