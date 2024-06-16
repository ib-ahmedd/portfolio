"use client";
import { HeroProps } from "@types";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

function Hero({ viewRef }: HeroProps) {
  return (
    <section
      id="home"
      className="flex flex-col-reverse lg:flex-row items-center w-full xl:w-4/5 py-20 md:py-32 px-4 sm:px-8 mx-auto"
    >
      <div className="w-full md:w-3/5 lg:w-1/2 flex justify-center lg:justify-start">
        <div className="relative w-96 h-96" data-aos="zoom-out">
          <Image
            src="/images/hero/developer.png"
            alt="developer"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
      <div className="w-full md:w-3/5 lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start gap-8">
        <span
          className="flex items-center gap-2 w-fit p-2 bg-navbar-light dark:bg-navbar-dark rounded-full border border-navbar-light-b dark:border-border-grey text-sm"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="w-3 h-3 rounded-full bg-green-700"></div>
          <p ref={viewRef}>Available for hiring!</p>
        </span>

        <h1 className="text-5xl md:text-7xl font-bold" data-aos="zoom-in">
          Web Developer
        </h1>
        <p
          className="text-site-text-gray text-xl"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          I develop high-end web experiences for design-driven companies that
          value attention to detail.
        </p>
        <Link
          href="#contact"
          className="text-white bg-site-orange hover:bg-site-orange-hover p-2 w-fit rounded-lg"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          Contact me
        </Link>
      </div>
    </section>
  );
}

export default Hero;
