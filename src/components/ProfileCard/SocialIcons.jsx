import React from "react";

// Individual Social Icon Component
const SocialIcons = ({ icon: Icon, bgColor, href = "#" }) => {
  return (
    <a
      href={href}
      className={`h-8 w-8 rounded-full ${bgColor} flex items-center justify-center hover:opacity-80 transition`}
    >
      {Icon && <Icon className="text-white" />}
    </a>
  );
};

export default SocialIcons;
