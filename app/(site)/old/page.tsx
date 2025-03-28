import { Metadata } from "next";
import Hero from "@/components/Old/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/Old/FeaturesTab";
import FunFact from "@/components/Old/FunFact";
import Integration from "@/components/Old/Integration";
import CTA from "@/components/Old/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Old/Pricing";
import Contact from "@/components/Old/Contact";
import Blog from "@/components/Old/Blog";
import Testimonial from "@/components/Old/Testimonial";

export const metadata: Metadata = {
  title: "Next.js Starter Template for SaaS Startups - Solid SaaS Boilerplate",

  // other metadata
  description: "This is Home for Solid Pro"
};

export default function Home() {
  return (
    <main>
      <Hero />
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
      <Blog />
    </main>
  );
}
