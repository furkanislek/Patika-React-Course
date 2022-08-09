import Button from "./button";
import Header from "./Header";

import { useTheme } from "../context/ThemeContext";
import Profile from "./Profile";

function Container() {
  const { theme } = useTheme();
  console.log(theme);

  return (
    <div className={`app ${theme === "dark" ? theme : "light"}`}>
      <Header />
      <hr />
      <Button />
      <hr />
      <Profile />
    </div>
  );
}

export default Container;
