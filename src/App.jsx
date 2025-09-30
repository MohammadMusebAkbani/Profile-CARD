import React from "react";
import { FaTwitter, FaYoutube, FaRegHeart } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram, FaRegMessage } from "react-icons/fa6";
import { PiShareFatLight } from "react-icons/pi";
import ProfileCard from "./components/ProfileCard";

const App = () => {
  // Multiple profiles - easily add more!
  const profiles = [
    {
      id: 1,
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
      onSubscribe: () => alert("Subscribed to CodingLab!"),
      onMessage: () => alert("Message sent to CodingLab!"),
    },
    {
      id: 2,
      name: "Sarah Johnson",
      title: "Web Developer",
      imageUrl:
        "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=740",
      borderColor: "border-pink-500",
      socialLinks: [
        { icon: RiFacebookFill, bgColor: "bg-blue-700", href: "#" },
        { icon: FaTwitter, bgColor: "bg-blue-400", href: "#" },
        { icon: FaInstagram, bgColor: "bg-pink-500", href: "#" },
        { icon: FaYoutube, bgColor: "bg-red-500", href: "#" },
      ],
      stats: [
        { icon: FaRegHeart, count: "45.2K" },
        { icon: FaRegMessage, count: "15K" },
        { icon: PiShareFatLight, count: "8.3K" },
      ],
      onSubscribe: () => alert("Subscribed to Sarah Johnson!"),
      onMessage: () => alert("Message sent to Sarah Johnson!"),
    },
    {
      id: 3,
      name: "Mike Anderson",
      title: "UI/UX Designer",
      imageUrl:
        "https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-jeans-clothes-fashion-man_158538-5028.jpg?w=740",
      borderColor: "border-green-500",
      socialLinks: [
        { icon: RiFacebookFill, bgColor: "bg-blue-700", href: "#" },
        { icon: FaTwitter, bgColor: "bg-blue-400", href: "#" },
        { icon: FaInstagram, bgColor: "bg-pink-500", href: "#" },
        { icon: FaYoutube, bgColor: "bg-red-500", href: "#" },
      ],
      stats: [
        { icon: FaRegHeart, count: "82.1K" },
        { icon: FaRegMessage, count: "35K" },
        { icon: PiShareFatLight, count: "19.7K" },
      ],
      onSubscribe: () => alert("Subscribed to Mike Anderson!"),
      onMessage: () => alert("Message sent to Mike Anderson!"),
    },
    {
      id: 4,
      name: "Emily Chen",
      title: "Content Creator",
      imageUrl:
        "https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=740",
      borderColor: "border-purple-500",
      socialLinks: [
        { icon: RiFacebookFill, bgColor: "bg-blue-700", href: "#" },
        { icon: FaTwitter, bgColor: "bg-blue-400", href: "#" },
        { icon: FaInstagram, bgColor: "bg-pink-500", href: "#" },
        { icon: FaYoutube, bgColor: "bg-red-500", href: "#" },
      ],
      stats: [
        { icon: FaRegHeart, count: "92.5K" },
        { icon: FaRegMessage, count: "28K" },
        { icon: PiShareFatLight, count: "16.2K" },
      ],
      onSubscribe: () => alert("Subscribed to Emily Chen!"),
      onMessage: () => alert("Message sent to Emily Chen!"),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Our Team
      </h1>

      {/* Grid Layout - Responsive */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {profiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
    </div>
  );
};

export default App;
