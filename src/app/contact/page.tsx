import React from 'react';
import Image from 'next/image';
import Rectangle from '../../../public/Rectangle.png';
import { MapPin, ChevronRightIcon, Phone, Clock, Award, ShieldCheck, Truck, Headphones } from 'lucide-react';
import Logo from '../../../public/Meubel-l.png';
import Trophy from "../../../public/trophy 1.png"
import Guarantee from "../../../public/guarantee.png"
import Shipping from "../../../public/guarantee.png"
import Suport from "../../../public/customer-support.png"




  export default function FeaturesBanner() {
   
    

  return (
  
    <div>
  

      {/* Top Section */}
      <div>
        <Image src={Rectangle} alt="Image" height={316} className="top-[100px] w-full" />

        <div className="absolute bottom-[150px] h-[443px]">
          <Image src={Logo} alt="Meuble-1" className="ml-[682px]" />
          <h2 className="w-[124px] h-[72px] ml-[622px] font-medium text-[48px] leading-[72px]">Contact</h2>

          <span className="flex items-center">
            <p className="w-[40px] h-[24px] top-[295px] ml-[660px] font-[500px] text-[16px] leading-6">Home</p>
            <ChevronRightIcon
              size={20}
              className="w-5 h-5 sm:cursor-default cursor-pointer sm:hover:text-gray-500 ml-2"
            />
            <p className="w-[41px] h-[24px] top-[295px] left-[740px] font-light text-[16px] leading-6">Contact</p>
          </span>
          
        </div>
      
      
      </div>
      <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Get In Touch With Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          For More Information About Our Product & Services, Please Feel Free To Drop Us
          An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="flex gap-4">
            <MapPin className="w-6 h-6 text-gray-600 shrink-0" />
            <div>
              <h2 className="font-semibold mb-2">Address</h2>
              <p className="text-gray-600">
                235 5th SE Avenue, New York NY10000, United States
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Phone className="w-6 h-6 text-gray-600 shrink-0" />
            <div>
              <h2 className="font-semibold mb-2">Phone</h2>
              <div className="text-gray-600">
                <p>Mobile: +(84) 546-6789</p>
                <p>Hotline: +(84) 456-6789</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <Clock className="w-6 h-6 text-gray-600 shrink-0" />
            <div>
              <h2 className="font-semibold mb-2">Working Time</h2>
              <div className="text-gray-600">
                <p>Monday-Friday: 9:00 - 22:00</p>
                <p>Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>
        </div>

        <form className="space-y-6">
          <div>
            <label 
              htmlFor="name" 
              className="block mb-2 font-medium"
            >
              Your name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B5873A] focus:border-transparent"
            />
          </div>

          <div>
            <label 
              htmlFor="email" 
              className="block mb-2 font-medium"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="example@email.com"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B5873A] focus:border-transparent"
            />
          </div>

          <div>
            <label 
              htmlFor="subject" 
              className="block mb-2 font-medium"
            >
              Subject
            </label>
            <input
              id="subject"
              type="text"
              placeholder="Enter your subject"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B5873A] focus:border-transparent"
            />
          </div>

          <div>
            <label 
              htmlFor="message" 
              className="block mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Enter your message"
              required
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B5873A] focus:border-transparent resize-y min-h-[120px]"
            />
          </div>

          <button 
            type="submit"
            className="w-[237px] px-4 py-2 text-white bg-[#B5873A] hover:bg-[#96702F] rounded-md transition-colors duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    
    </div>
{/* end */}
    <div className='w-full mx-auto h-[270px] top-[2699px] left-[-3px] justify-between pt-[100px] pb-[100px] mt-10 bg-[#FAF3EA]'>        
   <div className='w-[1334px] h-[70px] justify-between flex  ml-14'>
                     <div className='w-[337px] h-[70px] gap-[10px]  flex'>
            <Image src={Trophy} alt="icon" width={60} height={60} />
            <div className='w-[267px] h-[70px] gap-[2px] '>
              <p className='w-[157px] h-[38px] font-semibold text-[25px] leading-9'>High Quality</p>
              <p className='w-[267px] h-[30px] font-medium text-[20px] leading-[30px]'>crafted from top materials</p>
            </div>
          </div>

           <div className='w-[328px] h-[70px] gap-[10px]  flex'>
             <Image src={Guarantee} alt="icon" width={60} height={60} />
             <div className='w-[267px] h-[70px] gap-[2px] '>
               <p className='w-[258px] h-[38px] font-semibold text-[25px] leading-9'>Warrant Protection</p>
               <p className='w-[126px] h-[30px] font-medium text-[20px] leading-[30px]'>Over 2 years</p>
             </div>
           </div>

           <div className='w-[244px] h-[70px] gap-[10px]  flex'>
             <Image src={Shipping} alt="icon" width={60} height={60} />
             <div className='w-[267px] h-[70px] gap-[2px] '>
               <p className='w-[200px] h-[38px] font-semibold text-[25px] leading-9'>Free Shipping</p>
               <p className='w-[267px] h-[30px] font-medium text-[20px] leading-[30px]'>Oder over 150 $ </p>
             </div>
           </div>
          
           <div className='w-[337px] h-[70px] gap-[10px]  flex'>
             <Image src={Suport} alt="icon" width={60} height={60} />
             <div className='w-[267px] h-[70px] gap-[2px] '>
               <p className='w-[200px] h-[38px] font-semibold text-[25px] leading-9'>24 / 7 Support</p>
               <p className='w-[267px] h-[30px] font-medium text-[20px] leading-[30px]'>Dedicated Support</p>
             </div>
           </div>

         </div>
       </div>
    
      
    </div>
  );
};
