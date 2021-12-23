import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(count + 1);
    }
    const decrementCount = () => {
        setCount(count - 1);
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={incrementCount}> add</button>
            <button onClick={decrementCount}> -1 </button>
        </div>
    )
}

export default Counter;
