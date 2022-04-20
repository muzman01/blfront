import React,{useState,useEffect} from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import i1 from "../../img/metameskhead.png"
import i2 from "../../img/defi-services-1.png"
import i3 from "../../img/defi-services-2.png"
import i4 from "../../img/defi-services-3.png"
import axios from 'axios'
import Web3 from 'web3'
import "./Defi.css"
import abi from "./abi.json"
// import { useWeb3React } from "@web3-react/core";
export default function Defi() {
    const web3 = new Web3(new Web3.providers.HttpProvider("https://bsc-dataseed.binance.org/"))
    const [totalSup,setTotalSup] = useState()
    const [burn,Setburn] = useState()
    const [balance,setBalance] = useState()
    const contractAddress='0xf51903f5B838eDFDd4D0dDC8be2145863Eaf0032'
    const getTk = async () => {

        const contract =new web3.eth.Contract(abi,contractAddress)
        contract.methods.balanceOf("0x0000000000000000000000000000000000000000").call((err, result) => {
            if(err){
              console.log('Error: ', err);
         
            }
            Setburn(result)

          });
          contract.methods.totalSupply().call((err, result) => {
            if(err){
              console.log('Error: ', err);
         
            }
            
            setTotalSup(result)

          });
          console.log(abi);
        
    }
useEffect(() => {
    const contract =new web3.eth.Contract(abi,contractAddress)
    contract.methods.balanceOf("0x0000000000000000000000000000000000000000").call((err, result) => {
        if(err){
          console.log('Error: ', err);
     
        }
        Setburn(result)

      });
      contract.methods.totalSupply().call((err, result) => {
        if(err){
          console.log('Error: ', err);
     
        }
        
        setTotalSup(result)

      });


  }, []);



  return (
    <>
    <NavBar />
    <section id="metamask" className="metamask" data-aos="zoom-out">
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-xl-4 text-center text-lg-start">
                    <div className="text-white mb-3">
                        <h6 className="bosluk">Total Supply</h6>
                        <h6 className="orange">
50,500</h6>
                    </div>

                    <div className="text-white mb-3 ">
                        <h6 className="bosluk">Circulation Supply </h6>
                        <h6 className="orange">50,500</h6>
                    </div>

                    <div className="text-white mb-3">
                        <h6 className="bosluk">Total Burned</h6>
                        <h6 className="orange">{burn}</h6>
                    </div>


                </div>
                <div className="col-xl-4 text-center text-lg-start padding-left  d-flex flex-column justify-content-center">
                    <div className="text-white mb-3">
                        <h6 className="bosluk">Market Cap</h6>
                        <h6 className="orange">0</h6>
                    </div>

                    <div className="text-white mb-3">
                        <h6 className="bosluk">RDF Token Price</h6>
                        <h6 className="orange">$ 0</h6>
                    </div>
                </div>
                <div
                    className="mt-4 mt-lg-0 col-xl-3 text-center text-lg-start d-flex align-items-center justify-content-center">
                    <img className="img-fluid m-auto" width="70" src={i1} alt=""/>
                    <button className="btn-add-meta-mask"  >Add To Metamask</button>
                </div>

            </div>
        </div>
    </section>
   

    <section className="defi-services" id="defiServices" data-aos="fade-up">
        <div className="container">
            <h1 className="text-center">Defi services</h1>
            <div className="row justify-content-center">

                <div className="col-xl-4 mb-5 mb-lg-0">
                    <div className="defi-cards">
                        <h2>Robinia</h2>
                        <img className="img-fluid m-auto" src={i2} />
                        <p>The first DeFi 1.0 project to
                            combine the advantages of
                            DeFi 2.0.</p>
                    </div>
                </div>

                <div className="col-lg-4 mb-5 mb-lg-0">
                    <div className="defi-cards">
                        <h2>Wisteria</h2>
                        <img className="img-fluid m-auto" src={i3} />
                        <p>First DeFi 2.0 combined
                            with the yield farming 
                            system</p>
                    </div>
                </div>
                <div className="col-lg-4 mb-lg-0">
                    <div className="defi-cards">
                        <h2>How to Start</h2>
                        <img className="img-fluid m-auto" src={i4}/>
                        <p>Youtube Tutorial <br></br>
                            Videos</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer />
    </>
  )
}
