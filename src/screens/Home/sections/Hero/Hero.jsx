import { FaArrowRightLong } from "react-icons/fa6";
import jupiter from "@/assets/jupiter.png";
const Hero = () => {
  return (
    <div className="text-center h-[520px] sm:h-[720px] md:min-h-screen flex justify-center items-center relative">
      <div>
        <h1 className="xl:text-[86px] text-3xl sm:text-4xl md:text-[64px] md:leading-[74px] xl:leading-[110px] font-semibold animate-fadeIn">
          Creative Solutions for <br /> Modern Brands
        </h1>
        <p className="py-3 md:py-6  md:text-2xl font-light opacity-80 animate-fadeIn animate-pulse">
          Direct and minimal explanation.
        </p>
        <div className="w-full flex justify-center animate-fadeIn2">
          <div className="md:flex space-y-7 md:space-y-0 gap-6 py-3 md:py-8">
            <button className="px-4 text-gray-50 flex gap-2.5 items-center py-2 bg-primary rounded-md text-xl font-semibold hover:scale-105 transition-all duration-300">
              Visit Fowzi Studios{" "}
              <span className="text-sm mt-0.5 font-normal">
                <FaArrowRightLong />
              </span>
            </button>
            <button className="px-4 text-gray-200 flex gap-2.5 items-center py-2 bg-transparent border border-gray-400 rounded-md text-xl font-normal hover:scale-105 transition-all duration-300 ">
              Discover Fowzi Digital{" "}
              <span className="text-sm mt-0.5 font-normal">
                <FaArrowRightLong />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute hidden xl:block left-0 xl:left-10 top-[55%] transition duration-500 animate-pulse">
        <img src={jupiter} className="w-full" alt="" />
      </div>
    </div>
  );
};

export default Hero;
