

"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRightIcon, Trash2 } from "lucide-react";
import { Product } from "../../../types/product";
import { useEffect, useState } from "react";
import { getCartItem, removeFromCart, updateCartQuantity } from "../addaction/actions";
import Swal from "sweetalert2";
import { urlFor } from "@/sanity/lib/image";
import { useRouter } from "next/navigation";
import Trophy from "../../../public/trophy 1.png";
import Guarantee from "../../../public/guarantee.png";
import Shipping from "../../../public/guarantee.png";
import Support from "../../../public/customer-support.png";
import Logo from '../../../public/Meubel House_Logos-05.png';
import Rectangle from '../../../public/Rectangle.png';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    const items = getCartItem();
    setCartItems(items);
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to remove this item from the cart",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, remove it",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#3085d6",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        const updatedCartItems = getCartItem();
        setCartItems(updatedCartItems);
        Swal.fire("Removed", "Item has been removed from the cart", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity < 1) return;
    updateCartQuantity(id, quantity);
    setCartItems(getCartItem());
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.quantity * (item.price || 0)), 0);
  };

  const router = useRouter();
  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to checkout",
      text: "Do you want to proceed to checkout?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Proceeded", "You have successfully proceeded to checkout", "success");
        router.push('/checkout');
        setCartItems([]);
      }
    });
  };


  return (
    <div>
      <div className="relative">
        <Image src={Rectangle} alt="Background Image" height={316} className="w-full object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center ">
          <Image src={Logo} alt="Meuble Logo" className="max-w-[200px] size-10 sm:max-w-[300px] " />
          <h2 className=" sm:text-3xl font-medium text-gray-800">Cart</h2>
          <div className="flex items-center space-x-2  text-gray-600 text-[13px] ">
            <p className="font-medium">Home</p>
            <ChevronRightIcon size={18} />
            <p className="font-light">Cart</p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto p-4">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <div className="mb-4 grid grid-cols-4 bg-[#fdf6f0] p-3">
              <div className="text-sm font-medium">Product</div>
              <div className="text-sm font-medium">Price</div>
              <div className="text-sm font-medium">Quantity</div>
              <div className="text-sm font-medium">Subtotal</div>
            </div>

            {cartItems.length === 0 ? (
              <p className="text-center text-gray-500">Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div key={item._id.toString()} className="grid grid-cols-4 items-center gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-20 w-20 overflow-hidden rounded bg-[#fdf6f0] p-2">
                      {item.productImage && (
                        <Image
                          src={urlFor(item.productImage).url()}
                          alt={item.title}
                          width={80}
                          height={80}
                          className="h-full w-full object-contain"
                        />
                      )}
                    </div>
                    <span className="text-sm text-gray-600">{item.title}</span>
                  </div>
                  <div className="text-sm">Rs. {(item.price || 0).toLocaleString()}</div>
                  <div>
                    <Input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item._id.toString(), parseInt(e.target.value))}
                      className="w-16 text-center"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm">Rs. {((item.price || 0) * item.quantity).toLocaleString()}</span>
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleRemove(item._id.toString())}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="md:col-span-4">
            <div className="rounded bg-[#fdf6f0] p-6">
              <h2 className="mb-6 text-xl font-bold">Cart Totals</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-[#B88E2F]">Rs. {calculateTotal().toLocaleString()}</span>
                </div>
                <Button className="mt-4 w-full rounded-none border border-black bg-transparent text-black hover:bg-[#96702F] hover:text-white" onClick={handleProceed}>Check Out</Button>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="w-full bg-[#FAF3EA] mt-[80px] py-12">
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
            <p className="text-xl font-semibold">24/7 Supportt</p>
            <p className="text-gray-600 text-sm">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
};

export default ShoppingCart;
