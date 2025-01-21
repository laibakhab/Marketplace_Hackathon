
"use client";

import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
import { Award, ShieldCheck, ChevronRightIcon, Truck, Headphones } from 'lucide-react';
// import Image from 'next/image';
import Logo from '../../../public/Meubel-l.png';
import Rectangle from '../../../public/Rectangle.png';
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "../../../types/products";
import { allProducts } from "@/sanity/lib/queries";

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
          <Image src={Rectangle} alt="Image" height={316} className="top-[100px] w-full" />
          <div className="absolute bottom-[150px] h-[443px]">
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
                  {product.map((product) => ( 
                    <div key={product._id} className="border rounded-lg shadow-md p-4"> 
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
                    </div>
                  ))}
                </div>
              </div>








      </nav>
      
      <section>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-center gap-4 p-6 h-[70px] px-[53px]">
                  <div className="flex-shrink-0">
                    {Icon && <Icon className="w-10 h-10 md:w-12 md:h-12 text-gray-800" strokeWidth={1.5} />}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
