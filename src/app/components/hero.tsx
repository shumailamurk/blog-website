import React from "react"
import Head from "next/head";

const Hero = () => {
return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="flex flex-col items-center justify-center mt-12 bg-gray-100">
        <div className="text-center p-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Welcome to Health&apos;s
          </h1>
          <p className="text-yellow-500 text-3xl sm:text-4xl md:text-5xl" style={{ fontFamily: 'Lobster, cursive' }}>
            Blog
          </p>
        </div>

        <div className="text-center mt-1 mx-4 sm:mx-20">
          <p className="text-lg sm:text-xl md:text-2xl">How to Lead a Fit and Healthy Lifestyle</p>
        </div>

       
      </div>
    </>
  );
};

export default Hero;
