import React from 'react'
import S61 from "../img/Section-six-1.png"
import S62 from "../img/Section-six-2.png"
import S63 from "../img/Section-six-3.png"
export default function SectionSix() {
  return (
    <section id="sectionSix" className="sectionSix">
    <div className="container">
        <div className="row">
            <div className="col-lg-4 p-5 p-lg-3"  data-aos="zoom-in">
                <div className="main-card bgorange">
                    <div className="card-head">
                        <img className="img-fluid  m-auto" src={S61}/>
                    </div>
                    <div className="card-body">
                        <h2>
                        Low-Risk investment
                            <br></br>  <h6>(Long term contract, 
Stable because the rent is paid in advance for one year)</h6>
                        </h2>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 p-5 p-lg-3" data-aos="zoom-in" data-aos-delay="400">
                <div className="main-card bggreen">
                    <div className="card-head">
                        <img className="img-fluid m-auto" src={S62} />
                    </div>
                    <div className="card-body">
                        <h2>
                        Growth Potential<br></br>  <h6>
                        (Mutual growth possible through Blokfield Defi services)
                        </h6>
                        </h2>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 p-5 p-lg-3" data-aos="zoom-in" data-aos-delay="600">
                <div className="main-card bgblue">
                    <div className="card-head">
                        <img className="img-fluid  m-auto" src={S63} />
                    </div>
                    <div className="card-body">
                        <h2>
                        Efficient Investment <br></br>  <h6><br></br>
                        (Portfolio diversification with complex REITs)
                        </h6>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
