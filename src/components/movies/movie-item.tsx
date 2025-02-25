import { useRef } from "react";

const MoveItem = () => {
  const ref = useRef(12);
  console.log(ref);
  return <div>MoveItem</div>;
};

export default MoveItem;
