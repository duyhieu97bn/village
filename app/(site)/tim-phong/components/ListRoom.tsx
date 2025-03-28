import BackgroundRoom from "./BackgroundRoom";
import LeftSideRoom from "./LeftSideRoom/Index";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog Page - Solid SaaS Boilerplate",

    // other metadata
    description: "This is Blog page for Solid Pro"
};

const BlogPage = async () => {
    return (
        <>
            <div className="container-wrapper find-room-container mt-0">
                <div className="px-0 px-sm-3 branch-list-container container ">
                    <div className="row branch-list-content">
                        <div className="transition-width col-12 col-md-8 col-lg-9">
                            <div className="mt-0 mt-5 pt-md-5">
                                {[1,2,3].map((el, key) => (
                                    <BackgroundRoom />
                                 ))}
                            </div>
                        </div>
                        <LeftSideRoom />
                    </div>
                </div>
            </div>

        </>
    );
};

export default BlogPage;
