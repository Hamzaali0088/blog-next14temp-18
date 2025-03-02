import React from 'react'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
import Image from 'next/image'
import banner from '@/public/images/about.png' 
import Container from '@/components/common/Container'
import { getDomain, getImagePath, callBackendApi } from '@/lib/myFun'
export default function about({logo, categories, imagePath, blog_list}) {
  return (
    <div className='\'>
      <Navbar logo={logo} categories={categories} imagePath={imagePath} />
      <Container className='flex flex-col py-24 pt-40 items-center justify-center '>
        <h2 className='text-6xl  text-center sm:text-9xl font-bold font-montserrat uppercase '>Clean & Simple</h2>
        <p className=' text-5xl font-montserrat text-center font-semibold py-12'>About me and my blog</p>
        <div className='relative px-6 sm:px-0 w-full sm:w-[500px] sm:h-[500px] pt-12'>
        <Image src={banner} alt='banner' width={10000} height={10000} priority /> 
        </div>
        
        <div className='text-4xl font-bold pt-20 font-montserrat uppercase'>
        <div className='flex flex-col gap-6 max-w-[1100px] mx-auto'>
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
      </Container>
      <Footer  logo={logo} categories={categories} imagePath={imagePath} blog_list={blog_list}/>
    </div>
  )
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