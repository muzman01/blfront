import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import "./Partner.css"
import Userp from  "../../img/icons8-user-64.png"
export default function Partner() {
  return (
    <>
        <NavBar />
        <section className="partners" id="partners" data-aos="zoom-out">

        <div className="container">
            <h2>Partners</h2>
            <div className="d-flex icons flex-column flex-md-row align-items-center">

                <div className="icon-item mb-5 mb-md-0">

                    <div className="circle d-flex justify-content-center align-items-center">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="53.215" height="59.39"
                            viewBox="0 0 53.215 59.39">
                            <g data-name="Group 307">
                                <path data-name="Path 192"
                                    d="M241.5 425.839a66.653 66.653 0 0 1-16.356-1.877 35.421 35.421 0 0 1-9.042-3.453 2.724 2.724 0 0 1-1.421-1.989 6.266 6.266 0 0 1 .028-1.293 25.979 25.979 0 0 1 2.223-9.566 15.168 15.168 0 0 1 6.511-6.819 11.529 11.529 0 0 1 4.339-1.513 5.05 5.05 0 0 1 3.212.562 19.746 19.746 0 0 0 7.346 2.316 22.632 22.632 0 0 0 10.62-1.107 15.476 15.476 0 0 0 2.606-1.163 5.1 5.1 0 0 1 3.666-.524 15.525 15.525 0 0 1 10.749 9 28.881 28.881 0 0 1 1.9 9.742 2.657 2.657 0 0 1-1.455 2.356 24.914 24.914 0 0 1-4.5 2.065 52.272 52.272 0 0 1-10.349 2.538 73.255 73.255 0 0 1-10.076.726zm-.213-4.537.006.093c2.467-.158 4.938-.273 7.4-.485a45.565 45.565 0 0 0 9.968-1.95 31.854 31.854 0 0 0 3.07-1.179 1.8 1.8 0 0 0 1.16-2.024q-.11-1.141-.288-2.277a15.255 15.255 0 0 0-1.285-3.763 9.463 9.463 0 0 0-5.706-5.471 5.688 5.688 0 0 0-4.681.154 2.538 2.538 0 0 1-.4.161 27.155 27.155 0 0 1-12.315 1.4 25.307 25.307 0 0 1-6.891-1.68 5.427 5.427 0 0 0-3.089-.368 8.333 8.333 0 0 0-5.079 2.8 14.452 14.452 0 0 0-2.333 4.006 15.637 15.637 0 0 0-1.173 5.365 1.3 1.3 0 0 0 .352 1.067 3.435 3.435 0 0 0 .9.668 30.421 30.421 0 0 0 6.252 2.023 64.865 64.865 0 0 0 14.135 1.458z"
                                    transform="translate(-214.663 -366.451)" style="fill:#fd6920" />
                                <path data-name="Path 193"
                                    d="M385.155-78.554a15.273 15.273 0 0 1 15.268-15.265A15.271 15.271 0 0 1 415.7-78.557a15.268 15.268 0 0 1-15.251 15.245 15.269 15.269 0 0 1-15.294-15.242zm26.295.006a11.014 11.014 0 0 0-10.965-11.022 11.015 11.015 0 0 0-7.829 3.2 11.015 11.015 0 0 0-3.256 7.8 11.02 11.02 0 0 0 11.014 11.007A11.019 11.019 0 0 0 411.45-78.55z"
                                    transform="translate(-373.812 93.819)" style="fill:#fd6920" />
                            </g>
                        </svg> */}
                        <img src={Userp} />
                    </div>
                    <h3>Estate Agent</h3>
                </div>

                <div className="icon-item">

                    <div className="circle d-flex justify-content-center align-items-center">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="53.215" height="59.39"
                            viewBox="0 0 53.215 59.39">
                            <g data-name="Group 307">
                                <path data-name="Path 192"
                                    d="M241.5 425.839a66.653 66.653 0 0 1-16.356-1.877 35.421 35.421 0 0 1-9.042-3.453 2.724 2.724 0 0 1-1.421-1.989 6.266 6.266 0 0 1 .028-1.293 25.979 25.979 0 0 1 2.223-9.566 15.168 15.168 0 0 1 6.511-6.819 11.529 11.529 0 0 1 4.339-1.513 5.05 5.05 0 0 1 3.212.562 19.746 19.746 0 0 0 7.346 2.316 22.632 22.632 0 0 0 10.62-1.107 15.476 15.476 0 0 0 2.606-1.163 5.1 5.1 0 0 1 3.666-.524 15.525 15.525 0 0 1 10.749 9 28.881 28.881 0 0 1 1.9 9.742 2.657 2.657 0 0 1-1.455 2.356 24.914 24.914 0 0 1-4.5 2.065 52.272 52.272 0 0 1-10.349 2.538 73.255 73.255 0 0 1-10.076.726zm-.213-4.537.006.093c2.467-.158 4.938-.273 7.4-.485a45.565 45.565 0 0 0 9.968-1.95 31.854 31.854 0 0 0 3.07-1.179 1.8 1.8 0 0 0 1.16-2.024q-.11-1.141-.288-2.277a15.255 15.255 0 0 0-1.285-3.763 9.463 9.463 0 0 0-5.706-5.471 5.688 5.688 0 0 0-4.681.154 2.538 2.538 0 0 1-.4.161 27.155 27.155 0 0 1-12.315 1.4 25.307 25.307 0 0 1-6.891-1.68 5.427 5.427 0 0 0-3.089-.368 8.333 8.333 0 0 0-5.079 2.8 14.452 14.452 0 0 0-2.333 4.006 15.637 15.637 0 0 0-1.173 5.365 1.3 1.3 0 0 0 .352 1.067 3.435 3.435 0 0 0 .9.668 30.421 30.421 0 0 0 6.252 2.023 64.865 64.865 0 0 0 14.135 1.458z"
                                    transform="translate(-214.663 -366.451)" style="fill:#fd6920" />
                                <path data-name="Path 193"
                                    d="M385.155-78.554a15.273 15.273 0 0 1 15.268-15.265A15.271 15.271 0 0 1 415.7-78.557a15.268 15.268 0 0 1-15.251 15.245 15.269 15.269 0 0 1-15.294-15.242zm26.295.006a11.014 11.014 0 0 0-10.965-11.022 11.015 11.015 0 0 0-7.829 3.2 11.015 11.015 0 0 0-3.256 7.8 11.02 11.02 0 0 0 11.014 11.007A11.019 11.019 0 0 0 411.45-78.55z"
                                    transform="translate(-373.812 93.819)" style="fill:#fd6920" />
                            </g>
                        </svg> */}
                         <img src={Userp} width={64} height={64} />
                    </div>
                    <h3>Accountant</h3>
                </div>

            </div>
            <h3 className="mt-5 mb-4">Defi Partners</h3>
            <div className="japonca row justify-content-center">
                <h4 className="col-lg-3 mb-4 mb-xl-0">3월 프로젝트</h4>
                <h4 className="col-lg-3 mb-4 mb-xl-0">야나</h4>
                <h4 className="col-lg-3 mb-4 mb-xl-0">허니비</h4>
                <h4 className="col-lg-3 mb-4 mb-xl-0">외</h4>
            </div>
        </div>
    </section>
        <Footer />
    </>
  )
}
