import { Outlet } from "react-router";

export default function Home() {
  return (
    <>
      <div className="w-10">home</div>
      <Outlet></Outlet>
    </>
  );
}
