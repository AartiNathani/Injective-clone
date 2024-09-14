import { MdOutlineEmail } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";
import { IoLogoDiscord } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import logo from "../assets/injective-logo.png"
function Footer () {
    return(
        <>
        <div className="bg-light ">
            <div className="container pt-5 ">
            <div className="color-blue h4" id="font-weight-600">Sign up or exclusive plans</div>
            <div className="row mt-5">
                <div className="col ">
                    <div className="">
                    <MdOutlineEmail className="bg-lightblue rounded-1 color-white"/>
                    <input className="border-0 bg-light" type="email" placeholder="Your@gmail.com" id="name" name="name" />
                    <span className="ms-5 "> <FiArrowUpRight className="text-end bg-gray rounded-5  ms-5 "/> </span>
                    <hr className="w-50"/>
                    </div>
                </div>
                <div className="col d-flex justify-content-end ">
                    <a href="" className="text-dark">
                        <div className="bg-gray p-3 rounded"> <IoLogoDiscord className="svg-height"/> </div>
                    </a>
                    <a href="" className="text-dark">
                        <div className="bg-gray p-3 rounded ms-2"><FaTwitter className="svg-height"/> </div>
                    </a>
                    <a href="" className="text-dark">
                        <div className="bg-gray p-3 rounded ms-2"> <FaGithub className="svg-height"/> </div>
                    </a>
                    <a href="" className="text-dark">
                        <div className="bg-gray p-3 rounded ms-2"><FaTelegram className="svg-height"/></div>
                    </a>
                    <a href="" className="text-dark">
                        <div className="bg-gray p-3 rounded ms-2"> <FaReddit className="svg-height"/> </div>
                    </a>
                    <a href="" className="text-dark">
                        <div className="bg-gray p-3 rounded ms-2"><FaYoutube className="svg-height"/> </div>
                    </a>
                </div>
            </div>
            
            <div className="row mt-5">
                <div className="col mt-3">
                    <div className="font-18" id="font-weight-600">DEVELOPERS</div>
                    <ul className="list-unstyled font-14 mt-4 footer-line-height">
                        <li> <a className="text-decoration-none text-dark footer-nav-hover" href="">Developer Overview</a> </li>
                        <li> <a className="text-decoration-none text-dark footer-nav-hover" href="">Documentation</a> </li>
                        <li> <a className="text-decoration-none text-dark footer-nav-hover" href="">InEVM</a> </li>
                        <li> <a className="text-decoration-none text-dark footer-nav-hover" href="">Injective Venture Group</a> </li>
                        <li> <a className="text-decoration-none text-dark footer-nav-hover" href="">Github</a> </li>
                        <li> <a className="text-decoration-none text-dark footer-nav-hover" href="">Developer Chat</a> </li>
                    </ul>
                </div>
                <div className="col mt-3">
                    <div className="font-18" id="font-weight-600">INDIVIDUALS</div>
                    <ul className="list-unstyled font-14 mt-4 footer-line-height">
                        <li> <a className="text-decoration-none text-dark " href="">Explore Ecosystem</a> </li>
                        <li> <a className="text-decoration-none text-dark " href="">get INJ</a> </li>
                        <li> <a className="text-decoration-none text-dark " href="">Injective Hub</a> </li>
                        <li> <a className="text-decoration-none text-dark " href="">Injective Bridge</a> </li>
                        <li> <a className="text-decoration-none text-dark " href="">Injective Explorer</a> </li>
                        <li> <a className="text-decoration-none text-dark " href="">Stake INJ</a> </li>
                        <li> <a className="text-decoration-none text-dark " href="">Ninja Pass</a> </li>
                    </ul>
                </div>
                <div className="col mt-3">
                    <div className="font-18" id="font-weight-600">INSTITUTIONS</div>
                    <ul className="list-unstyled font-14 mt-4 footer-line-height">
                        <li> <a className="text-decoration-none text-dark " href="">Institutions Overview</a> </li>
                        <li> <a className="text-decoration-none text-dark " href="">Join The institutional Programs</a> </li>
                    </ul>
                </div>
                <div className="col mt-3">
                    <div className="font-18" id="font-weight-600">ECOSYSTEM </div>
                    <ul className="list-unstyled font-14 mt-4 footer-line-height">
                        <li> <a className="text-decoration-none text-dark " href="">aexplore Ecosystem</a> </li>
                        <li> <a className="text-decoration-none text-dark " href="">Injective Venture Group</a> </li>
                        <li> <a className="text-decoration-none text-dark " href="">Build</a> </li>
                    </ul>
                </div>
                <div className="col mt-3">
                    <div className="font-18" id="font-weight-600">Press</div>
                    <ul className="list-unstyled font-14 mt-4 footer-line-height">
                        <li> <a className="text-decoration-none text-dark " href="">In The News</a> </li>
                        <li> <a className="text-decoration-none text-dark " href="">Press Kit</a> </li>
                        <li> <a className="text-decoration-none text-dark " href="">Media Contact</a> </li>
                    </ul>
                </div>
                <div className="col mt-3">
                    <div className="font-18" id="font-weight-600">ABOUT</div>
                    <ul className="list-unstyled font-14 mt-4 footer-line-height">
                        <li> <a className="text-decoration-none text-dark " href="">About Injective</a> </li>
                        <li> <a className="text-decoration-none text-dark " href="">Careers</a> </li>
                        <li> <a className="text-decoration-none text-dark " href="">Blog</a> </li>
                        <li> <a className="text-decoration-none text-dark " href="">Injectice Labs</a> </li>
                        <li> <a className="text-decoration-none text-dark " href="">Injective Notifications</a> </li>
                        <li> <a className="text-decoration-none text-dark " href="">INJ Tokenomics</a> </li>
                    </ul>
                </div>
            </div>

            <div className="mt-5 footer-bottom-padding">
                <img src={logo} className="home-logo-height" alt="" /> <hr />
                <span className="color-gray font-11"> Copyright© 2024 Injective Foundation. All rights reserved. </span>
            </div>
            </div>
        </div>
        </>
    )
}
export default Footer