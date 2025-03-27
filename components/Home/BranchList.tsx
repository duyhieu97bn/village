"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MenuBranch from "./BranchComponent/MenuBranch";
import LocationSelect from "./BranchComponent/LocationSelect";

const BranchList = () => {
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

    <div id="branch-list-id" className="sc-jOxtWs ioxDAl scroll-offset">
      <div className="branch-list-container">
        <div className="header-container">
          <div className="brand-filter">
            <div className="title">Điểm đến
            </div>
          </div>
          <LocationSelect></LocationSelect>

        </div>
        <div className="header-container">
          <div className="brand-filter">
            <div className="brand active">
              <div className="brand-filter-title vi">Tất cả thương hiệu
              </div>
            </div>
            <div className="brand-container">
              <div className="brand">
                <div className="sc-dUbtfd cnUsHb" id="findroom_brand-filter_signature"><span className="sub-brand-img-container lazy-load-image-background blur lazy-load-image-loaded" style={{ color: 'transparent', display: 'inline-block' }}>
                  <img src="/images/sub-brand/signature-black.svg" alt="signature" title="signature" className="sub-brand-img" id="findroom_brand-filter_signature" /></span>
                </div>
              </div>
              <div className="body-1-regular brand-note">Bộ sưu tập Không gian nghỉ dưỡng tại các vị trí đắc địa bậc nhất, đặc trưng bởi câu chuyện bản địa trong từng thiết kế.
              </div>
            </div>
            <div className="brand-container">
              <div className="brand">
                <div className="sc-dUbtfd cnUsHb" id="findroom_brand-filter_hotel"><span className="sub-brand-img-container lazy-load-image-background blur lazy-load-image-loaded" style={{ color: 'transparent', display: 'inline-block' }}>
                  <img src="/images/sub-brand/hotel-black.svg" alt="hotel" title="hotel" className="sub-brand-img" id="findroom_brand-filter_hotel" /></span>
                </div>
              </div>
              <div className="body-1-regular brand-note">Bộ sưu tập Khách sạn Thế hệ mới với thiết kế “bespoke” và các tiện ích tự do như cafe, co-working, bếp chung cho bạn tối đa trải nghiệm.
              </div>
            </div>
            <div className="brand-container">
              <div className="brand">
                <div className="sc-dUbtfd cnUsHb" id="findroom_brand-filter_living"><span className="sub-brand-img-container lazy-load-image-background blur lazy-load-image-loaded" style={{ color: 'transparent', display: 'inline-block' }}>
                  <img src="/images/sub-brand/living-black.svg" alt="living" title="living" className="sub-brand-img" id="findroom_brand-filter_living" /></span>
                </div>
              </div>
              <div className="body-1-regular brand-note">Không gian sống đặc trưng bởi mảng xanh, cà phê và không gian cộng đồng để bạn dễ dàng kết nối với bản thân và mọi người.
              </div>
            </div>
            <div className="brand-container">
              <div className="brand">
                <div className="sc-dUbtfd cnUsHb" id="findroom_brand-filter_express"><span className="sub-brand-img-container lazy-load-image-background blur lazy-load-image-loaded" style={{ color: 'transparent', display: 'inline-block' }}>
                  <img src="/images/sub-brand/express-black.svg" alt="express" title="express" className="sub-brand-img" id="findroom_brand-filter_express" /></span>
                </div>
              </div>
              <div className="body-1-regular brand-note">Lựa chọn khách sạn tiện nghi tại các vị trí trung tâm để bạn dễ dàng hoà mình vào nhịp sống thành phố.
              </div>
            </div>
            <div className="btn mv-btn-browse body-1-medium">Xem tất cả
            </div>
          </div>
          <div className="result-container">
            <div className="buildings" style={{ opacity: 1, transform: 'none', transformOrigin: '0px 0px 0px', transition: 'opacity 800ms cubic-bezier(0.4, 0, 0.2, 1), transform 533ms cubic-bezier(0.4, 0, 0.2, 1)' }}>
              {MenuBranch.map((BranchItem, key) => (
                <div className="sc-eLwHnm hYgfPl cursor-pointer" key={key}>
                  <div className="thumbnails-carousel">
                    <div className="position-relative">
                      <div>
                        <div className="content-image coming-soon-state">
                          <div className="background-image">
                          </div>
                          <img src={`${BranchItem.href}`} className="image-front scale" alt="EXPRESS BY M VILLAGE GLOBAL CITY" title="EXPRESS BY M VILLAGE GLOBAL CITY" />
                        </div>
                        <div className="image-gradient" style={{ height: '72px' }}>

                        </div>
                        <div className="sc-dUbtfd bJotVa" id="findroom_brand-filter_express">
                          <span className="sub-brand-img-container lazy-load-image-background blur lazy-load-image-loaded" style={{ color: 'transparent', display: 'inline-block' }}>
                            <img src={`${BranchItem.image}`} alt="express" title="express" className="sub-brand-img" id="findroom_brand-filter_express" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="info-container">
                    <div className="title-3-medium">
                      <div>{BranchItem.title}
                      </div>
                      <div>{BranchItem.name}
                      </div>
                    </div>
                    <div className="body-1-medium-f16a24 book-btn">
                      <span>Đặt ngay </span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 12L12 4" stroke="#F16A24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M5.5 4H12V10.5" stroke="#F16A24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="page-container"><nav aria-label="pagination navigation" className="MuiPagination-root MuiPagination-text css-0"><ul className="MuiPagination-ul css-nhb8h9">
              <li>
                <button className="MuiButtonBase-root Mui-disabled MuiPaginationItem-root MuiPaginationItem-sizeMedium MuiPaginationItem-text MuiPaginationItem-circular Mui-disabled MuiPaginationItem-previousNext css-1ffrvns" tabIndex={-1} type="button" disabled aria-label="Go to previous page">
                  <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiPaginationItem-icon css-4jxg1v" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="NavigateBeforeIcon">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
                  </svg>
                </button>

              </li>
              <li>
                <button className="MuiButtonBase-root MuiPaginationItem-root MuiPaginationItem-sizeMedium MuiPaginationItem-text MuiPaginationItem-circular Mui-selected MuiPaginationItem-page css-1ffrvns" tabIndex={0} type="button" aria-current="true" aria-label="page 1">1
                  <span className="MuiTouchRipple-root css-w0pj6f"></span>
                </button>
              </li>
              <li>
                <button className="MuiButtonBase-root MuiPaginationItem-root MuiPaginationItem-sizeMedium MuiPaginationItem-text MuiPaginationItem-circular MuiPaginationItem-page css-1ffrvns" tabIndex={0} type="button" aria-label="Go to page 2">2
                  <span className="MuiTouchRipple-root css-w0pj6f"></span>
                </button>
              </li>
              <li>
                <button className="MuiButtonBase-root MuiPaginationItem-root MuiPaginationItem-sizeMedium MuiPaginationItem-text MuiPaginationItem-circular MuiPaginationItem-page css-1ffrvns" tabIndex={0} type="button" aria-label="Go to page 3">3
                  <span className="MuiTouchRipple-root css-w0pj6f"></span>
                </button>
              </li>
              <li>
                <button className="MuiButtonBase-root MuiPaginationItem-root MuiPaginationItem-sizeMedium MuiPaginationItem-text MuiPaginationItem-circular MuiPaginationItem-page css-1ffrvns" tabIndex={0} type="button" aria-label="Go to page 4">4
                  <span className="MuiTouchRipple-root css-w0pj6f"></span>
                </button>
              </li>
              <li>
                <button className="MuiButtonBase-root MuiPaginationItem-root MuiPaginationItem-sizeMedium MuiPaginationItem-text MuiPaginationItem-circular MuiPaginationItem-page css-1ffrvns" tabIndex={0} type="button" aria-label="Go to page 5">5
                  <span className="MuiTouchRipple-root css-w0pj6f"></span>
                </button>
              </li>
              <li>
                <button className="MuiButtonBase-root MuiPaginationItem-root MuiPaginationItem-sizeMedium MuiPaginationItem-text MuiPaginationItem-circular MuiPaginationItem-page css-1ffrvns" tabIndex={0} type="button" aria-label="Go to page 6">6
                  <span className="MuiTouchRipple-root css-w0pj6f"></span>
                </button>
              </li>
              <li>
                <button className="MuiButtonBase-root MuiPaginationItem-root MuiPaginationItem-sizeMedium MuiPaginationItem-text MuiPaginationItem-circular MuiPaginationItem-previousNext css-1ffrvns" tabIndex={0} type="button" aria-label="Go to next page">
                  <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiPaginationItem-icon css-4jxg1v" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="NavigateNextIcon">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                  </svg>
                  <span className="MuiTouchRipple-root css-w0pj6f"></span>
                </button>
              </li></ul></nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// w-full delay-300

export default BranchList;
