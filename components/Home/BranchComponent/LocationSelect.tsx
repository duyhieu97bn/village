"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const MenuLocation = [
    {
        id_name: 'hochiminh',
        name: 'Hồ Chí Minh',
    },
    {
        id_name: 'hanoi',
        name: 'Hà Nội',
    },
    {
        id_name: 'danang',
        name: 'Đà Nẵng',
    }
]


const BranchList = () => {
    const [navigationOpen, setNavigationOpen] = useState(false);
    const [dropdownToggler, setDropdownToggler] = useState(false);
    const [stickyMenu, setStickyMenu] = useState(false);
    const [getLocationSelected, setLocationSelected] = useState([]);
    const MenuLocationChildren = {
        hochiminh: [
            'Quận 3',
            'Quận 1',
            'Quận 2',
            'Tân Bình',
            'Bình Thạnh',
            'Phú Nhuận'
        ],
        hanoi: [
            'Phố Cổ',
            'Long Biên'
        ],
        danang: [
            'Gần Cầu Rồng'
        ]
    }
    const pathUrl = usePathname();

    const handleSelectLocation = (e) => {
        console.log(e);

        setLocationSelected(MenuLocationChildren[e])
    }

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
    //Mui-selected class selected

    return (

        <div className="location-filter d-flex align-items-center">
            <div className="locations tab-navigate-button">
                <div className="MuiTabs-root sc-bTfYFJ hLTLFh css-jge34e">
                    <div style={{ width: '99px', height: '99px', position: 'absolute', top: '-9999px', overflow: 'scroll' }} className="MuiTabs-scrollableX MuiTabs-hideScrollbar css-oqr85h">

                    </div>
                    <div className="MuiTabs-scroller MuiTabs-hideScrollbar MuiTabs-scrollableX css-12qnib" style={{ marginBottom: '0px' }}>
                        <div className="MuiTabs-flexContainer css-k008qs" role="tablist">
                            {MenuLocation.map((LocationItem, key) => (
                                <button className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary Mui-selected css-1cy7a6h" tabIndex={0} type="button" role="tab" aria-selected="true"
                                    onClick={() => handleSelectLocation(LocationItem.id_name)}
                                >
                                    <div className="sc-kHOZwM BjYNl">{LocationItem.name}</div>
                                </button>
                            ))}
                        </div><span className="MuiTabs-indicator css-3eqeqk" style={{ left: '0px', width: '154.25px', backgroundColor: 'rgb(18, 18, 18)', borderRadius: '999px', height: '100%' }}></span>
                    </div>
                </div>
            </div>
            <div className="locations w-100 tab-navigate-button d-flex">
                <div className="d-flex flex-row w-100 justify-content-md-center">
                    <div className="d-flex flex-row overflow-auto position-relative MuiBox-root css-0">
                        <div className="MuiTabs-root common-tab-container css-jge34e">
                            <div style={{ width: '99px', height: '99px', position: 'absolute', top: '-9999px', overflow: 'scroll' }} className="MuiTabs-scrollableX MuiTabs-hideScrollbar css-oqr85h">

                            </div>
                            <div className="MuiTabs-scroller MuiTabs-hideScrollbar MuiTabs-scrollableX css-12qnib" style={{ marginBottom: '0px' }}>
                                <div className="MuiTabs-flexContainer css-k008qs" role="tablist">
                                    <button className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary Mui-selected css-1cy7a6h" tabIndex={0} type="button" role="tab" aria-selected="true">
                                        <div className="location location active">Tất cả
                                        </div></button>
                                    {getLocationSelected.map((LocationCItem, key) => (
                                        <button className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary css-1cy7a6h" tabIndex={-1} type="button" role="tab" aria-selected="false">
                                            <div className="d-flex flex-row align-items-center">
                                                <div className="location">{LocationCItem}
                                                </div>
                                            </div></button>
                                    ))}
                                </div><span className="MuiTabs-indicator css-3eqeqk" style={{ left: '0px', width: '51.5781px', display: 'none' }}></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// w-full delay-300

export default BranchList;
