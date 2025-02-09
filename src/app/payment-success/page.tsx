
"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";

interface IParams {
    searchParams: {
        amount: number;
    };
}

const PaymentSuccess = ({ searchParams }: IParams) => {
    const [showConfetti, setShowConfetti] = useState(true);

    useEffect(() => {
        setTimeout(() => setShowConfetti(false), 5000); // Stop confetti after 5 seconds
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-green-300 p-6">
            {showConfetti && <Confetti />}
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white shadow-lg rounded-xl p-8 text-center max-w-md w-full">
                <CheckCircle className="text-green-600 w-16 h-16 mx-auto mb-4 animate-bounce" />
                <h1 className="text-3xl font-bold text-gray-800">Payment Successful!</h1>
                <p className="text-gray-600 mt-2">Thank you for your purchase.</p>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-4 bg-green-500 text-white px-6 py-3 rounded-lg text-lg shadow-md">
                    Amount Paid: $ {searchParams.amount}
                </motion.div>
                <a 
                    href="/shop" 
                    className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
                    Continue Shopping
                </a>
            </motion.div>
        </div>
    );
};

export default PaymentSuccess;
