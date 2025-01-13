import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Card = ({ img, heading, paragraph, isCard }) => {
  return (
    <div
      className={`md:flex  justify-between w-full items-center py-8 backdrop-blur-xl animate-fadeIn ${
        isCard ? "bg-gray-500" : "bg-pink-200"
      }  bg-opacity-10 shadow-xl border border-gray-500 rounded-lg`}
    >
      <div className="px-12 w-full">
        <h4
          className={`${
            isCard ? "md:text-2xl " : "md:text-4xl text-2xl"
          } font-semibold`}
        >
          {heading}
        </h4>
        <p className={`py-4 ${isCard ? "text-sm" : "text-base"}  font-light`}>
          {paragraph}
        </p>
        <button
          className={`px-4 text-gray-50 flex gap-2.5 items-center py-2 ${
            isCard ? "bg-transparent border text-sm xl:text-base" : "bg-primary"
          } rounded-md text-sm md:text-xl font-semibold hover:scale-105 transition-all duration-300`}
        >
          Visit Fowzi Studios{" "}
          <span className="text-sm mt-0.5 font-normal">
            <FaArrowRightLong />
          </span>
        </button>
      </div>
      <div className="w-full rounded-md flex justify-center ">
        <img
          src={img}
          alt="img"
          className={`${isCard ? "md:me-6" : ""} md:py-0 pt-8`}
        />
      </div>
    </div>
  );
};

export default Card;
