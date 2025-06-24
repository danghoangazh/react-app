import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(3);
  console.log("Home render");

  function changeCount() {
    console.log("changeCount");
    // const uuid = crypto.randomUUID();
    setCount(1);
  }
  return (
    <>
      <div className="w-10">Trang chủ {count} -- {count2}</div>
      <button onClick={changeCount}>change</button>
    </>
  );
}
