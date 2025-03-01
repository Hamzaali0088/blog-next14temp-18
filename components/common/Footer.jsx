import FullContainer from "./FullContainer";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  const hoverme = `relative text-md font-semibold transition-all duration-300 
  after:content-[''] after:absolute after:-bottom-[2px] after:left-0 cursor-pointer 
  after:w-0 after:h-[2px] after:bg-white 
  after:transition-all after:duration-300 
  hover:text-primary hover:after:w-full`
  const latestdata = [
    {
      title: "Adventure Begins",
      image: "/images/1.1.jpg",
      date: "10 May 2024",
      category: "Travel",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos this is for testing and got surprised.",
    },
    {
      title: "Urban Lifestyle Tips",
      image: "/images/1.2.jpg",
      date: "12 May 2024",
      category: "Life Style",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos this is for testing and got surprised.",
    },
  ];
  const categories = ["personal", "life style", "inspirational", "travel"];
  return (
    <FullContainer className="bg-black py-10">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-start  border-white/20 pb-10 gap-6 ">
        <div className="   md:col-span-2">
          <h2 className="text-white text-2xl font-bold font-montserrat pb-4">
            logo
          </h2>
          <p className="text-white text-lg font-montserrat pb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
       
          <h2 className="text-white text-2xl font-bold font-montserrat pb-4">
            Quick Links
          </h2>
          <ul className="text-white text-lg flex flex-col gap-2 w-fit  font-montserrat">
            <Link href="/" className={hoverme}>Home</Link>
            <Link href="/about" className={hoverme}>About</Link>
            <Link href="/contact" className={hoverme}>Contact</Link>
          </ul>
        </div>
        <div className=" ">
          <h2 className="text-white text-2xl font-bold font-montserrat pb-4">
            Categories
          </h2>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              {categories.map((category, index) => (
                <Link
                  href={`/category/${category.replace(/\s+/g, '-').toLowerCase()}`}
                  key={index}
                  className="text-gray-500 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer font-montserrat text-md border rounded-[4px] w-full px-4 py-3 border-gray-300 hover:border-white"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className=" ">
          <h2 className="text-white text-2xl font-bold font-montserrat pb-4">
            Most Popular Articles
          </h2>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-8">
              {latestdata.map((item, index) => (
                <div key={index} className="flex gap-4 items-center">
                  <div className="min-w-[70px] h-[70px] relative rounded-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h2 className="text-md text-gray-200 leading-tight font-montserrat font-semibold line-clamp-2">
                      {item.description}
                    </h2>
                    <p className="text-gray-300 font-montserrat text-sm mt-1">
                      {item.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div></div>
        </div>
      </Container>
    </FullContainer>
  );
}
