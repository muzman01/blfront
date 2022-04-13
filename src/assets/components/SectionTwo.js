import React from 'react'
import S1 from "../img/v.png"
import S2 from "../img/Resim9.jpg"
export default function SectionTwo() {
  return (
    <section id="sectionTwo" className="sectionTwo" >
    <div className="container">
        <div className="row">
            <div className="col-lg-6" >
                <div className="section-two-left pe-lg-5">
                    <h1>Reits Dao Finance</h1>
                    <p data-aos="zoom-in-down">ReitsDAO is a service operated by Blokfield.Inc and is a decentralized real estate investment product service with real estate tokens linked to real assets on the BSC blockchain network.
                    </p>
                    <div className='gggg'>
                    <img className="img-fluid " src={S2} alt=""  data-aos="zoom-in-up"  data-aos-delay="400" />
                    </div>
                </div>
            </div>

            <div className="col-lg-6 mt-4 mt-lg-0"  >
                <div className="section-two-right ps-lg-5">
                    <div className='gggg'>
                    <img className="img-fluid " src={S1}alt=""  data-aos="zoom-in-up"  data-aos-delay="400"/>
                    </div>
                    <p data-aos="zoom-in-down">ReitsDAO’s token economy model is designed to be very simple. ReitsDAO issues “RDF” tokens that are collateralized with real estate values, and “RDF” tokens reflect the value and revenue of all real estate owned by ReitsDAO. Therefore,
                        the value of “RDF” token can be said to be the sum of all real estate values and profits owned by ReitsDAO. ReitsDAO does not issue new tokens reflecting each real estate value and is managed only as “RDF”.</p>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
