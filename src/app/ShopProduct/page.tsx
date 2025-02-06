


"use client";

import Image from "next/image";
import React, { useEffect, useState } from 'react';
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "../../../types/product";
import { allProducts } from "@/sanity/lib/queries";
import Link from 'next/link';


const Shop = () => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchedProduct() {
      const fetchedProduct: Product[] = await client.fetch(allProducts);
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {product.map((product) => (
          <Link href={`/product/${product.slug.current}`} key={product._id}>
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
                        <p className="text-gray-500 text-center mt-2">${product.price}</p>
                        <div className="flex justify-center mt-2">{renderStars(4)}</div>
                        
                        {/* Display comments */}
                        <div className="mt-2">
                            {product.comments?.length > 0 ? (
                              <div>
                                <h3 className="text-sm font-semibold">Customer Reviews:</h3>
                                <ul className="text-sm text-gray-600">
                                  {product.comments.slice(0, 2).map((comment: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | Iterable<React.ReactNode> | null | undefined, index: React.Key | null | undefined) => (
                                    <li key={index} className="mt-1">{comment}</li>
                                  ))}
                                </ul>
                              </div>
                            ) : null}
                        </div>
                       
                          <Link href={`/product/${product.slug.current}`}>
                          <button className="w-full px-4 py-2 text-white bg-[#B5873A] hover:bg-[#96702F] rounded-md transition-transform duration-300 ease-in-out mt-4 shadow-md hover:scale-110">
                              View Product
                            </button>
                          </Link>

                      </div>
                    </Link> 
                  ))}
                </div>
              </div>
            );
          };
          
          export default Shop;
        
