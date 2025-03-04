import Container from "@/components/common/Container";
import FullContainer from "@/components/common/FullContainer";
import Navbar from "@/components/common/Navbar";
import Banner from "@/components/container/Banner";
import Image from "next/image";
import bannerimage from "@/public/images/banner.jpg";
import Footer from "@/components/common/Footer";
import Head from "next/head";
import Link from "next/link";
import { callBackendApi, getDomain, getImagePath, sanitizeUrl } from "@/lib/myFun";
export default function Home({ 
  logo,
  meta,
  domain,
  imagePath,
  favicon,
  categories,
  banner,
  blog_list }) {



  return (
    <div>
      <Head>
        <title>{meta?.title}</title>
        <meta name="description" content={meta?.description} />
      </Head>
      <FullContainer className="bg-secondarydark">
        <Navbar logo={logo} categories={categories} imagePath={imagePath} />
        <Banner data={banner.value}  image={`${imagePath}/${banner?.file_name}`} />
        <Container>
        <h1 className="pt-10 text-2xl md:text-5xl font-bold font-montserrat">
          Latest Articles
        </h1>
      </Container>
      <Cardtwocolumn data={blog_list} className={"sm:hidden"} imagePath={imagePath} />
      <Cardthreecolumn data={blog_list} className="hidden sm:block lg:hidden" imagePath={imagePath} />
      <Cardfourcolumn data={blog_list} className="hidden lg:block" imagePath={imagePath} /> 
      <Footer  logo={logo} categories={categories} imagePath={imagePath} blog_list={blog_list}/>
      </FullContainer>
    </div>
  );
}





function Cardtwocolumn({ data = [], className ,imagePath}) {
  const datapart2 = Math.ceil(data.length / 2);

  const data1 = data.slice(0, datapart2);
 
  const data2 = data.slice(datapart2, data.length);

  return (
    <Container className={`my-8 ${className}`}>
      <div className="grid grid-cols-2 gap-4 md:gap-8">
        <div className="flex flex-col gap-8">
          {data1.map((item, index) => (
            <div key={index} className=" ">
              <Card1 item={item} index={index} divider={3} imagePath={imagePath} />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-8">
          {data2.map((item, index) => (
            <div key={index} className=" ">
              <Card1 item={item} index={index} divider={1} imagePath={imagePath} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

function Cardthreecolumn({ data = [], className, imagePath }) {
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
              <Card1 item={item} index={index} divider={3} imagePath={imagePath} />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-8">
          {data2.map((item, index) => (
            <div key={index}>
              <Card1 item={item} index={index} divider={1} imagePath={imagePath} />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-8">
          {data3.map((item, index) => (
            <div key={index}>
              <Card1 item={item} index={index} divider={2} imagePath={imagePath} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

function Cardfourcolumn({ data = [], className, imagePath }) {

  const datapart4 = Math.floor(data.length / 4); // Floor to avoid exceeding index

  const data1 = data.slice(0, datapart4);
  const data2 = data.slice(datapart4, datapart4 * 2);
  const data3 = data.slice(datapart4 * 2, datapart4 * 3);
  const data4 = data.slice(datapart4 * 3); // No need for end index, it will take remaining
  


  return (
    <Container className={`my-8 ${className}`}>
      <div className="grid grid-cols-4 gap-8">
        <div className="flex flex-col gap-8">
          {data1.map((item, index) => (
            <div key={index} className=" ">
              <Card1 item={item} index={index} divider={3} imagePath={imagePath} />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-8">
          {data2.map((item, index) => (
            <div key={index} className=" ">
              <Card1 item={item} index={index} divider={1} imagePath={imagePath} />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-8">
          {data3.map((item, index) => (
            <div key={index} className=" ">
              <Card1 item={item} index={index} divider={2} imagePath={imagePath} />
            </div>
          ))}
        </div>
        <div className="flex  flex-col gap-8 ">
          {data4.map((item, index) => (
            <div key={index} className="bg-white ">
              <Card1 item={item} index={index} divider={5} imagePath={imagePath} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}



function Card1({ item, index, imagePath }) {

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
              src={`${imagePath}/${item?.image}`}
              alt={item.title}
              width={1000}
              height={1000}
            />
          </div>
          <div className="flex flex-row gap-2 pt-2 items-center w-full">
            <div className="text-gray-500 text-xs md:text-base hidden md:block">{item?.published_at}</div>
            <span className="text-gray-500 hidden md:block">/</span>
            <Link href={`/category/${sanitizeUrl(item?.article_category)}`} className={hoverme}>{item?.article_category}</Link>

          </div>
          <h2 className="text-black text-sm md:text-lg font-semibold">{item.title}</h2>
          <p className="text-gray-500 py-1 text-sm md:text-base line-clamp-4">{item.description}</p>
          <div className="flex flex-row gap-2 items-center justify-between w-full">
            <Link href={`/${sanitizeUrl(item?.title)}`} className={hoverme}>
              Read More
            </Link> 
            <div className="text-gray-500 text-xs md:text-base md:hidden">{item.published_at}</div>
          </div>
        </div>
      </div>
    </>
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