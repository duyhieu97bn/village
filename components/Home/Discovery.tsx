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
            {/* for */}
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
            {/* for */}
            <div className="sc-bGaVxB jbvCKx">
              <div className="signature-card">
                <span className="w-100 lazy-load-image-background blur lazy-load-image-loaded" style={{ color: 'transparent', display: 'inline-block' }}><img sizes="800" src="https://img.mvillage.vn/LkmU6TmlBH8hROABzjMViOJITIM6YYjY0QUJI5nID0k/rs:fit:800:800/plain/https%3A%2F%2Fcdn-v2.mvillage.vn%2Fcms%2F1_e5299c52ec.jpg" alt="CHI NHÁNH MỚI: HỒ CHÍ MINH" title="CHI NHÁNH MỚI: HỒ CHÍ MINH" className="card-img-top" />
                </span>
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <div className="card-body__city mb-2">CHI NHÁNH MỚI: HỒ CHÍ MINH</div>
                    <div className="card-body__building-name mb-3">M Village Hotel Thi Sách</div>
                    <div className="card-body__description mb-4">Bước vào hành trình du hành Á Đông độc đáo giữa nhịp sống đậm bản sắc tại Phố Nhật, Quận 1. Đến và tận hưởng M Village Premier Hotel Thi Sách ngay hôm nay,
                    </div>
                  </div>
                  <div className="sc-fydGpi hyBzmv">Khám phá
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.00012 18L18.0001 6" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.25 6H18V15.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="sc-bGaVxB jbvCKx">
              <div className="signature-card">
                <span className="w-100 lazy-load-image-background blur lazy-load-image-loaded" style={{ color: 'transparent', display: 'inline-block' }}><img sizes="800" src="https://img.mvillage.vn/LkmU6TmlBH8hROABzjMViOJITIM6YYjY0QUJI5nID0k/rs:fit:800:800/plain/https%3A%2F%2Fcdn-v2.mvillage.vn%2Fcms%2F1_e5299c52ec.jpg" alt="CHI NHÁNH MỚI: HỒ CHÍ MINH" title="CHI NHÁNH MỚI: HỒ CHÍ MINH" className="card-img-top" />
                </span>
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <div className="card-body__city mb-2">CHI NHÁNH MỚI: HỒ CHÍ MINH</div>
                    <div className="card-body__building-name mb-3">M Village Hotel Thi Sách</div>
                    <div className="card-body__description mb-4">Bước vào hành trình du hành Á Đông độc đáo giữa nhịp sống đậm bản sắc tại Phố Nhật, Quận 1. Đến và tận hưởng M Village Premier Hotel Thi Sách ngay hôm nay,
                    </div>
                  </div>
                  <div className="sc-fydGpi hyBzmv">Khám phá
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.00012 18L18.0001 6" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.25 6H18V15.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="sc-bGaVxB jbvCKx">
              <div className="signature-card">
                <span className="w-100 lazy-load-image-background blur lazy-load-image-loaded" style={{ color: 'transparent', display: 'inline-block' }}><img sizes="800" src="https://img.mvillage.vn/LkmU6TmlBH8hROABzjMViOJITIM6YYjY0QUJI5nID0k/rs:fit:800:800/plain/https%3A%2F%2Fcdn-v2.mvillage.vn%2Fcms%2F1_e5299c52ec.jpg" alt="CHI NHÁNH MỚI: HỒ CHÍ MINH" title="CHI NHÁNH MỚI: HỒ CHÍ MINH" className="card-img-top" />
                </span>
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <div className="card-body__city mb-2">CHI NHÁNH MỚI: HỒ CHÍ MINH</div>
                    <div className="card-body__building-name mb-3">M Village Hotel Thi Sách</div>
                    <div className="card-body__description mb-4">Bước vào hành trình du hành Á Đông độc đáo giữa nhịp sống đậm bản sắc tại Phố Nhật, Quận 1. Đến và tận hưởng M Village Premier Hotel Thi Sách ngay hôm nay,
                    </div>
                  </div>
                  <div className="sc-fydGpi hyBzmv">Khám phá
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.00012 18L18.0001 6" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.25 6H18V15.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>
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
