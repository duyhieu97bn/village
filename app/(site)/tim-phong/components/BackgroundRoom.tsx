import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog Page - Solid SaaS Boilerplate",

    // other metadata
    description: "This is Blog page for Solid Pro"
};

const BlogPage = async () => {
    return (
        <>
            <div className="mt-4">
                <svg aria-labelledby="5w7rt9b-aria" role="img" viewBox="0 0 400 130">
                    <title id="5w7rt9b-aria">Loading...
                    </title>
                    <rect role="presentation" x="0" y="0" width="100%" height="100%" clip-path="url(#5w7rt9b-diff)" style={{ fill: 'url(#5w7rt9b-animated-diff)' }}>
                    </rect>
                    <defs>
                        <clipPath id="5w7rt9b-diff">
                            <rect x="0" y="0" rx="2" ry="2" width="160" height="130">
                            </rect>
                            <rect x="170" y="15" rx="2" ry="2" width="150" height="12">
                            </rect>
                            <rect x="170" y="40" rx="2" ry="2" width="100" height="8">
                            </rect>
                            <rect x="170" y="60" rx="2" ry="2" width="100" height="8">
                            </rect>
                            <rect x="170" y="80" rx="2" ry="2" width="100" height="8">
                            </rect>
                            <rect x="170" y="100" rx="2" ry="2" width="100" height="8">
                            </rect>
                            <rect x="330" y="55" rx="2" ry="2" width="60" height="15">
                            </rect>
                            <rect x="320" y="75" rx="2" ry="2" width="70" height="8">
                            </rect>
                            <rect x="310" y="90" rx="2" ry="2" width="80" height="5">
                            </rect>
                            <rect x="300" y="110" rx="2" ry="2" width="90" height="15">
                            </rect>
                        </clipPath>
                        <linearGradient id="5w7rt9b-animated-diff">
                            <stop offset="0%" stop-color="#f3f3f3" stop-opacity="1">
                                <animate attributeName="offset" values="-2; -2; 1" keyTimes="0; 0.25; 1" dur="1.2s" repeatCount="indefinite">
                                </animate>
                            </stop>
                            <stop offset="50%" stop-color="#ecebeb" stop-opacity="1">
                                <animate attributeName="offset" values="-1; -1; 2" keyTimes="0; 0.25; 1" dur="1.2s" repeatCount="indefinite">
                                </animate>
                            </stop>
                            <stop offset="100%" stop-color="#f3f3f3" stop-opacity="1">
                                <animate attributeName="offset" values="0; 0; 3" keyTimes="0; 0.25; 1" dur="1.2s" repeatCount="indefinite">
                                </animate>
                            </stop>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </>
    );
};

export default BlogPage;
