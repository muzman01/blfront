import React from 'react'
import n3 from  "../../img/investment.png"
export default function Section2() {
  return (
   
    <section className="investment" id="investment" >
        <div className="container">
            <h1>Reason for choosing investment</h1>
            <div className="row">
                <div className="col-xl-6 pe-4 align-self-center">
                    <img src={n3}className="img-fluid"/>
                </div>
                <div className="col-xl-6 ps-4 mt-4 m-xl-0">
                    <div className="invest-contents">
                        <h3>Basic info</h3>
                        <hr>
</hr>
                        <div className="row justify-content-between mb-3">
                            <div className=" col-6 d-flex flex-column">
                                <h4>Address</h4>
                                <h5>Rota Trade Center Block A3, Floor : 12
                                    D:327, 34149 Sariyer / Istanbul</h5>
                            </div>
                            <div className=" col-4 d-flex flex-column">
                                <h4>IFO Volume</h4>
                                <h5>934.345.3455</h5>
                            </div>
                        </div>

                        <div className="row justify-content-between mb-3">
                            <div className=" col-6 d-flex flex-column">
                                <h4>Land Area</h4>
                                <h5>California</h5>
                            </div>
                            <div className=" col-4 d-flex flex-column">
                                <h4>Revenue</h4>
                                <h5>Sold</h5>
                            </div>
                        </div>

                        <div className="row justify-content-between mb-3">
                            <div className=" col-6 d-flex flex-column">
                                <h4>Year Built</h4>
                                <h5>1876</h5>
                            </div>
                            <div className="col-4 d-flex flex-column">
                                <h4>Contract Date</h4>
                                <h5>06.15.2022</h5>
                            </div>
                        </div>


                        <div className="row justify-content-between mb-3">
                            <div className=" col-6 d-flex flex-column">
                                <h4>Building Size</h4>
                                <h5>535 m2</h5>
                            </div>
                            <div className=" col-4 d-flex flex-column">
                                <h4>Tax Rate</h4>
                                <h5>%45</h5>
                            </div>
                        </div>

                        <div className="row justify-content-between mb-3">
                            <div className=" col-6 d-flex flex-column">
                                <h4>Households</h4>
                                <h5>Decentralized</h5>
                            </div>
                            <div className=" col-4 d-flex flex-column">
                                <h4>Market Demands</h4>
                                <h5>Super</h5>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
