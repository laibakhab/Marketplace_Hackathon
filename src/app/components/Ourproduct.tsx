

"use client";

import Image from "next/image";
import React, { useEffect, useState } from 'react';
import { client } from "@/sanity/lib/client";

import { urlFor } from "@/sanity/lib/image";
import { Product } from "../../../types/products";
import { eightProducts } from "@/sanity/lib/queries";
import Link from "next/link";

const Shop = () => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchedProduct() {
      const fetchedProduct: Product[] = await client.fetch(eightProducts);
      setProduct(fetchedProduct);
    }
    fetchedProduct();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className=" lg:text-[60px] flex items-center justify-center  sm:text-[40px] font-bold ">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {product.map((product) => ( 
          <div key={product._id} className="border rounded-lg shadow-md p-4"> 
            {/* <Link href={`/product/${product.id.current}`}> */}
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
            {/* </Link> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;


