import React from "react";

export const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`
        px-4 py-2 
        rounded-md 
        bg-blue-100 
        text-black
        hover:bg-blue-200 
        transition 
        duration-200 
        ease-in-out 
        font-medium 
        shadow-sm
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};
