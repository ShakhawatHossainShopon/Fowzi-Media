import image1 from "@/assets/banner-4.png";
import image2 from "@/assets/banner-5.png";
import { FaArrowRightLong } from "react-icons/fa6";
const Banner = () => {
  return (
    <div className="w-full md:flex gap-8 py-24 md:py-52 justify-center items-center space-y-6 md:space-y-0">
      <div className="flex  gap-8 w-full justify-center ">
        <div>
          <img className="w-32 md:w-full" src={image1} alt="img" />
        </div>
        <div>
          <div>
            <img className="w-32  md:w-full" src={image2} alt="img" />
          </div>
          <button className="mt-8 px-4 text-gray-200 flex gap-2.5 items-center py-2 bg-transparent border border-gray-400 rounded-md md:text-xl text-sm font-normal hover:scale-105 transition-all duration-300 ">
            Discover Fowzi Digital{" "}
            <span className="text-sm mt-0.5 font-normal">
              <FaArrowRightLong />
            </span>
          </button>
        </div>
      </div>
      <div>
        <button className="px-6 py-1 rounded-xl animate-pulse font-normal bg-[#FFFFFF36]">
          About us
        </button>{" "}
        <h3 className="md:text-5xl text-2xl font-semibold pt-7">
          About <span className="text-[#FF0101]">Fowzi Media</span>{" "}
        </h3>
        <p className="font-light text-gray-400 py-6">
          We bring together digital, print, and studio services to help your{" "}
          <br />
          business grow with an integrated approach. Our experienced team <br />
          delivers high-quality results tailored to your brand’s needs. <br />{" "}
          Visual: A single, clean icon or graphic that represents collaboration,
          such as three intersecting lines or shapes, symbolizing the three
          sub-brands.
        </p>
      </div>
    </div>
  );
};

export default Banner;
