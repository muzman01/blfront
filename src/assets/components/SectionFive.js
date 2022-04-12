import React from 'react'
import s6 from "../img/Section-Five-Photo.png"
export default function SectionFive() {
  return (
    <section id="sectionFive" className="sectionFive"  data-aos="fade-up">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 px-5">
                <img className="img-fluid" src={s6} />
            </div>
            <div className="col-lg-6 px-5 align-self-center mt-lg-0 mt-5" data-aos="zoom-in-right">
                <h2>RDF Adventages</h2>
                <h1>Extra Income</h1>
                <p>Tokens issued while investing in real estate generate continuous interest income through the DeFi service, so you can expect maximum efficiency in fund management.
                </p>
            </div>
        </div>
    </div>
</section>
  )
}
