import { Outlet } from "react-router";
import Header from "./Header";

const BaseLayout = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <Header />
      <main className="bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default BaseLayout;
