
"use client";

import Trophy from "../../../public/trophy 1.png"
import Guarantee from "../../../public/guarantee.png"
import Shipping from "../../../public/guarantee.png"
import Support from "../../../public/customer-support.png"
import React from "react";
import { Award, ShieldCheck, ChevronRightIcon, Truck, Headphones } from 'lucide-react';
import Logo from '../../../public/Meubel-l.png';
import Rectangle from '../../../public/Rectangle.png';
import Image from "next/image";
import Shop from "../ShopProduct/page";
import Link from "next/link";




export default function FeaturesBanner() {

  const features = [
    { icon: Award, title: "High Quality", description: "Crafted from top materials" },
    { icon: ShieldCheck, title: "Warranty Protection", description: "Over 2 years" },
    { icon: Truck, title: "Free Shipping", description: "Order over $150" },
    { icon: Headphones, title: "24 / 7 Support", description: "Dedicated support" },
  ];

  const products = [
    { id: 1, _type: "product", title: "Syltherine", dis: "Stylish cafe chair", price: "25000.000", productImage: "/Cart7.png", dicountPercentage: 0, alt: "Cafe Chair", href: "/category/cafechair", isNew: true, description: "A stylish and comfortable cafe chair" },
    { id: 2, _type: "product", title: "Leviosa", dis: "Stylish cafe chair", price: "25000.000", productImage: "/Leviosa.png", dicountPercentage: 0, alt: "Luxury Sofa", href: "/category/sofaset", isNew: false, description: "A luxurious and elegant sofa set" },
    // Add more product items as needed
  ];



  return (
    <div>
      <nav>
      <div className="relative">
        <Image src={Rectangle} alt="Background Image" height={316} className="w-full object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center ">
          <Image src={Logo} alt="Meuble Logo" className="max-w-[200px] size-10 sm:max-w-[300px] " />
          <h2 className=" sm:text-3xl font-medium text-gray-800">Shop</h2>
          <div className="flex items-center space-x-2  text-gray-600 text-[13px] ">
            <p className="font-medium">Home</p>
            <ChevronRightIcon size={18} />
            <p className="font-light">Shop</p>
          </div>
        </div>
      </div>
        {/* fetch product */}



        

        <Shop/>


        
        


        


        


      </nav>
  
      
    <div className="w-full bg-[#FAF3EA] mt-[30px] py-12">
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
}