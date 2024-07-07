import React, { useState } from "react";

const HomeMenu = () => {
  const [activeItem, setActiveItem] = useState("Refer");

  const handleClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="flex items-center justify-center mt-5">
      <div className="bg-[#1A73E81C] py-2 px-10 rounded-3xl">
        <ul className="flex gap-10 justify-center text-semibold text-lg">
          <li
            className={`relative ${
              activeItem === "Refer" ? "text-blue-500" : ""
            }`}
            onClick={() => handleClick("Refer")}
          >
            <span>Refer</span>
            {activeItem === "Refer" && (
              <span className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
            )}
          </li>
          <li
            className={`relative ${
              activeItem === "Benefits" ? "text-blue-500" : ""
            }`}
            onClick={() => handleClick("Benefits")}
          >
            <span>Benefits</span>
            {activeItem === "Benefits" && (
              <span className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
            )}
          </li>
          <li
            className={`relative ${
              activeItem === "FAQs" ? "text-blue-500" : ""
            }`}
            onClick={() => handleClick("FAQs")}
          >
            <span>FAQs</span>
            {activeItem === "FAQs" && (
              <span className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
            )}
          </li>
          <li
            className={`relative ${
              activeItem === "Support" ? "text-blue-500" : ""
            }`}
            onClick={() => handleClick("Support")}
          >
            <span>Support</span>
            {activeItem === "Support" && (
              <span className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
            )}
          </li>
        </ul>
      </div>

      
    </div>
  );
};

export default HomeMenu;
