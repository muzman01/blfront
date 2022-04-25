import React from 'react'
import HomeVilla from "../img/Home-villa.png"
export default function Home() {
  return (
    <section id="sectionOne" className="sectionOne"data-aos="zoom-in"  >
        <div className="container">
            <div className="row">
                <div className="col-lg-6 d-flex align-items-center " data-aos="fade-down-right">
                    <div className="section-one-side-left d-flex d-lg-block flex-column align-items-center text-lg-start text-center">
                        <h1>
                            Find Your Best Smart Real Estate
                        </h1>
                        <a href="#sectionEight">Get Your One</a>
                    </div>
                </div>
                <div className="col-lg-6" data-aos="fade-down-left">
                    <div className="section-one-side-right mt-5 mt-lg-0">
                        <img className="img-fluid" src={HomeVilla} alt="" />
                    </div>
                </div>
            </div>
    </div>
    </section>
  )
}
