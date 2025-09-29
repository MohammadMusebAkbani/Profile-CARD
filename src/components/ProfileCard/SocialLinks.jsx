import React from 'react';
import SocialIcons from './SocialIcons';
// Social Links Section
const SocialLinks = ({ socialLinks }) => {
  return (
    <div className="flex gap-3 mt-3">
      {socialLinks.map((social, index) => (
        <SocialIcons
          key={index}
          icon={social.icon}
          bgColor={social.bgColor}
          href={social.href}
        />
      ))}
    </div>
  );
};
export default SocialLinks
