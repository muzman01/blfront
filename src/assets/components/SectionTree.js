import React from 'react'
import S3 from "../img/Section-thre-photo.png"
export default function SectionTree() {
  return (
    <section id="sectionThre" className="section-thre" data-aos="fade-up">
    <div className="container" >
        <div className="customer">
            <h1>RDF Adventages</h1>
            <div className="text-center">
                <p>Market Profit</p>
                <p>Rental Income</p>
            </div>
            <img src={S3} className="img-fluid" alt="" />
            <div className="row content">
                <div className="col-lg-6 pe-lg-5">
                    <p className="mb-5" data-aos="zoom-in-right"  data-aos-delay="400">
                        Based on the long-term analysis of Kusadasi, a resort town in western Turkey, we purchase real estate (villas, apartments, shopping malls) based on location conditions and profitability. The rental income generated through this is linked to revenue by
                        increasing the token value on a regular basis.
                    </p>
                    <p data-aos="zoom-in-right"  data-aos-delay="400">
                        One of the most differentiated models of ReitsDAO from the existing system is probably the buy-back system, not the dividend system. The rental income generated from the real estate owned by ReitsDAO is not distributed and is designed as a system to Buy-Back
                        “RDF” in the market. In the case of the dividend system, real estate rental income can be continuously distributed in USD value, which can be attractive to users, but it is not suitable for the ReitsDAO system where many users
                        can participate..
                    </p>
                </div>
                <div classNameName="col-lg-6 ps-lg-5 mt-lg-0 mt-5" data-aos="zoom-in-right"  data-aos-delay="400">
                    <p>Due to the characteristics of the blockchain system, as the number of “RDF” token holders increases, the network fee borne by ReitsDAO will increase, and the dividend income that holders can actually receive will decrease. In addition,
                        the participation of bots that purchase and sell tokens only during the dividend period increases and the possibility of abuse is very high. In the case of a dividend system, it can be an advantage if it consists of a small
                        number of investors, but it is not a good token economy model for the ReitsDAO system, where small investments are possible and there are many participants.
                    </p>
                </div>
            </div>
        </div>
    </div>

</section>
  )
}
