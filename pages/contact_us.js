import React from 'react'
import Container from '../components/common/Container'
import Navbar from '../components/common/Navbar'
import FullContainer from '../components/common/FullContainer'
import Footer from '../components/common/Footer'
import {
    callBackendApi,
    getDomain,
    getImagePath,
    sanitizeUrl,
  } from "@/lib/myFun";
  

export default function ContactUs({ logo, categories, imagePath, blog_list }) {
    return (
        <FullContainer className='bg-secondarydark '>
            <Navbar logo={logo} categories={categories} imagePath={imagePath} />
            <Container className="flex flex-col md:flex-row gap-10 text-black py-24 md:pt-36 max-w-[1200px]">
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
            <Footer logo={logo} categories={categories} imagePath={imagePath} blog_list={blog_list} />
        </FullContainer>
    );
}

export async function getServerSideProps({ req }) {
    const domain = getDomain(req?.headers?.host);
    const logo = await callBackendApi({ domain, tag: "logo" });
    const project_id = logo?.data[0]?.project_id || null;
  
    let layoutPages = await callBackendApi({
      domain,
      tag: "layout",
    });
  
    const meta = await callBackendApi({ domain, tag: "meta_home" });
    const favicon = await callBackendApi({ domain, tag: "favicon" });
    const imagePath = await getImagePath(project_id, domain);
    const categories = await callBackendApi({ domain, tag: "categories" });
    const banner = await callBackendApi({ domain, tag: "banner" });
    const blog_list = await callBackendApi({ domain, tag: "blog_list" });
  
    return {
      props: {
        logo: logo?.data?.[0] || null,
        meta: meta?.data[0]?.value || null,
        domain,
        imagePath,
        categories: categories?.data[0]?.value || [],
        favicon: favicon?.data?.[0]?.value || null,
        banner: banner?.data[0] || null,
        blog_list: blog_list?.data[0]?.value || [],
      },
    };
  }