import React from "react";
import n5 from "../../img/reliable-1.png";
import n6 from "../../img/reliable-2.png";
import n7 from "../../img/reliable-3.png";
export default function Section4() {
  return (
    <section className="reliable">
      <div className="container">
        <h1 className="text-center">
          Reliable and safe real estate <br></br>asset management
        </h1>
        <div className="row">
          <div className="col-lg-4 p-5 p-lg-3">
            <div className="main-card">
              <div className="card-head">
                <img className="img-fluid" src={n5} />
              </div>
              <div className="card-body">
                <h2>High Rental Demand</h2>
                <p>
                  Trend Royal was built for the second time in Kusadasi, and it
                  is a very attractive product with few vacancies as a high-end
                  residential building
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 p-5 p-lg-3">
            <div className="main-card">
              <div className="card-head">
                <img className="img-fluid" src={n6} />
              </div>
              <div className="card-body">
                <h2>Additional IR</h2>
                <p>
                  In the course of the project, we have several plans to put
                  additional investment funds into the project.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 p-5 p-lg-3">
            <div className="main-card">
              <div className="card-head">
                <img className="img-fluid" src={n7} />
              </div>
              <div className="card-body">
                <h2>Sell-off Value</h2>
                <p>
                  If the yield falls or the management cost increases, the real
                  estate is sold by voting, etc. This leads to immediate returns
                  for investors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
