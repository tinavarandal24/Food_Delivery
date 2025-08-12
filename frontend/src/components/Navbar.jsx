import React, { useContext, useState } from "react";
import { NavLink } from 'react-router-dom';
import { assets } from "../assets/frontend_assets/assets";
import { StoreContext } from "../context/storeContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [showSearch, setShowSearch] = useState(false); // ✅ Search toggle
  const [query, setQuery] = useState("");              // ✅ Search input value

  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="w-full overflow-x-hidden">
      <div className="flex justify-between items-center px-2 sm:px-4 md:px-6 py-4 bg-white shadow-md font-primary">

        {/* Logo */}
        <div>
          <NavLink to='/'>
            <img
              src="/src/assets/frontend_assets/logo.png"
              alt="logo"
              className="w-28"
            />
          </NavLink>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium cursor-pointer">
          <li className="hover:text-red-500 transition">
            <NavLink to="/" className={({ isActive }) => isActive ? "text-red-500" : ""}>
              Home
            </NavLink>
          </li>
          <li>
            <a href="/#explore-menu" className="hover:text-red-500 transition">
              Menu
            </a>
          </li>
          <li className="hover:text-red-500 transition">
            <NavLink to="/mobile-app" className={({ isActive }) => isActive ? "text-red-500" : ""}>
              Mobile-App
            </NavLink>
          </li>
          <li className="hover:text-red-500 transition">
            <NavLink to="/contact" className={({ isActive }) => isActive ? "text-red-500" : ""}>
              Contact Us
            </NavLink>
          </li>
          <li className="hover:text-red-500 transition">
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-red-500" : ""}>
              About Us
            </NavLink>
          </li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-6 relative font-primary">
          {showSearch ? (
            <input
              type="text"
              placeholder="Search here..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="border border-gray-300 px-3 py-1 rounded-md w-40 sm:w-60 outline-none transition"
            />
          ) : (

            <img
              className="cursor-pointer hover:opacity-70"

              src={assets.search_icon}
              alt="Search"
              onClick={() => setShowSearch(true)}
            />
          )}

          {/* Cart Icon with Dot */}
          {!showSearch && (
            <NavLink to="/cart" className="relative">
              <img
                src={assets.basket_icon}
                alt="Cart"
                className="w-7 h-7 cursor-pointer hover:opacity-80"
              />
              {getTotalCartAmount?.() > 0 && (
                <div className="absolute -top-1.5 -right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border border-white"></div>
              )}
            </NavLink>
          )}

          {/* Sign In Button */}
          {!showSearch && (
            <button
              onClick={() => setShowLogin(true)}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
