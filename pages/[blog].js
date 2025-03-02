import React from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Banner from "@/components/container/Banner";
import Slider from "@/components/container/slider";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import Container from "@/components/common/Container";
import BreadCrumb from "@/components/container/BreadCrumb";
import { useRouter } from "next/router";
import MarkdownIt from "markdown-it";
import {
  callBackendApi,
  getDomain,
  getImagePath,
  sanitizeUrl,
} from "@/lib/myFun";
import Head from "next/head";
export default function blog({
  categories,
  logo,
  imagePath,
  banner,
  blog_list,
  my_blog,
  meta,
  isValidBlog,
  project_id,
  categoryExists,
}) {
  const markdownIt = new MarkdownIt();
  const content = markdownIt.render(
    my_blog?.value?.articleContent?.replaceAll(
      `https://api.sitebuilderz.com/images/project_images/${project_id}/`,
      imagePath
    ) || ""
  );

  return (
    <div>
      <Head>
        <title>{meta?.title}</title>
        <meta name="description" content={meta?.description} />
      </Head>
      <Navbar logo={logo} categories={categories} />
      <BreadCrumb title="Blog" />
      <SingleBlog
        content={content}
        blog_list={blog_list}
        imagePath={imagePath}
        categories={categories}
        my_blog={my_blog}
      />
      <div>
        <Slider blog_list={blog_list} imagePath={imagePath} />
      </div>
      <Footer
        logo={logo}
        categories={categories}
        imagePath={imagePath}
        blog_list={blog_list}
      />
    </div>
  );
}

function SingleBlog({ blog_list, imagePath, categories, my_blog, content }) {
  const latestdata = blog_list?.slice(0, 6) || [];

  return (
    <Container className="py-6">
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 justify-between max-w-[1100px] mx-auto">
        <div className="col-span-2 flex flex-col gap-6">
          <Image
            src={`${imagePath}/${my_blog?.file_name}`}
            width={1500}
            height={1500}
            alt="banner"
          />
          <h2 className="prose lg:prose-xl font-montserrat ">
            {" "}
            <div dangerouslySetInnerHTML={{ __html: content}} />
          </h2>
        </div>
        <div className="col-span-1 relative">
          <RightSidebar
            latestdata={latestdata}
            categories={categories}
            imagePath={imagePath}
          />
        </div>
      </div>
    </Container>
  );
}

function RightSidebar({ latestdata, categories, imagePath }) {
  return (
    <div className="sticky top-20 flex flex-col gap-6 ">
      <div className="px-4 py-3 flex items-center justify-between gap-2 border w-full border-gray-300 rounded-[4px]">
        <input
          type="text"
          placeholder="Search..."
          className="outline-none border-none bg-transparent w-full"
        />
        <Search className="rotate-90 w-4 h-4" />
      </div>

      <div className="space-y-2">
        <h2 className="text-md font-montserrat font-bold">About Me</h2>
        <div className="text-gray-500 font-montserrat text-md">
          Lorem ipsum dolor sit amet, consec tetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-md font-montserrat font-bold">Categories</h2>
        <div className="flex flex-col gap-2">
          {categories?.map((category, index) => (
            <Link
              href={`/category/${sanitizeUrl(category?.title)}`}
              key={index}
              className="text-gray-500 hover:text-black hover:scale-105 transition-all duration-300 cursor-pointer font-montserrat text-md border rounded-[4px] w-full px-4 py-3 border-gray-300 hover:border-black"
            >
              {category?.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-md font-montserrat font-bold">Latest Posts</h2>
        <div className="flex flex-col gap-8">
          {latestdata.map((item, index) => (
            <div key={index} className="flex gap-4 items-center">
              <Link
                href={`/category/${sanitizeUrl(
                  item?.article_category
                )}/${sanitizeUrl(item?.title)}`}
                className="min-w-[70px] h-[70px] relative rounded-full overflow-hidden"
              >
                <Image
                  src={`${imagePath}/${item?.image}`}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </Link>
              <div className="flex flex-col">
                <h2 className="text-md leading-tight font-montserrat font-semibold line-clamp-2">
                  {item.title}
                </h2>
                <p className="text-gray-500 font-montserrat text-sm mt-1">
                  {item?.published_at}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ req, query }) {
  const domain = getDomain(req?.headers?.host);
  const { blog } = query;

  const categories = await callBackendApi({ domain, tag: "categories" });
  const blog_list = await callBackendApi({ domain, tag: "blog_list" });

  const isValidBlog = blog_list?.data[0]?.value?.find(
    (item) => sanitizeUrl(item.title) === sanitizeUrl(blog)
  );

  if (!isValidBlog) {
    return {
      notFound: true,
    };
  }

  const my_blog = await callBackendApi({ domain, tag: isValidBlog?.key });
  const tag_list = await callBackendApi({ domain, tag: "tag_list" });
  const logo = await callBackendApi({ domain, tag: "logo" });
  const favicon = await callBackendApi({ domain, tag: "favicon" });
  const about_me = await callBackendApi({ domain, tag: "about_me" });
  const contact_details = await callBackendApi({
    domain,
    tag: "contact_details",
  });
  const layout = await callBackendApi({ domain, tag: "layout" });
  const nav_type = await callBackendApi({ domain, tag: "nav_type" });
  const blog_type = await callBackendApi({ domain, tag: "blog_type" });
  const footer_type = await callBackendApi({ domain, tag: "footer_type" });

  let project_id = logo?.data[0]?.project_id || null;
  let imagePath = await getImagePath(project_id, domain);

  return {
    props: {
      domain,
      imagePath,
      logo: logo?.data[0] || null,
      my_blog: my_blog?.data[0] || {},
      layout: layout?.data[0]?.value || null,
      blog_list: blog_list.data[0]?.value || null,
      tag_list: tag_list?.data[0]?.value || null,
      categories: categories?.data[0]?.value || [],
      about_me: about_me.data[0] || null,
      contact_details: contact_details.data[0]?.value || null,
      favicon: favicon?.data[0]?.file_name || null,
      nav_type: nav_type?.data[0]?.value || {},
      blog_type: blog_type?.data[0]?.value || {},
      footer_type: footer_type?.data[0]?.value || {},
      project_id,
    },
  };
}
