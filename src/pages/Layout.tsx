import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import hamburger from "../assets/hamburger.png";
import search from "../assets/search.png";
import flag from "../assets/head-flag.png";
import user from "../assets/head-image.png";
import { useEffect, useState } from "react";

const Layout = () => {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (menu && target && !target.closest(".menu")) {
        setMenu(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [menu]);

  return (
    <div className="w-full h-screen flex">
      <div className="w-[15%] h-full fixed top-0 left-0 z-50 hidden sm:block">
        <Sidebar setMenu={setMenu} />
      </div>

      <main className="w-full sm:w-[85%] h-full sm:ml-[15%]">
        <div className="flex sm:hidden items-center justify-between px-5 pt-5 -mb-7">
          <div className="flex items-center gap-4">
            <img
              src={hamburger}
              alt="hamburger"
              className="cursor-pointer menu"
              onClick={() => setMenu(true)}
            />
            <img src={search} alt="search-icon" />
          </div>

          <div className="flex items-center gap-4">
            <img src={flag} alt="flag" />
            <img src={user} alt="user" />
          </div>
        </div>
        <Outlet />
      </main>

      {menu && (
        <div className="absolute top-0 left-0 z-30 w-1/2 h-screen menu">
          <Sidebar setMenu={setMenu} />
        </div>
      )}
    </div>
  );
};

export default Layout;
