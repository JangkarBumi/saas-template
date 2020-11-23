import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col items-center  h-70vh text-justify justify-center px-4">
      <h1 className="font-semibold text-2xl sm:text-4xl mb-4 sm:mb-8">
        Simpler ads targeting tools
      </h1>
      <p className="mb-6 sm:mb-8">
        Tell your story to people that will love your product, not people who
        are wondering what is that.
      </p>
      <button className="text-lg bg-indigo-500 rounded-lg p-4 text-white w-full sm:w-auto">
        Get started now
      </button>
    </div>
  );
};

export default Hero;
