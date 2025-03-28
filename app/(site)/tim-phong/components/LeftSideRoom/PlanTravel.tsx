import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog Page - Solid SaaS Boilerplate",

    // other metadata
    description: "This is Blog page for Solid Pro"
};

const PlanTravel = async () => {
    return (
        <>
            <div className="sc-zjkyB jSmuYx mt-4">
                <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiAccordion-root MuiAccordion-rounded Mui-expanded MuiAccordion-gutters sc-dXNJws buNaSh css-ihiqzj">
                    <div className="MuiButtonBase-root MuiAccordionSummary-root Mui-expanded MuiAccordionSummary-gutters sc-hRMJXU fkStNa css-1iji0d4" tabIndex={0} role="button" aria-expanded="true" aria-controls="options-content" id="options-header">
                        <div className="MuiAccordionSummary-content Mui-expanded MuiAccordionSummary-contentGutters css-17o5nyn">Kế hoạch chuyến đi
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
                                <div aria-labelledby="options-header" id="options-content" role="region" className="MuiAccordion-region">
                                    <div className="MuiAccordionDetails-root sc-czWrlN bitQKJ css-u7qq7e">
                                        <div className="MuiFormGroup-root css-1h7anqn">
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

export default PlanTravel;
