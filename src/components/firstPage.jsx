import React from "react";

const FirstPage = () => {
  return (
    <div>
      <div className="bg-[#be2c62] h-[100vh] w-full flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="flex flex-col justify-between items-start px-5 md:px-10 py-5 md:py-10 md:w-1/2">
          <div>
            <h1 className="text-white font-ibmFlex text-4xl md:text-6xl lg:text-8xl font-medium">
              Enjoy Cooking
            </h1>
            <h4 className="mt-3 md:mt-5 w-full md:w-3/4 text-white font-ibmFlex font-light text-lg md:text-2xl">
              Delicious and detailed restaurant recipes on your device
            </h4>
          </div>
          <div className="w-full">
            <button className="bg-white rounded-3xl p-4 text-red-800 font-semibold w-3/4 ">
              Get Started
            </button>
          </div>
        </div>
        {/* Right Section */}
        <div className="flex justify-center items-center md:items-end md:justify-around w-full md:w-1/2 mt-5 md:mt-0">
          <img
            className="rounded-md w-3/4 md:w-full lg:w-3/4"
            src="/images/Cookinggirl.png"
            alt="Cooking illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
