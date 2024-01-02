"use client";
import { projects } from "@/libs/projects";
import WOWInit from "@/libs/wow";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";

const Page = () => {
  const data = projects;
  
  return (
    <section className="min-h-screen overflow-hidden h-full w-full">
      <div className="text-center pt-24 pb-3">
        <h1 className="text-color-white font-bold text-3xl">PROJECTS</h1>
      </div>
      <WOWInit />
      <div className="flex justify-center items-end h-[70vh] overflow-hidden">
        <div className="container mx-auto md:px-0 px-4 py-3 h-full overflow-y-auto">
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 px-3">
            {data.map((items, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-start shadow-md shadow-color-hover-bg-nav items-center border border-color-hover-bg-nav bg-color-card-bg rounded-md gap-2 relative wow bounceInUp"
                  data-wow-delay="0.3s"
                >
                  {items.url ? (
                    <a
                      href={items.url}
                      className="absolute cursor-pointer w-[30px] h-[30px] shadow-xl top-0 right-0 translate-x-2 -translate-y-2 flex justify-center items-center rounded-full bg-color-white text-color-black hover:bg-color-green hover:text-color-white"
                    >
                      <FiExternalLink className="hover:stroke-color-white stroke-color-black" />
                    </a>
                  ) : null}
                  <div className="w-full h-[250px] rounded-t-md overflow-hidden">
                    <Image
                      src={items.image}
                      className="object-cover w-full h-full"
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
      </div>
    </section>
  );
};

export default Page;
