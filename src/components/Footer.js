import React from "react";
import company2 from "../images/logo/company2.png";
import Twitter from "../images/logo/Shape (1).png";
import PicsArt from "../images/logo/Shape (2).png";
import FaceBook from "../images/logo/Shape.png";

export default function Footer() {
  return (
    <div className="flex justify-evenly py-6 items-center">
      <img classNae="img-responsive" src={company2} alt="Logo" />
      <div className="flex space-x-2">
        <div className="w-6 bg-passive rounded-full h-6">
          <img className="rounded-full w-4 ml-1 mt-1" src={Twitter} alt="" />
        </div>
        <div className="w-6 bg-passive rounded-full h-6">
          <img className="rounded-full w-2 ml-2 mt-1" src={FaceBook} alt="" />
        </div>
        <div className="w-6 bg-passive rounded-full h-6">
          <img className="rounded-full w-4 ml-1 pt-1" src={PicsArt} alt="" />
        </div>
      </div>
      <p className="text-xs text-passive">All Rights Reserved 2018 3layers</p>
    </div>
  );
}
