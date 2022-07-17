import React from "react";

function Header({ number, increment }) {
  console.log("Header Component Re-rendered");
  return (
    <div>
      Header - {number}
      <br />
      <br />
      <button onClick={increment}>click</button>
    </div>
  );
}

export default React.memo(Header);
