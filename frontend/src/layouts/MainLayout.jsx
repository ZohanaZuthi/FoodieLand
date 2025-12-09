import {Outlet} from "react-router-dom";
import Navbar from "../components/layout/Navbar";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-10">
        <Outlet />
      </main>
    </>
  );
}