import React from "react";
import n1 from "../../img/navigationtrend.png";
import n2 from "../../img/navigationtrend.png";
export default function Section1() {
  return (
    <section className="trendroyalproject2 " id="trendroyalproject2">
      <div className="container-fluid">
        <h5 className="text-center text-lg-start">
          First real estate to be introduced on-chain via ReitsDAO
        </h5>
        <div className="d-flex align-items-center justify-content-between flex-column flex-lg-row yuzdelik text-center text-lg-start">
          <h2 className="d-inline-block">Trend Royal 2 Project</h2>
          <span>
            <h4 className="d-inline-block">Estimated revenue:</h4>
            <h1 className="d-inline-block"> %20</h1>
            <h4 className="d-inline-block">/ year</h4>
          </span>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <h5 className="d-inline-block">IFO date: 00 - March 2022</h5>
          <h5 className="d-inline-block">350K Funding Closed</h5>
        </div>
        <div className="yüzdelikbarout">
          <div className="yuzdelikbarin"></div>
        </div>
        <h3 className="text-end yuzderakam"> 77.8%</h3>
      </div>

      <div className="row mt-5">
        <div className="col-lg-4 px-lg-4 p-0 mb-5 mb-lg-0">
          <div className="card-item">
            <div className="d-flex align-items-center">
              <img className="me-2" width="28" height="36" src={n1} />
              <h3>Point 1</h3>
            </div>
            <p>The most luxurious apartment in Kusadasi</p>
          </div>
        </div>

        <div className="col-lg-4 px-lg-4 p-0 mb-5 mb-lg-0">
          <div className="card-item">
            <div className="d-flex align-items-center">
              <img className="me-2" width="28" height="36" src={n2} />
              <h3>Point 2</h3>
            </div>
            <p>Low vacancy rate</p>
          </div>
        </div>

        <div className="col-lg-4 px-lg-4 p-0  mb-5 mb-lg-0">
          <div className="card-item">
            <div className="d-flex align-items-center">
              <img className="me-2" width="28" height="36" src={n2} />
              <h3>Point 3</h3>
            </div>
            <p>Real estate value increase of more than 15% per year</p>
          </div>
        </div>
      </div>
    </section>
  );
}
