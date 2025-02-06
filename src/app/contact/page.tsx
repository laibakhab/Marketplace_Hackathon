import React from 'react';
import Image from 'next/image';
import Rectangle from '../../../public/Rectangle.png';
import { MapPin, ChevronRightIcon, Phone, Clock, Award, ShieldCheck, Truck, Headphones } from 'lucide-react';
import Logo from '../../../public/Meubel-l.png';
import Trophy from "../../../public/trophy 1.png"
import Guarantee from "../../../public/guarantee.png"
import Shipping from "../../../public/guarantee.png"
import Support from "../../../public/customer-support.png"
import Link from 'next/link';

  export default function FeaturesBanner() {
  return (
  
    <div>
  

      {/* Top Section */}

      {/* <div className="relative w-full"> */}
      {/* Background Image */}
      {/* <Image src={Rectangle} alt="Background Image" height={316} className="w-full object-cover" /> */}

      
      {/* <div className="absolute inset-0 flex flex-col items-center justify-center text-center ">
        <Image src={Logo} alt="Meuble Logo" className="w-[70px] sm:w-[40px] " />

        <h2 className="text-3xl  text-gray-800">Contact</h2>

        
        <div className="flex items-center space-x-2  text-gray-600 text-sm sm:text-base">
          <Link href = {"/"} > <p className="font-medium">Home</p></Link>
          <ChevronRightIcon size={18} />
          <p className="font-light">Contact</p>
        </div>
      </div> */}
      
    {/* </div> */}



    <div className="relative">
        <Image src={Rectangle} alt="Background Image" height={316} className="w-full object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center ">
          <Image src={Logo} alt="Meuble Logo" className="max-w-[200px] size-10 sm:max-w-[300px] " />
          <h2 className=" sm:text-3xl font-medium text-gray-800">Contact</h2>
          <div className="flex items-center space-x-2  text-gray-600 text-[13px] ">
            <p className="font-medium">Home</p>
            <ChevronRightIcon size={18} />
            <p className="font-light">Contact</p>
          </div>
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
            className="text-white w-[237px] px-4 py-2 text-white bg-[#B5873A] hover:bg-[#96702F] rounded-md transition-colors duration-200 font-bold  mt-4 py-2 px-4 rounded-lg shadow-md hover:scale-110 transition-transform duration-300 easa-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    
    </div>
{/* end */}
<div className="w-full bg-[#FAF3EA] py-12">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center md:justify-between gap-6 px-6">
        {/* Feature Item */}
        <div className="flex items-center gap-4 w-full md:w-auto">
          <Image src={Trophy} alt="icon" width={60} height={60} />
          <div>
            <p className="text-xl font-semibold">High Quality</p>
            <p className="text-gray-600 text-sm">Crafted from top materials</p>
          </div>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <Image src={Guarantee} alt="icon" width={60} height={60} />
          <div>
            <p className="text-xl font-semibold">Warranty Protection</p>
            <p className="text-gray-600 text-sm">Over 2 years</p>
          </div>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <Image src={Shipping} alt="icon" width={60} height={60} />
          <div>
            <p className="text-xl font-semibold">Free Shipping</p>
            <p className="text-gray-600 text-sm">Order over $150</p>
          </div>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <Image src={Support} alt="icon" width={60} height={60} />
          <div>
            <p className="text-xl font-semibold">24/7 Support</p>
            <p className="text-gray-600 text-sm">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
    
      
    </div>
  );
};
