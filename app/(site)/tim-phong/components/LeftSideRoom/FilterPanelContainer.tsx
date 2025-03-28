import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog Page - Solid SaaS Boilerplate",

    // other metadata
    description: "This is Blog page for Solid Pro"
};

const Map = async () => {
    return (
        <>
            <div className="filter-panel-container">
                <div className="px-3">
                    <div className="sc-iJCbQK ehWUuF">
                        <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiAccordion-root MuiAccordion-rounded Mui-expanded MuiAccordion-gutters css-ihiqzj">
                            <div className="MuiButtonBase-root MuiAccordionSummary-root Mui-expanded MuiAccordionSummary-gutters css-1iji0d4" tabIndex={0} role="button" aria-expanded="true" aria-controls="panel1bh-content" id="panel1bh-header">
                                <div className="MuiAccordionSummary-content Mui-expanded MuiAccordionSummary-contentGutters css-17o5nyn">
                                    <div className="d-flex justify-content-between align-items-start">
                                        <div>
                                            <div className="sc-hKumaY clVtas">Phạm vi giá
                                            </div>
                                            <div className="sc-bjztik gChcar">1 phòng, 1 đêm
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="MuiAccordionSummary-expandIconWrapper Mui-expanded css-1fx8m19">
                                    <svg style={{ width: '13px' }} width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.00084 2.43728L1.73969 7.69843L0.929932 6.88867L7.00084 0.817764L13.0717 6.88867L12.262 7.69843L7.00084 2.43728Z" fill="#6D6E70">
                                        </path>
                                        <path d="M7.00084 2.43728L1.73969 7.69843L0.929932 6.88867L7.00084 0.817764L13.0717 6.88867L12.262 7.69843L7.00084 2.43728Z" fill="black" fill-opacity="0.2">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                            <div className="MuiCollapse-root MuiCollapse-vertical MuiCollapse-entered css-c4sutr" style={{ minHeight: '0px' }}>
                                <div className="MuiCollapse-wrapper MuiCollapse-vertical css-hboir5">
                                    <div className="MuiCollapse-wrapperInner MuiCollapse-vertical css-8atqhb">
                                        <div aria-labelledby="panel1bh-header" id="panel1bh-content" role="region" className="MuiAccordion-region">
                                            <div className="MuiAccordionDetails-root css-u7qq7e">
                                                <div className="mt-3">
                                                    <div id="findroom_price-range-fitler" className="sc-bOtlzW bSPjOX">
                                                        <div className="px-2">
                                                            <span className="MuiSlider-colorPrimary MuiSlider-sizeMedium MuiSlider-root css-1kztbwr">
                                                                <span className="MuiSlider-rail css-b04pc9">
                                                                </span>
                                                                <span className="MuiSlider-track css-1t2bqnt" style={{ left: 'NaN%', width: 'NaN%' }}>
                                                                </span>
                                                                <span data-index="0" className="MuiSlider-thumbColorPrimary MuiSlider-thumbSizeMedium MuiSlider-thumb css-l9ts3a" style={{ left: 'NaN%' }}>
                                                                    <input
                                                                        type="range"
                                                                        aria-orientation="horizontal"
                                                                        aria-valuemax="0"
                                                                        aria-valuemin="0"
                                                                        min="0"
                                                                        max="0"
                                                                        step="100000"
                                                                        style={{ border: '0', clip: 'rect(0 0 0 0)', height: '100%', margin: '-1px', overflow: 'hidden', padding: '0', position: 'absolute', whiteSpace: 'nowrap', width: '100%', direction: 'ltr' }} data-index="0" aria-label="Price Range" aria-valuenow="0" value="0" />
                                                                </span>
                                                                <span data-index="1" className="MuiSlider-thumbColorPrimary MuiSlider-thumbSizeMedium MuiSlider-thumb css-l9ts3a" style={{ left: 'NaN%' }}>
                                                                    <input
                                                                        type="range" aria-orientation="horizontal" aria-valuemax="0" aria-valuemin="0" min="0" max="0" step="100000" style={{ border: '0', clip: 'rect(0 0 0 0)', height: '100%', margin: '-1px', overflow: 'hidden', padding: '0', position: 'absolute', whiteSpace: 'nowrap', width: '100%', direction: 'ltr' }} data-index="1" aria-label="Price Range" aria-valuenow="0" value="0" />
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-2 d-flex justify-content-between">
                                                    <div id="findroom_min-price-input" className="sc-eoHXOn iacdBi">
                                                        <div className="price-input">
                                                            <input type="text" inputMode="decimal" className="form-control" placeholder="Nhập giá" value="0" />
                                                            <span className="price-suffix">đ
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div id="findroom_max-price-input" className="sc-eoHXOn iacdBi">
                                                        <div className="price-input">
                                                            <input type="text" inputMode="decimal" className="form-control" placeholder="Nhập giá" value="0" />
                                                            <span className="price-suffix">đ
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center cursor-pointer reset-container justify-content-end mt-3" id="findroom_price-filter-reset-btn">
                                                    <img src="/images/svg/reset.svg" className="sc-eTwdGJ jzAnjh svg-reset" />
                                                    <img src="/images/svg/reset-orange.svg" className="sc-eTwdGJ jzAnjh svg-reset-orange" />
                                                    <div className="sc-fbWUsZ eUeqgI reset-text">Đặt lại
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Map;
