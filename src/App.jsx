import React from "react";
import { FaTwitter, FaYoutube, FaRegHeart } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram, FaRegMessage } from "react-icons/fa6";
import { PiShareFatLight } from "react-icons/pi";
import ProfileCard from "./components/ProfileCard/ProfileCard";

const App = () => {
  // Profile data (can come from API, props, or state)
  const profileData = {
    name: "CodingLab",
    title: "Youtuber & Blogger",
    imageUrl:
      "https://img.freepik.com/premium-photo/studio-portrait-handsome-young-man-astonished-with-something_1048944-17590200.jpg?semt=ais_hybrid&w=740&q=80",
    borderColor: "border-blue-500",
    socialLinks: [
      { icon: RiFacebookFill, bgColor: "bg-blue-700", href: "#" },
      { icon: FaTwitter, bgColor: "bg-blue-400", href: "#" },
      { icon: FaInstagram, bgColor: "bg-pink-500", href: "#" },
      { icon: FaYoutube, bgColor: "bg-red-500", href: "#" },
    ],
    stats: [
      { icon: FaRegHeart, count: "60.4K" },
      { icon: FaRegMessage, count: "20K" },
      { icon: PiShareFatLight, count: "12.4K" },
    ],
    onSubscribe: () => alert("Subscribed!"),
    onMessage: () => alert("Message sent!"),
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex w-full max-w-[50rem] h-[30rem] items-center justify-center mx-auto bg-gray-400 rounded-3xl p-4">
        <ProfileCard profile={profileData} />
      </div>
    </div>
  );
};

export default App;
