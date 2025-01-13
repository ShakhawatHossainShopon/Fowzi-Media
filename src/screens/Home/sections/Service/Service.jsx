import img1 from "@/assets/card-logo-1.png";
import img2 from "@/assets/card-logo-2.png";
import img3 from "@/assets/card-logo-3.png";

const Service = () => {
  return (
    <div>
      <div className="text-center pb-10 md:pb-20 md:pt-10">
        <button className="px-6 py-1 rounded-xl animate-pulse font-normal bg-[#FFFFFF36]">
          Services
        </button>{" "}
        <h2 className="md:text-6xl text-2xl py-6">
          Why <span className="text-[#FF0101]">Fowzi Media</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:gap-12 md:px-24 space-y-6 md:space-y-0">
        <div
          className={`w-full backdrop-blur-2xl animate-fadeIn px-10 py-10 bg-gray-500  bg-opacity-10 shadow-xl border border-gray-500 rounded-lg`}
        >
          <img src={img1} alt="" />
          <h3 className="py-3 text-lg md:text-2xl font-semibold">
            Comprehensive Services
          </h3>
          <p className="text-gray-400 md:text-base text-sm">
            Everything you need under one <br /> roof—creative, digital, and
            print <br /> solutions.
          </p>
        </div>
        <div
          className={`w-full backdrop-blur-2xl animate-fadeIn px-10 py-10 bg-gray-500  bg-opacity-10 shadow-xl border border-gray-500 rounded-lg`}
        >
          <img src={img2} alt="" />
          <h3 className="py-3 font-semibold text-lg md:text-2xl">
            Tailored Approach
          </h3>
          <p className="text-gray-400 md:text-base text-sm">
            We adapt to your unique business <br /> needs to provide results
            that <br /> matter.
          </p>
        </div>
        <div
          className={`w-full backdrop-blur-2xl animate-fadeIn px-10 py-10 bg-gray-600  bg-opacity-20 shadow-xl border border-gray-500 rounded-lg`}
        >
          <img src={img3} alt="" />
          <h3 className="py-3 font-semibold text-lg md:text-2xl">
            Experienced Team
          </h3>
          <p className="text-gray-400 md:text-base text-sm">
            Our team of experts is committed to <br /> delivering high-quality,
            impactful <br /> solutions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
