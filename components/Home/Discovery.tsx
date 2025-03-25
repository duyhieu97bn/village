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

        <div className="sc-bSqaIl bGvJkT container my-5">
          <div className="nso-title text-center">Khám phá điều mới lạ tại M Village</div>
          <div className="card-container">
            <div className="swiper nso-swiper">
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
              <div className="swiper-wrapper">
                <div className="swiper-slide nso-swiper-item">
                  <div className="sc-jlsrNB gkFETT">
                    <div className="img" style={{ boxShadow: 'none' }}><span
                      className="MuiSkeleton-root MuiSkeleton-rectangular MuiSkeleton-pulse css-ke2h02"
                      style={{ width: '100%', height: '100%', borderRadius: '8px' }}></span></div>
                    <div className="content-container">
                      <div className="title"><span
                        className="MuiSkeleton-root MuiSkeleton-text MuiSkeleton-pulse css-1siz87r"
                        style={{ width: '50%', height: '20px' }}></span><span
                          className="MuiSkeleton-root MuiSkeleton-text MuiSkeleton-pulse css-1siz87r"
                          style={{ width: '60%', height: '20px' }}></span></div>
                      <div className="address"><span
                        className="MuiSkeleton-root MuiSkeleton-text MuiSkeleton-pulse css-1siz87r"
                        style={{ width: '100%', height: '14px' }}></span><span
                          className="MuiSkeleton-root MuiSkeleton-text MuiSkeleton-pulse css-1siz87r"
                          style={{ width: '100%', height: '14px' }}></span></div>
                      <div className="footer-container">
                        <div className="price"><span
                          className="MuiSkeleton-root MuiSkeleton-text MuiSkeleton-pulse css-1siz87r"
                          style={{ width: '80%', height: '24px' }}></span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide nso-swiper-item">
                  <div className="sc-jlsrNB gkFETT">
                    <div className="img" style={{ boxShadow: 'none' }}><span
                      className="MuiSkeleton-root MuiSkeleton-rectangular MuiSkeleton-pulse css-ke2h02"
                      style={{ width: '100%', height: '100%', borderRadius: '8px' }}></span></div>
                    <div className="content-container">
                      <div className="title"><span
                        className="MuiSkeleton-root MuiSkeleton-text MuiSkeleton-pulse css-1siz87r"
                        style={{ width: '50%', height: '20px' }}></span><span
                          className="MuiSkeleton-root MuiSkeleton-text MuiSkeleton-pulse css-1siz87r"
                          style={{ width: '60%', height: '20px' }}></span></div>
                      <div className="address"><span
                        className="MuiSkeleton-root MuiSkeleton-text MuiSkeleton-pulse css-1siz87r"
                        style={{ width: '100%', height: '14px' }}></span><span
                          className="MuiSkeleton-root MuiSkeleton-text MuiSkeleton-pulse css-1siz87r"
                          style={{ width: '100%', height: '14px' }}></span></div>
                      <div className="footer-container">
                        <div className="price"><span
                          className="MuiSkeleton-root MuiSkeleton-text MuiSkeleton-pulse css-1siz87r"
                          style={{ width: '80%', height: '24px' }}></span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide nso-swiper-item">
                  <div className="sc-jlsrNB gkFETT">
                    <div className="img" style={{ boxShadow: 'none' }}><span
                      className="MuiSkeleton-root MuiSkeleton-rectangular MuiSkeleton-pulse css-ke2h02"
                      style={{ width: '100%', height: '100%', borderRadius: '8px' }}></span></div>
                    <div className="content-container">
                      <div className="title"><span
                        className="MuiSkeleton-root MuiSkeleton-text MuiSkeleton-pulse css-1siz87r"
                        style={{ width: '50%', height: '20px' }}></span><span
                          className="MuiSkeleton-root MuiSkeleton-text MuiSkeleton-pulse css-1siz87r"
                          style={{ width: '60%', height: '20px' }}></span></div>
                      <div className="address"><span
                        className="MuiSkeleton-root MuiSkeleton-text MuiSkeleton-pulse css-1siz87r"
                        style={{ width: '100%', height: '14px' }}></span><span
                          className="MuiSkeleton-root MuiSkeleton-text MuiSkeleton-pulse css-1siz87r"
                          style={{ width: '100%', height: '14px' }}></span></div>
                      <div className="footer-container">
                        <div className="price"><span
                          className="MuiSkeleton-root MuiSkeleton-text MuiSkeleton-pulse css-1siz87r"
                          style={{ width: '80%', height: '24px' }}></span></div>
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
