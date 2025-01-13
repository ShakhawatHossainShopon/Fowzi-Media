import img1 from "@/assets/form.png";
const Contact = () => {
  return (
    <div className="md:flex md:gap-24 justify-between md:px-36 py-24 md:py-40 items-center">
      <div className=" w-full">
        <div>
          <button className="px-6 py-1 rounded-xl animate-pulse font-normal bg-[#FFFFFF36]">
            About us
          </button>{" "}
          <h3 className="md:text-5xl text-2xl font-semibold pt-8">
            Let's Get <span className="text-[#FF0101]">Started</span>{" "}
          </h3>
          <p className="text-gray-300 py-6 pb-8">
            We’d love to discuss how we can help your business. Contact us today
          </p>
        </div>
        <section className="bg-transparent w-full">
          <div className="w-full">
            <form action="#" className="space-y-8 w-full">
              <div>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-[#1E1E1E80] border border-gray-700 text-gray-200 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="Name"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-[#1E1E1E80] border border-gray-700 text-gray-200 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-[#1E1E1E80] border border-gray-700 text-gray-200 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="Phone"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-gray-200 bg-[#1E1E1E80] rounded-lg border border-gray-700 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="select service interest"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <textarea
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-[#1E1E1E80] rounded-lg shadow-sm border border-gray-700 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Message"
                ></textarea>
              </div>
              <button className="px-4 flex gap-2.5 items-center py-1 bg-primary rounded-md text-sm md:text-lg font-normal  ">
                Submit
              </button>
            </form>
          </div>
        </section>
      </div>
      <div className="hidden justify-center w-full md:flex">
        <img src={img1} alt="" />
      </div>
    </div>
  );
};

export default Contact;
