import React, { useState } from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import "./trendroyal.css";
import T1 from "../../img/Mediumicon.png";
import T2 from "../../img/noticeFoto.png";
import T3 from "../../img/faq.png";

export default function Trendroyal() {
  const [isqa1, setisqa1] = useState(false);
  const [isqa2, setisqa2] = useState(false);
  const [isqa3, setisqa3] = useState(false);
  const [isqa4, setisqa4] = useState(false);
  const [isqa5, setisqa5] = useState(false);
  const [isqa6, setisqa6] = useState(false);
  const [isqa7, setisqa7] = useState(false);
  const [isqa8, setisqa8] = useState(false);
  const [isqa9, setisqa9] = useState(false);
  const [isqa10, setisqa10] = useState(false);
  const [isqa11, setisqa11] = useState(false);
  const [isqa12, setisqa12] = useState(false);
  const [isqa13, setisqa13] = useState(false);
  const [isqa14, setisqa14] = useState(false);
  const [isqa15, setisqa15] = useState(false);
  const [isqa16, setisqa16] = useState(false);

  const [more, setMore] = useState(false);
  const readMore = () => {
    setMore(true);
  };

  return (
    <>
      <NavBar />
      <section id="notice" className="notice" data-aos="zoom-out">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="notice-blue-card d-flex flex-column flex-lg-row justify-content-between">
                <div className="yazilar">
                  <h3>Notice</h3>
                  <p>Notes on Participating in REITs DAO Real Estate IPO</p>
                  <p>How to participate in an IPO</p>
                  <p>Investment review sharing event</p>
                  <p>System check guide</p>
                </div>
                <div className="text-center text-lg-start">
                  <img className="img-fluid" src={T2} />
                </div>
              </div>
            </div>

            <div className="swiper newsSwiper mt-4">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <a href="https://medium.com/@Blokfield.inc/what-do-you-know-about-reitsdao-c95196655cdb" className="ma" target="_blank">
                    {" "}
                    <div className="news-card">
                      <p>
                      What do you know about ReitsDAO?
                      </p>
                      <h6>27.04.2022</h6>
                      <img src={T1} alt="" />
                    </div>
                  </a>
                </div>
                <div className="swiper-slide">
                <a href="https://medium.com/@Blokfield.inc/what-is-a-real-estate-investment-trust-reit-2235c8099335" className="ma" target="_blank">
                  <div className="news-card">
                    <p>
                    What Is a Real Estate Investment Trust (REIT)?
                    </p>
                    <h6>27.04.2022</h6>
                    <img src={T1} alt="" />
                  </div>
                  </a>
                </div>
                <div className="swiper-slide">
                <a href="https://medium.com/@Blokfield.inc/understand-the-concept-of-reitsdao-on-the-real-estate-226d05247bb7" className="ma" target="_blank">
                  <div className="news-card">
                    <p>Understand the concept of REITsDAO on the real estate</p>
                    <h6>27.04.2022</h6>
                    <img src={T1} alt="" />
                  </div>
                  </a>
                </div>
                <div className="swiper-slide">
                {/* <a href="https://blokfield.gitbook.io/reitsdao-finance/faq" className="ma" target="_blank">
                  <div className="news-card">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Eos vitae ullam nam.
                    </p>
                    <h6>06.11.2022</h6>
                    <img src={T1} alt="" />
                  </div>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq" id="faq" data-aos="fade-up">
        <div className="container">
          <h2 className="mb-5">What is the “Overflow” sale method?</h2>
          <div className="row">
            <div className="col-lg-6">
              <p>
                TLDR: Basically, the more you put in, the more you will get, and
                you’ll get back anything that doesn’t get spent.
              </p>
              <p>
                In the “Overflow” method, users can subscribe as much or as
                little as they want to the IPO, and their final allocation will
                be based on the amount of funds they put in as a percentage of
                all funds put in by other users at the time the sale ends. Users
                will receive back any leftover funds when they claim their
                tokens after the sale.
              </p>
              <p>
                “RDF” tokens issue new tokens through Public Mint. The newly
                issued “RDF” will be distributed through an IPO (Initial Public
                Offering) based on the average market price, and if the IPO
                fails, all remaining “RDF” tokens will be burned. The IPO will
                be done in BUSD (BEP-20) by default, but some amount can be
                entered through several different tokens. Participation tokens
                can be confirmed through advance notice.
              </p>
            </div>
            <div className="col-lg-6 p-5 d-flex ">
              <img className="img-fluid align-self-center" src={T3} alt="" />
            </div>
          </div>

          <h1>F.A.Q.</h1>

          {/* <div className="faq-tabs">
                <div className="tab-item" data-aos="fade-up">
                    <div className="tab-title">
                        <h4>Can “RDF” be converted into cash immediately?</h4>
                        <div className="arrow down"></div>
                    </div>
                    <div className="tab-content">
                        <p>All assets invested by investors are not owned by the Reits DAO company and are safely stored on the blockchain network. All real estate will be sold and paid out to “RDF” token holders in the event of service issues.
                        </p>
                    </div>
                </div>

                <div className="tab-item" data-aos="fade-up" data-aos-delay="200">
                    <div className="tab-title">
                        <h4>Is it possible to sell “RDF” tokens immediately after the public offering closes?</h4>
                        <div className="arrow down"></div>
                    </div>
                    <div className="tab-content">
                        <p>All assets invested by investors are not owned by the Reits DAO company and are safely stored on the blockchain network. All real estate will be sold and paid out to “RDF” token holders in the event of service issues.

                        </p>
                    </div>
                </div>

                <div className="tab-item" data-aos="fade-up" data-aos-delay="300">
                    <div className="tab-title">
                        <h4>Are the assets invested in Ritz Dao Finance safely operated?</h4>
                        <div className="arrow down"></div>
                    </div>
                    <div className="tab-content">
                        <p>All assets invested by investors are not owned by the Reits DAO company and are safely stored on the blockchain network. All real estate will be sold and paid out to “RDF” token holders in the event of service issues.
                        </p>
                    </div>
                </div>

                <div className="tab-item" data-aos="fade-up" data-aos-delay="400">
                    <div className="tab-title">
                        <h4>How is the initial listing price of “RDF” token formed?</h4>
                        <div className="arrow down"></div>
                    </div>
                    <div className="tab-content">
                        <p>All assets invested by investors are not owned by the Reits DAO company and are safely stored on the blockchain network. All real estate will be sold and paid out to “RDF” token holders in the event of service issues.
                        </p>
                    </div>
                </div>
            </div> */}
          <div className="qa" id="faq">
            <div className="qaLine1">
              <div className={!isqa1 ? `questions` : `questionsAfter`}>
                <div
                  className="question"
                  style={{ cursor: "pointer" }}
                  onClick={() => setisqa1(true)}
                >
                  <p>
                    {" "}
                    Is it possible to participate even if the amount of IPO
                    solicitation exceeds 100%?{" "}
                  </p>
                  {!isqa1 ? (
                    <p style={{ cursor: "pointer" }}>+</p>
                  ) : (
                    <p
                      style={{ cursor: "pointer" }}
                      onClick={() => setisqa1(false)}
                    >
                      -
                    </p>
                  )}
                </div>
                {isqa1 ? (
                  <p
                    onClick={() => setisqa1(false)}
                    style={{ cursor: "pointer" }}
                  >
                    Yes, the IPO is a subscription method, not a
                    first-come-first-served basis, and you can participate
                    freely for a set period of time. The excess amount will be
                    refunded immediately when the IPO is closed and will
                    automatically participate in the same proportion as the
                    participation rate.
                  </p>
                ) : null}
              </div>
            </div>

            <div className="qaLine2">
              <div className={!isqa3 ? `questions3` : `questions3After`}>
                <div className="question3">
                  <p
                    style={{ cursor: "pointer" }}
                    onClick={() => setisqa3(true)}
                  >
                    How is the expected dividend based on the investment amount
                    calculated?
                  </p>
                  {!isqa3 ? (
                    <p
                      style={{ cursor: "pointer" }}
                      onClick={() => setisqa3(true)}
                    >
                      +
                    </p>
                  ) : (
                    <p
                      style={{ cursor: "pointer" }}
                      onClick={() => setisqa3(false)}
                    >
                      -
                    </p>
                  )}
                </div>
                {isqa3 ? (
                  <>
                    <p
                      style={{ cursor: "pointer" }}
                      onClick={() => setisqa3(false)}
                    >
                      ReitsDAO is designed as a model that increases the value
                      of the token rather than paying a separate dividend. Real
                      estate rental income and real estate sales revenue provide
                      profits to “RDF” holders through steady increase in value
                      in the form of purchasing and burning “RDF” tokens in the
                      market.
                    </p>
                  </>
                ) : null}
              </div>
            </div>
            <div className="qaLine2">
              <div className={!isqa6 ? `questions5` : `questions5After`}>
                <div className="question5">
                  <p
                    style={{ cursor: "pointer" }}
                    onClick={() => setisqa6(true)}
                  >
                    {" "}
                    Are there any taxes that users have to pay while using
                    ReitsDAO?{" "}
                  </p>
                  {!isqa6 ? (
                    <p
                      style={{ cursor: "pointer" }}
                      onClick={() => setisqa6(true)}
                    >
                      +
                    </p>
                  ) : (
                    <p
                      style={{ cursor: "pointer" }}
                      onClick={() => setisqa6(false)}
                    >
                      -
                    </p>
                  )}
                </div>
                {isqa6 ? (
                  <p
                    style={{ cursor: "pointer" }}
                    onClick={() => setisqa6(false)}
                  >
                    There is no tax to be paid by “RDF” holders and users.
                  </p>
                ) : null}
              </div>
            </div>
            <div className="qaLine2">
              <div className={!isqa2 ? `questions5` : `questions5After`}>
                <div className="question5">
                  <p
                    style={{ cursor: "pointer" }}
                    onClick={() => setisqa2(true)}
                  >
                    {" "}
                    How much can I invest?{" "}
                  </p>
                  {!isqa2 ? (
                    <p
                      style={{ cursor: "pointer" }}
                      onClick={() => setisqa2(true)}
                    >
                      +
                    </p>
                  ) : (
                    <p
                      style={{ cursor: "pointer" }}
                      onClick={() => setisqa2(false)}
                    >
                      -
                    </p>
                  )}
                </div>
                {isqa2 ? (
                  <p
                    style={{ cursor: "pointer" }}
                    onClick={() => setisqa2(false)}
                  >
                    There is no limit on the investment limit per person, so you
                    are free to invest as much as you want.
                  </p>
                ) : null}
              </div>
            </div>
            {more ? (
              <>
                <div className="qaLine2">
                  <div className={!isqa4 ? `questions5` : `questions5After`}>
                    <div className="question5">
                      <p
                        style={{ cursor: "pointer" }}
                        onClick={() => setisqa4(true)}
                      >
                        What is the minimum investment amount?{" "}
                      </p>
                      {!isqa4 ? (
                        <p
                          style={{ cursor: "pointer" }}
                          onClick={() => setisqa4(true)}
                        >
                          +
                        </p>
                      ) : (
                        <p
                          style={{ cursor: "pointer" }}
                          onClick={() => setisqa4(false)}
                        >
                          -
                        </p>
                      )}
                    </div>
                    {isqa4 ? (
                      <p
                        style={{ cursor: "pointer" }}
                        onClick={() => setisqa4(false)}
                      >
                        There is no minimum investment amount, but we recommend
                        1$ or more because there is a blockchain network fee
                        that can be paid when using an exchange or IPO.
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="qaLine2">
                  <div className={!isqa5 ? `questions5` : `questions5After`}>
                    <div className="question5">
                      <p
                        style={{ cursor: "pointer" }}
                        onClick={() => setisqa5(true)}
                      >
                        How do I use the service and invest?{" "}
                      </p>
                      {!isqa5 ? (
                        <p
                          style={{ cursor: "pointer" }}
                          onClick={() => setisqa5(true)}
                        >
                          +
                        </p>
                      ) : (
                        <p
                          style={{ cursor: "pointer" }}
                          onClick={() => setisqa5(false)}
                        >
                          -
                        </p>
                      )}
                    </div>
                    {isqa5 ? (
                      <p
                        style={{ cursor: "pointer" }}
                        onClick={() => setisqa5(false)}
                      >
                        {" "}
                        Because ReitsDAO operates as a decentralized system,
                        participation is only possible through a blockchain
                        wallet. Therefore, there is no separate membership
                        registration process. For more information, you can
                        check the user guidelines.
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="qaLine2">
                  <div className={!isqa7 ? `questions5` : `questions5After`}>
                    <div className="question5">
                      <p
                        style={{ cursor: "pointer" }}
                        onClick={() => setisqa7(true)}
                      >
                        {" "}
                        Is it a safe service with a principal guaranteed?{" "}
                      </p>
                      {!isqa7 ? (
                        <p
                          style={{ cursor: "pointer" }}
                          onClick={() => setisqa7(true)}
                        >
                          +
                        </p>
                      ) : (
                        <p
                          style={{ cursor: "pointer" }}
                          onClick={() => setisqa7(false)}
                        >
                          -
                        </p>
                      )}
                    </div>
                    {isqa7 ? (
                      <p
                        style={{ cursor: "pointer" }}
                        onClick={() => setisqa7(false)}
                      >
                        Due to the nature of the issuance of real estate value
                        as collateral, the “RDF” value fluctuates less and is
                        relatively safe, but the principal is not guaranteed.
                        The “RDF” value reflects the value and revenue of all
                        real estate owned by ReitsDAO.
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="qaLine2">
                  <div className={!isqa8 ? `questions5` : `questions5After`}>
                    <div className="question5">
                      <p
                        style={{ cursor: "pointer" }}
                        onClick={() => setisqa8(true)}
                      >
                        {" "}
                        Can “RDF” tokens be converted into cash right away?{" "}
                      </p>
                      {!isqa8 ? (
                        <p
                          style={{ cursor: "pointer" }}
                          onClick={() => setisqa8(true)}
                        >
                          +
                        </p>
                      ) : (
                        <p
                          style={{ cursor: "pointer" }}
                          onClick={() => setisqa8(false)}
                        >
                          -
                        </p>
                      )}
                    </div>
                    {isqa8 ? (
                      <p
                        style={{ cursor: "pointer" }}
                        onClick={() => setisqa8(false)}
                      >
                        {" "}
                        Yes. You can instantly cash out at any time using the
                        exchange where “RDF” is listed or the decentralized
                        exchange AMM DEX.
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="qaLine2">
                  <div className={!isqa9 ? `questions5` : `questions5After`}>
                    <div className="question5">
                      <p
                        style={{ cursor: "pointer" }}
                        onClick={() => setisqa9(true)}
                      >
                        {" "}
                        Can I sell “RDF” tokens immediately after the public
                        offering ends?{" "}
                      </p>
                      {!isqa9 ? (
                        <p
                          style={{ cursor: "pointer" }}
                          onClick={() => setisqa9(true)}
                        >
                          +
                        </p>
                      ) : (
                        <p
                          style={{ cursor: "pointer" }}
                          onClick={() => setisqa9(false)}
                        >
                          -
                        </p>
                      )}
                    </div>
                    {isqa9 ? (
                      <p
                        style={{ cursor: "pointer" }}
                        onClick={() => setisqa9(false)}
                      >
                        {" "}
                        Yes. “RDF” Token issued by ReitsDAO can be paid as soon
                        as the public offering (IPO) is over, and can be sold at
                        any time using the exchange where “RDF” is listed or the
                        decentralized exchange AMM DEX.
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="qaLine2">
                  <div className={!isqa10 ? `questions7` : `questions7After`}>
                    <div className="question5">
                      <p
                        style={{ cursor: "pointer" }}
                        onClick={() => setisqa10(true)}
                      >
                        {" "}
                        What is the expected return?{" "}
                      </p>
                      {!isqa10 ? (
                        <p
                          style={{ cursor: "pointer" }}
                          onClick={() => setisqa10(true)}
                        >
                          +
                        </p>
                      ) : (
                        <p
                          style={{ cursor: "pointer" }}
                          onClick={() => setisqa10(false)}
                        >
                          -
                        </p>
                      )}
                    </div>
                    {isqa10 ? (
                      <p
                        style={{ cursor: "pointer" }}
                        onClick={() => setisqa10(false)}
                      >
                        {" "}
                        The profit structure of "RDF" token is increase in real
                        estate value, rental income, and DeFi. Real estate value
                        increase is expected to be 10% or more per year, rental
                        income is 5% to 10%, and DeFi is predicted to be more
                        than 5%. (This is a forecast and not absolute.) As real
                        estate increases in value and rental income continue to
                        be used to buy-back “RDF” token, it is likely to
                        increase in value over the long term. Because ReitsDAO
                        invests in a variety of real estate, including
                        residential and commercial real estate, the exact rate
                        of return may fluctuate.
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="qaLine2">
                  <div className={!isqa11 ? `questions7` : `questions7After`}>
                    <div className="question5">
                      <p
                        style={{ cursor: "pointer" }}
                        onClick={() => setisqa11(true)}
                      >
                        How do I get a return on my investment?
                      </p>
                      {!isqa11 ? (
                        <p
                          style={{ cursor: "pointer" }}
                          onClick={() => setisqa11(true)}
                        >
                          +
                        </p>
                      ) : (
                        <p
                          style={{ cursor: "pointer" }}
                          onClick={() => setisqa11(false)}
                        >
                          -
                        </p>
                      )}
                    </div>
                    {isqa11 ? (
                      <p
                        style={{ cursor: "pointer" }}
                        onClick={() => setisqa11(false)}
                      >
                        The way to earn money through ReitsDAO is by selling
                        “RDF” tokens received through public offerings or market
                        transactions, or by staking in several DeFi services
                        that support “RDF” tokens. Since ReitsDAO purchases and
                        burns “RDF” on a regular basis using real estate sales
                        and rental income, all real estate returns are
                        continuously reflected in the “RDF” token value.
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="qaLine2">
                  <div className={!isqa12 ? `questions5` : `questions5After`}>
                    <div className="question5">
                      <p
                        style={{ cursor: "pointer" }}
                        onClick={() => setisqa12(true)}
                      >
                        Is it possible to cancel after participating in an IPO?
                      </p>
                      {!isqa12 ? (
                        <p
                          style={{ cursor: "pointer" }}
                          onClick={() => setisqa12(true)}
                        >
                          +
                        </p>
                      ) : (
                        <p
                          style={{ cursor: "pointer" }}
                          onClick={() => setisqa12(false)}
                        >
                          -
                        </p>
                      )}
                    </div>
                    {isqa12 ? (
                      <p
                        style={{ cursor: "pointer" }}
                        onClick={() => setisqa12(false)}
                      >
                        It is an IPO system that operates on a blockchain
                        system, so cancellation or withdrawal is impossible in
                        the middle, so please invest with caution.
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="qaLine2">
                  <div className={!isqa13 ? `questions5` : `questions5After`}>
                    <div className="question5">
                      <p
                        style={{ cursor: "pointer" }}
                        onClick={() => setisqa13(true)}
                      >
                        What kind of service is ReitsDAO?
                      </p>
                      {!isqa13 ? (
                        <p
                          style={{ cursor: "pointer" }}
                          onClick={() => setisqa13(true)}
                        >
                          +
                        </p>
                      ) : (
                        <p
                          style={{ cursor: "pointer" }}
                          onClick={() => setisqa13(false)}
                        >
                          -
                        </p>
                      )}
                    </div>
                    {isqa13 ? (
                      <p
                        style={{ cursor: "pointer" }}
                        onClick={() => setisqa13(false)}
                      >
                        ReitsDAO is a decentralized real estate investment
                        platform service that makes real estate investment easy
                        to access even with a small amount of money. All users
                        of ReitsDAO can easily make real estate investments
                        indirectly by holding “RDF” tokens.
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="qaLine2">
                  <div className={!isqa14 ? `questions5` : `questions5After`}>
                    <div className="question5">
                      <p
                        style={{ cursor: "pointer" }}
                        onClick={() => setisqa14(true)}
                      >
                        Are the assets invested in ReitsDAO through IPO safely
                        managed?
                      </p>
                      {!isqa14 ? (
                        <p
                          style={{ cursor: "pointer" }}
                          onClick={() => setisqa14(true)}
                        >
                          +
                        </p>
                      ) : (
                        <p
                          style={{ cursor: "pointer" }}
                          onClick={() => setisqa14(false)}
                        >
                          -
                        </p>
                      )}
                    </div>
                    {isqa14 ? (
                      <p
                        style={{ cursor: "pointer" }}
                        onClick={() => setisqa14(false)}
                      >
                        All assets invested during the public offering period
                        are safely stored in the blockchain smart contract
                        wallet, not the ReitsDAO company wallet. If there is a
                        problem with the service, all real estate will be sold
                        and paid to the “RDF” token holder.
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="qaLine2">
                  <div className={!isqa15 ? `questions5` : `questions5After`}>
                    <div className="question5">
                      <p
                        style={{ cursor: "pointer" }}
                        onClick={() => setisqa15(true)}
                      >
                        What is the initial listing price of “RDF” tokens?
                      </p>
                      {!isqa15 ? (
                        <p
                          style={{ cursor: "pointer" }}
                          onClick={() => setisqa15(true)}
                        >
                          +
                        </p>
                      ) : (
                        <p
                          style={{ cursor: "pointer" }}
                          onClick={() => setisqa15(false)}
                        >
                          -
                        </p>
                      )}
                    </div>
                    {isqa15 ? (
                      <p
                        style={{ cursor: "pointer" }}
                        onClick={() => setisqa15(false)}
                      >
                        The initial listing price of “RDF” tokens starts with
                        the initial public offering amount and is $1.
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="qaLine2">
                  <div className={!isqa16 ? `questions7` : `questions7After`}>
                    <div className="question5">
                      <p
                        style={{ cursor: "pointer" }}
                        onClick={() => setisqa16(true)}
                      >
                         What if the real estate owned by ReitsDAO is damaged or destroyed?
                      </p>
                      {!isqa16 ? (
                        <p
                          style={{ cursor: "pointer" }}
                          onClick={() => setisqa16(true)}
                        >
                          +
                        </p>
                      ) : (
                        <p
                          style={{ cursor: "pointer" }}
                          onClick={() => setisqa16(false)}
                        >
                          -
                        </p>
                      )}
                    </div>
                    {isqa16 ? (
                      <p
                        style={{ cursor: "pointer" }}
                        onClick={() => setisqa16(false)}
                      >
                        All properties owned by ReitsDAO are insured. Therefore, if real estate is damaged or destroyed, it will be handled according to the registered property insurance coverage, and the company will directly respond and solve it. In addition, if a critical matter occurs in the building and the decision of the holder is required, voting is conducted through the DAO system, and it is decided according to the opinions of the holders.
                      </p>
                    ) : null}
                  </div>
                </div>
              </>
            ) : (
              <p
                onClick={readMore}
                style={{
                  cursor: "pointer",
                  marginLeft: "-250px",
                  marginTop: "20px",
                }}
              >
                Read more...
              </p>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
