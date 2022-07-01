import { useState, useEffect } from "react";

function Counter() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("Components Mount Edildi!");

   const interval = setInterval(() => {
      setNumber((n) => n + 1);
    }, 1000);

    return () => clearInterval(interval);

  }, []);

  useEffect(() => {
    console.log("Number State Güncellendi");
  }, [number]);

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>
    </div>
  );
}

export default Counter;
