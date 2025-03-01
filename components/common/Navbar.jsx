import React, { useState, useEffect } from "react";
import Container from "./Container";
import FullContainer from "./FullContainer";
import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { useRouter } from "next/router";

export default function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Only handle scroll for screens larger than mobile
      if (window.innerWidth >= 768) {
        // 768px is Tailwind's 'md' breakpoint
        const currentScrollPos = window.scrollY;
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleSearch = () => {
    setIsOpen(!isOpen);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const hoverme = `relative text-md font-semibold transition-all duration-300 
  after:content-[''] after:absolute after:-bottom-[2px] after:left-0 cursor-pointer 
  after:w-0 after:h-[2px] after:bg-black 
  after:transition-all after:duration-300 
  hover:text-primary hover:after:w-full`;

  return (
    <>
      <FullContainer
        className={`border-b border-gray-200 fixed top-0 left-0 right-0 bg-white z-40
          md:transition-transform md:duration-700 h-16 md:h-20
          ${visible ? "translate-y-0" : "md:-translate-y-full"}`}
      >
        <Container className="h-full">
          <div className="flex flex-row h-full justify-between items-center">
            <Link
              href="/"
              className="text-2xl md:text-4xl font-bold font-montserrat uppercase"
            >
              coney
            </Link>
            <div className="flex flex-row gap-4 font-montserrat font-semibold text-md h-full items-center">
              <Link className={`${hoverme} hidden md:block`} href="/">
                Home
              </Link>
              <div
                onMouseEnter={toggleDropdown}
                onMouseLeave={toggleDropdown}
                className="h-full  flex items-center relative group"
              >
                <div
                  className={`relative text-md font-semibold transition-all duration-300 
                              after:content-[''] after:absolute after:-bottom-[2px] after:left-0 cursor-pointer 
                              after:w-0 after:h-[2px] after:bg-black 
                              after:transition-all after:duration-300 
                            group-hover:text-primary group-hover:after:w-full hidden md:block`}
                >
                  Category
                </div>
                <div className={`${isDropdownOpen ? "block" : "hidden"} `}>
                  <Dropdown />
                </div>
              </div>
              <Link className={`${hoverme} hidden md:block`} href="/about">
                About
              </Link>
              <Link className={`${hoverme} hidden md:block`} href="/contact">
                Contact
              </Link>

              <div
                onClick={toggleSearch}
                className={`relative transition-all duration-300 ${
                  isOpen ? "w-28 opacity-100" : "w-0 opacity-0 -z-10"
                }`}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 whitespace-nowrap">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-28 text-sm font-semibold border-b border-gray-300 outline-none py-0 px-2"
                  />
                </div>
              </div>
              <button
                onClick={toggleSearch}
                className={`p-[6px] bg-primary rounded-full text-white hover:bg-primary/90 transition-colors ${
                  isOpen ? "-rotate-90" : ""
                }`}
              >
                <Search className="w-4 h-4 rotate-90" />
              </button>
              <button
                onClick={toggleSidebar}
                className="p-[6px] bg-gray-400 hover:bg-primary rounded-full text-white transition-colors"
              >
                <Menu className="w-4 h-4" />
              </button>
            </div>
          </div>
        </Container>
      </FullContainer>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-50 ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold font-montserrat">Menu</h2>
            <button
              onClick={toggleSidebar}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-6">
            <div className="space-y-4">
              <h3 className="text-sm text-gray-400 uppercase">Navigation</h3>
              <nav className="flex flex-col gap-3">
                <Link
                  href="/"
                  className="hover:text-primary transition-colors"
                  onClick={toggleSidebar}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors"
                  onClick={toggleSidebar}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="hover:text-primary transition-colors"
                  onClick={toggleSidebar}
                >
                  Contact
                </Link>
              </nav>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm text-gray-400 uppercase">Categories</h3>
              <nav className="flex flex-col gap-3">
                <Link
                  href="/category/travel"
                  className="hover:text-primary transition-colors"
                  onClick={toggleSidebar}
                >
                  Travel
                </Link>
                <Link
                  href="/category/life-style"
                  className="hover:text-primary transition-colors"
                  onClick={toggleSidebar}
                >
                  Lifestyle
                </Link>
                <Link
                  href="/category/personal"
                  className="hover:text-primary transition-colors"
                  onClick={toggleSidebar}
                >
                  Personal
                </Link>
                <Link
                  href="/category/inspirational"
                  className="hover:text-primary transition-colors"
                  onClick={toggleSidebar}
                >
                  Inspirational
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Dropdown() {
  const router = useRouter();
  const { categories } = router.query;
  const hoverme = `relative text-md font-semibold transition-all duration-300 
    after:content-[''] after:absolute after:-bottom-[2px] after:left-0 cursor-pointer 
    after:w-0 after:h-[2px] after:bg-black 
    after:transition-all after:duration-300 
    hover:text-primary hover:after:w-full`;

  const categorieslist = ["Travel", "Life style", "Personal", "Inspirational"];
  return (
    <div className="absolute top-[75px] left-0 right-0 w-full  z-50">
      <div className="flex flex-col justify-between items-center  bg-white">
        <div className=" flex flex-col gap-4 font-montserrat font-semibold bg-gray-100 shadow-lg border-t-2 border-primary text-md py-5 items-start px-4">
          {categorieslist.map((category, index) => (
            <div key={index} className={hoverme}>
              <Link
                href={`/category/${category
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`}
              >
                {category}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileNavbar() {
  return (
    <div>
      <h1>MobileNavbar</h1>
    </div>
  );
}
