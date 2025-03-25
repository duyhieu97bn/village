"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
            <div className="title">Điểm đến</div>
          </div>
          <div className="location-filter d-flex align-items-center">
            <div className="locations tab-navigate-button">
              <div className="MuiTabs-root sc-bTfYFJ hLTLFh css-jge34e">
                <div style={{ width: '99px', height: '99px', position: 'absolute', top: '-9999px', overflow: 'scroll' }}
                  className="MuiTabs-scrollableX MuiTabs-hideScrollbar css-oqr85h"></div>
                <div className="MuiTabs-scroller MuiTabs-hideScrollbar MuiTabs-scrollableX css-12qnib"
                  style={{ overflow: 'hidden', marginBottom: 0 }}>
                  <div className="MuiTabs-flexContainer css-k008qs" role="tablist"></div>
                </div>
              </div>
            </div>
            <div className="locations w-100 tab-navigate-button d-flex">
              <div className="d-flex flex-row w-100 justify-content-md-center">
                <div
                  className="d-flex flex-row overflow-auto position-relative MuiBox-root css-0">
                  <div className="MuiTabs-root common-tab-container css-jge34e">
                    <div style={{ width: '99px', height: '99px', position: 'absolute', top: '-9999px', overflow: 'scroll' }}
                      className="MuiTabs-scrollableX MuiTabs-hideScrollbar css-oqr85h">
                    </div>
                    <div className="MuiTabs-scroller MuiTabs-hideScrollbar MuiTabs-scrollableX css-12qnib"
                      style={{ overflow: 'hidden', marginBottom: 0 }}>
                      <div className="MuiTabs-flexContainer css-k008qs" role="tablist">
                        <button
                          className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary Mui-selected css-1cy7a6h"
                          tabIndex={0} type="button" role="tab"
                          aria-selected="true">
                          <div className="location location active">Tất cả</div><span
                            style={{ display: 'none' }}
                            className="MuiTabs-indicator css-3eqeqk"></span>
                        </button></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-container">
          <div className="brand-filter">
            <div className="brand active">
              <div className="brand-filter-title vi">Tất cả thương hiệu</div>
            </div>
            <div className="btn mv-btn-browse body-1-medium">Xem tất cả</div>
          </div>
          <div className="result-container">
            <div className="buildings">
              <div className="sc-eLwHnm hYgfPl">
                <div className="thumbnails-carousel"><span
                  className="MuiSkeleton-root MuiSkeleton-text MuiSkeleton-pulse content-image css-1siz87r"
                  style={{ borderRadius: 0 }}></span></div>
                <div className="info-container"><span
                  className="MuiSkeleton-root MuiSkeleton-text MuiSkeleton-pulse css-1siz87r"
                  style={{ width: '90%', height: '28px' }}></span><span
                    className="MuiSkeleton-root MuiSkeleton-text MuiSkeleton-pulse css-1siz87r"
                    style={{ width: '100px', height: '26px' }}></span></div>
              </div>
              <div className="sc-eLwHnm hYgfPl">
                <div className="thumbnails-carousel"><span
                  className="MuiSkeleton-root MuiSkeleton-text MuiSkeleton-pulse content-image css-1siz87r"
                  style={{ borderRadius: 0 }}></span></div>
                <div className="info-container"><span
                  className="MuiSkeleton-root MuiSkeleton-text MuiSkeleton-pulse css-1siz87r"
                  style={{ width: '90%', height: '28px' }}></span><span
                    className="MuiSkeleton-root MuiSkeleton-text MuiSkeleton-pulse css-1siz87r"
                    style={{ width: '100px', height: '26px' }}></span></div>
              </div>
              <div className="sc-eLwHnm hYgfPl">
                <div className="thumbnails-carousel"><span
                  className="MuiSkeleton-root MuiSkeleton-text MuiSkeleton-pulse content-image css-1siz87r"
                  style={{ borderRadius: 0 }}></span></div>
                <div className="info-container"><span
                  className="MuiSkeleton-root MuiSkeleton-text MuiSkeleton-pulse css-1siz87r"
                  style={{ width: '90%', height: '28px' }}></span><span
                    className="MuiSkeleton-root MuiSkeleton-text MuiSkeleton-pulse css-1siz87r"
                    style={{ width: '100px', height: '26px' }}></span></div>
              </div>
              <div className="sc-eLwHnm hYgfPl">
                <div className="thumbnails-carousel"><span
                  className="MuiSkeleton-root MuiSkeleton-text MuiSkeleton-pulse content-image css-1siz87r"
                  style={{ borderRadius: 0 }}></span></div>
                <div className="info-container"><span
                  className="MuiSkeleton-root MuiSkeleton-text MuiSkeleton-pulse css-1siz87r"
                  style={{ width: '90%', height: '28px' }}></span><span
                    className="MuiSkeleton-root MuiSkeleton-text MuiSkeleton-pulse css-1siz87r"
                    style={{ width: '100px', height: '26px' }}></span></div>
              </div>
              <div className="sc-eLwHnm hYgfPl">
                <div className="thumbnails-carousel"><span
                  className="MuiSkeleton-root MuiSkeleton-text MuiSkeleton-pulse content-image css-1siz87r"
                  style={{ borderRadius: 0 }}></span></div>
                <div className="info-container"><span
                  className="MuiSkeleton-root MuiSkeleton-text MuiSkeleton-pulse css-1siz87r"
                  style={{ width: '90%', height: '28px' }}></span><span
                    className="MuiSkeleton-root MuiSkeleton-text MuiSkeleton-pulse css-1siz87r"
                    style={{ width: '100px', height: '26px' }}></span></div>
              </div>
              <div className="sc-eLwHnm hYgfPl">
                <div className="thumbnails-carousel"><span
                  className="MuiSkeleton-root MuiSkeleton-text MuiSkeleton-pulse content-image css-1siz87r"
                  style={{ borderRadius: 0 }}></span></div>
                <div className="info-container"><span
                  className="MuiSkeleton-root MuiSkeleton-text MuiSkeleton-pulse css-1siz87r"
                  style={{ width: '90%', height: '28px' }}></span><span
                    className="MuiSkeleton-root MuiSkeleton-text MuiSkeleton-pulse css-1siz87r"
                    style={{ width: '100px', height: '26px' }}></span></div>
              </div>
            </div>
            <div className="page-container"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// w-full delay-300

export default BranchList;
