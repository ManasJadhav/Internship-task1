import React from "react";
import companyLogo from "../images/logo/companyLogo.png";
import magnifyingGlass from "../images/logo/magnifying-glass.png";
export default function Navbar() {
  return (
    <div className="flex justify-evenly text-heading">
      <ul className="flex space-x-8 items-center mt-10 ml-16">
        <li>
          <img src={companyLogo} alt="logo" />
        </li>
        <li className="cursor-pointer hover:scale-110">Popular</li>
        <li className="bg-default-pink-hover px-4 py-1 rounded-md text-white cursor-pointer hover:scale-110">
          New
        </li>
        <li className="cursor-pointer hover:scale-110">Reading list</li>
        <li className="cursor-pointer hover:scale-110">Topics</li>
        <li className="cursor-pointer hover:scale-110">Subscribe</li>
        <li>
          <input
            className="relative border-default-black left-22 border p-2 rounded-md w-64 shadow-sm"
            type="text"
          />
        </li>
        <li>
          <img
            className="hover:scale-110 relative right-16"
            src={magnifyingGlass}
            alt="glassLogo"
          />
        </li>
      </ul>
    </div>
  );
}
