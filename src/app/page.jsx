"use client";
import tiaa from "@/assets/tiaa.png";
import ParticlesJS from "@/components/Particles";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import SplitType from "split-type";

export default function Home() {
  const title = useRef(null);

  useEffect(() => {
    const textSplitting = new SplitType(title.current);

    gsap.to(textSplitting.chars, {
      y: 0,
      opacity: 1,
      stagger: 0.05,
      delay: 0.25,
      duration: 0.3,
    });
  }, []);

  return (
    <section className="lg:h-screen h-auto lg:pt-0 pt-24 relative overflow-hidden">
      <ParticlesJS />
      <div className="container mx-auto pt-4 md:px-0 px-4 h-full relative z-[1]">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center h-full">
          <div className="w-full h-full md:basis-1/2 basis-full flex justify-center items-end">
            <div className="xl:w-3/5 2xl:w-[90%] md:w-3/4 w-full overflow-hidden flex justify-center items-end">
              <Image
                alt="Tia Niandari"
                src={tiaa}
                className="w-full h-auto"
                priority={true}
              />
            </div>
          </div>
          <div className="w-full md:basis-1/2 basis-full">
            <div className="flex flex-col gap-3 items-start justify-center">
              <p className="font-bold text-color-green text-xl">
                Hello, my name is
              </p>
              <h1
                className="font-bold text-color-white md:text-5xl text-3xl overflow-hidden"
                ref={title}
              >
                Tia Niandari
              </h1>
              <p className="text-color-grey">
                I am a fresh graduate who is able to conduct research,
                communicate and have good public speaking skills. Has a desire
                to learn and is able to adapt well.
              </p>
              <Link
                href={"/projects"}
                className="bg-gradient rounded-md hover:bg-gradient-hover py-2 px-4 text-color-white"
              >
                My Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
