import React from 'react'
import {useState} from "react";


function Counter() {


    const [count, setCount] = useState(0);

    const Increase = () => {
        setCount(count+1)
    }

    const Decrease = () => {
        setCount(count-1)
    }

    


  return (
    <div>
        <h1>{count}</h1>
        <button onClick={Decrease}>Decrease</button>
        <button onClick={Increase}>Increase</button>
        <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default Counter;