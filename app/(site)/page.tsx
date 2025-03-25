import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import HomeSearch from "@/components/Home/HomeSearch";
import Discovery from "@/components/Home/Discovery";
import BranchList from "@/components/Home/BranchList";

export const metadata: Metadata = {
  title: "Next.js Starter Template for SaaS Startups - Solid SaaS Boilerplate",

  // other metadata
  description: "This is Home for Solid Pro"
};

export default function Home() {
  return (
    <main>
      {/* <Hero />
      <Brands />
      <Feature />
      <About />
      <FeaturesTab />
      <FunFact />
      <Integration />
      <CTA />
      <FAQ />
      <Testimonial />
      <Pricing />
      <Contact />
      <Blog /> */}


      <div className="MuiContainer-root MuiContainer-maxWidthLg home-page css-4tyo4o"
        style={{ padding: 0, maxWidth: '100%', display: 'block' }}>
        <div className="sc-htJRVC dIAeWy container-fluid">
          <div className="swiper">
            <div className="swiper-pagination"></div>
            <div className="swiper-wrapper"></div>
          </div>
          <HomeSearch />
        </div>
        <Discovery />
        <BranchList/>
        <span className="" style={{ display: 'inline-block' }}></span>
      </div>
    </main>
  );
}
