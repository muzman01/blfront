import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import "./trendroyal.css"
import T1 from "../../img/Mediumicon.png"
import T2 from "../../img/noticeFoto.png"
import T3 from "../../img/faq.png"
export default function Trendroyal() {
  
    
  return (
    <>
        <NavBar />
        <section id="notice" className="notice" data-aos="zoom-out">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="notice-blue-card d-flex flex-column flex-lg-row justify-content-between">
                        <div className="yazilar">
                            <h3>Notice</h3>
                            <p>Notes on Participating in REITs DAO Real Estate IPO</p>
                            <p>How to participate in an IPO</p>
                            <p>Investment review sharing event</p>
                            <p>System check guide</p>
                        </div>
                        <div className="text-center text-lg-start"><img className="img-fluid" src={T2} />
                        </div>
                    </div>
                </div>
               
                <div className="swiper newsSwiper mt-4">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="news-card">
                                <p>Discloses Reits DAO’s first investment IPO schedule and fundraising amount.</p>
                                <h6>06.11.2022</h6>
                                <img src={T1} alt=""/>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="news-card">
                                <p>We are announcing the first investment product of Reits DAO.
                                </p>
                                <h6>06.11.2022</h6>
                                <img src={T1} alt=""/>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="news-card">
                                <p>Trend Royale 2nd Investment Site Pre-Tour Schedule
                                </p>
                                <h6>06.11.2022</h6>
                                <img src={T1} alt=""/>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="news-card">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos vitae ullam nam.
                                </p>
                                <h6>06.11.2022</h6>
                                <img src={T1} alt="" />
                            </div>
                        </div>

                    </div>
               
                 
           
                </div>
            </div>
        </div>
    </section>

    <section className="faq" id="faq" data-aos="fade-up">
        <div className="container">
            <h2 className="mb-5">What is the “Overflow” sale method?</h2>
            <div className="row">
                <div className="col-lg-6">
                    <p>TLDR: Basically, the more you put in, the more you will get, and you’ll get back anything that doesn’t get spent.</p>
                    <p>In the “Overflow” method, users can subscribe as much or as little as they want to the IPO, and their final allocation will be based on the amount of funds they put in as a percentage of all funds put in by other users at the time
                        the sale ends. Users will receive back any leftover funds when they claim their tokens after the sale.
                    </p>
                    <p>“RDF” tokens issue new tokens through Public Mint. The newly issued “RDF” will be distributed through an IPO (Initial Public Offering) based on the average market price, and if the IPO fails, all remaining “RDF” tokens will be burned.
                        The IPO will be done in BUSD (BEP-20) by default, but some amount can be entered through several different tokens. Participation tokens can be confirmed through advance notice.</p>
                </div>
                <div className="col-lg-6 p-5 d-flex ">
                    <img className="img-fluid align-self-center" src={T3} alt="" />
                </div>
            </div>

            <h1>F.A.Q.</h1>

            <div className="faq-tabs">
                <div className="tab-item" data-aos="fade-up">
                    <div className="tab-title">
                        <h4>Can “RDF” be converted into cash immediately?</h4>
                        <div className="arrow down"></div>
                    </div>
                    <div className="tab-content">
                        <p>All assets invested by investors are not owned by the Reits DAO company and are safely stored on the blockchain network. All real estate will be sold and paid out to “RDF” token holders in the event of service issues.
                        </p>
                    </div>
                </div>

                <div className="tab-item" data-aos="fade-up" data-aos-delay="200">
                    <div className="tab-title">
                        <h4>Is it possible to sell “RDF” tokens immediately after the public offering closes?</h4>
                        <div className="arrow down"></div>
                    </div>
                    <div className="tab-content">
                        <p>All assets invested by investors are not owned by the Reits DAO company and are safely stored on the blockchain network. All real estate will be sold and paid out to “RDF” token holders in the event of service issues.

                        </p>
                    </div>
                </div>

                <div className="tab-item" data-aos="fade-up" data-aos-delay="300">
                    <div className="tab-title">
                        <h4>Are the assets invested in Ritz Dao Finance safely operated?</h4>
                        <div className="arrow down"></div>
                    </div>
                    <div className="tab-content">
                        <p>All assets invested by investors are not owned by the Reits DAO company and are safely stored on the blockchain network. All real estate will be sold and paid out to “RDF” token holders in the event of service issues.
                        </p>
                    </div>
                </div>

                <div className="tab-item" data-aos="fade-up" data-aos-delay="400">
                    <div className="tab-title">
                        <h4>How is the initial listing price of “RDF” token formed?</h4>
                        <div className="arrow down"></div>
                    </div>
                    <div className="tab-content">
                        <p>All assets invested by investors are not owned by the Reits DAO company and are safely stored on the blockchain network. All real estate will be sold and paid out to “RDF” token holders in the event of service issues.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </section>
        <Footer />
    </>
  )
}
