
"use client";

import Trophy from "../../../public/trophy 1.png"
import Guarantee from "../../../public/guarantee.png"
import Shipping from "../../../public/guarantee.png"
import Suport from "../../../public/customer-support.png"
import React, { useEffect, useState } from 'react';
import { Award, ShieldCheck, ChevronRightIcon, Truck, Headphones } from 'lucide-react';

import Logo from '../../../public/Meubel-l.png';
import Rectangle from '../../../public/Rectangle.png';
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "../../../types/products";
import { allProducts } from "@/sanity/lib/queries";
import Link from "next/link";


export default function FeaturesBanner() {

  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchedProduct() {
      const fetchedProduct: Product[] = await client.fetch(allProducts);
      setProduct(fetchedProduct);
    }
    fetchedProduct();
  }, []);

  const features = [
    { icon: Award, title: "High Quality", description: "Crafted from top materials" },
    { icon: ShieldCheck, title: "Warranty Protection", description: "Over 2 years" },
    { icon: Truck, title: "Free Shipping", description: "Order over $150" },
    { icon: Headphones, title: "24 / 7 Support", description: "Dedicated support" },
  ];

  const products = [
    { title: "Syltherine", dis: "Stylish cafe chair", Price: "25000.000", image: "/Cart7.png", alt: "Cafe Chair", href: "/category/cafechair" },
    { title: "Leviosa", dis: "Stylish cafe chair", Price: "25000.000", image: "/Leviosa.png", alt: "Luxury Sofa", href: "/category/sofaset" },
    // Add more product items as needed
  ];



  return (
    <div>
      <nav>
        <div>
          <Image src={Rectangle} alt="Image" height={316} className=" w-full" />
          <div className="absolute bottom-[60px] h-[443px]">
            <Image src={Logo} alt="Meuble-1" className="ml-[692px]" />
            <h2 className="w-[124px] h-[72px] ml-[660px] font-medium text-[48px] leading-[72px]">Shop</h2>
            <span className="flex items-center">
              <p className="w-[40px] h-[24px] top-[295px] ml-[660px] font-[500px] text-[16px] leading-6">Home</p>
              <ChevronRightIcon size={20} className="w-5 h-5 sm:cursor-default cursor-pointer sm:hover:text-gray-500 ml-2" />
              <p className="w-[41px] h-[24px] top-[295px] left-[740px] font-light text-[16px] leading-6">Contact</p>
            </span>
          </div>
        </div>
        {/* fetch product */}
        


          <div className="max-w-6xl mx-auto px-4 py-8">
                <h1 className=" text-[60px] flex items-center justify-center ">Our Products</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {product.map((product) => {
  if (!product.slug || !product.slug.current) {
    console.error("Missing slug for product:", product);
    return null;
  }
  return (
    <div key={product._id} className="border rounded-lg shadow-md p-4">
      <Link href={`/product/${product.slug.current}`}>
        {product.productImage && (
          <Image
            src={urlFor(product.productImage).url()}
            alt="image"
            width={200}
            height={200}
            className="w-full h-48 object-cover rounded-md"
          />
        )}
        <h2 className="text-lg font-semibold mt-4">{product.title}</h2>
        <p className="text-gray-500 mt-2">
          {product.price ? `$${product.price}` : "Price not available"}
        </p>
      </Link>
    </div>
  );
})}


                  {/* {product.map((product) => ( 
                    <div key={product._id} className="border rounded-lg shadow-md p-4"> 
                      <Link href={`/product/${product.slug.current}`}>
                      {product.productImage && (
                        <Image
                          src={urlFor(product.productImage).url()}
                          alt="image"
                          width={200}
                          height={200}
                          className="w-full h-48 object-cover rounded-md"
                        />
                      )}
                      <h2 className="text-lg font-semibold mt-4">{product.title}</h2> 
                      <p className="text-gray-500 mt-2">
                        {product.price ? `$${product.price}` : "Price not available"}
                      </p>
                      </Link>
                    </div>
                  ))} */}
                </div>
              </div>








      </nav>
      
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
}
