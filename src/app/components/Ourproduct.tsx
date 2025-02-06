

"use client";

import Image from "next/image";
import React, { useEffect, useState } from 'react';
import { client } from "@/sanity/lib/client";

import { urlFor } from "@/sanity/lib/image";
import { Product } from "../../../types/product";
import { eightProducts } from "@/sanity/lib/queries";
import Link from "next/link";
import { addToCart } from "../addaction/actions";
import Swal from "sweetalert2";

const Shop = () => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchedProduct() {
      const fetchedProduct: Product[] = await client.fetch(eightProducts);
      setProduct(fetchedProduct);
    }
    fetchedProduct();
  }, []);
  
    const renderStars = (rating: number) => {
      const totalStars = 5;
      return Array.from({ length: totalStars }, (_, i) => (
        <span key={i} className={i < rating ? "text-yellow-500" : "text-gray-300"}>★</span>
      ));
    };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className=" lg:text-[60px] flex items-center justify-center  mb-10 sm:text-[40px] font-bold ">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {product.map((product) => ( 
  <Link key={product.slug.current} href={`/product/${product.slug.current}`}>
    <div className="border rounded-lg shadow-md p-4"> 

            {product.productImage && (
              <Image
                src={urlFor(product.productImage).url()}
                alt="image"
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded-md"
              />
            )}
            <h2 className="text-lg text-center font-semibold mt-4">{product.title}</h2> 
            <p className="text-gray-500 text-center mt-2">
              {product.price ? `$${product.price}` : "Price not available"}
            </p>
            
            <div className="flex justify-center mt-2">{renderStars(4)}</div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shop;


