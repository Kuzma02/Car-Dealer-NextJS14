import React from "react";

const CustomBadge = ({ badgeText, children }) => {
  return (
    <div className="bg-red-700 text-xl rounded-lg px-2 h-10 text-white flex items-center justify-center gap-x-2">
      {children} <span>{badgeText}</span>
    </div>
  );
};

export default CustomBadge;
