import Container from "@/components/common/Container";
import FullContainer from "@/components/common/FullContainer";
import Navbar from "@/components/common/Navbar";
import Banner from "@/components/container/Banner";
import Image from "next/image";
import banner from "@/public/images/banner.jpg";
import Footer from "@/components/common/Footer";
import Link from "next/link";
export default function Home() {
  const data = [
    { title: "Adventure Begins", image: "/images/1.1.jpg", date: "10 May 2024", category: "Travel", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos this is for testing and got surprised." },
    { title: "Urban Lifestyle Tips", image: "/images/1.2.jpg", date: "12 May 2024", category: "Life Style", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos this is for testing and got surprised." },
    { title: "Nature's Beauty Unveiled", image: "/images/1.3.jpg", date: "15 May 2024", category: "Life Style", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos this is for testing and got surprised." },
    { title: "Dream Big Today", image: "/images/1.4.jpg", date: "18 May 2024", category: "Inspirational", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos this is for testing and got surprised." },
    { title: "Find Your Passion", image: "/images/1.5.jpg", date: "20 May 2024", category: "Inspirational", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos this is for testing and got surprised." },
    { title: "Discover New Places", image: "/images/1.6.jpg", date: "22 May 2024", category: "Travel", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos this is for testing and got surprised." },
    { title: "My Personal Growth", image: "/images/1.7.jpg", date: "25 May 2024", category: "Personal", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos this is for testing and got surprised." },
    { title: "Stay Inspired Daily", image: "/images/1.8.jpg", date: "27 May 2024", category: "Inspirational", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos this is for testing and got surprised." },
    { title: "Travel The World", image: "/images/1.9.jpg", date: "30 May 2024", category: "Travel", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos this is for testing and got surprised." },
    { title: "Healthy Living Hacks", image: "/images/2.1.jpg", date: "02 June 2024", category: "Life Style", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos this is for testing and got surprised." },
    { title: "Mindset Shift Needed", image: "/images/2.2.jpg", date: "04 June 2024", category: "Personal", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos this is for testing and got surprised." },
    { title: "Never Give Up", image: "/images/2.3.jpg", date: "06 June 2024", category: "Inspirational", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos this is for testing and got surprised." },
    { title: "Wanderlust Chronicles", image: "/images/2.4.jpg", date: "09 June 2024", category: "Travel", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos this is for testing and got surprised." },
    { title: "Fashion Trends 2024", image: "/images/2.5.jpeg", date: "11 June 2024", category: "Life Style", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos this is for testing and got surprised." },
    { title: "Reflections of Life", image: "/images/2.6.jpeg", date: "14 June 2024", category: "Personal", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos this is for testing and got surprised." },
    { title: "Finding Inner Peace", image: "/images/2.7.jpeg", date: "16 June 2024", category: "Personal", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos this is for testing and got surprised." },
    { title: "Hiking Adventures", image: "/images/1.1.jpg", date: "18 June 2024", category: "Travel", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos this is for testing and got surprised." },
    { title: "Daily Motivation", image: "/images/1.2.jpg", date: "20 June 2024", category: "Inspirational", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos this is for testing and got surprised." },
    { title: "Personal Journey Notes", image: "/images/1.3.jpg", date: "22 June 2024", category: "Personal", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos this is for testing and got surprised." },
    { title: "Classic Fashion Tips", image: "/images/1.4.jpg", date: "25 June 2024", category: "Life Style", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos this is for testing and got surprised." },
    { title: "Work Hard Dream Big", image: "/images/1.5.jpg", date: "28 June 2024", category: "Inspirational", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos this is for testing and got surprised." },
    { title: "Exploring The Wild", image: "/images/1.6.jpg", date: "01 July 2024", category: "Travel", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos this is for testing and got surprised." },
    { title: "Mindfulness Practice", image: "/images/1.7.jpg", date: "04 July 2024", category: "Personal", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos this is for testing and got surprised." },
    { title: "Vacation Goals 2024", image: "/images/1.8.jpg", date: "06 July 2024", category: "Travel", description: "Lorem ipsum this is that dolor sit amet consectetur adipisicing elit. Quisquam, quos this is for testing and got surprised." }
  ];
  return (
    <FullContainer className="bg-secondarydark">
      <Navbar />
      <Banner title="Welcome to our website" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos" image={banner} />
      <Container>
        <h1 className="pt-10 text-2xl md:text-5xl font-bold font-montserrat">
          Latest Articles
        </h1>
      </Container>
      <Cardtwocolumn data={data} className={"sm:hidden"} />
      <Cardthreecolumn data={data} className="hidden sm:block lg:hidden" />
      <Cardfourcolumn data={data} className="hidden lg:block" />
      <Footer />
    </FullContainer>
  );
}





function Cardtwocolumn({ data, className }) {
  const datapart2 = Math.ceil(data.length / 2);

  const data1 = data.slice(0, datapart2);
  const data2 = data.slice(datapart2, data.length);

  return (
    <Container className={`my-8 ${className}`}>
      <div className="grid grid-cols-2 gap-4 md:gap-8">
        <div className="flex flex-col gap-8">
          {data1.map((item, index) => (
            <div key={index} className=" ">
              <Card1 item={item} index={index} divider={3} />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-8">
          {data2.map((item, index) => (
            <div key={index} className=" ">
              <Card1 item={item} index={index} divider={1} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

function Cardthreecolumn({ data, className }) {
  // Fixed number of items per column (total items / 3)
  const itemsPerColumn = Math.ceil(data.length / 3); // This will be 8 for 24 items

  // Create columns with equal distribution
  const data1 = data.slice(0, itemsPerColumn);                    // 0 to 8
  const data2 = data.slice(itemsPerColumn, itemsPerColumn * 2);   // 8 to 16
  const data3 = data.slice(itemsPerColumn * 2);                   // 16 to 24

  return (
    <Container className={`my-8 ${className}`}>
      <div className="grid grid-cols-3 gap-8">
        <div className="flex flex-col gap-8">
          {data1.map((item, index) => (
            <div key={index}>
              <Card1 item={item} index={index} divider={3} />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-8">
          {data2.map((item, index) => (
            <div key={index}>
              <Card1 item={item} index={index} divider={1} />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-8">
          {data3.map((item, index) => (
            <div key={index}>
              <Card1 item={item} index={index} divider={2} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

function Cardfourcolumn({ data, className }) {

  const datapart4 = Math.ceil(data.length / 4);

  const data1 = data.slice(0, datapart4);
  const data2 = data.slice(datapart4, datapart4 * 2);
  const data3 = data.slice(datapart4 * 2, datapart4 * 3);
  const data4 = data.slice(datapart4 * 3, data.length);

  return (
    <Container className={`my-8 ${className}`}>
      <div className="grid grid-cols-4 gap-8">
        <div className="flex flex-col gap-8">
          {data1.map((item, index) => (
            <div key={index} className=" ">
              <Card1 item={item} index={index} divider={3} />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-8">
          {data2.map((item, index) => (
            <div key={index} className=" ">
              <Card1 item={item} index={index} divider={1} />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-8">
          {data3.map((item, index) => (
            <div key={index} className=" ">
              <Card1 item={item} index={index} divider={2} />
            </div>
          ))}
        </div>
        <div className="flex  flex-col gap-8 ">
          {data4.map((item, index) => (
            <div key={index} className="bg-white ">
              <Card1 item={item} index={index} divider={5} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

function Card1({ item, index }) {
  const hoverme = `relative text-xs md:text-base font-semibold transition-all duration-300 
    after:content-[''] after:absolute after:-bottom-[2px] after:left-0 cursor-pointer 
    after:w-0 after:h-[2px] after:bg-black 
    after:transition-all after:duration-300 
    hover:text-primary hover:after:w-full`

  return (
    <>
      <div className="w-full h-full">
        <div className="flex flex-col gap-[6px] items-start">
          <div className="w-full">
            <Image
              className="w-full h-full object-cover hover:opacity-85 transition-all duration-500"
              src={item.image}
              alt={item.title}
              width={1000}
              height={1000}
            />
          </div>
          <div className="flex flex-row gap-2 pt-2 items-center w-full">
            <div className="text-gray-500 text-xs md:text-base hidden md:block">{item.date}</div>
            <span className="text-gray-500 hidden md:block">/</span>
            <Link href={`/category/${item.category.replace(/\s+/g, '-').toLowerCase()}`} className={hoverme}>{item.category}</Link>

          </div>
          <h2 className="text-black text-sm md:text-lg font-semibold">{item.title}</h2>
          <p className="text-gray-500 py-1 text-sm md:text-base line-clamp-4">{item.description}</p>
          <div className="flex flex-row gap-2 items-center justify-between w-full">
            <Link href={`/category/${item.category.replace(/\s+/g, '-').toLowerCase()}/${item.title.replace(/\s+/g, '-').toLowerCase()}`} className={hoverme}>
              Read More
            </Link>
            <div className="text-gray-500 text-xs md:text-base md:hidden">{item.date}</div>
          </div>
        </div>
      </div>
    </>
  );
}

