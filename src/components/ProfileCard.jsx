import Button from "./ui/Button";
import IconButton from "./ui/IconButton";
import StatItem from "./ui/StatItem";

const ProfileCard = ({ profile }) => {
  return (
    <div className="flex flex-col h-[400px] w-[300px] bg-white rounded-lg shadow-lg relative overflow-hidden">
      {/* Header - Blue background at top */}
      <div className="bg-blue-500 h-1/3 rounded-t-lg"></div>

      {/* Profile Image - Circular image overlapping header */}
      <img
        src={profile.imageUrl}
        alt={profile.name}
        className={`absolute top-[6rem] left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-[4px] ${profile.borderColor} object-cover shadow-md`}
      />

      {/* Content Section */}
      <div className="flex flex-col items-center mt-10 gap-1">
        {/* Name and Title */}
        <h1 className="text-center font-bold text-2xl text-gray-800">
          {profile.name}
        </h1>
        <p className="text-gray-600 text-sm">{profile.title}</p>

        {/* Social Media Icons */}
        <div className="flex gap-3 mt-3">
          {profile.socialLinks.map((social, index) => (
            <IconButton
              key={index}
              icon={social.icon}
              bgColor={social.bgColor}
              href={social.href}
            />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-4">
          <Button onClick={profile.onSubscribe}>Subscribe</Button>
          <Button onClick={profile.onMessage}>Message</Button>
        </div>

        {/* Stats Section */}
        <div className="flex gap-3 mt-5 items-center">
          {profile.stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-3">
              <StatItem icon={stat.icon} count={stat.count} />
              {/* Divider between stats (not after last one) */}
              {index < profile.stats.length - 1 && (
                <div className="h-3.5 w-[1px] bg-gray-400" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
