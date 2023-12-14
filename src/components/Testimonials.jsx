/* eslint-disable react/no-unescaped-entities */
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";

const Testimonials = () => {
  return (
    <main className="container mx-auto px-3 lg:flex justify-between pt-20">
      <div className="lg:w-1/3 flex flex-col">
        <p className="text-[#0c4f37] uppercase md:text-xl text-lg">
          Testimonials
        </p>
        <h1 className="lg:text-4xl text-3xl font-medium capitalize py-3">
          Look What Our Customers Say!
        </h1>
        <p className="text-[#a5a5a5] text-sm">
          Fulce venenatis tellus a felis scelerisque, non pulvinar est
          pellentesque.
        </p>

        <div className="lg:flex hidden gap-x-12 mt-16">
          <button className="w-12 h-12 rounded-full border border-[#0ca39a] flex justify-center items-center text-2xl text-[#0ca39a] focus:bg-[#0ca39a] focus:text-white hover:bg-[#0ca39a] hover:text-white">
            <IoArrowBack />
          </button>
          <button className="w-12 h-12 rounded-full border border-[#0ca39a] flex justify-center items-center text-2xl text-[#0ca39a] focus:bg-[#0ca39a] focus:text-white hover:bg-[#0ca39a] hover:text-white">
            <IoArrowForward />
          </button>
        </div>
      </div>
      <div className="relative rounded-2xl shadow-2xl lg:w-2/5 lg:p-16 p-6 lg:mt-0 mt-8">
        <FaQuoteLeft className="text-[#ffe999] text-3xl" />
        <p className="font-medium pt-2 pb-8">
          I highly recommend Jodi J. Appleby. She was attentive to our needs and
          worked tirelessly to find us the perfect home. We couldn't be happier
          with our new place!
        </p>
        <div className="border-t border-[#d4d4d4] flex items-center py-4">
          <img
            src="/assets/image_6.jpg"
            alt=""
            className="rounded-full h-12 w-12 object-cover"
          />
          <span className="lg:flex items-center justify-between w-full gap-x-4 font-medium pl-3">
            <p>Barbara D. Smith</p>
            <div>
              {[...Array(5)].map((_, index) => (
                <button
                  key={index}
                  className="cursor-auto text-[#ffe999] last:text-[#d4d4d4]"
                >
                  <FaStar className="" />
                </button>
              ))}
            </div>
          </span>
        </div>
        <button className="bg-gradient-to-r from-[#8bd3ce] to-[#eff9f9] rounded-full h-16 w-16 cursor-auto absolute -top-6 -left-6"></button>
      </div>
    </main>
  );
};

export default Testimonials;
