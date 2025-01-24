import React, { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ children }) => {
  return (
    <span className="py-[2px] px-[10px] bg-blue-300 rounded-md text-xs font-bold text-blue-800">
      {children}
    </span>
  );
};

export default Badge;
