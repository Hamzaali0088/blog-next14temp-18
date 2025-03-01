import React from 'react'
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Banner from "@/components/container/Banner";
import banner from "@/public/images/catbanner.jpg";
import Slider from "@/components/container/slider";
import Image from "next/image";
import image from "@/public/images/single.webp";
import { Search } from 'lucide-react';
import Container from '@/components/common/Container';
import BreadCrumb from "@/components/container/BreadCrumb";

export default function blog() {
    return (
        <div>
            <Navbar />
            <Banner title="Welcome to our website" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos" image={banner} />
            <BreadCrumb title="Blog" />
            <SingleBlog />
            <div>
                <Slider />
            </div>
            <Footer />
        </div>
    )
}



function SingleBlog() {
    const latestdata = [
        { title: "Adventure Begins", image: "/images/1.1.jpg", date: "10 May 2024", category: "Travel", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos this is for testing and got surprised." },
        { title: "Urban Lifestyle Tips", image: "/images/1.2.jpg", date: "12 May 2024", category: "Life Style", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos this is for testing and got surprised." },
        { title: "Nature's Beauty Unveiled", image: "/images/1.3.jpg", date: "15 May 2024", category: "Life Style", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos this is for testing and got surprised." },
        { title: "Dream Big Today", image: "/images/1.4.jpg", date: "18 May 2024", category: "Inspirational", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos this is for testing and got surprised." },
        { title: "Find Your Passion", image: "/images/1.5.jpg", date: "20 May 2024", category: "Inspirational", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos this is for testing and got surprised." },
        { title: "Discover New Places", image: "/images/1.6.jpg", date: "22 May 2024", category: "Travel", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos this is for testing and got surprised." },
    ];
    const categories = ["Travel", "Lifestyle", "Fashion", "Inspiration"]
    return (
        <Container className="py-6">
            <div className='relative grid grid-cols-1 md:grid-cols-3 gap-6 justify-between max-w-[1100px] mx-auto'>
                <div className='col-span-2 flex flex-col gap-6'>
                    <Image src={image} width={1500} height={1500} alt="banner" />
                    <div className='flex flex-col gap-6'>
                        <div>
                            <h1 className='text-2xl font-bold'>Blog</h1>
                            <p className='text-gray-500 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos</p>
                        </div>
                        <div>
                            <h1 className='text-2xl font-bold'>Blog</h1>
                            <p className='text-gray-500 text-lg'>Lorem ipsum The slider will:
                                Show 3 slides at a timeSmoothly animate between slides Loop back to the beginning/endShow hover effects on cardsBe fully responsiveWork without any external dependenciesYou can adjust the slidesToShow variable and add media queries to make it more responsive for different screen sizes if needed. dolor sit amet consectetur adipisicing elit. Quisquam, quos</p>
                        </div>
                        <div>
                            <h1 className='text-2xl font-bold'>Blog</h1>
                            <p className='text-gray-500 text-lg'>Lorem ipsum The slider will:
                                Show 3 slides at a timeSmoothly animate between slides Loop back to the beginning/endShow hover effects on cardsBe fully responsiveWork without any external dependenciesYou can adjust the slidesToShow variable and add media queries to make it more responsive for different screen sizes if needed. dolor sit amet consectetur adipisicing elit. Quisquam, quos</p>
                        </div>
                        <div>
                            <h1 className='text-2xl font-bold'>why use a blog</h1>
                            <p className='text-gray-500 text-lg'>Lorem ipsum The slider will:
                                Show 3 slides at a timeSmoothly animate between slides Loop back to the beginning/endShow hover effects on cardsBe fully responsiveWork without any external dependenciesYou can adjust the slidesToShow variable and add media queries to make it more responsive for different screen sizes if needed. dolor sit amet consectetur adipisicing elit. Quisquam, quos</p>
                        </div>
                        <div>
                            <h1 className='text-2xl font-bold'>how to make a blog</h1>
                            <p className='text-gray-500 text-lg'>Lorem ipsum The slider will:
                                Show 3 slides at a timeSmoothly animate between slides Loop back to the beginning/endShow hover effects on cardsBe fully responsiveWork without any external dependenciesYou can adjust the slidesToShow variable and add media queries to make it more responsive for different screen sizes if needed. dolor sit amet consectetur adipisicing elit. Quisquam, quos</p>
                        </div>
                        <div>
                            <h1 className='text-2xl font-bold'>This is dummy text</h1>
                            <p className='text-gray-500 text-lg'>Lorem ipsum The slider will:
                                Show 3 slides at a timeSmoothly animate between slides Loop back to the beginning/endShow hover effects on cardsBe fully responsiveWork without any external dependenciesYou can adjust the slidesToShow variable and add media queries to make it more responsive for different screen sizes if needed. dolor sit amet consectetur adipisicing elit. Quisquam, quos</p>
                        </div>
                        <div>
                            <h1 className='text-2xl font-bold'>what is a blog</h1>
                            <p className='text-gray-500 text-lg'>Lorem ipsum The slider will:
                                Show 3 slides at a timeSmoothly animate between slides Loop back to the beginning/endShow hover effects on cardsBe fully responsiveWork without any external dependenciesYou can adjust the slidesToShow variable and add media queries to make it more responsive for different screen sizes if needed. dolor sit amet consectetur adipisicing elit. Quisquam, quos</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 relative">
                    <RightSidebar latestdata={latestdata} categories={categories} />
                </div>
            </div>
        </Container>
    )
}

function RightSidebar({ latestdata, categories }) {
    return (
        <div className='sticky top-20 flex flex-col gap-6 '>
            <div className='px-4 py-3 flex items-center justify-between gap-2 border w-full border-gray-300 rounded-[4px]'>
                <input type="text" placeholder='Search...' className='outline-none border-none bg-transparent w-full' />
                <Search className='rotate-90 w-4 h-4' />
            </div>
            
            <div className='space-y-2'>
                <h2 className='text-md font-montserrat font-bold'>About Me</h2>
                <div className='text-gray-500 font-montserrat text-md'>
                    Lorem ipsum dolor sit amet, consec tetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                </div>
            </div>
            
            <div className='flex flex-col gap-2'>
                <h2 className='text-md font-montserrat font-bold'>Categories</h2>
                <div className='flex flex-col gap-2'>
                    {categories.map((category, index) => (
                        <h1 
                            key={index} 
                            className='text-gray-500 hover:text-black hover:scale-105 transition-all duration-300 cursor-pointer font-montserrat text-md border rounded-[4px] w-full px-4 py-3 border-gray-300 hover:border-black'
                        >
                            {category}
                        </h1>
                    ))}
                </div>
            </div>
            
            <div className='flex flex-col gap-2'>
                <h2 className='text-md font-montserrat font-bold'>Latest Posts</h2>
                <div className='flex flex-col gap-8'>
                    {latestdata.map((item, index) => (
                        <div key={index} className='flex gap-4 items-center'>
                            <div className='min-w-[70px] h-[70px] relative rounded-full overflow-hidden'>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className='object-cover'
                                />
                            </div>
                            <div className='flex flex-col'>
                                <h2 className='text-md leading-tight font-montserrat font-semibold line-clamp-2'>
                                    {item.description}
                                </h2>
                                <p className='text-gray-500 font-montserrat text-sm mt-1'>
                                    {item.date}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
