"use client";

import { useState } from "react";

export default function Counter({ data }) {
  const [count, setCount] = useState(0);


  return (
    <>
      <h2>number of data {data.length}</h2>
      <button onClick={() => setCount((count) => count + 1)}>
        {count}
      </button>{" "}
    </>
  );
}
