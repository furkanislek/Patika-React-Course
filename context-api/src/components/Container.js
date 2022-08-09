import {useContext} from "react";
import Button from "./button";
import Header from "./Header";

import ThemeContext from "../context/ThemeContext";
import Profile from "./Profile";

function Container() {

  const {theme} = useContext(ThemeContext)
  console.log(theme);
  
  return (
    <div className={`app ${theme === "dark" ? theme : "light"}`}>
      <Header />
      <hr />
      <Button />
      <hr/>
      <Profile/>
    </div>
  );
}

export default Container;
