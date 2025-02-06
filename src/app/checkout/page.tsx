
"use client";

import { useEffect, useState } from "react";
import { getCartItem } from "../addaction/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Product } from "../../../types/product";
import Trophy from "../../../public/trophy 1.png"
import Guarantee from "../../../public/guarantee.png"
import Shipping from "../../../public/guarantee.png"
import Support from "../../../public/customer-support.png"



const Checkout =  () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const router = useRouter();
  
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    address: false,
    city: false,
    zipCode: false,
    phone: false,
    email: false,
  });

  useEffect(() => {
    setCartItems(getCartItem());
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const total = Math.max(subtotal - discount, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      address: !formValues.address,
      city: !formValues.city,
      zipCode: !formValues.zipCode,
      phone: !formValues.phone,
      email: !formValues.email,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handlePlaceOrder = () => {
    if (validateForm()) {
      Swal.fire({
        title: "Order Confirmed!",
        text: "Your order has been placed successfully.",
        icon: "success",
        confirmButtonColor: "#3085d6",
      }).then(() => {
        localStorage.removeItem("appliedDiscount");
        localStorage.removeItem("cart");
        router.push(`/payMethod?amount=${total}`);
      });
    } else {
      Swal.fire("Error", "Please fill in all required fields.", "error");
    }
  };


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Billing details</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" value={formValues.firstName} onChange={handleInputChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" value={formValues.lastName} onChange={handleInputChange} />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Street address</Label>
            <Input id="address" value={formValues.address} onChange={handleInputChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="city">Town / City</Label>
            <Input id="city" value={formValues.city} onChange={handleInputChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="zipCode">ZIP code</Label>
            <Input id="zipCode" value={formValues.zipCode} onChange={handleInputChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" value={formValues.phone} onChange={handleInputChange} type="tel" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input id="email" value={formValues.email} onChange={handleInputChange} type="email" />
          </div>
        </div>
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
              {cartItems.map((item) => (
                <div key={item._id} className="flex justify-between">
                  <span>{item.title} × {item.quantity}</span>
                  <span>Rs. {item.price * item.quantity}</span>
                </div>
              ))}
              <div className="flex justify-between border-t pt-4 font-semibold">
                <span>Total</span>
                <span className="text-[#B88E2F]">Rs. {total.toLocaleString()}</span>
              </div>
            </CardContent>
          </Card>
          <RadioGroup defaultValue="bank">
            
            <div className="flex items-start space-x-3">
              <RadioGroupItem value="bank" id="bank" />
              <Label htmlFor="bank">Direct Bank Transfer</Label>
              <br /> <br />
              <p className="text-sm text-muted-foreground">
                Make your payment directly into our bank account. Please use your Order ID as the payment reference.
                Your order will not be shipped until the funds have cleared in our account.</p>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="cod" id="cod" />
              <Label htmlFor="cod">Cash On Delivery</Label>
              <br /><br />
              <p className="text-sm text-muted-foreground">
              Your personal data will be used to support your experience throughout this website, to manage access to
              your account, and for other purposes described in our{" "}
              
              </p>
            </div>
          </RadioGroup>
          <Button className="text-white w-full px-4 py-2 text-white bg-[#B5873A] hover:bg-[#96702F] rounded-md transition-colors duration-200 font-bold ml-[10px] mt-4 py-2 px-4 rounded-lg shadow-md hover:scale-110 transition-transform duration-300 easa-in-out" onClick={handlePlaceOrder}>Place Order</Button>
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
            <p className="text-xl font-semibold">24/7 Support</p>
            <p className="text-gray-600 text-sm">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>



    </div>
  );
};

export default Checkout;

