import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      Active Theme : {theme}
      <br />
      <br />
      <button onClick={() => setTheme(theme === "dark" ? "pink" : "dark")}>
        Change Theme
      </button>
    </div>
  );
}

export default Header;
