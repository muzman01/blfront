import React from 'react'
import s4 from "../img/Section-four-leftphoto.png"
import s5 from "../img/section-four-rightphoto.png"
export default function SectionFour() {
  return (
    <section id="sectionFour" className="sectionFour" data-aos="zoom-out">
    <div className="container">
        <div className="row">
            <div className="col-lg-5 section-four-left">
                <h2>
                    RDF Adventages
                </h2>
                <h1>
                    Opportunity Cost Reduction
                </h1>
                <div className="row photo-item" data-aos="zoom-in-right">
                    <div className="col-lg-4">
                        <h3>Opportunity <br></br> Cost</h3>
                    </div>
                    <div className="col-lg-8 text-center  text-lg-end"><img className="img-fluid -mt-7" src={s4} alt=""/>
                    </div>

                </div>
            </div>
            <div className="col-lg-2 d-flex align-items-center justify-content-center mt-5 mb-5 mt-lg-0 mb-lg-0" data-aos="zoom-in-right">
                <h1 className="vs">VS</h1>
            </div>
            <div className="col-lg-5 section-four-right justify-content-end" data-aos="zoom-in-right">
                <h3>Financal <br></br>Liquidty</h3>
                <img src={s5} alt=""/>
                <p>In the case of general real estate investment, there is a disadvantage of insufficient liquidity. By tokenizing the value of real estate, small investment is possible and loss of opportunity cost can be minimized.
                </p>
            </div>
        </div>
    </div>
</section>
  )
}
