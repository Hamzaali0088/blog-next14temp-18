import React from "react";
import Image from "next/image";
export default function Banner({ image, data}) {

  return (
    <div className="bg-red-300 relative h-[70vh] mt-6s overflow-hidden">
      <Image
        src={image}
        alt="banner"
        width={1000}
        height={1000}
        priority
        className="object-cover w-full h-full object-right-bottom"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 text-black flex flex-col text-start  md:items-center md:text-center justify-center px-10 md:px-4">
        <h2 className=" text-4xl md:text-7xl font-bold pb-4">
          {data.title}
        </h2>
        <h3 className=" text-lg border-black">
          {data.tagline}
        </h3>
      </div>
    </div>
  );
}
