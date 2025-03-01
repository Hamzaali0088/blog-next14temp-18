import React from 'react'
import Banner from "@/components/container/Banner";
import banner from "@/public/images/catbanner.jpg";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Container from "@/components/common/Container";
import Image from "next/image";
import Slider from "@/components/container/slider";
import Link from "next/link";
import { useRouter } from "next/router";
import BreadCrumb from "@/components/container/BreadCrumb";

export default function index() {
    return (
        <div>
            <Navbar />
            <Banner title="Welcome to our website" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos" image={banner} />
            <BreadCrumb />
            <Cards />
            <div className=' mx-auto'>
              <Slider />
            </div>
            <Footer />
        </div>
    )
}

function Cards() {
    const router = useRouter();
    const { categories } = router.query;
    const data = [
        { title: "Adventure Begins", image: "/images/1.1.jpg", date: "10 May 2024", category: "Travel", description: "Lorem lorem ipsum dolor sit amet this so beautiful so elegant just looking like a wow is lorem consectetur adipisicing elit. Quisquam, quos this is for testing and got surprised." },
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
    const filteredData = data.filter((item) => item.category.replace(/\s+/g, '-').toLowerCase() === categories);
    return (
        <div className="py-20 ">
            <Container>
                <div className='grid grid-cols-2 md:grid-cols-3 max-w-[1140px]  mx-auto '>
                    {filteredData.map((item, index) => (
                        <Card key={index} item={item} />
                    ))}
                </div>
            </Container>
        </div>
    )
}

function Card({ item }) {
    return (
        <div className='relative w-full h-full group overflow-hidden'>
            <Image
                src={item.image}
                alt={item.title}
                className='w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-110'
                width={1000}
                height={1000}
            />
            <div className='absolute inset-0 bg-black/80 border opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col gap-4 justify-center items-start p-4 md:p-10'>
                <div className="flex flex-col md:flex-row gap-2 pt-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="text-white font-semibold text-xs md:text-base">{item.date}</div>
                    <span className="text-gray-50 font-semibold font-montserrat hidden md:block">/</span>
                    <div className='text-gray-50 underline text-xs md:text-base font-semibold font-montserrat'>{item.category}</div>
                </div>
                <p className="text-gray-200 py-1 hidden md:block md:text-xl line-clamp-4">{item.description}</p>
                <Link href={`/category/${item.category}/${item.title}`} className='text-black text-sm md:text-base bg-white font-semibold px-7 py-3 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-200 hover:bg-primary hover:text-white'>
                    Read More
                </Link>
            </div>
        </div>
    )
}
