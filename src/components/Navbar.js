import React from "react";
import companyLogo from "../images/logo/companyLogo.png";
import magnifyingGlass from "../images/logo/magnifying-glass.png";
export default function Navbar() {
  return (
    <div className="flex justify-evenly">
      <ul className="flex space-x-12 items-center mt-10">
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
      </ul>
      <ul className="flex items-center mt-10">
        <li className="cursor-pointer hover:scale-110">
          <img src={magnifyingGlass} alt="glassLogo" />
        </li>
      </ul>
    </div>
  );
}
