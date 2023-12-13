"use client";
import { Link } from "react-router-dom";
import Icon from "../../assets/green_icon.png"


const Done = () => {
  return (
      <div className="md:mt-20 md:ml-64 md:mr-40 sm:mt-10 ml-4 mr-4">
        <div className="bg-white py-20 rounded-xl shadow-lg">
            <div className="flex justify-center items-center mb-4">
            <div className="flex justify-center bg-white shadow-lg rounded-full w-20 h-20 items-center pb-3">
                <img src={Icon} alt="Mark Icon" className="w-10 h-10" />
            </div>
            </div>
            <div className="flex flex-col px-32 gap-8">
                <h1 className="text-4xl text-[#4e598c] font-bold">Purchased Completed</h1>
                <p className="text-base font-medium leading-5">Please check your email for details concerning this transaction</p>
                <Link className="text-[#f2ac4b] text-base font-semibold underline" to="../Home">Return Home</Link>
            </div>
        </div>
      </div>
  );
};

export default Done;
