import React from 'react'
import S71 from "../img/Resim1.jpg"
import S72 from "../img/Resim2.jpg"
import S73 from "../img/Resim3.jpg"
import S74 from "../img/Resim4.jpg"
import S75 from "../img/Resim5.jpg"
import S76 from "../img/Resim6.jpg"
import S77 from "../img/EstateInfo-2.png"
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
                                <td> 300 M2</td>
                            </tr>
                            <tr>
                                <td>
                                    <h6>Rental Yield:</h6>
                                </td>
                                <td>%3.7</td>
                            </tr>
                            <tr>
                                <td>
                                    <h6>YEAR BUILT:</h6>
                                </td>
                                <td>2016</td>
                            </tr>
                            <tr>
                                <td>
                                    <h6> Product rating:</h6>
                                </td>
                                <td>A1</td>
                            </tr>
                        </table>
                        <h4 className="pt-5 d-none d-md-block">Related Notice</h4>
                    </div>

                </div>
                <div className="col-xxl-7 side-right m-auto">
                    <img className="img-fluid float-left ml-4  mt-3 gg" src={S71} alt=""/>
                    <img className="img-fluid float-left ml-4  mt-3 gg" src={S72} alt="" />
                    <img className="img-fluid float-left ml-4  mt-3 gg" src={S73} alt="" />
                    <img className="img-fluid float-left ml-4  mt-3 gg" src={S74} alt="" />
                    <img className="img-fluid float-left ml-4  mt-3 gg" src={S75} alt="" />
                    <img className="img-fluid float-left ml-4  mt-3 gg" src={S76} alt="" />
                </div>
            </div>
        </div>

        {/* <div className="estate-body" data-aos="fade-up">
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


        </div> */}

    </div>

</section>
  )
}
