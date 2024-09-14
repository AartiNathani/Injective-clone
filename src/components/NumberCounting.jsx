import binanceLogo from "../assets/binance-logo.svg"
import panteraLogo from "../assets/pantera-logo.png"
import jumpLogo from "../assets/jump-logo.png"
import cubinLogo from "../assets/markcubin-logo.png"
import { BiNetworkChart } from "react-icons/bi";
import { LiaNetworkWiredSolid } from "react-icons/lia";
import { BiTransferAlt } from "react-icons/bi";
import { RiExchangeDollarLine } from "react-icons/ri";

import SpeedIncrement from './SpeedIncrement';  //import the component
import SlowIncrement from './SlowIncrement '; //slow increment component
function NumberCounting() {



    return(
        <>
        
        <div className="mt-5 container">
            <div className="">
                <p className="font-12 color-gray">BACKED BY THE BEST </p>
                <div className="">
                    <img className="binance" src={binanceLogo} alt="" />
                    <img className="pantera margin-start" src={panteraLogo} alt="" />
                    <img className="jump margin-start" src={jumpLogo} alt="" />
                    <img className="cubin margin-start" src={cubinLogo} alt="" />
                </div>
            </div>
                <div className="row mt-5 ">
                    <div className="col number-columns d-flex">
                            <BiNetworkChart className="svg-height p-1 color-blue rounded bg-gradient"/>
                        <div className="ms-3"><span className="h3 fw-bold" style={{display:"flex", height:"1px"}}> <SlowIncrement/> </span><br /> 
                        <span className="color-gray font-12" id="font-weight-300">BLOCKS PRODUCED</span></div>
                    </div>
                    <div className="col number-columns d-flex ">
                            <LiaNetworkWiredSolid className="svg-height p-1 color-blue rounded bg-gradient"/>
                        <div className="ms-3"><span className="h3 fw-bold" style={{display:"flex", height:"1px"}}><SpeedIncrement/></span><br /> 
                        <span className="color-gray font-12" id="font-weight-300" >ON-CHAIN TRANSACTIONS</span></div>
                    </div>
                    <div className="col number-columns d-flex">
                            <BiTransferAlt className="svg-height p-1 color-blue rounded bg-gradient"/>
                        <div className="ms-3"><span className="h3 fw-bold">0.64S</span><br /> 
                        <span className="color-gray font-12" id="font-weight-300">BLOCK TIME</span></div>
                    </div>
                    <div className="col number-columns d-flex">
                            <RiExchangeDollarLine className="svg-height p-1 color-blue rounded bg-gradient"/>
                        <div className="ms-3"><span className="h3 fw-bold">$0.01</span><br /> 
                        <span className="color-gray font-12" id="font-weight-300"> AVERAGE TRANSACTION COST </span></div>
                    </div>
                </div>
        </div>
        </>
    )
}
export default NumberCounting