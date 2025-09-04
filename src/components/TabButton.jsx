import React from "react";

const TabButton = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className=" px-4 py-2 bg-gray-100 border border-gray-300 rounded cursor-pointer text-center text-gray-600 text-sm font-medium hover:bg-gray-200 hover:text-gray-800 transition-colors duration-200"
    >
      {children}
    </div>
  );
};

export default TabButton;
