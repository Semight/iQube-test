"use client";
import React from "react";
import { Link } from "react-router-dom";

export const Payment = () => {
  return (
    <>
    <div className="w-full pb-8 bg-white rounded-xl shadow-lg">
        <div className="px-14 rounded-tl-xl rounded-tr-lg flex justify-between py-2 bg-blue-700 text-white">
            <h2 className="text-base font-medium">Item Name</h2>
            <h2 className="text-base font-medium"># Price</h2>
        </div>

        <div className="px-14 flex justify-between my-8 text-blue-950">
            <h2 className="text-base font-medium">Data Science and Usability</h2>
            <h2 className="text-base font-semibold">50,00.00</h2>
        </div>

        <div className="px-14 flex justify-between my-8 text-blue-950">
            <h2 className="text-base font-medium">Shipping</h2>
            <h2 className="text-base font-semibold text-black">0.00</h2>
        </div>

        <div className="px-8 mb-8">
            <hr />
        </div>

        <div className="mx-10 mb-8 border-solid border-2 border-blue-600 rounded-sm">
            <div className="pl-4 pr-8 py-3 flex justify-between text-blue-950">
            <h2 className="text-base font-medium">Total</h2>
            <h2 className="text-base font-semibold">50,00.00</h2>
            </div>
        </div>

        </div>


        <div className="flex items-center md:gap-20 gap-6 my-10">
                <div>
                    <Link to="../Done">
                  <button className="text-white bg-[#f2a44b] text-base font-medium rounded-lg h-10 w-32 md:w-52">Pay</button>
                  </Link>
                </div>
                <div>
                  <h2 className="text-lg font-semibold cursor-pointer text-[#4e598c]">Cancel Payment</h2>
                </div>
              </div>
    
    </>
  );
};
