import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import "./Notice.css";
import n1 from "../../img/navigationtrend.png";
import n2 from "../../img/navigationtrend.png";
import n3 from "../../img/investment.png";
import n4 from "../../img/contracts.png";
import n5 from "../../img/reliable-1.png";
import n6 from "../../img/reliable-2.png";
import n7 from "../../img/reliable-3.png";
import n8 from "../../img/noticefotoside.png";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
export default function Notice() {
  return (
    <>
      <NavBar />
      <div>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />

        <section className="noticefoto">
          <img className="img-fluid" src={n8} alt="" />
        </section>
      </div>
      <Footer />
    </>
  );
}
