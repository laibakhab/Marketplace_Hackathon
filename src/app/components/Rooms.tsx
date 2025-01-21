import React from "react";
import Image from "next/image";
import Image1 from "../../../public/Rectangle 24.png";
import Image2 from "../../../public/Rectangle 25.png";
import Image3 from "../../../public/Indicator.png";

export const Beautifulroom = () => {
  return (
    <div>
      <div className="w-ful h-[670px] top-[2763px] flex mt-20 bg-[#FCF8F3]">
        {/* left */}
        <div>
          <div className="top-[2986px] left-[100px] mt-36 ">
            <h1 className="top-[2986px] ml-[100px] font-bold text-[40px] leading-[40px] text-[#3A3A3A]">
              50+ Beautiful rooms inspiration
            </h1>
            <p className="top-[3089px] ml-[100px] font-medium text-[16px] leading-6 text-[#616161]">
              Our designer already made a lot of beautiful prototipe of rooms
              that inspire you
            </p>
          </div>
          <div className="w-[176px] h-[48px] top-[3162px] ml-[100px] bg-[#B88E2F] pl-8 pt-3">
            <button className="w-[104px] h-[24px] top-[3174px] left-[136px] font-semibold text-[16px] leading-6 text-white">
              Explore More
            </button>
          </div>
        </div>
        {/* right */}
        <div className="w-[1196px] h-[582px] top-[2807px] left-[564px] gap-10 flex">
          <Image
            src={Image1}
            alt="Image"
            width={404}
            height={582}
            className="top-[2807px] left-[564px] "
          />
          <div>
            <Image
              src={Image2}
              alt="Image"
              width={372}
              height={486}
              className="top-[2807px] left-[992px] mb-12 "
            />
            <Image
              src={Image3}
              alt="Image"
              width={120}
              height={27}
              className="top-[3333px] left-[992px] gap-[20px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Beautifulroom;










// import React from "react";
// import Image from "next/image"; // Ensure Image is imported
// import Frame3 from "../../../public/Frame3.png"; // Correct path to the image
// import Frame4 from "../../../public/Frame4.png"; // Correct path to the image


// export default function Rooms() {
//   return (
//     <div className="bg-[#FCF8F3] py-10">
//       {/* Container */}
//       <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start gap-8">
//         {/* Text Section */}
//         <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
//           <h1 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold leading-[1.2]">
//             50+ Beautiful rooms inspiration
//           </h1>
//           <p className="text-[14px] sm:text-[16px] text-gray-600 leading-[24px]">
//             Our designers have already created numerous beautiful room prototypes to inspire you.
//           </p>
//           <button className="mt-4 px-6 py-3 text-white bg-[#B88E2F] hover:bg-[#997627] ">
//             Explore More
//           </button>
//         </div>

//         {/* Image Section */}
//         <div className="w-[404px] h-[582px] mt-[44px] mr-[472px] lg:w-1/2">
//           <Image
//             src={Frame3}
//             alt="Beautiful Room"
//             className=""
           
//             priority={true} // Optimize loading for above-the-fold content
//           />
//         </div>
//         <div className="mt-[44px] mr-[76px]">
//           <Image
//             src={Frame4}
//             alt="Beautiful Room"
//             className=""
           
//             priority={true} // Optimize loading for above-the-fold content
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
