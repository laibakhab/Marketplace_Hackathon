
// 'use client';

// import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import Link from "next/link";
// import { useSearchParams } from "next/navigation";
// import { useState } from "react";

// const CheckoutPage = () => {
//   const searchParams = useSearchParams();
//   const amount = searchParams.get("amount") || "0"; // 🟢 Get amount from URL

//   const stripe = useStripe();
//   const elements = useElements();
//   const [loading, setLoading] = useState(false);
//   const [clientSecret, setClientSecret] = useState('');

//   const handleSubmit = async (event: { preventDefault: () => void; }) => {
//     event.preventDefault();
//     setLoading(true);

//     if (!stripe || !elements) {
//       console.error("Stripe ya Elements load nahi hua.");
//       setLoading(false);
//       return;
//     }

//     const { error } = await stripe.confirmPayment({
//       elements,
//       clientSecret, 
//       confirmParams: {
//         return_url: `http://localhost:3000/payment-success?amount=${amount}`,
//       },
//     });

//     if (error) {
//       console.error("Payment Failed:", error.message);
//     } else {
//       console.log("Payment Successful!");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen  px-4">
//       <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Payment Method</h2>
        
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="border rounded-lg p-4 bg-gray-50">
//             <PaymentElement />
//           </div>
// <Link href={"/payment-success"}>
//           <button 
//             type="submit" 
//             disabled={!stripe || loading} 
//             className="w-full bg-black text-white rounded-md py-2 font-semibold hover:bg-gray-900 transition focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
//           >
//             {loading ? "Processing..." : `Pay $${amount}`}
//           </button>
          
//           </Link>
//         </form>

//         <div className="text-center mt-4">
//           <Link href={'/'} className="text-gray-600 hover:underline">Cancel and go back</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;
'use client';

import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import { useState, useEffect } from "react";
import Link from "next/link";

const CheckoutPage = ({ amount }: { amount: number }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Fetch clientSecret from the backend
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    })
      .then(res => res.json())
      .then(data => setClientSecret(data.clientSecret))
      .catch(err => console.error("Error fetching clientSecret:", err));
  }, [amount]);

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements || !clientSecret) {
      console.error("Stripe, Elements, ya clientSecret load nahi hua.");
      setLoading(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `http://localhost:3000/payment-success?amount=${amount}`,
      },
    });

    if (error) {
      console.error("Payment Failed:", error.message);
    } else {
      console.log("Payment Successful!");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <Link href={'/payment-succsess'}>
      <button 
        type="submit" 
        disabled={!stripe || loading} 
        className="w-full bg-black rounded-md hover:bg-[#111111] transition focus:outline-none focus:ring-2 focus:ring-[#111111] focus:ring-offset-2 mt-[40px] text-white py-2"
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
      </Link>
    </form>
  );
};

export default CheckoutPage;