import React, { useState, useEffect, useRef } from 'react'
import Container from '../common/Container'
import Image from 'next/image'

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [slidesToShow, setSlidesToShow] = useState(3);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const sliderRef = useRef(null);

    // Minimum swipe distance (in px)
    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe && currentSlide < filteredData.length - slidesToShow) {
            goToSlide(currentSlide + 1);
        }
        if (isRightSwipe && currentSlide > 0) {
            goToSlide(currentSlide - 1);
        }
    };

    // Update slidesToShow based on window width
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setSlidesToShow(1);  // sm: 1 slide
            } else if (window.innerWidth < 1024) {
                setSlidesToShow(2);  // md: 2 slides
            } else {
                setSlidesToShow(3);  // lg: 3 slides
            }
        };

        // Set initial value
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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
    
    const filteredData = data.slice(0, 6);
    const totalDots = Math.ceil(filteredData.length / slidesToShow);

    const goToSlide = (index) => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentSlide(index);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimating(false);
        }, 500);

        return () => clearTimeout(timer);
    }, [currentSlide]);

    // Auto slide every 5 seconds
    useEffect(() => {
        const autoSlide = setInterval(() => {
            if (!isAnimating) {
                setCurrentSlide(prev => 
                    prev === filteredData.length - slidesToShow ? 0 : prev + 1
                );
            }
        }, 5000);

        return () => clearInterval(autoSlide);
    }, [filteredData.length, slidesToShow, isAnimating]);

    return (
        <Container>
            <div className="relative py-10 max-w-[1140px] mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold font-montserrat mb-2">Featured Posts</h2>
                    <p className="text-gray-600">Discover our most popular stories</p>
                </div>

                <div className="relative overflow-hidden border-x border-gray-300">
                    <div 
                        ref={sliderRef}
                        className="flex transition-transform duration-500 ease-in-out touch-pan-y"
                        style={{
                            transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
                        }}
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >
                        {filteredData.map((item, index) => (
                            <div 
                                key={index}
                                className={`min-w-full sm:min-w-[50%] lg:min-w-[33.333%] px-4`}
                            >
                                <div className="relative group overflow-hidden aspect-[4/5]">
                                    <Image 
                                        src={item.image} 
                                        alt={item.title} 
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110" 
                                    />
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <div className="flex gap-2 text-sm text-white/90 mb-2">
                                                <span>{item.date}</span>
                                                <span>•</span>
                                                <span>{item.category}</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                            <p className="text-white/80 text-sm mb-4 line-clamp-2">{item.description}</p>
                                            <button className="bg-white text-black px-6 py-2 font-semibold hover:bg-primary hover:text-white transition-colors duration-300">
                                                Read More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-center gap-3 mt-6">
                    {[...Array(totalDots)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index * slidesToShow)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                Math.floor(currentSlide / slidesToShow) === index 
                                    ? 'bg-primary scale-125' 
                                    : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </Container>
    )
}
