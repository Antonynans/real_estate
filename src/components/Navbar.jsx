import { useState } from "react";
import { NavLink } from "react-router-dom";

import { FaBars, FaPhone, FaRegEnvelope } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { TbHomeCheck } from "react-icons/tb";
import { IoPersonCircleOutline } from "react-icons/io5";


const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 ">
      <div className="lg:block hidden bg-[#0ca39a] text-white py-2 ">
        <div className="container mx-auto lg:flex hidden items-center justify-between px-3">
        <span className="flex items-center gap-x-1">
          <GoLocation />
          <p className="text-sm">Rezilla, 18 Grattan St, Brooklyn</p>
        </span>
        <div className="flex items-center gap-x-4">
          <span className="flex items-center gap-x-1">
            <FaPhone className="" />
            <p>+1 206-214-2298</p>
          </span>
          <span className="flex items-center gap-x-1">
            <FaRegEnvelope className="" />
            <p>support@rezilla.com</p>
          </span>
        </div></div>
      </div>

      <div className="bg-white">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-3 ">
          <div className=""
           
          >
            <ul className="lg:flex hidden items-center gap-x-4 list-none lg:ml-auto lg:transform-none lg:translate-y-[-50%] lg:gap-y-0 gap-y-8">
              <li className="py-2 flex font-medium items-center leading-snug">
                <button className="bg-[#0ca39a] rounded-full px-4 py-1 hoverBtn flex items-center gap-2">
                  Home
                </button>
              </li>
              <li className="py-2 flex font-medium items-center leading-snug hover:text-[#5badbb]">
                <NavLink to="/">About</NavLink>
              </li>
              <li className="py-2 flex font-medium items-center leading-snug hover:text-[#5badbb]">
                <NavLink to="/">Listings</NavLink>
              </li>
              <li className="py-2 flex font-medium items-center leading-snug hover:text-[#5badbb]">
                <NavLink to="/">Services</NavLink>
              </li>
              <li className="py-2 flex font-medium items-center leading-snug hover:text-[#5badbb]">
                <NavLink to="/">Blogs</NavLink>
              </li>
            </ul>
          </div>

          <div className="w-full sticky top-0 flex justify-between lg:w-auto lg:static lg:justify-start h-[10vh] items-center bg-white">
            <span className="flex items-center gap-x-2">
              <button className="bg-[#0ca39a] text-white rounded-full w-14 h-14">
                <TbHomeCheck className="w-1/2 h-1/2 m-auto" />
              </button>
              <p className="font-medium text-xl">Rezilla</p>
            </span>
            <div className="flex items-center">
              <button
                className="cursor-pointer text-xl leading-none px-3 py-1 h-[3rem] block lg:hidden outline-none focus:outline-none"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                {navbarOpen ? <AiOutlineClose /> : <FaBars />}
              </button>
            </div>
          </div>

          <div
            className={
              "lg:flex lg:items-center items-baseline lg:pt-0 pt-20 lg:h-auto h-screen lg:w-auto w-full justify-center" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <ul className="flex flex-col lg:flex-row items-center gap-x-4 list-none lg:ml-auto lg:transform-none lg:translate-y-[-50%] lg:gap-y-0 gap-y-8">
              <div className="lg:hidden flex flex-col gap-y-8 items-center">
              <li className="py-2 flex font-medium items-center leading-snug">
                <button className="bg-[#0ca39a] rounded-full px-4 py-1 hoverBtn flex items-center gap-2">
                  Home
                </button>
              </li>
              <li className="py-2 flex font-medium items-center leading-snug hover:text-[#5badbb]">
                <NavLink to="/">About</NavLink>
              </li>
              <li className="py-2 flex font-medium items-center leading-snug hover:text-[#5badbb]">
                <NavLink to="/">Listings</NavLink>
              </li>
              <li className="py-2 flex font-medium items-center leading-snug hover:text-[#5badbb]">
                <NavLink to="/">Services</NavLink>
              </li>
              <li className="py-2 flex font-medium items-center leading-snug hover:text-[#5badbb]">
                <NavLink to="/">Blogs</NavLink>
              </li>
              </div>
              
              <li className="py-2 flex font-medium items-center leading-snug">
                <button className="py-4 hoverBtn flex items-center gap-2">
                  <IoPersonCircleOutline />
                  <p>Login/Register</p>
                </button>
              </li>
              <li className="py-2 flex font-medium text-white items-center leading-snug">
                <button className="bg-[#0ca39a] rounded-full px-6 py-4 hoverBtn flex items-center gap-2">
                  <TbHomeCheck className="text-xl" />
                  <p>Add Listing</p>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
