import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <>
      <header>
        <h1>HEADER</h1>
      </header>
      <Outlet />
    </>
  );
}
