import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog Page - Solid SaaS Boilerplate",

    // other metadata
    description: "This is Blog page for Solid Pro"
};

const Map = async () => {
    return (
        <>
            <div className="sc-cKVNtL fozkDR">
                <div className="map-img">
                    <span className=" lazy-load-image-background blur" style={{ backgroundImage: 'url()', backgroundSize: '100% 100%', color: 'transparent', display: 'inline-block' }}>
                        <span className="" style={{ display: 'inline-block' }}>
                        </span>
                    </span>
                </div>
                <div className="btn-container">
                    <button className="sc-hrJsxi cBQDqt btn btn-content">
                        <span className="body-2-semi-bold">Xem bản đồ
                        </span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Map;
