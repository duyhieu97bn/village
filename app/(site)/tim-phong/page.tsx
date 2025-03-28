import BlogData from "@/components/Old/Blog/blogData";
import BlogItem from "@/components/Old/Blog/BlogItem";
import Header from "./components/Header"
import ListRoom from "./components/ListRoom"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page - Solid SaaS Boilerplate",

  // other metadata
  description: "This is Blog page for Solid Pro"
};

const BlogPage = async () => {
  return (
    <>
      <div className="findroom-page">
          <Header />
          <ListRoom />
      </div>
    </>
  );
};

export default BlogPage;
