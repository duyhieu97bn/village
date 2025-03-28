import { Metadata } from "next";
import HomeSearch from "@/components/Home/HomeSearch";
import Discovery from "@/components/Home/Discovery";
import BranchList from "@/components/Home/BranchList";
import Swiper from "@/components/Home/Swiper";
import RegisterMem from "@/components/Home/RegisterMem";
import Story from "@/components/Home/Story";

export const metadata: Metadata = {
  title: "Next.js Starter Template for SaaS Startups - Solid SaaS Boilerplate",

  // other metadata
  description: "This is Home for Solid Pro"
};

export default function Home() {
  return (
    <main>
      <div className="MuiContainer-root MuiContainer-maxWidthLg home-page css-4tyo4o"
        style={{ padding: 0, maxWidth: '100%', display: 'block' }}>
        <div className="sc-htJRVC dIAeWy container-fluid">
          <Swiper />
          <HomeSearch />
        </div>
        <Discovery />
        <BranchList />
        <RegisterMem />
        <Story />
        <span className="" style={{ display: 'inline-block' }}></span>
      </div>
    </main>
  );
}
