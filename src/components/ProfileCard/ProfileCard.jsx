import React from 'react'
import ProfileHeader from './ProfileHeader';
import ProfileImage from './ProfileImage';
import ProfileInfo from './ProfileInfo';
import SocialLinks from './SocialLinks';
import ActionButtons from './ActionButtons';
import Stats from './Stats';  

const ProfileCard = ({ profile }) => {
  return (
    <div className="flex flex-col h-[400px] w-[300px] bg-white rounded-lg shadow-lg relative overflow-hidden">
      <ProfileHeader />
      
      <ProfileImage 
        src={profile.imageUrl} 
        alt={profile.name}
        borderColor={profile.borderColor}
      />
      
      <div className="flex flex-col items-center mt-10 gap-1">
        <ProfileInfo name={profile.name} title={profile.title} />
        
        <SocialLinks socialLinks={profile.socialLinks} />
        
        <ActionButtons
          onSubscribe={profile.onSubscribe}
          onMessage={profile.onMessage}
        />
        
        <Stats stats={profile.stats} />
      </div>
    </div>
  );
};

export default ProfileCard