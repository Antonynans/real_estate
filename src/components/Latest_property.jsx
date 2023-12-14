import { FaFire } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaHouse } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";
import { PiBed } from "react-icons/pi";
import { LuBath } from "react-icons/lu";



const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1400 },
    items: 3.2,
  },
  desktop: {
    breakpoint: { max: 1400, min: 1024 },
    items: 3,
  },
  mini: {
    breakpoint: { max: 1024, min: 768 },
    items: 2.2,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 1.7,
  },
  
  module: {
    breakpoint: { max: 640, min: 0 },
    items: 0,
  },
};

const Latest_property = () => {
  return (
    <div className="container mx-auto px-3">
      <div className="lg:flex justify-between items-center">
        <div className="lg:w-3/5">
          <h1 className="text-[#6f9789] lg:text-xl uppercase">checkout our new</h1>
          <h1 className="lg:text-4xl text-2xl font-medium capitalize py-3">
            Latest listed properties
          </h1>
          <p className="text-[#808080] lg:text-base text-sm lg:w-3/5">
            Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
            dignissim purus.
          </p>
        </div>
        <div className="flex gap-x-4 lg:w-2/5 lg:pt-0 pt-6">
          <button className="text-[#0ca39a] rounded-full border border-[#0ca39a] px-6 py-2 hover:bg-[#0ca39a] hover:text-white focus:bg-[#0ca39a] focus:text-white">
            All
          </button>
          <button className="text-[#0ca39a] rounded-full border border-[#0ca39a] px-6 py-2 hover:bg-[#0ca39a] hover:text-white focus:bg-[#0ca39a] focus:text-white">
            Sell
          </button>
          <button className="text-[#0ca39a] rounded-full border border-[#0ca39a] px-6 py-2 hover:bg-[#0ca39a] hover:text-white focus:bg-[#0ca39a] focus:text-white">
            Rent
          </button>
        </div>
      </div>

      <section className="mt-8">
        <Carousel
          className="z-20"
          swipeable={true}
          draggable={false}
          responsive={responsive}
          ssr={true}
          infinite
          autoPlay={false}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
        >
          <div>
            <div className="relative h-80 sm:w-80">
              <img
                src="/assets/image_11.jpg"
                alt=""
                className="rounded-3xl h-full w-full object-cover"
              />
              <button className="px-6 py-2 flex gap-x-2 items-center text-[#ff1111] bg-[#ffe1e1] rounded-full absolute bottom-10 left-10">
                <FaFire />
                Popular
              </button>
            </div>
            <span className="flex flex-col gap-y-1 py-4">
              <p className="text-2xl font-medium">$ 5,970</p>
              <p className="text-lg font-medium">Tranquil Haven in the Woods</p>
              <p className="text-sm">103 Wright CourtBurien, WA 98168</p>
              <div className="flex items-center gap-x-4 text-sm">
                <span className="flex items-center gap-x-2">
                  <PiBed className='text-xl' />4 Beds
                </span>
                <span className="flex items-center gap-x-2">
                  <LuBath className='text-xl' />3 Bath
                </span>
              </div>
            </span>
          </div>
          <div>
            <div className="relative h-80 sm:w-80">
              <img
                src="/assets/image_12.jpg"
                alt=""
                className="rounded-3xl h-full w-full object-cover"
              />
              <button className="px-6 py-2 flex gap-x-2 items-center text-[#119bff] bg-[#d7eeff] rounded-full absolute bottom-10 left-10">
                <FaHouse />
                New Listing
              </button>
            </div>
            <span className="flex flex-col gap-y-1 py-4">
              <p className="text-2xl font-medium">$ 1,970</p>
              <p className="text-lg font-medium">Serene Retreat by the Lake</p>
              <p className="text-sm">103 Wright CourtBurien, WA 98168</p>
              <div className="flex items-center gap-x-4 text-sm">
                <span className="flex items-center gap-x-2">
                  <PiBed className='text-xl' />3 Beds
                </span>
                <span className="flex items-center gap-x-2">
                  <LuBath className='text-xl' />2 Bath
                </span>
              </div>
            </span>{" "}
          </div>
          <div>
            <div className="relative h-80 sm:w-80">
              <img
                src="/assets/image_13.jpg"
                alt=""
                className="rounded-3xl h-full w-full object-cover"
              />
              <button className="px-6 py-2 flex gap-x-2 items-center text-[#00ce3a] bg-[#f1fff1] rounded-full absolute bottom-10 left-10">
                <FaDollarSign />
                Discounted Price
              </button>
            </div>
            <span className="flex flex-col gap-y-1 py-4">
              <p className="text-2xl font-medium">$ 3,450</p>
              <p className="text-lg font-medium">
                Charming Cottage in the Meadow
              </p>
              <p className="text-sm">103 Wright CourtBurien, WA 98168</p>
              <div className="flex items-center gap-x-4 text-sm">
                <span className="flex items-center gap-x-2">
                  <PiBed className='text-xl' />4 Beds
                </span>
                <span className="flex items-center gap-x-2">
                  <LuBath className='text-xl' />3 Bath
                </span>
              </div>
            </span>{" "}
          </div>
          <div>
            <div className="relative h-80 sm:w-80">
              <img
                src="/assets/image_14.jpg"
                alt=""
                className="rounded-3xl h-full w-full object-cover"
              />
              <button className="px-6 py-2 flex gap-x-2 items-center text-[#ff1111] bg-[#ffe1e1] rounded-full absolute bottom-10 left-10">
                <FaFire />
                Popular
              </button>
            </div>
            <span className="flex flex-col gap-y-1 py-4">
              <p className="text-2xl font-medium">$ 2,389</p>
              <p className="text-lg font-medium">Grand Estate on the Hilltop</p>
              <p className="text-sm">103 Wright CourtBurien, WA 98168</p>
              <div className="flex items-center gap-x-4 text-sm">
                <span className="flex items-center gap-x-2">
                  <PiBed className='text-xl' />4 Beds
                </span>
                <span className="flex items-center gap-x-2">
                  <LuBath className='text-xl' />3 Bath
                </span>
              </div>
            </span>
          </div>
        </Carousel>

        <div className="sm:hidden block ">
        <div className='pt-8'>
            <div className="relative h-80 sm:w-80">
              <img
                src="/assets/image_11.jpg"
                alt=""
                className="rounded-3xl h-full w-full object-cover"
              />
              <button className="px-6 py-2 flex gap-x-2 items-center text-[#ff1111] bg-[#ffe1e1] rounded-full absolute bottom-10 left-10">
                <FaFire />
                Popular
              </button>
            </div>
            <span className="flex flex-col gap-y-1 py-4">
              <p className="text-2xl font-medium">$ 5,970</p>
              <p className="text-lg font-medium">Tranquil Haven in the Woods</p>
              <p className="text-sm">103 Wright CourtBurien, WA 98168</p>
              <div className="flex items-center gap-x-4 text-sm">
                <span className="flex items-center gap-x-2">
                  <PiBed className='text-xl' />4 Beds
                </span>
                <span className="flex items-center gap-x-2">
                  <LuBath className='text-xl' />3 Bath
                </span>
              </div>
            </span>
          </div>
          <div className='pt-8'>
            <div className="relative h-80 sm:w-80">
              <img
                src="/assets/image_12.jpg"
                alt=""
                className="rounded-3xl h-full w-full object-cover"
              />
              <button className="px-6 py-2 flex gap-x-2 items-center text-[#119bff] bg-[#d7eeff] rounded-full absolute bottom-10 left-10">
                <FaFire />
                New Listing
              </button>
            </div>
            <span className="flex flex-col gap-y-1 py-4">
              <p className="text-2xl font-medium">$ 1,970</p>
              <p className="text-lg font-medium">Serene Retreat by the Lake</p>
              <p className="text-sm">103 Wright CourtBurien, WA 98168</p>
              <div className="flex items-center gap-x-4 text-sm">
                <span className="flex items-center gap-x-2">
                  <PiBed className='text-xl' />3 Beds
                </span>
                <span className="flex items-center gap-x-2">
                  <LuBath className='text-xl' />2 Bath
                </span>
              </div>
            </span>{" "}
          </div>
          <div className='pt-8'>
            <div className="relative h-80 sm:w-80">
              <img
                src="/assets/image_13.jpg"
                alt=""
                className="rounded-3xl h-full w-full object-cover"
              />
              <button className="px-6 py-2 flex gap-x-2 items-center text-[#00ce3a] bg-[#f1fff1] rounded-full absolute bottom-10 left-10">
                <FaFire />
                Discounted Price
              </button>
            </div>
            <span className="flex flex-col gap-y-1 py-4">
              <p className="text-2xl font-medium">$ 3,450</p>
              <p className="text-lg font-medium">
                Charming Cottage in the Meadow
              </p>
              <p className="text-sm">103 Wright CourtBurien, WA 98168</p>
              <div className="flex items-center gap-x-4 text-sm">
                <span className="flex items-center gap-x-2">
                  <PiBed className='text-xl' />4 Beds
                </span>
                <span className="flex items-center gap-x-2">
                  <LuBath className='text-xl' />3 Bath
                </span>
              </div>
            </span>{" "}
          </div>
          <div className='pt-8'>
            <div className="relative h-80 sm:w-80">
              <img
                src="/assets/image_14.jpg"
                alt=""
                className="rounded-3xl h-full w-full object-cover"
              />
              <button className="px-6 py-2 flex gap-x-2 items-center text-[#ff1111] bg-[#ffe1e1] rounded-full absolute bottom-10 left-10">
                <FaFire />
                Popular
              </button>
            </div>
            <span className="flex flex-col gap-y-1 py-4">
              <p className="text-2xl font-medium">$ 2,389</p>
              <p className="text-lg font-medium">Grand Estate on the Hilltop</p>
              <p className="text-sm">103 Wright CourtBurien, WA 98168</p>
              <div className="flex items-center gap-x-4 text-sm">
                <span className="flex items-center gap-x-2">
                  <PiBed className='text-xl' />4 Beds
                </span>
                <span className="flex items-center gap-x-2">
                  <LuBath className='text-xl' />3 Bath
                </span>
              </div>
            </span>
          </div>
          <div className="flex justify-center pt-12">
          <button className="text-[#0ca39a] rounded-full border border-[#0ca39a] px-6 py-2 focus:bg-[#0ca39a] focus:text-white">
            View more properties
          </button></div>
        </div>
      </section>
    </div>
  );
};

export default Latest_property;
