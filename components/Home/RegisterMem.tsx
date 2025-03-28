"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const RegisterMem = () => {
  return (

    <div className="sc-DtmNo ixaPkV">
      <div className="position-relative d-flex justify-content-center align-items-center w-100">
        <span className="w-100 lazy-load-image-background blur lazy-load-image-loaded" style={{ color: 'transparent', display: 'inline-block' }}>
          <img src="/public/images/home-mvl-more-footer-bg.png" alt="Our Brands" title="Our Brands" className="footer-image" />
        </span>
        <div className="footer-content-container container">
          <div className="footer-content__heading text-center">Đăng kí thành viên MORE, tối đa trải nghiệm
          </div>
          <div className="footer-content__description text-center">Là thành viên chương trình MORE, bạn có thể tích luỹ số đêm trải nghiệm tại M Village để tận hưởng các quyền lợi độc quyền như nhận phòng sớm, trả phòng muộn và miễn phí nâng hạng phòng ở 33 khách sạn tại Hồ Chí Minh, Hà Nội và Đà Nẵng.
          </div>
          <div className="footer-content__actions text-center">
            <a className="action-text">Tham gia M Village MORE
              <span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.00012 18L18.0001 6" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  </path><path d="M8.25 6H18V15.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">

                  </path>
                </svg>
              </span>
            </a>
            <a className="action-text">Tải ứng dụng <span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.00012 18L18.0001 6" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                </path>
                <path d="M8.25 6H18V15.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                </path>
              </svg>
            </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// w-full delay-300

export default RegisterMem;
