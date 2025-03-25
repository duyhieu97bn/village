"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import menuData2 from "./menuData2";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  const pathUrl = usePathname();

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  });
  function handlerClick() {
    setNavigationOpen(!navigationOpen)
    console.log(navigationOpen);
  };

return (
  <header
    className={`fixed left-0 top-0 z-99999 w-full py-7 ${stickyMenu
      ? "bg-white !py-4 shadow transition duration-100 dark:bg-black"
      : ""
      }`}
  >
    <div className="bg-white sc-bdvvtL jTVMPC container-fluid px-0 main-header-nav bg-white search-popup-menu-open is-find-room-page"
      id="nav-shadow-header">
      <div className="container">
        <div className="navbar-header">
          <div className="header-logo cursor-pointer"><img src="images/logo-mvillage-w.png"
            alt="logo" title="logo" /></div>
          <div className="header-menu">
            {menuData2.map((menuItem, key) => (
              <Link href={`${menuItem.path}`} key={key} className="header-menu__item"><span className="" >{menuItem.title}</span></Link>
            ))}
            <div className="header-menu__item animation-main-menu-item d-flex align-items-center">
              {/* <style data-emotion="css-global 1prfaxn">
                  @-webkit-keyframes mui-auto-fill {
                    from {
                    display: block;
                                            }
                                        }

                  @keyframes mui-auto-fill {
                    from {
                    display: block;
                                            }
                                        }

                  @-webkit-keyframes mui-auto-fill-cancel {
                    from {
                    display: block;
                                            }
                                        }

                  @keyframes mui-auto-fill-cancel {
                    from {
                    display: block;
                                            }
                                        }
                </style> */}
              <div
                className="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary select-lang css-1be4du">
                <div tabIndex={0} role="button" aria-expanded="false" aria-haspopup="listbox"
                  aria-labelledby="language" id="language"
                  className="MuiSelect-select MuiSelect-outlined MuiOutlinedInput-input MuiInputBase-input css-12r2zaq">
                  <img className="flag" src="images/vn-flag.svg" /><span
                    className="lang-text">VIE</span></div><input value="vi" aria-hidden="true"
                      tabIndex={-1} className="MuiSelect-nativeInput css-1k3x8v3" />
                <fieldset aria-hidden="true" className="MuiOutlinedInput-notchedOutline css-igs3ac">
                  <legend className="css-hdw1oc"><span className="notranslate">​</span></legend>
                </fieldset>
              </div>
            </div>
            <div className="sc-iJKOTD jlOtjf d-flex align-items-center cursor-pointer"
              id="basic-button"><a className="header-menu__item account-menu"><svg
                className="guest-avatar" width="12" height="15" viewBox="0 0 12 15" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.49924 3.5C8.49924 4.88071 7.37996 6 5.99924 6C4.61853 6 3.49924 4.88071 3.49924 3.5C3.49924 2.11929 4.61853 1 5.99924 1C7.37996 1 8.49924 2.11929 8.49924 3.5Z"
                  stroke="#131313" stroke-linecap="round" stroke-linejoin="round"></path>
                <path
                  d="M1 12.9122C1.04687 10.1913 3.26716 8 5.99924 8C8.73139 8 10.9517 10.1914 10.9985 12.9124C9.47663 13.6107 7.78351 14 5.99946 14C4.21524 14 2.52197 13.6106 1 12.9122Z"
                  stroke="#131313" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg></a><a className="header-menu__item account-menu"><svg className="menu-icon"
                width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4 17.27V16.27H20V17.27H4ZM4 12.5V11.5H20V12.5H4ZM4 7.72998V6.72998H20V7.72998H4Z"
                  fill="black"></path>
              </svg></a></div>
          </div>
        </div>
      </div>
      <div className="main-menu d-flex flex-column container ">
        <div className="main-menu__header d-flex justify-content-end"><img src="images/close-white.svg"
          className="cursor-pointer" alt="close" /></div>
        <div className="main-menu__body">
          <div className="menu-list d-flex flex-column">
            <button className="item-menu body-menu__item animation-main-menu-item" onClick={() => setNavigationOpen(!navigationOpen)}>${navigationOpen}</button>
            <a className=" item-menu body-menu__item animation-main-menu-item">Đăng ký/Đăng nhập</a>
            <div className="header-menu__item animation-main-menu-item d-flex align-items-center">
              {/* <style data-emotion="css-global 1prfaxn">
                  @-webkit-keyframes mui-auto-fill {
                    from {
                    display: block;
                                            }
                                        }

                  @keyframes mui-auto-fill {
                    from {
                    display: block;
                                            }
                                        }

                  @-webkit-keyframes mui-auto-fill-cancel {
                    from {
                    display: block;
                                            }
                                        }

                  @keyframes mui-auto-fill-cancel {
                    from {
                    display: block;
                                            }
                                        }
                </style> */}
              <div
                className="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary select-lang css-1be4du">
                <div tabIndex={0} role="button" aria-expanded="false" aria-haspopup="listbox"
                  aria-labelledby="language" id="language"
                  className="MuiSelect-select MuiSelect-outlined MuiOutlinedInput-input MuiInputBase-input css-12r2zaq">
                  <img className="flag" src="images/vn-flag.svg" /><span
                    className="lang-text">VIE</span><svg className="chevron-down-icon ml-3"
                      width="11" height="6" viewBox="0 0 11 6" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.9999 0.995538C11.0003 1.12361 10.9744 1.25016 10.9241 1.36588C10.8738 1.48159 10.8004 1.58354 10.7093 1.66423L5.99542 5.80497C5.85484 5.93107 5.67851 6 5.49654 6C5.31456 6 5.13823 5.93107 4.99765 5.80497L0.283814 1.51849C0.123373 1.37297 0.0224779 1.16387 0.00332422 0.937177C-0.0158295 0.710485 0.0483274 0.484775 0.181681 0.309701C0.315034 0.134626 0.506661 0.024529 0.714405 0.00362822C0.922149 -0.0172725 1.12899 0.0527358 1.28943 0.198252L5.50046 4.03037L9.7115 0.326847C9.82682 0.222014 9.96724 0.155421 10.1162 0.134949C10.2651 0.114478 10.4163 0.140983 10.5518 0.211329C10.6873 0.281675 10.8016 0.392918 10.881 0.531895C10.9604 0.670871 11.0017 0.831765 10.9999 0.995538Z"
                      fill="#999999"></path>
                  </svg></div><input value="vi" aria-hidden="true" tabIndex={-1}
                    className="MuiSelect-nativeInput css-1k3x8v3" />
                <fieldset aria-hidden="true" className="MuiOutlinedInput-notchedOutline css-igs3ac">
                  <legend className="css-hdw1oc"><span className="notranslate">​</span></legend>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
        <div className="main-menu__footer">
          <div className="menu-list d-flex flex-column mb-4"><a
            className="footer-menu__item item-menu animation-main-menu-item"
            href="https://vieclam.mvillage.vn" target="_blank">Tuyển dụng</a><a
              className="footer-menu__item item-menu animation-main-menu-item">Tải ứng dụng</a><a
                className="footer-menu__item item-menu animation-main-menu-item"
                href="/mv-more-chinh-sach-va-dieu-khoan">Chính sách và điều khoản</a></div>
          <div className="social-menu d-flex"><a href="https://www.facebook.com/Mvillagecoliving"
            className="animation-main-menu-item"><svg width="25" height="24" viewBox="0 0 25 24"
              fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M2.58496 12C2.58496 6.27004 7.23 1.625 12.96 1.625C18.6899 1.625 23.335 6.27004 23.335 12C23.335 17.1788 19.5408 21.4706 14.5806 22.249C14.4723 22.266 14.362 22.2347 14.2787 22.1635C14.1954 22.0923 14.1475 21.9881 14.1475 21.8785V14.8906C14.1475 14.6835 14.3154 14.5156 14.5225 14.5156H16.5307L16.859 12.375H14.5225C14.3154 12.375 14.1475 12.2071 14.1475 12V10.1242C14.1475 9.67424 14.257 9.18398 14.5878 8.80148C14.9273 8.40883 15.4495 8.1875 16.1521 8.1875H17.0381V6.42427C16.9329 6.40968 16.8051 6.39306 16.6611 6.37643C16.2456 6.32845 15.7017 6.28125 15.1746 6.28125C14.1083 6.28125 13.268 6.60297 12.6947 7.17676C12.1219 7.75017 11.7725 8.61859 11.7725 9.79688V12C11.7725 12.2071 11.6046 12.375 11.3975 12.375H9.2334V14.5156H11.3975C11.6046 14.5156 11.7725 14.6835 11.7725 14.8906V21.8785C11.7725 21.9881 11.7245 22.0923 11.6412 22.1635C11.5579 22.2347 11.4476 22.266 11.3393 22.249C6.37911 21.4706 2.58496 17.1788 2.58496 12ZM17.4762 5.73191C17.6563 5.76265 17.7881 5.9188 17.7881 6.10156V8.5625C17.7881 8.76961 17.6202 8.9375 17.4131 8.9375H16.1521C15.6124 8.9375 15.3198 9.10159 15.1551 9.29206C14.9816 9.49269 14.8975 9.78326 14.8975 10.1242V11.625H17.2959C17.4053 11.625 17.5092 11.6728 17.5805 11.7558C17.6517 11.8388 17.6831 11.9487 17.6666 12.0569L17.2232 14.9475C17.1951 15.1305 17.0377 15.2656 16.8525 15.2656H14.8975V21.4299C19.2844 20.5334 22.585 16.6519 22.585 12C22.585 6.68426 18.2757 2.375 12.96 2.375C7.64422 2.375 3.33496 6.68426 3.33496 12C3.33496 16.6519 6.63547 20.5334 11.0225 21.4299V15.2656H8.8584C8.65129 15.2656 8.4834 15.0977 8.4834 14.8906V12C8.4834 11.7929 8.65129 11.625 8.8584 11.625H11.0225V9.79688C11.0225 8.46891 11.4195 7.39202 12.1642 6.64668C12.9084 5.90171 13.9567 5.53125 15.1746 5.53125C15.7416 5.53125 16.3169 5.5817 16.7471 5.63138C16.9631 5.65631 17.1442 5.68126 17.2718 5.70004C17.3356 5.70944 17.3861 5.7173 17.4209 5.72287L17.4612 5.7294L17.4719 5.73119L17.4749 5.73169L17.4762 5.73191Z"
                fill="white"></path>
            </svg></a><a href="https://www.instagram.com/mvillage_hotel"
              className="animation-main-menu-item"><svg width="25" height="24" viewBox="0 0 25 24"
                fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.54168 7.24464C3.58845 6.22264 3.74847 5.56351 3.96488 5.00402L3.96779 4.99629C4.18224 4.42695 4.51819 3.91119 4.95225 3.48489L4.95834 3.47891L4.96432 3.47282C5.39097 3.0382 5.90692 2.70258 6.47576 2.4887L6.48557 2.48495C7.04379 2.26786 7.70163 2.10843 8.72448 2.06167M3.54168 7.24464C3.49251 8.33659 3.47998 8.67508 3.47998 11.5063C3.47998 14.3381 3.49182 14.6758 3.54165 15.768M3.54168 7.24464L3.54168 7.52008M3.96868 18.0168C4.18256 18.5856 4.51818 19.1015 4.9528 19.5282L4.95888 19.5342L4.96485 19.5402C5.39117 19.9743 5.90695 20.3103 6.47629 20.5247L6.48479 20.5279C7.04352 20.7446 7.70168 20.9041 8.72448 20.9509M3.96868 18.0168L3.96493 18.0069C3.74784 17.4487 3.58842 16.7909 3.54165 15.768M3.96868 18.0168L3.95586 17.9492M3.54165 15.768L3.5584 15.8562M3.54165 15.768L3.54165 15.4919M3.95586 17.9492L3.5584 15.8562M3.95586 17.9492C3.78705 17.5033 3.61323 16.881 3.5584 15.8562M3.95586 17.9492C3.96178 17.9649 3.96769 17.9803 3.9736 17.9955C4.18768 18.5726 4.52687 19.0952 4.9668 19.5256C5.3971 19.9655 5.91945 20.3046 6.49637 20.5187C6.95936 20.699 7.61174 20.8875 8.72432 20.9385C9.84711 20.9896 10.194 21 12.9862 21C15.7785 21 16.1257 20.9896 17.2485 20.9385C18.3624 20.8874 19.014 20.6979 19.4754 20.519C20.0526 20.305 20.5753 19.9657 21.0057 19.5256C21.4455 19.0953 21.7846 18.573 21.9987 17.9961C22.179 17.5331 22.3675 16.8808 22.4185 15.7682C22.4696 14.6454 22.48 14.2978 22.48 11.5063C22.48 8.71472 22.4695 8.36684 22.4184 7.24405C22.3671 6.12427 22.1759 5.47168 21.9961 5.00992C21.7611 4.40322 21.4631 3.94437 21.005 3.48627C20.5478 3.02999 20.0902 2.73179 19.483 2.49654C19.0196 2.31537 18.3666 2.12531 17.2485 2.07406C17.1512 2.06964 17.0598 2.06552 16.9721 2.06168M3.5584 15.8562C3.55685 15.8273 3.5554 15.7981 3.55405 15.7685C3.54962 15.6712 3.54549 15.5797 3.54165 15.4919M8.72448 2.06167C9.81669 2.01184 10.1551 2 12.9862 2C15.8174 2 16.1556 2.01252 17.2476 2.06168M8.72448 2.06167L9.00063 2.06167M17.2476 2.06168L16.9721 2.06168M17.2476 2.06168C18.2697 2.10844 18.929 2.26844 19.4885 2.48487L19.4962 2.48781C20.0656 2.70226 20.5813 3.03821 21.0076 3.47227L21.0135 3.4783L21.0196 3.48422C21.4537 3.91055 21.7896 4.42646 22.0039 4.99596L22.0076 5.00559C22.2246 5.56381 22.3841 6.22165 22.4308 7.2445M9.00063 2.06167L16.9721 2.06168M9.00063 2.06167C9.92549 2.02123 10.4367 2.01253 12.9862 2.01253C15.536 2.01253 16.0471 2.02124 16.9721 2.06168M9.00063 2.06167C8.91285 2.06551 8.82135 2.06964 8.72403 2.07406C7.61005 2.12512 6.95844 2.31464 6.49709 2.49358C5.91768 2.70837 5.39329 3.04936 4.96193 3.49186C4.50811 3.94756 4.21106 4.40422 3.97656 5.0094C3.79537 5.4728 3.60528 6.12614 3.55403 7.24434C3.54962 7.34135 3.54551 7.43257 3.54168 7.52008M22.4308 15.768C22.3841 16.7908 22.2246 17.449 22.0079 18.0077L22.0047 18.0162C21.7902 18.5856 21.4543 19.1013 21.0202 19.5276L21.0141 19.5336L21.0082 19.5397C20.5815 19.9743 20.0656 20.3099 19.4967 20.5238L19.4869 20.5276C18.9287 20.7447 18.2709 20.9041 17.248 20.9509M3.54165 15.4919C3.50121 14.567 3.49251 14.0558 3.49251 11.5063C3.49251 8.95591 3.50121 8.44544 3.54168 7.52008M3.54165 15.4919L3.54168 7.52008M11.2955 15.5881C11.8315 15.8101 12.4061 15.9244 12.9862 15.9244C14.158 15.9244 15.2818 15.4589 16.1104 14.6304C16.9389 13.8018 17.4044 12.678 17.4044 11.5063C17.4044 10.3345 16.9389 9.21072 16.1104 8.38215C15.2818 7.55359 14.158 7.0881 12.9862 7.0881C12.406 7.0881 11.8315 7.20238 11.2955 7.42442C10.7595 7.64645 10.2724 7.97189 9.86214 8.38215C9.45188 8.79242 9.12644 9.27947 8.9044 9.81551C8.68237 10.3515 8.56809 10.9261 8.56809 11.5063C8.56809 12.0865 8.68237 12.661 8.9044 13.197C9.12644 13.7331 9.45188 14.2201 9.86214 14.6304C10.2724 15.0406 10.7595 15.3661 11.2955 15.5881ZM9.8523 8.37231C10.6835 7.54113 11.8108 7.07418 12.9862 7.07418C14.1617 7.07418 15.289 7.54113 16.1202 8.37231C16.9514 9.20349 17.4183 10.3308 17.4183 11.5063C17.4183 12.6817 16.9514 13.809 16.1202 14.6402C15.289 15.4714 14.1617 15.9383 12.9862 15.9383C11.8108 15.9383 10.6835 15.4714 9.8523 14.6402C9.02112 13.809 8.55417 12.6817 8.55417 11.5063C8.55417 10.3308 9.02112 9.20349 9.8523 8.37231ZM19.914 6.04229C19.914 6.37873 19.7804 6.70139 19.5425 6.93929C19.3046 7.17719 18.9819 7.31084 18.6455 7.31084C18.309 7.31084 17.9864 7.17719 17.7485 6.93929C17.5106 6.70139 17.3769 6.37873 17.3769 6.04229C17.3769 5.70585 17.5106 5.38319 17.7485 5.1453C17.9864 4.9074 18.309 4.77375 18.6455 4.77375C18.9819 4.77375 19.3046 4.9074 19.5425 5.1453C19.7804 5.38319 19.914 5.70585 19.914 6.04229Z"
                  stroke="white" stroke-width="0.8" stroke-linejoin="round"></path>
              </svg></a><a href="https://www.tiktok.com/@mvillagevietnam"
                className="animation-main-menu-item"><svg width="24" height="24" viewBox="0 0 24 24"
                  fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.8218 5.1344C16.0887 4.29394 15.648 3.19805 15.648 2H14.7293M16.8218 5.1344C17.4899 5.90063 18.3945 6.45788 19.4245 6.67608C19.7446 6.74574 20.0787 6.78293 20.4267 6.78293V10.2191C18.645 10.2191 16.9933 9.64801 15.6478 8.68211V15.6707C15.6478 19.1627 12.8083 22 9.32392 22C7.50049 22 5.8534 21.2198 4.69812 19.98C3.64492 18.847 3 17.3331 3 15.6707C3 12.2298 5.75598 9.42509 9.17079 9.35078M16.8218 5.1344C16.8039 5.12276 16.7861 5.11101 16.7684 5.09914M6.98556 17.3517C6.64223 16.8781 6.43808 16.2977 6.43808 15.6661C6.43808 14.0734 7.73255 12.7778 9.324 12.7778C9.62093 12.7778 9.90856 12.8288 10.1777 12.9124V9.40192C9.89927 9.36473 9.61628 9.34149 9.324 9.34149C9.27294 9.34149 8.86183 9.36884 8.81079 9.36884M14.7245 2H12.2098L12.2051 15.7775C12.1495 17.3192 10.8782 18.5591 9.32392 18.5591C8.35884 18.5591 7.50977 18.0808 6.98086 17.3564"
                  stroke="white" stroke-width="0.8" stroke-linejoin="round"></path>
              </svg></a><a href="https://www.linkedin.com/company/mvillagevietnam/"
                className="animation-main-menu-item"><svg width="25" height="24" viewBox="0 0 25 24"
                  fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22.04 3.47059V20.5294C22.04 20.9194 21.8851 21.2935 21.6093 21.5693C21.3335 21.8451 20.9595 22 20.5694 22H3.51063C3.1206 22 2.74655 21.8451 2.47076 21.5693C2.19498 21.2935 2.04004 20.9194 2.04004 20.5294L2.04004 3.47059C2.04004 3.08056 2.19498 2.70651 2.47076 2.43073C2.74655 2.15494 3.1206 2 3.51063 2H20.5694C20.9595 2 21.3335 2.15494 21.6093 2.43073C21.8851 2.70651 22.04 3.08056 22.04 3.47059V3.47059ZM7.92239 9.64706H4.98122V19.0588H7.92239L7.92239 9.64706ZM8.1871 6.41176C8.18865 6.18929 8.14636 5.96869 8.06265 5.76255C7.97895 5.55642 7.85545 5.36879 7.69923 5.21038C7.54301 5.05198 7.35712 4.92589 7.15217 4.83933C6.94722 4.75277 6.72722 4.70742 6.50474 4.70588H6.4518C5.99938 4.70588 5.56548 4.88561 5.24556 5.20552C4.92565 5.52544 4.74592 5.95934 4.74592 6.41176C4.74592 6.86419 4.92565 7.29809 5.24556 7.61801C5.56548 7.93792 5.99938 8.11765 6.4518 8.11765V8.11765C6.6743 8.12312 6.89568 8.0847 7.10332 8.00458C7.31096 7.92447 7.50078 7.80422 7.66193 7.65072C7.82308 7.49721 7.9524 7.31346 8.04251 7.10996C8.13263 6.90646 8.18176 6.6872 8.1871 6.46471V6.41176ZM19.0989 13.3412C19.0989 10.5118 17.2989 9.41176 15.5106 9.41176C14.9251 9.38245 14.3422 9.50715 13.8199 9.77345C13.2976 10.0397 12.8543 10.4383 12.5342 10.9294H12.4518V9.64706H9.6871V19.0588H12.6283V14.0529C12.5858 13.5403 12.7473 13.0315 13.0777 12.6372C13.4081 12.2429 13.8808 11.9949 14.393 11.9471H14.5047C15.44 11.9471 16.1342 12.5353 16.1342 14.0176V19.0588H19.0753L19.0989 13.3412Z"
                  stroke="white" stroke-width="0.8" stroke-linejoin="round"></path>
              </svg></a></div>
        </div>
      </div>
    </div>
  </header>
);
};

// w-full delay-300

export default Header;
