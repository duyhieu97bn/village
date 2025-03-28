import { Metadata } from "next";
import Map from "./Map";
import FilterPanelContainer from "./FilterPanelContainer";
import PlanTravel from "./PlanTravel";
import LocationPriority from "./LocationPriority";

export const metadata: Metadata = {
    title: "Blog Page - Solid SaaS Boilerplate",

    // other metadata
    description: "This is Blog page for Solid Pro"
};

const BlogPage = async () => {
    return (
        <>
            <div className="delay-width col-12 d-none d-md-block col-md-4 col-lg-3 ">
                <div className="sc-gDGHff jmZXGH py-4">
                    <Map />
                    <FilterPanelContainer />
                    <PlanTravel />
                    <LocationPriority />
                    
                </div>
            </div>
        </>
    );
};

export default BlogPage;
