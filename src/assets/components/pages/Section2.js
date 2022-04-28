import React from "react";
import n3 from "../../img/investment.png";

import ReactPlayer from "react-player";
export default function Section2() {
  return (
    <section className="investment" id="investment">
      <div className="container">
        <h1>Reason for choosing investment</h1>
        <div className="row">
          <div className="col-xl-6 pe-4 align-self-center ">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=sxipJELtDJk"
              className="vdd"
              width={700}
              height={400}
            />
          </div>
          <div className="col-xl-6 ps-4 mt-4 m-xl-0">
            <div className="invest-contents">
              <h3>Basic info</h3>
              <hr></hr>
              <div className="row justify-content-between mb-3">
                <div className=" col-6 d-flex flex-column">
                  <h4>Address</h4>
                  <h5>
                    {" "}
                    Ege mahallesi Alpaslan Türkeş sok. NO:18 Trendroyal 2 C blok
                    D:7
                  </h5>
                </div>

                {/* <div className=" col-4 d-flex flex-column">
                                <h4>IFO Volume</h4>
                                <h5>300.000 USD</h5>
                            </div> */}
              </div>

              <div className="row justify-content-between mb-3">
                <div className=" col-6 d-flex flex-column">
                  <h4>Land Area</h4>
                  <h5>Turkey </h5>
                </div>
                <div className=" col-4 d-flex flex-column">
                  <h4>IFO Volume</h4>
                  <h5>300.000 USD</h5>
                </div>
              </div>

              <div className="row justify-content-between mb-3">
                <div className=" col-6 d-flex flex-column">
                  <h4>Year Built</h4>
                  <h5>2016</h5>
                </div>
                <div className=" col-4 d-flex flex-column">
                  <h4> Rental Yield</h4>
                  <h5>%3.7</h5>
                </div>
              </div>

              <div className="row justify-content-between mb-3">
                <div className=" col-6 d-flex flex-column">
                  <h4>Building Size:</h4>
                  <h5>300 m²</h5>
                </div>
                <div className="col-4 d-flex flex-column">
                  <h4>Contract Date</h4>
                  <h5>08.03.2022</h5>
                </div>
              </div>

              <div className="row justify-content-between mb-3">
                <div className=" col-6 d-flex flex-column">
                  <h4>Estate type</h4>
                  <h5>Apartment</h5>
                </div>
                <div className=" col-4 d-flex flex-column">
                  <h4> Product rating: </h4>
                  <h5>A1</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
