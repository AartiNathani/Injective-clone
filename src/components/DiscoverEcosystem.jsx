import dojoswap from "../assets/dojoswap-logo.png"
import helix from "../assets/helix-logo.png"
import hydroProtocol from "../assets/hydroprotocol-logo.png"
import mito from "../assets/mito-logo.png"
import neptune from "../assets/neptune-logo.png"
import BHDigital from "../assets/BHdigital-logo.png"
import binancelabs from "../assets/binancelabs-logo.png"
import coinbase from "../assets/coinbase-logo.png"
import copper from "../assets/copper-logo.png"
import cumberland from "../assets/cumberlando-logo.png"
import BNBChain from "../assets/BNBChain-logo.png"
import chorusone from "../assets/ChorusOne-logo.png"
import Cosmostation from "../assets/Cosmostation-logo.png"
import DSRV from "../assets/DSRV-logo.png"
import HeliosStaking from "../assets/HeliosStaking-logo.png"
import SmartStake from "../assets/SmartStake-logo.png"
import Keplr from "../assets/keplr-logo.png"
import Leap from "../assets/Leap-logo.png"
import ledger from "../assets/Ledger-logo.png"
import metamask from "../assets/MetaMask-logo.png"
import ninji from "../assets/Ninji-logo.png"
import cosmosHub from "../assets/cosmosHub-logo.png"
import figment from "../assets/figment-logo.png"
import pyth from "../assets/pyth-logo.png"
import wormhole from "../assets/wormhle-logo.png"
import EspressoSystem from "../assets/EspressoSystems-logo.png"

import { FiArrowRightCircle } from "react-icons/fi";

import { useState } from "react"

function DiscoverEcosystem() {
  const [activeButton, setActiveButton] = useState('Featured Apps'); // Default active button

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  // const[showFeaturedApps, setShowFeaturedApps] = useState(true);
  // const[showInstitutions, setShowInstitutions] = useState(false);
  // const[showBlockchains, setShowBlockchains] = useState(false);
  // const[showExchanges, setShowExchanges] = useState(false);
  // const[showValidators, setShowValidators] = useState(false);
  // const[showWallets, setShowWallets] = useState(false);
  // const[showViewAll, setShowViewAll] = useState(false);

  // handle functions to update contetent visibility
  // const handleFeaturedApps = () => {
  //   setShowFeaturedApps(true);
  //   setShowInstitutions(false);
  //   setShowBlockchains(false);
  //   setShowExchanges(false);
  //   setShowValidators(false);
  //   setShowWallets(false);
  //   setShowViewAll(false);
  // }
  // const handleInstitutions = () => {
  //   setShowFeaturedApps(false);
  //   setShowInstitutions(true);
  //   setShowBlockchains(false);
  //   setShowExchanges(false);
  //   setShowValidators(false);
  //   setShowWallets(false);
  //   setShowViewAll(false);
  // }
  // const handleBlockchains = () => {
  //   setShowFeaturedApps(false);
  //   setShowInstitutions(false);
  //   setShowBlockchains(true);
  //   setShowExchanges(false);
  //   setShowValidators(false);
  //   setShowWallets(false);
  //   setShowViewAll(false);
  // }
  // const handleExchanges = () => {
  //   setShowFeaturedApps(false);
  //   setShowInstitutions(false);
  //   setShowBlockchains(false);
  //   setShowExchanges(true);
  //   setShowValidators(false);
  //   setShowWallets(false);
  //   setShowViewAll(false);
  // }
  // const handleValidators = () => {
  //   setShowFeaturedApps(false);
  //   setShowInstitutions(false);
  //   setShowBlockchains(false);
  //   setShowExchanges(false);
  //   setShowValidators(true);
  //   setShowWallets(false);
  //   setShowViewAll(false);
  // }
  // const handleWallets = () => {
  //   setShowFeaturedApps(false);
  //   setShowInstitutions(false);
  //   setShowBlockchains(false);
  //   setShowExchanges(false);
  //   setShowValidators(false);
  //   setShowWallets(true);
  //   setShowViewAll(false);
  // }
  // const handleViewAll = () => {
  //   setShowFeaturedApps(false);
  //   setShowInstitutions(false);
  //   setShowBlockchains(false);
  //   setShowExchanges(false);
  //   setShowValidators(false);
  //   setShowWallets(false);
  //   setShowViewAll(true);
  // }


  return (
    <div className="">
      <div className="bg-white ms-2 me-2 rounded-4">
        <div className=" padding ">
          <div className="row ">
            <div className="col">
              <div className="font-64" id="font-weight-800">Discover the ecosystem</div>
            </div>
            <div className="col">
              <p className="font-16" id="font-weight-300">
                Injective is powered by a global network of developers,
                validators, builders, institutions and partners. Explore the
                fastest growing community pioneering a new world of finance.
              </p>
            </div>
          </div>

          <div className="">
            <div className="mt-5 row margin-end">
                <div className="col ">
                    <button className={`btn discover-ecosystem-btnshover font-18 ${activeButton === 'Featured Apps' ? 'color-blue-underline active-btn' : 'color-gray' } `} onClick={() => handleButtonClick('Featured Apps') } >Featured Apps</button> </div>
                <div className="col">
                <button className={`btn discover-ecosystem-btnshover font-18 ${activeButton === 'Institutions' ? 'color-blue-underline active-btn' : 'color-gray'}`} onClick={() => handleButtonClick('Institutions')}>Institutions</button> </div>
                <div className="col">
                <button className={`btn discover-ecosystem-btnshover font-18 ${activeButton === 'Blockchains' ? 'color-blue-underline active-btn' : 'color-gray'}`} onClick={() => handleButtonClick('Blockchains')} > Blockchains </button> </div>
                <div className="col">
                    <button className={`btn discover-ecosystem-btnshover font-18 ${activeButton === 'Exchanges' ? 'color-blue-underline active-btn' : 'color-gray'}`} onClick={() => handleButtonClick('Exchanges')}>Exchanges</button> </div>
                <div className="col">
                    <button className={`btn discover-ecosystem-btnshover font-18 ${activeButton === 'Validators' ? 'color-blue-underline active-btn' : 'color-gray'}`} onClick={() => handleButtonClick('Validators')}>Validators</button> </div>
                <div className="col">
                    <button  className={`btn discover-ecosystem-btnshover font-18 ${activeButton === 'Wallets' ? 'color-blue-underline active-btn' : 'color-gray'}`} onClick={() => handleButtonClick('Wallets')}>Wallets</button> </div>
                <div className="col">
                <button className={`btn discover-ecosystem-btnshover font-18 ${activeButton === 'View All' ? 'color-blue-underline active-btn' : 'color-gray'}`} onClick={() => handleButtonClick('View All')} > View all</button> </div>
            </div>


            {/* featured apps row */}
            {activeButton === 'Featured Apps' && (
              <div className="row mt-5 text-center ecosystemcol-height">
                <a href="" className="col uphover-animation text-decoration-none discovereco-col-height text-dark">
              <div className=" rounded-4 pt-4 bg-gray ecosystem-col-hover">
                  <img className="logo-height " src={dojoswap} alt="" />
                  <div className=" mt-2">Dojoswap</div>
              </div>
                </a>

                <a href="" className="col uphover-animation text-decoration-none text-dark">
              <div className=" rounded-4 pt-4 bg-gray"> 
                  <img className="logo-height " src={helix} alt="" />
                  <div className=" mt-2">Helix</div>
              </div>
                </a>
                <a href="" className="col uphover-animation text-decoration-none text-dark">
              <div className=" rounded-4 pt-4 bg-gray ">
                  <img className="logo-height " src={hydroProtocol} alt="" />
                  <div className=" mt-2">Hydro ptotocol</div>
              </div>
                </a>
                <a href="" className="col uphover-animation text-decoration-none text-dark">
              <div className=" rounded-4 pt-4 bg-gray ">
                  <img className="logo-height" src={mito} alt="" /> 
                  <div className=" mt-2">Mito</div>
              </div>
                </a>
                <a href="" className="col uphover-animation text-decoration-none text-dark">
              <div className=" rounded-4 pt-4 bg-gray "> 
                  <img className="logo-height " src={neptune} alt="" /> 
                  <div className=" mt-2">Neptune</div>
              </div>
                </a>
                <a href="" className="col uphover-animation text-decoration-none">
                  <div className=" rounded-4 pt-4 bg-gray "> 
                      <FiArrowRightCircle className=" mt-4 arrow-height color-blue"/>  
                      <div className="mt-2 color-blue ">View More</div>
                 </div>
                </a>
          </div>
            )}


            {/* institutions row */}
            {activeButton ===  'Institutions' && (
              <div className="row mt-5 text-center ecosystemcol-height">
                  <a href="" className="col uphover-animation text-decoration-none text-dark">
                <div className=" rounded-4 pt-4 bg-gray">
                    <img className="logo-height " src={BHDigital} alt="" />
                    <div className=" mt-2">BH Digital</div>
                </div>
                  </a>
                  <a href="" className="col uphover-animation text-decoration-none text-dark">
                <div className=" rounded-4 pt-4 bg-gray "> 
                    <img className="logo-height " src={binancelabs} alt="" />
                    <div className=" mt-2">Binance Labs</div> 
                </div>
                  </a>
                  <a href="" className="col uphover-animation text-decoration-none text-dark">
                <div className=" rounded-4 pt-4 bg-gray ">
                    <img className="logo-height " src={coinbase} alt="" />
                    <div className=" mt-2">Coinbase Institutional</div>
                </div>
                  </a>
                  <a href="" className="col uphover-animation text-decoration-none text-dark">
                <div className=" rounded-4 pt-4 bg-gray ">
                    <img className="logo-height" src={copper} alt="" /> 
                    <div className=" mt-2">Copper</div>
                </div>
                  </a>
                  <a href="" className="col uphover-animation text-decoration-none text-dark">
                <div className=" rounded-4 pt-4 bg-gray "> 
                    <img className="logo-height " src={cumberland} alt="" /> 
                    <div className=" mt-2">Cumberland</div>
                </div>
                  </a>
                  <a href="" className="col uphover-animation text-decoration-none">
                <div className="rounded-4 pt-4 bg-gray "> 
                    <FiArrowRightCircle className=" mt-4 arrow-height color-blue"/>  
                    <div className="mt-2 color-blue ">View More</div>
                </div>
                  </a>
            </div>
            )}


            {/* blockchains row */}
            {activeButton === 'Blockchains' && (
              <div className="row mt-5 text-center ecosystemcol-height">
                <a href="" className="col uphover-animation text-decoration-none text-dark">
              <div className=" rounded-4 pt-4 bg-gray">
                  <img className="logo-height " src={BHDigital} alt="" />
                  <div className=" mt-2">BH Digital</div>
              </div>
                </a>
                <a href="" className="col uphover-animation text-decoration-none text-dark">
              <div className=" rounded-4 pt-4 bg-gray"> 
                  <img className="logo-height " src={binancelabs} alt="" />
                  <div className=" mt-2">Binance Labs</div> 
              </div>
                </a>
                <a href="" className="col uphover-animation text-decoration-none text-dark">
              <div className=" rounded-4 pt-4 bg-gray">
                  <img className="logo-height " src={BNBChain} alt="" />
                  <div className=" mt-2">BNB Chain</div>
              </div>
                </a>
                <a href="" className="col uphover-animation text-decoration-none text-dark">
              <div className=" rounded-4 pt-4 bg-gray">
                  <img className="logo-height" src={chorusone} alt="" /> 
                  <div className=" mt-2">Chorus One</div>
              </div>
                </a>
                <a href="" className="col uphover-animation text-decoration-none text-dark">
              <div className=" rounded-4 pt-4 bg-gray"> 
                  <img className="logo-height " src={coinbase} alt="" /> 
                  <div className=" mt-2">Coinabase Institutional</div>
              </div>
                </a>
                <a href="" className="col uphover-animation text-decoration-none">
              <div className=" rounded-4 pt-4 bg-gray"> 
                  <FiArrowRightCircle className=" mt-4 arrow-height color-blue"/>  
                  <div className="mt-2 color-blue ">View More</div>
              </div>
                </a>
          </div>
            )}


            {/* exchanges row */}
            {activeButton === 'Exchanges'&& (
              <div className="row mt-5 text-center ecosystemcol-height">
                <a href="" className="col uphover-animation text-decoration-none text-dark">
              <div className=" rounded-4 pt-4 bg-gray">
                  <img className="logo-height " src={BHDigital} alt="" />
                  <div className=" mt-2">BH Digital</div>
              </div>
                </a>
                <a href="" className="col uphover-animation text-decoration-none text-dark">
              <div className=" rounded-4 pt-4 bg-gray"> 
                  <img className="logo-height " src={binancelabs} alt="" />
                  <div className=" mt-2">Binance Labs</div> 
              </div>
                </a>
                <a href="" className="col uphover-animation text-decoration-none text-dark">
              <div className=" rounded-4 pt-4 bg-gray">
                  <img className="logo-height " src={BNBChain} alt="" />
                  <div className=" mt-2">BNB Chain</div>
              </div>
                </a>
                <a href="" className="col uphover-animation text-decoration-none text-dark">
              <div className=" rounded-4 pt-4 bg-gray">
                  <img className="logo-height" src={chorusone} alt="" /> 
                  <div className=" mt-2">Chorus One</div>
              </div>
                </a>
                <a href="" className="col uphover-animation text-decoration-none text-dark">
              <div className=" rounded-4 pt-4 bg-gray"> 
                  <img className="logo-height " src={coinbase} alt="" /> 
                  <div className=" mt-2">Coinabase Institutional</div>
              </div>
                </a>
                <a href="" className="col uphover-animation text-decoration-none">
              <div className=" rounded-4 pt-4 bg-gray"> 
                  <FiArrowRightCircle className=" mt-4 arrow-height color-blue"/>  
                  <div className="mt-2 color-blue ">View More</div>
              </div>
                </a>
          </div>
            )}


            {/* validators */}
            {activeButton === 'Validators' && (
              <div className="row mt-5 text-center ecosystemcol-height">
                <a href="" className="col uphover-animation text-decoration-none text-dark">
              <div className=" rounded-4 pt-4 bg-gray">
                  <img className="logo-height " src={chorusone} alt="" />
                  <div className=" mt-2">Chorus One</div>
              </div>
                </a>
                <a href="" className="col uphover-animation text-decoration-none text-dark">
              <div className=" rounded-4 pt-4 bg-gray  "> 
                  <img className="logo-height " src={Cosmostation} alt="" />
                  <div className=" mt-2">Cosmostation</div> 
              </div>
                </a>
                <a href="" className="col uphover-animation text-decoration-none text-dark">
              <div className=" rounded-4 pt-4 bg-gray  ">
                  <img className="logo-height " src={DSRV} alt="" />
                  <div className=" mt-2">DSRV</div>
              </div>
                </a>
                <a href="" className="col uphover-animation text-decoration-none text-dark">
              <div className=" rounded-4 pt-4 bg-gray  ">
                  <img className="logo-height" src={HeliosStaking} alt="" /> 
                  <div className=" mt-2">Helios Staking</div>
              </div>
                </a>
                <a href="" className="col uphover-animation text-decoration-none text-dark">
              <div className=" rounded-4 pt-4 bg-gray  "> 
                  <img className="logo-height " src={SmartStake} alt="" /> 
                  <div className=" mt-2">Smart Stake</div>
              </div>
                </a>
                <a href="" className="col uphover-animation text-decoration-none">
              <div className=" rounded-4 pt-4 bg-gray  "> 
                  <FiArrowRightCircle className=" mt-4 arrow-height color-blue"/>  
                  <div className="mt-2 color-blue ">View More</div>
              </div>
                </a>
          </div>
            )}


            {/* wallets */}
            {activeButton === 'Wallets' && (
              <div className="row mt-5 text-center ecosystemcol-height">
                <a href="" className="col uphover-animation text-decoration-none text-dark">
              <div className=" rounded-4 pt-4 bg-gray">
                  <img className="logo-height " src={Keplr} alt="" />
                  <div className=" mt-2">Keplr</div>
              </div>
                </a>
                <a href="" className="col uphover-animation text-decoration-none text-dark">
              <div className=" rounded-4 pt-4 bg-gray  "> 
                  <img className="logo-height " src={Leap} alt="" />
                  <div className=" mt-2">Leap</div> 
              </div>
                </a>
                <a href="" className="col uphover-animation text-decoration-none text-dark">
              <div className=" rounded-4 pt-4 bg-gray  ">
                  <img className="logo-height " src={ledger} alt="" />
                  <div className=" mt-2">Ledger</div>
              </div>
                </a>
                <a href="" className="col uphover-animation text-decoration-none text-dark">
              <div className=" rounded-4 pt-4 bg-gray  ">
                  <img className="logo-height" src={metamask} alt="" /> 
                  <div className=" mt-2">Meta Mask</div>
              </div>
                </a>
                <a href="" className="col uphover-animation text-decoration-none text-dark">
              <div className=" rounded-4 pt-4 bg-gray  "> 
                  <img className="logo-height " src={ninji} alt="" /> 
                  <div className=" mt-2">Ninji</div>
              </div>
                </a>
                <a href="" className="col uphover-animation text-decoration-none">
              <div className=" rounded-4 pt-4 bg-gray  "> 
                  <FiArrowRightCircle className=" mt-4 arrow-height color-blue"/>  
                  <div className="mt-2 color-blue ">View More</div>
              </div>
                </a>
          </div>
            )}


            {/* view all row */}
            {activeButton === 'View All' && (
              <div className="row mt-5 text-center ecosystemcol-height">
                <a href="" className="col uphover-animation text-decoration-none text-dark">
              <div className=" rounded-4 pt-4 bg-gray">
                  <img className="logo-height " src={cosmosHub} alt="" />
                  <div className=" mt-2">CosmosHub</div>
              </div>
                </a>
                <a href="" className="col uphover-animation text-decoration-none text-dark">
              <div className=" rounded-4 pt-4 bg-gray "> 
                  <img className="logo-height " src={figment} alt="" />
                  <div className=" mt-2">Figment</div> 
              </div>
                </a>
                <a href="" className="col uphover-animation text-decoration-none text-dark">
              <div className=" rounded-4 pt-4 bg-gray ">
                  <img className="logo-height " src={pyth} alt="" />
                  <div className=" mt-2">Pyth</div>
              </div>
                </a>
                <a href="" className="col uphover-animation text-decoration-none text-dark">
              <div className=" rounded-4 pt-4 bg-gray ">
                  <img className="logo-height" src={wormhole} alt="" /> 
                  <div className=" mt-2">Wormhole</div>
              </div>
                </a>
                <a href="" className="col uphover-animation text-decoration-none text-dark">
              <div className=" rounded-4 pt-4 bg-gray "> 
                  <img className="logo-height " src={EspressoSystem} alt="" /> 
                  <div className=" mt-2">Espresso Systems</div>
              </div>
                </a>
                <a href="" className="col uphover-animation text-decoration-none">
              <div className=" rounded-4 pt-4 bg-gray "> 
                  <FiArrowRightCircle className=" mt-4 arrow-height color-blue"/>  
                  <div className="mt-2 color-blue ">View More</div>
              </div>
                </a>
          </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default DiscoverEcosystem;
