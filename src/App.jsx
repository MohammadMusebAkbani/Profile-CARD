import React from "react";
import { FaTwitter, FaYoutube, FaRegHeart } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram, FaRegMessage } from "react-icons/fa6";
import { PiShareFatLight } from "react-icons/pi";

function App() {
  const imageUrl =
    "https://img.freepik.com/premium-photo/studio-portrait-handsome-young-man-astonished-with-something_1048944-17590200.jpg?semt=ais_hybrid&w=740&q=80";
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex w-full max-w-[50rem] h-[30rem] items-center justify-center mx-auto bg-gray-400 rounded-3xl">
        <div className="flex flex-col h-[400px] w-[300px] bg-white rounded-lg shadow-lg relative overflow-hidden">
          {/* Blue header section */}
          <div className="bg-blue-500 h-1/3 rounded-t-lg"></div>
          {/* Profile image */}
          <img
            src={imageUrl}
            alt="Profile"
            className="absolute top-[6rem] left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-[4px] border-blue-500 object-cover shadow-md"
          />
          {/* Content section */}
          <div className="flex flex-col items-center mt-10 gap-1">
            <h1 className="text-center font-bold text-2xl text-gray-800">
              CodingLab
            </h1>
            <p>Youtuber & Blogger</p>
            <div className="flex gap-3 mt-3">
              <div className="h-8 w-8 rounded-full bg-blue-700 flex items-center justify-center">
                <RiFacebookFill className="text-white font-bold" />
              </div>
              <div className="h-8 w-8 rounded-full bg-blue-400 flex items-center justify-center">
                <FaTwitter className="text-white" />
              </div>
              <div className="h-8 w-8 rounded-full bg-pink-500 flex items-center justify-center">
                <FaInstagram className="text-white" />
              </div>
              <div className="h-8 w-8 rounded-full bg-red-500 flex items-center justify-center">
                <FaYoutube className="text-white" />
              </div>
            </div>
            <div className="flex gap-4">
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition w-25">
                Subscribe
              </button>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition w-25">
                Message
              </button>
            </div>
            <div className="flex bottom-4 gap-1 mt-5 items-center">
              <div className="flex gap-1 items-center">
                <FaRegHeart />
                <p>60.4K</p>
              </div>
              <div className="h-3.5 w-[1px] bg-[#979797]" />
              <div className="flex ml-2 gap-1 items-center">
                <FaRegMessage className="h-3.5" />
                <p>20K</p>
              </div>
              <div className="h-3.5 w-[1px] bg-[#979797]" />
              <div className="flex ml-2 gap-1 items-center">
                <PiShareFatLight className="" />
                <p>12.4K</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
