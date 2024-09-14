import { CiWallet } from "react-icons/ci";
import { FaHandHoldingUsd } from "react-icons/fa";
import { LiaNetworkWiredSolid } from "react-icons/lia";
import { TbHomeDollar } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { GrDocumentText } from "react-icons/gr";

import { useState } from "react";

function StartedInjective () {
     const [activeButton, setActiveButton] = useState('individuals'); // Default to 'individuals'

    const handleIndividuals = (buttonName) => {
        setActiveButton(buttonName);
    };

    const handleDevelopers = () => {
        setActiveButton('developers');
    };

    // const [showIndividuals, setShowIndividuals] = useState(true);
    // const [showDevelopers, setShowDevelopers] = useState(false);

    // // handler functions to update content
    // const handleIndividuals = () => {
    //     setShowIndividuals(true);
    //     setShowDevelopers(false);
    // }
    // const handleDevelopers = () => {
    //     setShowIndividuals(false);
    //     setShowDevelopers(true);
    // }

    return (
        <>
        <div className="container max-margin-top ">
            <div className="font-64" id="font-weight-800">How to get started <br /> with Injective</div>
            <div className="">
                <div className="mt-5">
                    <button className= {`btn btn-hover start-injective-btnhover color-gray font-20 ${activeButton === 'individuals' ? 'text-blue-underline active-btn' : 'color-gray' } `} onClick={ () => handleIndividuals ('individuals')} >FOR INDIVIDUALS</button>
                    <button className= {`btn btn-hover start-injective-btnhover color-gray font-20 ms-3 ${activeButton === 'developers' ? 'text-blue-underline active-btn' : 'color-gray' } `} onClick={ () => handleDevelopers ('developers')} >FOR Developers</button>
                    {/* <button className=" btn btn-hover start-injective-btnhover color-gray font-20 ms-2" onClick={handleDevelopers} > FOR DEVELOPERS</button> */}
                </div>

                {activeButton === 'individuals' && (
                    <div className="">
                    <div className="row">
                    <div className="col mt-5 ">
                        <a href="" className="text-decoration-none">
                        <div className="p-4 hoverup-animation bg-blue rounded-3 ">
                            <div className=" d-flex ">
                                <div className=""><h3 className="bg-light p-2 ps-3 pe-3 rounded-3 text-dark">1</h3></div>
                                <div className="icon-min-marginleft"> <CiWallet className=" icon-height color-white"/> </div>
                            </div>
                            <div className="mt-5 text-white">
                                <p className="fw-bold color-lightgray">Step 1</p>
                                <h3  id="font-weight-600">Create an Injective Wallet</h3>
                            </div>
                        </div>
                        </a>
                        <a href="" className=" text-decoration-none">
                        <div className="p-4 hoverup-animation bg-A85CFC mt-4 rounded-3 ">
                            <div className=" d-flex">
                                <div className=""><h3 className="bg-light p-2 ps-3 pe-3 rounded-3 text-dark">2</h3></div>
                                <div className="icon-min-marginleft"> <FaHandHoldingUsd className=" icon-height color-white"/> </div>
                            </div>
                            <div className="mt-5 text-white">
                                <p className="fw-bold color-lightgray">Step 2</p>
                                <h3  id="font-weight-600">Get INJ</h3>
                            </div>
                        </div>
                        </a>
                    </div>

                    <div className="col margin-top ">
                        <a href="" className="text-decoration-none">
                        <div className="p-4 hoverup-animation bg-7646FF col2-height rounded-3 ">
                            <div className=" d-flex">
                                <div className=""><h3 className="bg-light p-2 ps-3 pe-3 rounded-3 text-dark">3</h3></div>
                                <div className="icon-margin-start"> <LiaNetworkWiredSolid className="icon-height color-white"/> </div>
                            </div>
                            <div className="max-margin-top text-white ">
                                <p className="fw-bold color-lightgray">Step 3</p>
                                <h3  id="font-weight-600">Explore the Injective Hub</h3>
                            </div>
                        </div>
                        </a>
                    </div>
                    
                    <div className="col margin-top">
                        <a href="" className="text-decoration-none">
                        <div className="mt-5 hoverup-animation p-4 bg-00AAFF rounded-3 col3-height">
                            <div className=" d-flex">
                                <div className=""><h3 className="bg-light p-2 ps-3 pe-3 rounded-3 text-dark">4</h3></div>
                                <div className="icon-margin-start"> <TbHomeDollar className="ms-5 icon-height color-white"/> </div>
                            </div>
                            <div className="margin-top text-white">
                                <p className="fw-bold color-lightgray">Step 4</p>
                                <h3  id="font-weight-600">Bridge Assets</h3>
                            </div>
                        </div>
                        </a>
                    </div>

                    </div>

                    {/* <div className="row">
                    <div className="col-4 mt-minus">
                        <a href="" className="text-decoration-none">
                        <div className="p-4 bg-A85CFC rounded-3 ">
                            <div className=" d-flex">
                                <div className=""><h3 className="bg-light p-2 ps-3 pe-3 rounded-3 text-dark">2</h3></div>
                                <div className="ms-5 ps-5"> <FaHandHoldingUsd className="ms-5 icon-height color-white"/> </div>
                            </div>
                            <div className="mt-5 text-white">
                                <p>Step 2</p>
                                <h3>Get INJ</h3>
                            </div>
                        </div>
                        </a>
                    </div>
                    </div> */}
                </div>
                )}
                
                {activeButton === 'developers' && (
                    <div className="">
                    <div className="row">

                    <div className="col margin-top ">
                        <a href="" className="text-decoration-none">
                        <div className="p-4 hoverup-animation bg-7646FF col2-height rounded-3 ">
                            <div className=" d-flex">
                                <div className=""><h3 className="bg-light p-2 ps-3 pe-3 rounded-3 text-dark">1</h3></div>
                                <div className="icon-margin-start"> <HiOutlineDocumentSearch className="icon-height color-white"/> </div>
                            </div>
                            <div className="max-margin-top text-white ">
                                <p className="fw-bold color-lightgray">Step 1</p>
                                <h3  id="font-weight-600">Read the Developer Docs</h3>
                            </div>
                        </div>
                        </a>
                    </div>
                    
                    <div className="col mt-5">
                        <a href="" className="text-decoration-none">
                        <div className="p-4 hoverup-animation bg-blue rounded-3 ">
                            <div className=" d-flex ">
                                <div className=""><h3 className="bg-light p-2 ps-3 pe-3 rounded-3 text-dark">2</h3></div>
                                <div className="icon-min-marginleft"> <FaGithub className=" icon-height color-white"/> </div>
                            </div>
                            <div className="mt-5 text-white">
                                <p className="fw-bold color-lightgray">Step 2</p>
                                <h3  id="font-weight-600">Collaborate on the injective GitHub</h3>
                            </div>
                        </div>
                        </a>
                        <a href="" className=" text-decoration-none">
                        <div className="p-4 hoverup-animation bg-A85CFC mt-4 rounded-3 ">
                            <div className=" d-flex">
                                <div className=""><h3 className="bg-light p-2 ps-3 pe-3 rounded-3 text-dark">3</h3></div>
                                <div className="icon-min-marginleft"> <HiOutlineChatBubbleLeftRight className=" icon-height color-white"/> </div>
                            </div>
                            <div className="mt-5 text-white">
                                <p className="fw-bold color-lightgray">Step 3</p>
                                <h3  id="font-weight-600">Join the Developer Chat</h3>
                            </div>
                        </div>
                        </a>
                    </div>

                    <div className="col margin-top">
                        <a href="" className="text-decoration-none">
                        <div className="mt-5 p-4 hoverup-animation bg-00AAFF rounded-3 col3-height">
                            <div className=" d-flex">
                                <div className=""><h3 className="bg-light p-2 ps-3 pe-3 rounded-3 text-dark">4</h3></div>
                                <div className="icon-margin-start"> <GrDocumentText className="ms-5 icon-height color-white"/> </div>
                            </div>
                            <div className="margin-top text-white">
                                <p className="fw-bold color-lightgray">Step 4</p>
                                <h3  id="font-weight-600">Explore the Injective Ecosystem</h3>
                            </div>
                        </div>
                        </a>
                    </div>
                    </div>
                </div>
                )}
            </div>
        </div>
        </>
    )
}
export default StartedInjective