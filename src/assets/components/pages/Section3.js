import React from 'react'
import n4 from "../../img/contracts.png"
export default function Section3() {
  return (
    <section className="contract-side" >
    <div className="container">
        <div className="d-flex flex-column flex-xl-row align-items-center justify-content-between mt-4">
            <div className="documant d-flex align-items-center mb-4 mb-xl-0">
                <img width="45" height="45" className="img-fluid me-2" src={n4} alt=""/>
                <p className="contract">Contract Documents</p>
            </div>
            <div className="contents row justify-content-center">
                <div className="col-xl-3 col-lg-6 mb-2 mb-lg-0">
                    <h4>Estate Agent
                        Licence</h4>
                </div>
                <div className="col-xl-3  col-lg-6 mb-2 mb-lg-0">
                    <h4>Registered
                        Documents</h4>
                </div>

                <div className="col-xl-3 col-lg-6 mb-2 mb-lg-0">
                    <h4>Contract
                        Document</h4>
                </div>
                <div className="col-xl-3 col-lg-6 mb-2 mb-lg-0">
                    <h4>Reits Dao
                        Company
                        Document</h4>
                </div>

            </div>
        </div>
    </div>
</section>
  )
}
