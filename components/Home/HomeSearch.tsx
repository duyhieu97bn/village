"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const HomeSearch = () => {
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

        <div className="filter-wrapper-v2" id="filter-wrapper-home-page">
            <div className="group-filter container">
                <div id="filter-find-room-el"
                    className="sc-cjrPHo gbAEbF filter-container is-home-page-container shadow-container">
                    <div className="sc-igXgud fLWsgq px-0 container is-home-page">
                        <div className="sc-JEhMO ccakUb filter-header-content-inner is-home-page-inner">
                            <div className="sc-itWPBs MItUj">
                                <div id="filter-location-container"
                                    className="sc-gslxeA dKOFYG filter-customer-box text-left sc-hGnimi cpnKBf filter-customer-box--no-border is-home-page">
                                    <div className="filter-customer-box__title-wrapper w-100">
                                        <div className="filter-customer-box__desc-wrapper w-100 pr-3">
                                            <div className="title">Chọn vị trí</div>
                                            <input
                                                id="search-location-input"
                                                className="filter-customer-box__search-input body-2-medium text-truncate"
                                                placeholder="Tìm điểm đến" value="" />
                                        </div>
                                    </div>
                                </div><svg className="div-line" xmlns="http://www.w3.org/2000/svg" width="2"
                                    height="30" viewBox="0 0 2 30" fill="none">
                                    <rect x="0.5" y="30" width="30" height="1"
                                        transform="rotate(-90 0.5 30)" fill="#E5E7EB"></rect>
                                </svg>
                                <div id="filter-range-date-container"
                                    className="sc-hjGZqJ dLOhvW filter-range-date__container filter-range-date__container--no-border is-home-page sc-ehIJor krbhTw">
                                    <div className="filter-range-date__content">
                                        <div className="filter-range-date__content-item is-active">
                                            <div className="filter-range-date-trigger__container">
                                                <div className="filter-range-date-trigger__label">Nhận phòng
                                                </div>
                                                <div className="filter-range-date-trigger__date-text">T5 23
                                                    Th01 2025</div>
                                            </div>
                                        </div><svg className="div-line" xmlns="http://www.w3.org/2000/svg"
                                            width="2" height="30" viewBox="0 0 2 30" fill="none">
                                            <rect x="0.5" y="30" width="30" height="1"
                                                transform="rotate(-90 0.5 30)" fill="#E5E7EB"></rect>
                                        </svg><span className="mobile-divider">-</span>
                                        <div className="filter-range-date__content-item">
                                            <div className="filter-range-date-trigger__container">
                                                <div className="filter-range-date-trigger__label">Trả phòng
                                                </div>
                                                <div className="filter-range-date-trigger__date-text">T6 24
                                                    Th01 2025</div>
                                            </div>
                                        </div>
                                    </div><svg className="div-line visible-mobile"
                                        xmlns="http://www.w3.org/2000/svg" width="2" height="30"
                                        viewBox="0 0 2 30" fill="none">
                                        <rect x="0.5" y="30" width="30" height="1"
                                            transform="rotate(-90 0.5 30)" fill="#E5E7EB"></rect>
                                    </svg>
                                </div>
                                <div id="filter-occupancy-container"
                                    className="sc-cLpAjG kbkcUh filter-occupancy-box text-left cursor-pointer sc-iukxot cqVUBD filter-occupancy-box--no-border is-home-page">
                                    <div className="filter-occupancy-box__title-wrapper">
                                        <div className="filter-occupancy-box__desc-wrapper">
                                            <div className="title visible-desktop">Số khách</div>
                                            <div className="detail">
                                                <div><span className="count">2 <span
                                                    className="visible-on-mobile">Số
                                                    khách</span></span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc-dcgwPl bvdLco"><button
                                className="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root sc-iIUQWv ezrItM is-circle sc-DtmNo hWjeOW filter-header__apply-button primary-btn ml-3 css-vfuakh"
                                tabIndex={0} type="button"><span className="d-none d-lg-block">Tìm
                                    phòng</span><svg className="d-block d-lg-none" width="19"
                                        height="20" viewBox="0 0 19 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M17.2185 16.8792L12.7345 12.3952C13.812 11.1016 14.3494 9.44236 14.2347 7.76269C14.1201 6.08301 13.3622 4.51219 12.1189 3.37702C10.8756 2.24184 9.2425 1.62971 7.55935 1.66795C5.8762 1.70619 4.27258 2.39187 3.08211 3.58235C1.89163 4.77283 1.20595 6.37644 1.16771 8.05959C1.12946 9.74275 1.7416 11.3758 2.87677 12.6192C4.01195 13.8625 5.58276 14.6203 7.26244 14.735C8.94212 14.8496 10.6013 14.3123 11.8949 13.2347L16.3789 17.7187L17.2185 16.8792ZM2.37475 8.21874C2.37475 7.16185 2.68815 6.12869 3.27533 5.24991C3.86251 4.37114 4.69709 3.68622 5.67353 3.28176C6.64998 2.87731 7.72443 2.77148 8.76101 2.97767C9.7976 3.18386 10.7498 3.6928 11.4971 4.44014C12.2444 5.18748 12.7534 6.13964 12.9596 7.17623C13.1658 8.21282 13.0599 9.28726 12.6555 10.2637C12.251 11.2402 11.5661 12.0747 10.6873 12.6619C9.80855 13.2491 8.77539 13.5625 7.7185 13.5625C6.30173 13.5609 4.94344 12.9974 3.94163 11.9956C2.93983 10.9938 2.37632 9.63551 2.37475 8.21874Z"
                                        fill="white"></path>
                                </svg></button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// w-full delay-300

export default HomeSearch;
