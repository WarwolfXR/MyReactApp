import { useState } from "react";

function CounterCard() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h2>Click Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default CounterCard;
