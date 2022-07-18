import { useState } from "react";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState("Dark");

  const toggleTheme = () => {
    if (theme === "Dark") {
      setTheme("Light");
      document.body.style.background = "black";
    } else {
      setTheme("Dark");
      document.body.style.background = "white";
    }
  };

  return (
    <>
      <h1 style={{ color: theme === "Light" ? "white" : "black" }}>Theme</h1>
      <button onClick={(e) => toggleTheme(e.target.innerText)}>
        Switch to {theme}
      </button>
    </>
  );
};
