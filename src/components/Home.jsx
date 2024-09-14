import { CiCirclePlus } from "react-icons/ci";
import { BsBoxes } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { LiaFileContractSolid } from "react-icons/lia";
import { GrDocumentLocked } from "react-icons/gr";
import { SiBookstack } from "react-icons/si";
import { FaNetworkWired } from "react-icons/fa";

import { FiArrowRightCircle } from "react-icons/fi";

function Home() {
    return(
        <>
        <div className=" container margin-top">
            <div className="row">
                <div className="col-7 mt-5">
                    <div className="">
                        <div className="home-heading">The <span className="blockchain-gradient">blockchain</span> built for finance</div>
                        <p className="mt-2 font-20 color-gray" id="font-weight-300">Build and use the best Web3 applications on Injective, the fastest layer 1 blockchain shaping the future of finance.</p>
                    </div>
                    <div className="mt-4 ">
                        <a href="">
                            <button className="border-0 p-3 rounded btn-blue homebtn uphover-animation text-light fw-bold"> Start building </button>
                        </a>
                        <a href="">
                        <button className="border-0 ms-5 hover-blue bg-gray btnhover-icon-animation "> Explore Ecosystem <FiArrowRightCircle id="hover-animation"/> </button>
                        </a>
                    </div>
                </div>

                {/* video division */}
                <div className="col-5 text-center Home-grid">
                    {/* <div className="row"> */}
                        <div className=" homebox-height"></div>
                        {/* <div className="col homebox-height text-light bg-343FF5 rounded"> */}
                            <div className=" homebox-height rounded text-light font-10 bg-343FF5">
                            <BsBoxes className="bg-343FF5 svg-height"/> <br />ORACLE</div>
                        {/* </div> */}
                        <div className=" homebox-height text-light font-10 bg-0BD6EF rounded"> 
                            <SiBookstack className="bg-0BD6EF svg-height"/> <br /> ORDER BOOK</div>
                        <div className=" homebox-height "></div>
                    {/* </div> */}
                    {/* <div className="row"> */}
                        <div className=" homebox-height text-light font-10 bg-7F46AC rounded"> 
                            <IoSettingsOutline className="bg-7F46AC svg-height"/> <br /> OPTIONS</div>
                        <div className=" homebox-height rounded border border-dotted border-dark"> <CiCirclePlus className="plusicon-height" /> </div>
                        <div className=" homebox-height text-light font-10 bg-342593 rounded">
                            <FaHandHoldingDollar className="bg-342593 svg-height"/> <br /> LENDING</div>
                        <div className=" pt-3 homebox-height text-light font-10 bg-343FF5 rounded">
                            <LiaFileContractSolid className="bg-343FF5 svg-height"/> <br /> SMART CONTRACTS</div>
                    {/* </div> */}
                    {/* <div className="row"> */}
                        <div className=" homebox-height"></div>
                        <div className=" homebox-height text-light font-10 bg-0BD6EF rounded">
                            <GrDocumentLocked className="bg-0BD6EF svg-height"/> <br />SAVINGS</div>
                        <div className=" homebox-height text-light font-10 bg-7F46AC rounded">
                           <FaNetworkWired className="bg-7F46AC svg-height"/> <br /> DERIVATIVES</div>
                        <div className=" homebox-height"></div>
                    {/* </div> */}
                </div>

            </div>

        </div>
                    {/* <div className="gradient-background-blue"></div> */}
        </>
    )
}
export default Home