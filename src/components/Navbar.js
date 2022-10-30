import React from "react";
import { useState } from "react";
import companyLogo from "../images/logo/companyLogo.png";
import magnifyingGlass from "../images/logo/magnifying-glass.png";

export default function Navbar() {
  const active =
    "bg-default-pink-hover px-2 py-1 cursor-pointer hover:scale-110 rounded-md text-white";
  const NotActive = "cursor-pointer hover:scale-110";
  const [Active, setActive] = useState(1);

  function ActiveLink(id) {
    setActive(id);
  }

  return (
    <div className="flex justify-evenly text-heading">
      <ul className="flex space-x-8 items-center mt-10 mr-4">
        <li>
          <img src={companyLogo} alt="logo" />
        </li>
        <li
          onClick={() => {
            ActiveLink(1);
          }}
          className={Active === 1 ? active : NotActive}
        >
          Popular
        </li>
        <li
          onClick={() => {
            ActiveLink(2);
          }}
          className={Active === 2 ? active : NotActive}
        >
          New
        </li>
        <li
          onClick={() => {
            ActiveLink(3);
          }}
          className={Active === 3 ? active : NotActive}
        >
          Reading list
        </li>
        <li
          onClick={() => {
            ActiveLink(4);
          }}
          className={Active === 4 ? active : NotActive}
        >
          Topics
        </li>
        <li
          onClick={() => {
            ActiveLink(5);
          }}
          className={Active === 5 ? active : NotActive}
        >
          Subscribe
        </li>
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
