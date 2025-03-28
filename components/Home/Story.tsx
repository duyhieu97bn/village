"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Story = () => {
    return (


        <div className="sc-dwFVFH gvEkKL container py-4 py-md-5">
            <div className="living-story-header text-center mb-4 mb-md-5">Bộ sưu tập những câu chuyện tại M Village
            </div>
            <div className="d-none d-md-block">
                <div className="row ">
                    <div className="col-md-4">
                        <div className="image-container">
                            <a href="https://www.instagram.com/mvillage_hotel" target="_blank">
                                <span className=" lazy-load-image-background blur lazy-load-image-loaded" style={{color: 'transparent', display: 'inline-block'}}>
                                    <img sizes="1500" src="https://img.mvillage.vn/FKlwSd5fznZb_jKqpEKCuyHPIcCXu25fpspEIVpnxWE/rs:fit:1500:1500/plain/https%3A%2F%2Fcdn.mvillage.vn%2Fliving-story%2Fliving-story-1-1.png" className="large-image"/>
                                </span>
                            </a>
                            <a href="https://www.instagram.com/mvillage_hotel" target="_blank">
                                <span className=" lazy-load-image-background blur lazy-load-image-loaded" style={{color: 'transparent', display: 'inline-block'}}>
                                    <img sizes="1500" src="https://img.mvillage.vn/pTJh2u0IisDtVysmjD0OfYVEYNDNXosPUe7LB2Plm-o/rs:fit:1500:1500/plain/https%3A%2F%2Fcdn.mvillage.vn%2Fliving-story%2Fliving-story-2-1.png" className="small-image"/>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="image-container flex-column-reverse">
                            <a href="https://www.instagram.com/mvillage_hotel" target="_blank">
                                <span className=" lazy-load-image-background blur lazy-load-image-loaded" style={{color: 'transparent', display: 'inline-block'}}>
                                    <img sizes="1500" src="https://img.mvillage.vn/HAaOYe6iTHhUHZEP1XgWgG_gKIecc-MdKWY-KGi1PbY/rs:fit:1500:1500/plain/https%3A%2F%2Fcdn.mvillage.vn%2Fliving-story%2Fliving-story-4-1.png" className="large-image"/>
                                </span>
                            </a>
                            <a href="https://www.instagram.com/mvillage_hotel" target="_blank">
                                <span className=" lazy-load-image-background blur lazy-load-image-loaded" style={{color: 'transparent', display: 'inline-block'}}>
                                    <img sizes="1500" src="https://img.mvillage.vn/fJT1RCeXy_Ux6i5uZn9HOpjUgPGHevH-Edk3QRop6Zs/rs:fit:1500:1500/plain/https%3A%2F%2Fcdn.mvillage.vn%2Fliving-story%2Fliving-story-3-1.png" className="small-image"/>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="image-container">
                            <a href="https://www.instagram.com/mvillage_hotel" target="_blank">
                                <span className=" lazy-load-image-background blur lazy-load-image-loaded" style={{color: 'transparent', display: 'inline-block'}}>
                                    <img sizes="1500" src="https://img.mvillage.vn/8p57dm8Af6xkxmkN9FFgMvR87qiooqVl3QxUzEcHiQo/rs:fit:1500:1500/plain/https%3A%2F%2Fcdn.mvillage.vn%2Fliving-story%2Fliving-story-5-1.png" className="large-image"/>
                                </span>
                            </a>
                            <a href="https://www.instagram.com/mvillage_hotel" target="_blank">
                                <span className=" lazy-load-image-background blur lazy-load-image-loaded" style={{color: 'transparent', display: 'inline-block'}}>
                                    <img sizes="1500" src="https://img.mvillage.vn/EENm6sSRH4M9oXAKclPQd_68ROKlhZ1MKEYbUUgTTqA/rs:fit:1500:1500/plain/https%3A%2F%2Fcdn.mvillage.vn%2Fliving-story%2Fliving-story-6-1.png" className="small-image"/>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// w-full delay-300

export default Story;
