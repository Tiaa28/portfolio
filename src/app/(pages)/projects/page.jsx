"use client";
import { projects } from "@/libs/projects";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";

const Page = () => {
  const data = projects;

  return (
    <section className="min-h-screen overflow-hidden h-full w-full flex flex-col justify-between items-center">
      <h1 className="text-color-white font-bold text-3xl pt-24">PROJECTS</h1>
      <div className="container mx-auto md:px-0 px-4 py-3 h-[450px] overflow-y-auto">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 px-3">
          {data.map((items, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center shadow-md shadow-color-hover-bg-nav items-center border border-color-hover-bg-nav bg-color-hover-bg-nav rounded-md gap-2 relative"
              >
                {items.url ? (
                  <a
                    href={items.url}
                    className="absolute cursor-pointer w-[30px] h-[30px] shadow-xl top-0 right-0 translate-x-2 -translate-y-2 flex justify-center items-center rounded-full bg-color-white text-color-black hover:bg-color-green hover:text-color-white"
                  >
                    <FiExternalLink className="hover:stroke-color-white stroke-color-black" />
                  </a>
                ) : null}
                <div className="w-full h-full rounded-t-md overflow-hidden">
                  <Image
                    src={items.image}
                    className="object-cover w-full h-auto"
                    alt={`Project ${index + 1}`}
                  />
                </div>
                <div className="text-start p-3">
                  <h3 className="text-color-green-light font-bold text-xl">
                    {items.name}
                  </h3>
                  <p className="text-color-green-light text-opacity-70">
                    {items.desc}
                  </p>
                  {items.code ? (
                    <a
                      href={items.code}
                      target="_blank"
                      className="inline-flex mt-3 bg-gradient rounded-md hover:bg-gradient-hover py-2 px-4 text-color-white"
                    >
                      Source Code
                    </a>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Page;
