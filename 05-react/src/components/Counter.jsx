import { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState(0);
  function increment() {
    setNum(num + 1);
  }
  function decrement() {
    setNum(num - 1);
  }
  function reset() {
    setNum(num - num);
  }

  return (
    <div>
      <h1>
        Count : <span>{num}</span>
      </h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
