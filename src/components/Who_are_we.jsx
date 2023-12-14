import { FaHome } from "react-icons/fa";

const Who_are_we = () => {
  return (
    <main className="container mx-auto lg:flex px-3 mb-12 lg:pt-0 pt-8">
      <div className="lg:w-2/5">
        <p className="text-[#0c4f37] md:text-xl text-lg font-medium">
          WHO ARE WE
        </p>
        <h1 className="lg:text-4xl text-2xl font-medium py-3">
          Assisting individuals in locating the appropriate real estate.
        </h1>

        <p className="lg:w-4/5 text-[#a5a5a5]">
          Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
          dignissim purus. Nulla convallis ipsum molestie nibh malesuada, ac
          malesuada leo volutpat.
        </p>

        <div className="lg:block hidden">
          <div className="bg-white shadow-2xl px-4 py-6 rounded-3xl flex items-center gap-x-3 lg:w-4/5 mt-6">
            <FaHome className="text-4xl text-[#0c4f37] w-1/3" />
            <span className="">
              <h1 className="text-[#0c4f37] text-lg font-medium">
                Donec porttitor euismod
              </h1>
              <p className="text-[#a5a5a5] w-4/5">
                Nullam a lacinia ipsum, nec dignissim purus. Nulla
              </p>
            </span>
          </div>

          <div className="bg-white shadow-2xl px-4 py-6 rounded-3xl flex items-center gap-x-3 lg:w-4/5 mt-6">
            <FaHome className="text-4xl text-[#0c4f37] w-1/3" />
            <span className="">
              <h1 className="text-[#0c4f37] text-lg font-medium">
                Donec porttitor euismod
              </h1>
              <p className="text-[#a5a5a5] w-4/5">
                Nullam a lacinia ipsum, nec dignissim purus. Nulla
              </p>
            </span>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 flex items-end gap-4 lg:mt-0 mt-12 lg:h-auto h-[30rem]">
        <img
          src="/assets/image_8.jpg"
          alt=""
          className="rounded-3xl w-1/2 h-4/5 shadow-md object-cover"
        />
        <div className="w-1/2 h-4/5 flex flex-col gap-4 relative -top-20">
          <img
            src="/assets/image_9.jpg"
            alt=""
            className="w-full h-3/5 rounded-3xl shadow-md object-cover"
          />
          <img
            src="/assets/image_10.jpg"
            alt=""
            className="w-full h-2/5 rounded-3xl shadow-md object-cover"
          />
          <button className="bg-gradient-to-r from-[#8bd3ce] to-[#eff9f9] rounded-full h-12 w-12 cursor-auto absolute -bottom-8 left-16"></button>
        </div>
      </div>
      <div className="lg:hidden block pt-4 py-16">
        <div className="bg-white shadow-2xl px-4 py-6 rounded-3xl flex items-center gap-x-3 lg:w-4/5 mt-6">
          <FaHome className="text-4xl text-[#0c4f37] w-1/3" />
          <span className="">
            <h1 className="text-[#0c4f37] text-lg font-medium">
              Donec porttitor euismod
            </h1>
            <p className="text-[#a5a5a5]">
              Nullam a lacinia ipsum, nec dignissim purus. Nulla
            </p>
          </span>
        </div>

        <div className="bg-white shadow-2xl px-4 py-6 rounded-3xl flex items-center gap-x-3 lg:w-4/5 mt-6">
          <FaHome className="text-4xl text-[#0c4f37] w-1/3" />
          <span className="">
            <h1 className="text-[#0c4f37] text-lg font-medium">
              Donec porttitor euismod
            </h1>
            <p className="text-[#a5a5a5]">
              Nullam a lacinia ipsum, nec dignissim purus. Nulla
            </p>
          </span>
        </div>
      </div>
    </main>
  );
};

export default Who_are_we;
