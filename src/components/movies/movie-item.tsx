import { movies_context } from "@/pages/FilmPage";
import { useContext, useEffect, useRef, useState } from "react";
const MoveItem = () => {
  const ref = useRef(null);
  const movie_name = useContext(movies_context);
  const [count, setCount] = useState(0);
  console.log("RENDERRRRR");
  let subCount = 0;
  // useEffect(() => {
  //   console.log("useEffect: ", count);
  // }, [count]);
  function showApp() {
    subCount = count + 10;
    setCount((count) => count + 1);
    console.log("showApp: ", subCount);
  }
  return (
    <div ref={ref}>
      <button
        className="pd-4 border-e-slate-300 cursor-pointer"
        onClick={showApp}
      >
        MoveItem {count} -- {subCount} -- {new Date().toLocaleTimeString()}
      </button>
    </div>
  );
};
export default MoveItem;