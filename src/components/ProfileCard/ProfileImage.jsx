import React from 'react'

const ProfileImage = ({ src, alt, borderColor = "border-blue-500" }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`absolute top-[6rem] left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-[4px] ${borderColor} object-cover shadow-md`}
    />
  );
};
export default ProfileImage