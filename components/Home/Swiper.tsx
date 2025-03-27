"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Discovery = () => {
    const [navigationOpen, setNavigationOpen] = useState(false);
    const [dropdownToggler, setDropdownToggler] = useState(false);
    const [stickyMenu, setStickyMenu] = useState(false);

    const pathUrl = usePathname();

    // Sticky menu
    // const handleStickyMenu = () => {
    //     if (window.scrollY >= 80) {
    //         setStickyMenu(true);
    //     } else {
    //         setStickyMenu(false);
    //     }
    // };

    // useEffect(() => {
    //     window.addEventListener("scroll", handleStickyMenu);
    // });

    return (

        <div className="swiper swiper-fade swiper-initialized swiper-horizontal swiper-pointer-events">
            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                <span className="swiper-pagination-bullet"></span>
                <span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
                <span className="swiper-pagination-bullet"></span>
                <span className="swiper-pagination-bullet"></span>
            </div>
            <div className="swiper-wrapper" style={{ transitionDuration: '3000ms' }}>
                <div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="3" style={{ width: '1905px', transitionDuration: '3000ms', opacity: 0, transform: 'translate3d(0px, 0px, 0px)' }}>
                    <div className="sc-cbTzjv dHemIn">
                        <div className="banner-item-v2 item active">
                            <div><img src="https://img.mvillage.vn/9p5ZyUvGO0agpmU4qmuIPsXYGiLqXAl4qf-EfqXLjoA/rs:fit:2500:2500/plain/https%3A%2F%2Fcdn-v2.mvillage.vn%2Fcms%2Fhero_banner_more_vi_81ca99653f.png" alt="hero-banner-more-vi.png" title="hero-banner-more-vi.png" className="banner-image" />
                                <div className="banner-content px-4">
                                    <div className="banner-button"><button className="btn btn-explore w-191">Khám phá</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide swiper-slide-prev" data-swiper-slide-index="0" style={{ width: '1905px', transitionDuration: '3000ms', opacity: 0, transform: 'translate3d(-1905px, 0px, 0px)' }}>
                    <div className="sc-cbTzjv dHemIn">
                        <div className="banner-item-v2 item active">
                            <div><img src="https://img.mvillage.vn/5xkpP-YuDm-gXBQfaUEB_bSFw5maJxqDv3eN02JKID0/rs:fit:2500:2500/plain/https%3A%2F%2Fcdn-v2.mvillage.vn%2Fcms%2FWeb_HN_2_3bb7f64473.jpeg" alt="Web_HN_2.jpeg" title="Web_HN_2.jpeg" className="banner-image" />
                                <div className="banner-content px-4">
                                    <div className="banner-button"><button className="btn btn-explore w-191">Khám phá</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide swiper-slide-visible swiper-slide-active" data-swiper-slide-index="1" style={{ width: '1905px', transitionDuration: '3000ms', opacity: 1, transform: 'translate3d(-3810px, 0px, 0px)' }}>
                    <div className="sc-cbTzjv dHemIn">
                        <div className="banner-item-v2 item active">
                            <div><img src="https://img.mvillage.vn/zknpeB1AYoSP0S2HoKsg8kFneMej4qfshUb-5pJg7Ak/rs:fit:2500:2500/plain/https%3A%2F%2Fcdn-v2.mvillage.vn%2Fcms%2F0703_DNH_Web_7f0d4abb0d.png" alt="0703_DNH_Web.png" title="0703_DNH_Web.png" className="banner-image" />
                                <div className="banner-content px-4">
                                    <div className="banner-button"><button className="btn btn-explore w-191">Khám phá</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide swiper-slide-next" data-swiper-slide-index="2" style={{ width: '1905px', transitionDuration: '3000ms', opacity: 0, transform: 'translate3d(-5715px, 0px, 0px)' }}>
                    <div className="sc-cbTzjv dHemIn">
                        <div className="banner-item-v2 item active">
                            <div><img src="https://img.mvillage.vn/ownN2h75lbTmg3Jn7di4JpAFMa-eohlZyN8v3csaA38/rs:fit:2500:2500/plain/https%3A%2F%2Fcdn-v2.mvillage.vn%2Fcms%2Fhero_banner_Recovered_06_e360dbb92f.png" alt="hero banner [Recovered]-06.png" title="hero banner [Recovered]-06.png" className="banner-image" />
                                <div className="banner-content px-4">
                                    <div className="banner-button"><button className="btn btn-explore w-191">Khám phá</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide" data-swiper-slide-index="3" style={{ width: '1905px', transitionDuration: '3000ms', opacity: 0, transform: 'translate3d(-7620px, 0px, 0px)' }}>
                    <div className="sc-cbTzjv dHemIn">
                        <div className="banner-item-v2 item active">
                            <div><img src="https://img.mvillage.vn/9p5ZyUvGO0agpmU4qmuIPsXYGiLqXAl4qf-EfqXLjoA/rs:fit:2500:2500/plain/https%3A%2F%2Fcdn-v2.mvillage.vn%2Fcms%2Fhero_banner_more_vi_81ca99653f.png" alt="hero-banner-more-vi.png" title="hero-banner-more-vi.png" className="banner-image" />
                                <div className="banner-content px-4">
                                    <div className="banner-button"><button className="btn btn-explore w-191">Khám phá</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index="0" style={{ width: '1905px', transitionDuration: '3000ms', opacity: 0, transform: 'translate3d(-9525px, 0px, 0px)' }}>
                    <div className="sc-cbTzjv dHemIn">
                        <div className="banner-item-v2 item active">
                            <div><img src="https://img.mvillage.vn/5xkpP-YuDm-gXBQfaUEB_bSFw5maJxqDv3eN02JKID0/rs:fit:2500:2500/plain/https%3A%2F%2Fcdn-v2.mvillage.vn%2Fcms%2FWeb_HN_2_3bb7f64473.jpeg" alt="Web_HN_2.jpeg" title="Web_HN_2.jpeg" className="banner-image" />
                                <div className="banner-content px-4">
                                    <div className="banner-button"><button className="btn btn-explore w-191">Khám phá</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

// w-full delay-300

export default Discovery;
