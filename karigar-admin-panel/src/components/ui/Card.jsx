// src/components/ui/card.jsx
import React from "react";

export const Card = ({ className = "", children }) => {
  return (
    <div
      className={`rounded-2xl shadow-md border border-gray-200 bg-white p-6 ${className}`}
    >
      {children}
    </div>
  );
};

export const CardContent = ({ children }) => {
  return <div className="text-gray-800">{children}</div>;
};
