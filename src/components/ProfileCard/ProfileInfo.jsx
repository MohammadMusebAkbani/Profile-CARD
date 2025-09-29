import React from 'react'

// Profile Info (Name and Title)
const ProfileInfo = ({ name, title }) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <h1 className="text-center font-bold text-2xl text-gray-800">{name}</h1>
      <p className="text-gray-600 text-sm">{title}</p>
    </div>
  );
};
export default ProfileInfo