import img1 from "@/assets/card-logo-1.png";
import img2 from "@/assets/card-logo-2.png";
import img3 from "@/assets/card-logo-2.png";

const Service = () => {
  return (
    <div>
      <div className="text-center pb-20 pt-10">
        <button className="px-6 py-1 rounded-xl animate-pulse font-normal bg-[#FFFFFF36]">
          Services
        </button>{" "}
        <h2 className="text-6xl py-6">
          Why <span className="text-[#FF0101]">Fowzi Media</span>
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-12 px-24 ">
        <div
          className={`w-full backdrop-blur-2xl animate-fadeIn px-10 py-10 bg-gray-500  bg-opacity-10 shadow-xl border border-gray-500 rounded-lg`}
        >
          <img src={img1} alt="" />
          <h3 className="py-3 text-2xl font-semibold">
            Comprehensive Services
          </h3>
          <p className="text-gray-400">
            Everything you need under one <br /> roof—creative, digital, and
            print <br /> solutions.
          </p>
        </div>
        <div
          className={`w-full backdrop-blur-2xl animate-fadeIn px-10 py-10 bg-gray-500  bg-opacity-10 shadow-xl border border-gray-500 rounded-lg`}
        >
          <img src={img1} alt="" />
          <h3 className="py-3 text-2xl font-semibold">Tailored Approach</h3>
          <p className="text-gray-400">
            We adapt to your unique business <br /> needs to provide results
            that <br /> matter.
          </p>
        </div>
        <div
          className={`w-full backdrop-blur-2xl animate-fadeIn px-10 py-10 bg-gray-600  bg-opacity-20 shadow-xl border border-gray-500 rounded-lg`}
        >
          <img src={img1} alt="" />
          <h3 className="py-3 text-2xl font-semibold">Experienced Team</h3>
          <p className="text-gray-400">
            Our team of experts is committed to <br /> delivering high-quality,
            impactful <br /> solutions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
