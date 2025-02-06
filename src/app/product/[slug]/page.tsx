
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Star, Plus, Minus, Facebook, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "../../../../types/product";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Swal from "sweetalert2";
import { addToCart } from "@/app/addaction/actions";
import { product } from "@/sanity/schemaTypes/product";
import Link from "next/link";
import FakeChat from "@/app/components/chat";

async function getProduct(slug: string): Promise<Product | null> {
  return client.fetch(
    groq`*[_type == 'product' && slug.current == $slug][0]{
      _id,
      title,
      productImage,
      price,
      description,
      discountPercentage,
      isNew
    }`,
    { slug }
  );
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const [productDet, setProductDet] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("L");
  const [selectedColor, setSelectedColor] = useState("blue");
  const [isOpen, setIsOpen] = useState(false); 

  useEffect(() => {
    async function fetchProduct() {
      const data = await getProduct(slug);
      setProductDet(data);
    }
    fetchProduct();
  }, [slug]);

  if (!productDet) {
    return <div>Loading...</div>;
  }


   const handleAddToCart = (e: React.MouseEvent,product:Product) => {
      Swal.fire({
          position: "center",
          icon: "success",
          title: `${product.title} added to cart`,
          showConfirmButton: false,
          timer: 1000
      })
  
      addToCart(product);

    }

    const renderStars = (rating: number) => {
      const totalStars = 5;
      return Array.from({ length: totalStars }, (_, i) => (
        <span key={i} className={i < rating ? "text-yellow-500" : "text-gray-300"}>★</span>
      ));
    };
    
    

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex gap-4">
          {productDet.productImage && (
            <Image
              src={urlFor(productDet.productImage).url()}
              alt={productDet.title}
              width={500}
              height={500}
              className="w-full object-cover rounded-md"
            />
          )}
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{productDet.title}</h1>
          <p className="text-2xl">Rs. {productDet.price}</p>
          <div className="flex  mt-2">{renderStars(4)}</div>
      
          

          <p className="text-muted-foreground">{productDet.description}</p>

          {/* Size Selection */}
          <div className="space-y-2">
            <Label>Size</Label>
            <RadioGroup defaultValue={selectedSize} onValueChange={setSelectedSize} className="flex gap-4">
              {["L", "XL", "XS"].map((size) => (
                <div key={size} className="flex items-center space-x-2">
                  <RadioGroupItem value={size} id={`size-${size}`} />
                  <Label htmlFor={`size-${size}`}>{size}</Label>
                </div>
              ))}
            </RadioGroup>
           
          </div>

          {/* Color Selection */}
          <div className="space-y-2">
            <Label>Color</Label>
            <div className="flex gap-2">
              {[
                { name: "blue", class: "bg-blue-500" },
                { name: "black", class: "bg-black" },
                { name: "gold", class: "bg-yellow-600" },
              ].map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`w-6 h-6 rounded-full ${color.class} ${
                    selectedColor === color.name ? "ring-2 ring-offset-2 ring-primary" : ""
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Quantity and Actions */}
          <div className="flex items-center gap-4">
            <div className="flex items-center border rounded-md">
              <Button variant="ghost" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                <Minus className="w-4 h-4" />
              </Button>
              <span className="w-12 text-center">{quantity}</span>
              <Button variant="ghost" size="icon" onClick={() => setQuantity(quantity + 1)}>
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            <button 
                        className=" text-white w-[237px] px-4 py-2 text-white bg-[#B5873A] hover:bg-[#96702F] rounded-md transition-colors duration-200 font-bold ml-[10px] mt-4 py-2 px-4 rounded-lg shadow-md hover:scale-110 transition-transform duration-300 easa-in-out"
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleAddToCart(e, productDet)}
                      > 
                        Add to Cart
                      </button>
            <Button variant="outline">+ Compare</Button>
          </div>

          {/* Chat */}
          <div className="pt-6">
  <Button
    className="w-full text-white bg-blue-600 hover:bg-blue-700"
    onClick={() => setIsOpen(!isOpen)} 
  >
    Chat with Us
  </Button>
  {isOpen && <FakeChat />} 
</div>

          {/* Store Link */}
          <div className="pt-4">
            <Link href="/ShopProduct" passHref>
              <Button variant="outline" className="w-full">
                Visit Store
              </Button>
            </Link>
          </div>

          {/* Product Meta */}
          <div className="space-y-2 pt-6 border-t">
            <div className="flex gap-2">
              <span className="text-muted-foreground">SKU:</span>
              <span>SS001</span>
            </div>
            <div className="flex gap-2">
              <span className="text-muted-foreground">Category:</span>
              <span>Sofas</span>
            </div>
            <div className="flex gap-2">
              <span className="text-muted-foreground">Tags:</span>
              <span>Sofa, Chair, Home, Shop</span>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-muted-foreground">Share:</span>
              <Button variant="ghost" size="icon">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>









    </div>
  );
}

