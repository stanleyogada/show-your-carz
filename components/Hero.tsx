"use client";

import Image from "next/image";

import { CustomButton } from "@components";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/11.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>

      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Discover Your Dream Ride: Explore Our Vast Collection of Cars
        </h1>

        <p className="hero__subtitle">
          Embark on an Exhilarating Journey: Explore Our Vast Collection of Cars
          and Unleash the Thrill of Automotive Excellence.
        </p>

        <CustomButton
          title="Explore Cars For Free"
          containerStyles="w-full py-[16px] rounded-full bg-primary-blue mt-10"
          textStyles="text-white text-[14px] leading-[17px] font-bold"
          rightIcon="/right-arrow.svg"
        />
      </div>
    </div>
  );
};

export default Hero;
