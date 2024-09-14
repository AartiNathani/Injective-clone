import logo from "../assets/injective-logo.png"
import { IoMdArrowDropdown } from "react-icons/io";
// import transparent_blue from "../assets/blue-transparent-injective.png";
import { FaLaptopCode } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { TiSocialVimeoCircular } from "react-icons/ti";
import { TbUniverse } from "react-icons/tb";
import { FiShare2 } from "react-icons/fi";
// import { FaInternetExplorer } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsChatSquareText } from "react-icons/bs";
import { BsPass } from "react-icons/bs";
import { BsCompassFill } from "react-icons/bs";
import { PiBridgeLight } from "react-icons/pi";
import { HiOutlineCircleStack } from "react-icons/hi2";
import { SlWallet } from "react-icons/sl";
import { PiBank } from "react-icons/pi";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { RiGlobalLine } from "react-icons/ri";
import { LiaHammerSolid } from "react-icons/lia";
import { MdPlayCircleOutline } from "react-icons/md";
import { FaRegFolderOpen } from "react-icons/fa";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { LuSearchCode } from "react-icons/lu";
import { GrArticle } from "react-icons/gr";
import { TbNotification } from "react-icons/tb";
import { MdOutlinePersonSearch } from "react-icons/md";
import { TbBrandRadixUi } from "react-icons/tb";
import { PiGraph } from "react-icons/pi";

function Navbar () {
    return (
        <>
        <div>
      <div>
        <div>
          <nav className="navbar navbar-expand-md ms-5 mt-2 ">
            <a className="navbar-brand" href="#">
              <img src={logo} className=" home-logo-height" alt="logo" />{" "}
            </a>
            <button
              className="navbar-toggler "
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon bg-light rounded toggle-orange" id="togglebtn" />
            </button>
            <div className="gradient-background-blue"></div>
            <div className="collapse  navbar-collapse nav-content " id="navbarSupportedContent">
              <ul className="d-flex list-unstyled ">

                <div className="dropdown">
                <button className="btn menu-item navbtns">Developers</button>
                    <div className="hover-content bg-white">
                        <div className="row">
                            <div className="col">
                                <a href="" className="d-flex">
                                    <div className="">
                                        <FaLaptopCode className="mt-3 rounded p-2 color-blue bg-gray hover-nav-content-icon"/>
                                    </div>
                                    <div className="text-start ">
                                        <a href="">
                                            <div className="">
                                                <span className="fw-bold">Developer overview</span>
                                            </div>
                                            <span className="font-11 color-gray">Learn how to start building on Injective</span>
                                        </a>
                                    </div>
                                </a>

                                <a href="" className="d-flex">
                                    <div className="">
                                        <TiSocialVimeoCircular className="mt-3 rounded p-2 color-blue bg-gray hover-nav-content-icon"/>
                                    </div>
                                    <div className="text-start ">
                                        <a href="">
                                            <div className="">
                                                <span className="fw-bold">inEVM</span>
                                            </div>
                                            <span className="font-11 color-gray">Hyperscale development with Injective`s blazing-fast Ethereum Virtual Machine</span>
                                        </a>
                                    </div>
                                </a>
                            </div>
                            <div className="col">
                                <a href="" className="d-flex">
                                    <div className="">
                                        <IoDocumentTextOutline className="mt-3 rounded p-2 color-blue bg-gray hover-nav-content-icon"/>
                                    </div>
                                    <div className="text-start ">
                                        <a href="">
                                            <div className="">
                                                <span className="fw-bold">Documentation</span>
                                            </div>
                                            <span className="font-11 color-gray">Drive into Injective`s developer docs. Web3 modules and guides</span>
                                        </a>
                                    </div>
                                </a>

                                <a href="" className="d-flex">
                                    <div className="">
                                        <TbUniverse className="mt-3 rounded p-2 color-blue bg-gray hover-nav-content-icon"/>
                                    </div>
                                    <div className="text-start ">
                                        <a href="">
                                            <div className="">
                                                <span className="fw-bold">Injective venture Group</span>
                                            </div>
                                            <span className="font-11 color-gray">Connect with leading institutions & VCs to fund your project.</span>
                                        </a>
                                    </div>
                                </a>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col">
                                <a href="" className="d-flex">
                                    <div className="">
                                        <FiShare2 className="mt-3 rounded p-2 color-blue bg-gray hover-nav-content-icon"/>
                                    </div>
                                    <div className="text-start ">
                                        <a href="">
                                            <div className="">
                                                <span className="fw-bold">Injective Hub</span>
                                            </div>
                                            <span className="font-11 color-gray">Connect to get started with your Injective journey</span>
                                        </a>
                                    </div>
                                </a>

                                <a href="" className="d-flex">
                                    <div className="">
                                        <FaGithub className="mt-3 rounded p-2 color-blue bg-gray hover-nav-content-icon"/>
                                    </div>
                                    <div className="text-start ">
                                        <a href="">
                                            <div className="">
                                                <span className="fw-bold">Github</span>
                                            </div>
                                            <span className="font-11 color-gray">Discover Injective`s developer tools and libraries.</span>
                                        </a>
                                    </div>
                                </a>
                            </div>
                            <div className="col">
                                <a href="" className="d-flex">
                                    <div className="">
                                        <BsCompassFill className="mt-3 rounded p-2 color-blue bg-gray hover-nav-content-icon"/>
                                    </div>
                                    <div className="text-start ">
                                        <a href="">
                                            <div className="">
                                                <span className="fw-bold">Injective Explorer</span>
                                            </div>
                                            <span className="font-11 color-gray">Interact with real time activity and transactions on the injective blockchain</span>
                                        </a>
                                    </div>
                                </a>

                                <a href="" className="d-flex">
                                    <div className="">
                                        <BsChatSquareText className="mt-3 rounded p-2 color-blue bg-gray hover-nav-content-icon"/>
                                    </div>
                                    <div className="text-start ">
                                        <a href="">
                                            <div className="">
                                                <span className="fw-bold">Developer Chat Support</span>
                                            </div>
                                            <span className="font-11 color-gray">Receive supportat any time from Injective`s global community of contributors</span>
                                        </a>
                                    </div>
                                </a>
                            </div>

                        </div>
                        
                    </div>
                </div>
                
                <div className="dropdown">
                <button className="btn menu-item navbtns">Individuals</button>
                <div className="hover-content bg-white">
                        <div className="row">
                            <div className="col">
                                <a href="" className="d-flex">
                                    <div className="">
                                        <BsCompassFill className="mt-3 rounded p-2 color-blue bg-gray hover-nav-content-icon"/>
                                    </div>
                                    <div className="text-start ">
                                        <a href="">
                                            <div className="">
                                                <span className="fw-bold">Explore Ecosystem</span>
                                            </div>
                                            <span className="font-11 color-gray">Explore the global network of dApps, institutions and partners building the future of finance</span>
                                        </a>
                                    </div>
                                </a>

                                <a href="" className="d-flex">
                                    <div className="">
                                        <FiShare2 className="mt-3 rounded p-2 color-blue bg-gray hover-nav-content-icon"/>
                                    </div>
                                    <div className="text-start ">
                                        <a href="">
                                            <div className="">
                                                <span className="fw-bold">Injective Hub</span>
                                            </div>
                                            <span className="font-11 color-gray">Connect to get started with your injective journey</span>
                                        </a>
                                    </div>
                                </a>
                            </div>
                            <div className="col">
                                <a href="" className="d-flex">
                                    <div className="">
                                        <SlWallet className="mt-3 rounded p-2 color-blue bg-gray hover-nav-content-icon"/>
                                    </div>
                                    <div className="text-start ">
                                        <a href="">
                                            <div className="">
                                                <span className="fw-bold">Get INJ</span>
                                            </div>
                                            <span className="font-11 color-gray">Access the asset powering the injective ecosystem</span>
                                        </a>
                                    </div>
                                </a>

                                <a href="" className="d-flex">
                                    <div className="">
                                        <PiBridgeLight className="mt-3 rounded p-2 color-blue bg-gray hover-nav-content-icon"/>
                                    </div>
                                    <div className="text-start ">
                                        <a href="">
                                            <div className="">
                                                <span className="fw-bold">Injective Bridge</span>
                                            </div>
                                            <span className="font-11 color-gray">Securely transfer assets across Ethereum, Cosmos and more on the fastest interoperable blockchain</span>
                                        </a>
                                    </div>
                                </a>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col">
                                <a href="" className="d-flex">
                                    <div className="">
                                        <BsCompassFill className="mt-3 rounded p-2 color-blue bg-gray hover-nav-content-icon"/>
                                    </div>
                                    <div className="text-start ">
                                        <a href="">
                                            <div className="">
                                                <span className="fw-bold">Injective Explorer</span>
                                            </div>
                                            <span className="font-11 color-gray">Interact with real time activity and transactions on the injective blockchain</span>
                                        </a>
                                    </div>
                                </a>

                                <a href="" className="d-flex">
                                    <div className="">
                                        <BsPass className="mt-3 rounded p-2 color-blue bg-gray hover-nav-content-icon"/>
                                    </div>
                                    <div className="text-start ">
                                        <a href="">
                                            <div className="">
                                                <span className="fw-bold">Ninja pass</span>
                                            </div>
                                            <span className="font-11 color-gray">Learn how to start building on Injective</span>
                                        </a>
                                    </div>
                                </a>
                            </div>
                            <div className="col">
                                <a href="" className="d-flex">
                                    <div className="">
                                        <HiOutlineCircleStack className="mt-3 rounded p-2 color-blue bg-gray hover-nav-content-icon"/>
                                    </div>
                                    <div className="text-start ">
                                        <a href="">
                                            <div className="">
                                                <span className="fw-bold">Stake INJ</span>
                                            </div>
                                            <span className="font-11 color-gray">Earn rewards by staking INJ to secure injective`s PoS network</span>
                                        </a>
                                    </div>
                                </a>
                            </div>

                        </div>
                        
                    </div>
                </div>

                <div className="dropdown">
                <button className="btn menu-item navbtns">Institutions</button>
                    <div className="hover-content bg-white" style={{width:"300px", marginLeft:"-100px"}}>
                    <div className="row">
                            <div className="col">
                                <a href="" className="d-flex">
                                    <div className="">
                                        <PiBank className="mt-3 rounded p-2 color-blue bg-gray hover-nav-content-icon"/>
                                    </div>
                                    <div className="text-start ">
                                        <a href="">
                                            <div className="">
                                                <span className="fw-bold">Institutions overview</span>
                                            </div>
                                            <span className="font-11 color-gray">Learn why the leading financial institutions are backing injective</span>
                                        </a>
                                    </div>
                                </a>

                                <a href="" className="d-flex">
                                    <div className="">
                                        <HiMiniArrowTopRightOnSquare className="mt-3 rounded p-2 color-blue bg-gray hover-nav-content-icon"/>
                                    </div>
                                    <div className="text-start ">
                                        <a href="">
                                            <div className="">
                                                <span className="fw-bold">Join the Institutional Programs</span>
                                            </div>
                                            <span className="font-11 color-gray">Onboard as a financial institution or liquidity provider to earn unmatched rewards through injective`s bespoke institutional programs</span>
                                        </a>
                                    </div>
                                </a>
                            </div>
                    </div>
                    </div>
                </div>

                <div className="dropdown">
                <button className="btn menu-item navbtns">Ecosystem</button>
                    <div className="hover-content bg-white" style={{width:"300px", marginLeft:"-100px"}}>
                    <div className="row">
                            <div className="col">
                                <a href="" className="d-flex">
                                    <div className="">
                                        <RiGlobalLine className="mt-3 rounded p-2 color-blue bg-gray hover-nav-content-icon"/>
                                    </div>
                                    <div className="text-start ">
                                        <a href="">
                                            <div className="">
                                                <span className="fw-bold">Explore Ecosystem</span>
                                            </div>
                                            <span className="font-11 color-gray">Explore the global network of dApps, institutions and partners building the future of finance</span>
                                        </a>
                                    </div>
                                </a>
                                <a href="" className="d-flex">
                                    <div className="">
                                        <TbUniverse className="mt-3 rounded p-2 color-blue bg-gray hover-nav-content-icon"/>
                                    </div>
                                    <div className="text-start ">
                                        <a href="">
                                            <div className="">
                                                <span className="fw-bold">Injective Venture Group</span>
                                            </div>
                                            <span className="font-11 color-gray">Connect with leading institutions & VCs to fund your project.</span>
                                        </a>
                                    </div>
                                </a>

                                <a href="" className="d-flex">
                                    <div className="">
                                        <LiaHammerSolid className="mt-3 rounded p-2 color-blue bg-gray hover-nav-content-icon"/>
                                    </div>
                                    <div className="text-start ">
                                        <a href="">
                                            <div className="">
                                                <span className="fw-bold">Build</span>
                                            </div>
                                            <span className="font-11 color-gray">Start creating next generation dApps with injective`s unmatched Web3 modules and developer tools</span>
                                        </a>
                                    </div>
                                </a>
                            </div>
                    </div>
                    </div>
                </div>

                <div className="dropdown">
                <button className="btn menu-item navbtns">Press</button>
                <div className="hover-content bg-white" style={{width:"300px", marginLeft:"-100px"}}>
                    <div className="row">
                            <div className="col">
                                <a href="" className="d-flex">
                                    <div className="">
                                        <MdPlayCircleOutline className="mt-3 rounded p-2 color-blue bg-gray hover-nav-content-icon"/>
                                    </div>
                                    <div className="text-start ">
                                        <a href="">
                                            <div className="">
                                                <span className="fw-bold">In the news</span>
                                            </div>
                                            <span className="font-11 color-gray">Read the latest injective news and press coverage</span>
                                        </a>
                                    </div>
                                </a>
                                <a href="" className="d-flex">
                                    <div className="">
                                        <FaRegFolderOpen className="mt-3 rounded p-2 color-blue bg-gray hover-nav-content-icon"/>
                                    </div>
                                    <div className="text-start ">
                                        <a href="">
                                            <div className="">
                                                <span className="fw-bold">Press kit</span>
                                            </div>
                                            <span className="font-11 color-gray">Access injective`s brand assets, logo and guidelines</span>
                                        </a>
                                    </div>
                                </a>

                                <a href="" className="d-flex">
                                    <div className="">
                                        <BiMessageRoundedDetail className="mt-3 rounded p-2 color-blue bg-gray hover-nav-content-icon"/>
                                    </div>
                                    <div className="text-start ">
                                        <a href="">
                                            <div className="">
                                                <span className="fw-bold">Media contact</span>
                                            </div>
                                            <span className="font-11 color-gray">for media inquiries, please reach out to press@injective.com</span>
                                        </a>
                                    </div>
                                </a>
                            </div>
                    </div>
                    </div>
                </div>

                <div className="dropdown">
                <button className="btn menu-item navbtns">About</button>
                <div className="hover-content bg-white"  style={{marginLeft:"-400px"}}>
                        <div className="row">
                            <div className="col">
                                <a href="" className="d-flex">
                                    <div className="">
                                        <LuSearchCode className="mt-3 rounded p-2 color-blue bg-gray hover-nav-content-icon"/>
                                    </div>
                                    <div className="text-start ">
                                        <a href="">
                                            <div className="">
                                                <span className="fw-bold">About injective</span>
                                            </div>
                                            <span className="font-11 color-gray">Learn more about the Injective mission and roadmap</span>
                                        </a>
                                    </div>
                                </a>

                                <a href="" className="d-flex">
                                    <div className="">
                                        <GrArticle className="mt-3 rounded p-2 color-blue bg-gray hover-nav-content-icon"/>
                                    </div>
                                    <div className="text-start ">
                                        <a href="">
                                            <div className="">
                                                <span className="fw-bold">Blog</span>
                                            </div>
                                            <span className="font-11 color-gray">Read the major injective updates and news</span>
                                        </a>
                                    </div>
                                </a>
                            </div>
                            <div className="col">
                                <a href="" className="d-flex">
                                    <div className="">
                                        <MdOutlinePersonSearch className="mt-3 rounded p-2 color-blue bg-gray hover-nav-content-icon"/>
                                    </div>
                                    <div className="text-start ">
                                        <a href="">
                                            <div className="">
                                                <span className="fw-bold">Careers</span>
                                            </div>
                                            <span className="font-11 color-gray">Start contributing to the community poineering a new financial system</span>
                                        </a>
                                    </div>
                                </a>

                                <a href="" className="d-flex">
                                    <div className="">
                                        <TbBrandRadixUi className="mt-3 rounded p-2 color-blue bg-gray hover-nav-content-icon"/>
                                    </div>
                                    <div className="text-start ">
                                        <a href="">
                                            <div className="">
                                                <span className="fw-bold">Injective Labs</span>
                                            </div>
                                            <span className="font-11 color-gray">learn more about one of the core contributors to the injective ecosystem</span>
                                        </a>
                                    </div>
                                </a>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col">
                                <a href="" className="d-flex">
                                    <div className="">
                                        <TbNotification className="mt-3 rounded p-2 color-blue bg-gray hover-nav-content-icon"/>
                                    </div>
                                    <div className="text-start ">
                                        <a href="">
                                            <div className="">
                                                <span className="fw-bold">Injective Notifications</span>
                                            </div>
                                            <span className="font-11 color-gray">Receive updates on injective by signing up for notifications on Notifi</span>
                                        </a>
                                    </div>
                                </a>
                            </div>
                            <div className="col">
                                <a href="" className="d-flex">
                                    <div className="">
                                        <PiGraph className="mt-3 rounded p-2 color-blue bg-gray hover-nav-content-icon"/>
                                    </div>
                                    <div className="text-start ">
                                        <a href="">
                                            <div className="">
                                                <span className="fw-bold">INJ Tokenomics</span>
                                            </div>
                                            <span className="font-11 color-gray">Read the comprehensive paper on the token economic design of INJ</span>
                                        </a>
                                    </div>
                                </a>
                            </div>

                        </div>
                        
                    </div>
                </div>

                <div className="dropdown">
                   <button className="btn border border-dark rounded-5" type="button" data-bs-toggle="dropdown" aria-expanded="false" > En<IoMdArrowDropdown className="color-blue"/> </button>
                        <ul className="dropdown-menu">
                            <li> <a className="dropdown-item" href="#"> Arabic </a> </li>
                            <li> <a className="dropdown-item" href="#"> Chinese </a> </li>
                            <li> <a className="dropdown-item" href="#"> Dutch </a> </li>
                            <li> <a className="dropdown-item" href="#"> French </a> </li>
                            <li> <a className="dropdown-item" href="#"> Indonesian </a> </li>
                            <li> <a className="dropdown-item" href="#"> Japanese </a> </li>
                            <li> <a className="dropdown-item" href="#"> Korean </a> </li>
                            <li> <a className="dropdown-item" href="#"> Russian </a> </li>
                            <li> <a className="dropdown-item" href="#"> Spanish </a> </li>
                            <li> <a className="dropdown-item" href="#"> Thai </a> </li>
                            <li> <a className="dropdown-item" href="#"> Ukrainian </a> </li>
                            <li> <a className="dropdown-item" href="#"> Turkish </a> </li>
                            <li> <a className="dropdown-item" href="#"> Vietnamese </a> </li>
                        </ul>
                </div>
              </ul>
              
            </div>
          </nav>
        </div>
        {/* <Home/> */}
        {/* <Home/> */}
      </div>
    </div >
        </>
    )
}
export default Navbar