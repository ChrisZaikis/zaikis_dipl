import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);
  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  return (
    <div>
      <div>Τρέχουσα Καταμέτρηση: {count}</div>
      <button onClick={decrement}>Μείωση</button>
      <button onClick={increment}>Αύξηση</button>
    </div>
  );
};
export default Counter;
