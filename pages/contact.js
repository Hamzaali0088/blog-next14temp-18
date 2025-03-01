import React from 'react'
import Container from '../components/common/Container'
import Navbar from '../components/common/Navbar'
import FullContainer from '../components/common/FullContainer'
import Footer from '../components/common/Footer'

export default function ContactUs() {
    return (
        <FullContainer className='bg-secondarydark '>
            <Navbar />
            <Container className="flex flex-col md:flex-row gap-10 text-black py-24 max-w-[1200px]">
                <div className="w-full md:w-[40%] ">
                    <h2 className='text-7xl font-montserrat font-extrabold pb-8'>Let’s get in touch today!</h2>
                    <p className='text-gray-500'>In vestibulum maximus lectus nec vestibulum. Donec porttitor, dui sit amet malesuada posuere, orci lectus porttitor nulla, interdum pellentesque nibh ex non erat.</p>
                </div>
                <div className="w-full md:w-[60%]  p-11 bg-primary shadow-[0_10px_30px_rgba(0,0,0,0.8)] rounded-2xl">
                    <form className='flex flex-col gap-8 '>
                        <div className='grid grid-cols-2 gap-4'>
                            <div>
                                <input type="text" id="name" name="name" placeholder='First Name' className='w-full py-3 px-5 rounded-md  bg-secondarydark text-black focus:outline-none' />
                            </div>
                            <div>
                                <input type="text" id="lastname" name="lastname" placeholder='Last Name' className='w-full py-3 px-5 rounded-md bg-secondarydark text-black focus:outline-none' />
                            </div>
                        </div>
                        <div>
                            <input type="email" id="email" name="email" placeholder='Email' className='w-full py-3 px-5 rounded-md  bg-secondarydark text-black focus:outline-none' />
                        </div>
                        <div>
                            <textarea id="message" name="message" placeholder='Message' className='w-full py-3 px-5 rounded-md bg-secondarydark text-black focus:outline-none' />
                        </div>
                        <button type="submit" className='bg-secondarydark border text-white px-9 py-3 rounded-md w-fit'>Submit</button>
                    </form>
                </div>
            </Container>
            <Footer />
        </FullContainer>
    );
}
