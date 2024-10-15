import { Link, NavLink } from "react-router-dom";
import "../Css/buttons.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut().then().catch();
  };

  // theme
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggol = (e) => {
    if (e.target.checked) {
      setTheme("synthwave");
    } else {
      setTheme("light");
    }
  };

  const links = (
    <>
      <li className={`${user ? "hidden" : "block"}`}>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#67e8f9]"
              : "hover:text-[#67e8f9] hover:underline hover:underline-offset-4"
          }
        >
          Home
        </NavLink>
      </li>
      <li className={`${user ? "hidden" : "block"}`}>
        <NavLink
          to="/gallery"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#67e8f9]"
              : "hover:text-[#67e8f9] hover:underline hover:underline-offset-4"
          }
        >
          Gallery
        </NavLink>
      </li>
      <li className="block">
        <NavLink
          to="/all-tourists-spot"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#67e8f9]"
              : "hover:text-[#67e8f9] hover:underline hover:underline-offset-4"
          }
        >
          All Tourists Spot
        </NavLink>
      </li>
      <li className={`${user ? "block" : "hidden"}`}>
        <NavLink
          to="/my-list"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#67e8f9]"
              : "hover:text-[#67e8f9] hover:underline hover:underline-offset-4"
          }
        >
          My List
        </NavLink>
      </li>
      <li className={`${user ? "block" : "hidden"}`}>
        <NavLink
          to="/add-tourists-spot"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#67e8f9]"
              : "hover:text-[#67e8f9] hover:underline hover:underline-offset-4"
          }
        >
          Add tourists Spot
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="">
      <div className="navbar bg-black opacity-40 fixed z-10 lg:px-44 md:px-5  py-6 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#a5f3fc] focus:text-black  mt-3 w-52 p-2 shadow text-black font-bold text-xl"
            >
              {links}
            </ul>
          </div>
          <Link to="/">
            <h2 className="text-2xl font-bold ">rf Travels</h2>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="flex items-center space-x-4 font- text-xl text-white">
            {links}
          </ul>
        </div>

        <div className="navbar-end">
          <div className="mr-5 hidden lg:block">
            <label className="grid cursor-pointer place-items-center">
              <input
                type="checkbox"
                onChange={handleToggol}
                className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
              />
              <svg
                className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>

          {user ? (
            <button
              onClick={handleSignOut}
              className="text-black btn-class bg-[#67e8f9] "
            >
              Sign Up
            </button>
          ) : (
            <Link to="/authentication">
              <button className="text-black btn-class bg-[#67e8f9] ">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
