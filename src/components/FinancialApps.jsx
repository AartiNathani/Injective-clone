import injectiveimg1 from "../assets/injective-img1.png"
import injectiveimg2 from "../assets/injectiveimg2.png"
import injectiveimg3 from "../assets/injectiveimg3.png"
import injectiveimg4 from "../assets/injectiveimg4.png"
import { GoArrowRight } from "react-icons/go";

import { useState } from "react";
// import { useEffect } from "react";

function FinancialApps () {

      // State to track the active button
  const [activeButton, setActiveButton] = useState('smartContracts');

  // Handlers to set the active button
  const handleSmartContracts = () => setActiveButton('smartContracts');
  const handleInteroperability = () => setActiveButton('interoperability');
  const handleDeFiSolutions = () => setActiveButton('deFiSolutions');
  const handleSecurity = () => setActiveButton('security');
    
//     const [showSmartContracts, setShowSmartContracts] = useState(true);
//     const [showInteroperability, setShowInteroperability] = useState(false);
//     const [showDeFiSolutions, setShowDeFiSolutions] = useState(false);
//     const [showSecurity, setShowSecurity] = useState(false);


//     // const [showBtncolor,setShowBtncolor] = useState(false);
//     // const handleBtnColor = () => {
//     //     setShowBtncolor("true");
//     //   };

    


//     // Handler functions to update content visibility
//   const handleSmartContracts = () => {
//     setShowSmartContracts(true);
//     setShowInteroperability(false);
//     setShowDeFiSolutions(false);
//     setShowSecurity(false);
//     // showBtncolor(true);
//   };

//   const handleInteroperability = () => {
//     setShowSmartContracts(false);
//     setShowInteroperability(true);
//     setShowDeFiSolutions(false);
//     setShowSecurity(false);
//   };

//   const handleDeFiSolutions = () => {
//     setShowSmartContracts(false);
//     setShowInteroperability(false);
//     setShowDeFiSolutions(true);
//     setShowSecurity(false);
//   };

//   const handleSecurity = () => {
//     setShowSmartContracts(false);
//     setShowInteroperability(false);
//     setShowDeFiSolutions(false);
//     setShowSecurity(true);
//   };

    return (
        <>
        <div className="margin-top margin-bottom container">            
            <div className="">
                <div className="row">
                    <div className="col">
                        <div className="font-64" id="font-weight-800">Create best in-class financial apps</div>
                        <div className="mt-4 ">
                            {/* <div className=""><button  className={`${btncolor?   " btn-onclick ":" "}  btn   fw-bold mt-4`} onClick={handleBtnColor} >Revolutionizing Smart Contracts <GoArrowRight className="icon-hover onclick-show"/></button></div> */}
                            <div className=""><button  className={`btn btn-focus hover-blue mt-4 ${activeButton === 'smartContracts' ? 'app-active-btn' : '' } `} onClick={handleSmartContracts} >Revolutionizing Smart Contracts <GoArrowRight className="icon-hover onclick-show"/></button></div>
                            <div className=""><button  className={`btn btn-focus hover-blue mt-4 ${activeButton === 'interoperability' ? 'app-active-btn' : '' }`} onClick={handleInteroperability} >Pioneering Interoperability <GoArrowRight className="icon-hover onclick-show"/></button></div>
                            <div className=""><button  className={`btn btn-focus hover-blue mt-4 ${activeButton === 'deFiSolutions' ? 'app-active-btn' : '' }`} onClick={handleDeFiSolutions} >Customized DeFi Solutions <GoArrowRight className="icon-hover onclick-show"/></button></div>
                            <div className=""><button  className={`btn btn-focus hover-blue mt-4 ${activeButton === 'security' ? 'app-active-btn' : '' }`} onClick={handleSecurity} >Formidable Security <GoArrowRight className="icon-hover onclick-show"/></button></div>
                            <div className=""><button  className="border-0 rounded btn-blue text-light uphover-animation p-3 mt-5 fw-bold">Start building</button></div>
                        </div>
                    </div>

                    <div className="col">
                        {/* content for smart contracts */}
                        {activeButton === 'smartContracts' && (
                            <div className=" ">
                            <div className="">
                                <img className="mt-3" src={injectiveimg1} alt="" />
                            </div>
                            <div className="mt-3 color-blue font-18" id="font-weight-600">Start Building Revolutionizing Smart Contracts</div>
                        <p className="mt-3 font-16" id="font-weight-300">Launch dynamic dApps with Injective`s powerful CosmWasm smart contract layer. Injective is the first blockchain to offer auto-executing smart contracts which empower faster, more innovative and groundbreaking applications. </p>
                        </div>
                        )}

                        {/* content for interoperability */}
                        {activeButton === 'interoperability' && (
                            <div className="">
                            <div className="">
                                <img className="mt-3" src={injectiveimg2} alt="" />
                            </div>
                            <div className="mt-3 color-blue fw-bold font-18" id="font-weight-600" >Pioneering Interoperability</div>
                            <p className="mt-3 font-16" id="font-weight-300" >Securely transfer crypto assets and Web3 data from prominent blockchains to utilize on any application built on Injective. All dApps within Injective’s ecosystem can natively access sovereign layer one chains such as Ethereum, Cosmos and Solana for frictionless interoperable communication.</p>
                            </div>
                        )}

                        {/* content for defi solutions */}
                        {activeButton === 'deFiSolutions' && (
                            <div className="">
                            <div className="">
                                <img className="injectiveimg-height mt-3" src={injectiveimg3} alt="" />
                            </div>
                            <div className="mt-3 color-blue fw-bold font-18" id="font-weight-600" >Customized DeFi Solutions</div>
                            <p className="mt-3 font-16" id="font-weight-300" >Injective offers a diverse array of novel Web3 modules & primitives such as the world`s first on-chain derivatives orderbook. Developers can rapidly build sophisticated dApps with plug-and-play modules and deep liquidity support from day one. </p>
                            </div>
                        )}

                        {/* content for security */}
                        {activeButton === 'security' && (
                            <div className="">
                            <div className="">
                                <img className="mt-3" src={injectiveimg4} alt="" />
                            </div>
                            <div className="mt-3 color-blue fw-bold font-18" id="font-weight-600" >Formidable Security</div>
                            <p className="mt-3 font-16" id="font-weight-300" >Deploy applications with peace of mind as Injective is secured by globally distributed validator nodes with the largest institutions contributing to the proof-of-stake network. Injective employs a Tendermint PoS consensus to secure transactions with instant finality.</p>
                            </div>
                        )}

                    </div>
                    
                </div>
            </div>
        </div>
        </>
    )
}
export default FinancialApps