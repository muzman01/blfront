import React from 'react'
import S71 from "../img/EstateInfo-1.png"
import S72 from "../img/EstateInfo-2.png"
export default function SectionSeven() {
  return (
    <section id="sectionEight" className="sectionEight" data-aos="fade-up">
    <div className="container-fluid padding">
        <h1 className="title mb-5">Estate Info</h1>

        <div className="estate-body" data-aos="fade-up">
            <div className="row">
                <div className="col-xxl-5 d-flex flex-column justify-content-center">
                    <div className="side-left overflow-auto">
                        <h2>Trend Royal <br></br> Project
                        </h2>
                        <p className="d-none d-md-block">First real estate to be introduced on-chain via ReitsDAO</p>

                        <table>
                            <tr>
                                <th>
                                    <h4 className="pb-4">INFO</h4>
                                </th>
                            </tr>
                            <tr>
                                <td>
                                    <h6>Propery Type:</h6>
                                </td>
                                <td>Commercial</td>
                            </tr>
                            <tr>
                                <td>
                                    <h6>Lot Size:</h6>
                                </td>
                                <td>285 M2</td>
                            </tr>
                            <tr>
                                <td>
                                    <h6>Rental Yield:</h6>
                                </td>
                                <td>~0.0%</td>
                            </tr>
                            <tr>
                                <td>
                                    <h6>YEAR BUILT:</h6>
                                </td>
                                <td>2015</td>
                            </tr>
                            <tr>
                                <td>
                                    <h6>Rental Escolation:</h6>
                                </td>
                                <td>3-5% Per Annum</td>
                            </tr>
                        </table>
                        <h4 className="pt-5 d-none d-md-block">Related Notice</h4>
                    </div>

                </div>
                <div className="col-xxl-7 side-right m-auto">
                    <img className="img-fluid" src={S71} alt="" />
                </div>
            </div>
        </div>

        <div className="estate-body" data-aos="fade-up">
            <div className="row">
                <div className="col-xxl-5 d-flex flex-column justify-content-center">
                    <div className="side-left overflow-auto">
                        <h2>Trend Royal <br></br> Project
                        </h2>
                        <p className="d-none d-md-block">First real estate to be introduced on-chain via ReitsDAO</p>

                        <table>
                            <tr>
                                <th>
                                    <h4 className="pb-4">INFO</h4>
                                </th>
                            </tr>
                            <tr>
                                <td>
                                    <h6>Propery Type:</h6>
                                </td>
                                <td>Commercial</td>
                            </tr>
                            <tr>
                                <td>
                                    <h6>Lot Size:</h6>
                                </td>
                                <td>285 M2</td>
                            </tr>
                            <tr>
                                <td>
                                    <h6>Rental Yield:</h6>
                                </td>
                                <td>~0.0%</td>
                            </tr>
                            <tr>
                                <td>
                                    <h6>YEAR BUILT:</h6>
                                </td>
                                <td>2015</td>
                            </tr>
                            <tr>
                                <td>
                                    <h6>Rental Escolation:</h6>
                                </td>
                                <td>3-5% Per Annum</td>
                            </tr>
                        </table>
                        <h4 className="pt-5 d-none d-md-block">Related Notice</h4>
                    </div>

                </div>
                <div className="col-xxl-7 side-right m-auto">
                    <img className="img-fluid" src={S72} alt="" />
                </div>
            </div>


        </div>

    </div>

</section>
  )
}
