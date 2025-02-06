"use client";


import React from "react";
import Image from "next/image";
import Image1 from "../../../public/Rectangle 24.png";
import Image2 from "../../../public/Rectangle 25.png";
import Image3 from "../../../public/Indicator.png";

export const Beautifulroom = () => {
  return (
    <div className="w-full bg-[#FCF8F3] py-16 px-6 md:px-12">
      {/* Container */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side (Text + Button) */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-[#3A3A3A]">
            50+ Beautiful rooms inspiration
          </h1>
          <p className="mt-4 text-gray-600 text-base md:text-lg">
            Our designer already made a lot of beautiful prototypes of rooms that inspire you.
          </p>
          <button className="text-white w-[237px] px-4 py-2 text-white bg-[#B5873A] hover:bg-[#96702F] rounded-md transition-colors duration-200 font-bold  mt-4 py-2 px-4 rounded-lg shadow-md hover:scale-110 transition-transform duration-300 easa-in-out">
            Explore More
          </button>
        </div>

        {/* Right Side (Images) */}
        <div className="flex flex-col md:flex-row gap-6">
          <Image src={Image1} alt="Room Image 1" width={400} height={500} className="w-full md:w-[400px] rounded-lg shadow-md" />
          <div className="flex flex-col gap-6">
            <Image src={Image2} alt="Room Image 2" width={350} height={450} className="w-full md:w-[350px] rounded-lg shadow-md" />
            <Image src={Image3} alt="Indicator" width={100} height={20} className="w-[100px] mx-auto md:mx-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beautifulroom;
