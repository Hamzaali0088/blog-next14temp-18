import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
export default function CategoryBanner({ image, data = [], imagePath}) {
 const router = useRouter();
 const {categories} = router.query;
const selectedCategory = data?.filter((item)=>item.title?.replace(/\s+/g, '-').toLowerCase() === categories?.toLowerCase());
console.log("selecteddata", data)
console.log("categories", categories)
console.log("selectedCategory", selectedCategory)
console.log("imagepath",`${imagePath}/${selectedCategory[0]?.image}`)
console.log("title",selectedCategory[0].title)
  return (
    <div className="bg-red-300 relative h-[70vh] mt-6s overflow-hidden">
      <Image
        src={`${imagePath}/${selectedCategory[0]?.image}`}
        alt="banner"
        width={1000}
        height={1000}
        priority
        className="object-cover w-full h-full object-bottom"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 text-black flex flex-col text-start  md:items-center md:text-center justify-center px-10 md:px-4">
        <h2 className=" text-4xl md:text-7xl font-bold pb-4">
          {selectedCategory[0].title}
        </h2>
      </div>
    </div>
  );
}
