import { React, ReactNode, useState } from "react";

export default function MovieList({child}) {
  const [count, setCount] = useState(0);
  <button onClick={() => setCount((count) => count + 10)}>+{count}</button>;
  return (
    <div>
      <button onClick={() => setCount((count) => count + 10)}>PARENT+{count}</button>
      <h1>Moviesxxxx</h1>
      {child}
    </div>
  );
}
