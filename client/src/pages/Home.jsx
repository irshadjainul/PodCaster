import React from "react";

const Home = () => {
  return (
    <div className="bg-green-100 min-h-screen lg:min-h-[88vh] px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col justify-center">
      {/* Top Section */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left Text */}
        <div className="w-full lg:w-5/6">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight">
            Create & listen to the
          </h1>
          <h1 className="flex justify-center lg:justify-start text-5xl md:text-6xl lg:text-8xl font-bold mt-2">
            p
            <span>
              <img src="./Ologo.png" className="h-12 md:h-16 lg:h-20 mx-1" alt="O Logo" />
            </span>
            dcast
          </h1>
        </div>

        {/* Scroll Button */}
        <div className="lg:w-1/6 hidden lg:flex justify-end">
          <div className="border-black bg-gray-200 text-center -rotate-90 border-2 py-4 px-4 font-semibold rounded-full">
            Scroll Down
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 w-full flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
        {/* Left Text & Button */}
        <div className="w-full lg:w-auto">
          <p className="text-lg md:text-xl font-semibold">
            Listen to the most popular podcasts on just one platform – <b>PODCASTER</b>
          </p>
          <button className="flex items-center justify-center px-6 mt-6 mx-auto lg:mx-0 cursor-pointer hover:bg-gray-400 transition-all duration-300 hover:text-black py-4 bg-green-700 text-white font-semibold rounded-full">
            Login to Listen
          </button>
        </div>

        {/* Right Text */}
        <div className="w-full lg:w-auto">
          <p className="text-zinc-600 font-bold">
            Our app contains more than 2000 podcasts for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
