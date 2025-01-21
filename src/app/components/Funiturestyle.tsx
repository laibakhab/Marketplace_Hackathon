import React from 'react';
import Image from 'next/image'; // Ensure Image is imported
import Frame5 from "../../../public/Frame5.png"; // Correct path to the image

export default function Funiturestyle() {
  return (
    <div className="h-[800px] flex justify-center items-center ">
      {/* Container */}
      <div className="w-full mb-[200px]  md:h-[350px]">
        
        <Image
          src={Frame5}
          alt="Furniture Style"
          className="rounded-lg"
          layout="responsive"
        />
      </div>
    </div>
  );
}
