"use client";

import React from 'react';

export function PartnersSection() {
    return (
        <section id="partners" className="partners-section">
            <div className="container">
                <h2 className="partners-title">OUR PARTNERS</h2>

                <div className="sponsor-tier gold-tier">
                    <h3 className="tier-title gold-text">GOLD PARTNER</h3>
                    <div className="sponsor-grid single-sponsor">
                        <div className="sponsor-card gold-sponsor">
                            <div className="sponsor-card-bg"></div>
                            <img src="/images/partner-seqato.png" alt="SEQATO" className="sponsor-logo" />
                        </div>
                    </div>
                </div>

                <div className="sponsor-tier silver-tier">
                    <h3 className="tier-title silver-text">SILVER PARTNER</h3>
                    <div className="sponsor-grid single-sponsor">
                        <div className="sponsor-card silver-sponsor">
                            <div className="sponsor-card-bg"></div>
                            <img src="/images/partner-ndmit.png" alt="NDMIT" className="sponsor-logo" />
                        </div>
                    </div>
                </div>

                <div className="sponsor-tier other-tier">
                    <h3 className="tier-title">OTHER PARTNERS</h3>
                    <div className="sponsor-grid">
                        <div className="sponsor-card other-sponsor">
                            <div className="sponsor-card-bg"></div>
                            <img src="/images/partner-xyz.png" alt=".xyz" className="sponsor-logo" />
                        </div>
                        <div className="sponsor-card other-sponsor">
                            <div className="sponsor-card-bg"></div>
                            <img src="/images/partner-interviewbuddy.png" alt="Interview Buddy" className="sponsor-logo" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
