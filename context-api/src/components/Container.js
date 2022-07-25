import {useContext} from "react";
import Button from "./button";
import Header from "./Header";

import ThemeContext from "../context/ThemeContext";

function Container() {

  const {theme} = useContext(ThemeContext)
  console.log(theme);
  
  return (
    <div className={`app ${theme === "dark" ? theme : "pink"}`}>
      <Header />
      <hr />
      <Button />
    </div>
  );
}

export default Container;
