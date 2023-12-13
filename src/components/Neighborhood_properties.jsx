const Neighborhood_properties = () => {
  return (
    <main className="container mx-auto px-3 lg:pt-24">
      {/* <div className=""> */}
        <span className="flex justify-center pb-12">
          <button className="bg-gradient-to-r from-[#8bd3ce] to-[#eff9f9] rounded-full h-12 w-12 cursor-auto"></button>
        </span>
        <p className="text-[#0c4f37] uppercase md:text-xl text-lg">
          Areas across the town
        </p>
        <h1 className="lg:text-4xl text-3xl font-medium capitalize pt-3 pb-12">
          Neighborhood Properties
        </h1>

        <section className="grid md:grid-cols-7 grid-cols-2 md:gap-12 gap-4 pb-12">
          <div className="relative md:col-span-2">
            <img
              src="/assets/demo.jpg"
              alt=""
              className="rounded-3xl object-cover md:h-80 h-40"
            />
            <span className="absolute md:bottom-8 bottom-4 md:left-8 left-4">
              <p className="text-[#a0a1a1] md:text-5xl text-2xl font-semibold md:pb-3">
                216
              </p>
              <p className="text-white lg:text-xl md:text-base text-sm">
                New York City, NY
              </p>
            </span>
          </div>
          <div className="relative md:col-span-2">
            <img
              src="/assets/demo.jpg"
              alt=""
              className="rounded-3xl object-cover md:h-80 h-40"
            />
            <span className="absolute md:bottom-8 bottom-4 md:left-8 left-4">
              <p className="text-[#a0a1a1] md:text-5xl text-2xl font-semibold md:pb-3">
                141
              </p>
              <p className="text-white lg:text-xl md:text-base text-sm">
                Houston, TX
              </p>
            </span>
          </div>
          <div className="relative md:col-span-3">
            <img
              src="/assets/demo.jpg"
              alt=""
              className="rounded-3xl object-cover md:h-80 h-40"
            />
            <span className="absolute md:bottom-8 bottom-4 md:left-8 left-4">
              <p className="text-[#a0a1a1] md:text-5xl text-2xl font-semibold md:pb-3">
                212
              </p>
              <p className="text-white lg:text-xl md:text-base text-sm">
                San Diego, CA
              </p>
            </span>
          </div>
          <div className="relative md:col-span-3">
            <img
              src="/assets/demo.jpg"
              alt=""
              className="rounded-3xl object-cover md:h-80 h-40"
            />
            <span className="absolute md:bottom-8 bottom-4 md:left-8 left-4">
              <p className="text-[#a0a1a1] md:text-5xl text-2xl font-semibold md:pb-3">
                183
              </p>
              <p className="text-white lg:text-xl md:text-base text-sm">
                Philadelphia, PA
              </p>
            </span>
          </div>
          <div className="relative md:col-span-4">
            <img
              src="/assets/demo.jpg"
              alt=""
              className="rounded-3xl object-cover md:h-80 h-40 w-full"
            />
            <span className="absolute md:bottom-8 bottom-4 md:left-8 left-4">
              <p className="text-[#a0a1a1] md:text-5xl text-2xl font-semibold md:pb-3">
                112
              </p>
              <p className="text-white lg:text-xl md:text-base text-sm">
                San Francisco, CA
              </p>
            </span>
          </div>
        </section>

        <span className="flex justify-end pb-12 w-4/5">
          <button className="bg-gradient-to-r from-[#8bd3ce] to-[#eff9f9] rounded-full h-24 w-24 cursor-auto"></button>
        </span>
      {/* </div> */}
    </main>
  );
};

export default Neighborhood_properties;
