import helix from "../assets/helix-logo.png"
import hydroProtocol from "../assets/hydroprotocol-logo.png"
import mito from "../assets/mito-logo.png"
import talis from "../assets/Talis-logo.png"
function FeaturedApps () {
    return(
        <>
        <div className="margin-top container">
            <div className="row container">
                <div className="col-5 mt-5 ">
                    <div className="font-64" id="font-weight-800">Featured <br /> dApps</div>
                    <p className="font-18 w-75">Explore the future of Web3 finance built on Injective</p>
                    <button className="border-0 p-3 ps-4 pe-4  rounded btn-blue uphover-animation text-light fw-bold"> View More </button>
                </div>

                <div className="col border app-column rounded-4">
                    <img className="featuredApp-logo-height" src={helix} alt="" />
                    <span className="color-blue bg-gray rounded-3 p-2 ms-5 font-11">Orderbook Exchange</span>
                    <div className="h3 mt-3" id="font-weight-600">Helix</div> <hr />
                    <div className="">
                        <h5 id="font-weight-600">Description</h5>
                        <p className="color-lightgray font-18" id="font-weight-300">The premier decentralized orderbook crypto exchange for trading crypto assets and derivatives. Helix offers zero gas fees, an intuitive user interface, and niche interchain markets.</p>
                        <h5 id="font-weight-600">Utilities</h5>
                        <p className="color-lightgray">Exchange Module • Orderbook Primitive • Oracle Module</p>
                    </div>
                </div>

                <div className="col border top-150 ms-3 app-column rounded-4">
                    <img className="featuredApp-logo-height" src={mito} alt="" />
                    <span className="color-blue bg-gray rounded-3 p-2 ms-5 font-11">DeFi Protocol</span>
                    <div className="h3 mt-3" id="font-weight-600">Mito</div> <hr />
                    <div className="">
                        <h5 id="font-weight-600">Description</h5>
                        <p className="color-lightgray">Mito brings a groundbreaking protocol to revolutionize automated trading, launchpads and yield generation.</p>
                        <h5 id="font-weight-600">Utilities</h5>
                        <p className="color-lightgray">CosmWasm Module • Exchange Module • Orderbook Primitive</p>
                    </div>
                </div>
            </div>

            <div className="row container mt-4">
                <div className="col-5 mt-5 "></div>

                <div className="col border app-column rounded-4">
                    <img className="featuredApp-logo-height" src={hydroProtocol} alt="" />
                    <span className="color-blue bg-gray rounded-3 p-2 ms-5 font-11">Liquid Staking</span>
                    <div className="h3 mt-3" id="font-weight-600">Hydro protocol</div> <hr />
                    <div className="">
                        <h5 id="font-weight-600">Description</h5>
                        <p className="color-lightgray">Hydro Protocol offers liquidity solutions with Real Yield Assets, combining real world and crypto assets for optimized yield strategies to create Injective’s LSD+LSDFi ecosystem.</p>
                        <h5 id="font-weight-600">Utilities</h5>
                        <p className="color-lightgray">Exchange Module • Orderbook Primitive • Oracle Module</p>
                    </div>
                </div>

                <div className="col border top-150 ms-3 app-column rounded-4">
                    <img className="featuredApp-logo-height" src={talis} alt="" />
                    <span className="color-blue bg-gray rounded-3 p-2 ms-5 font-11">NFT Marketplace</span>
                    <div className="h3 mt-3" id="font-weight-600">Talis Protocol</div> <hr />
                    <div className="">
                        <h5 id="font-weight-600">Description</h5>
                        <p className="color-lightgray">The first native NFT marketplace building on Injective, ushering in the NFT Fi ecosystem.</p>
                        <h5 id="font-weight-600">Utilities</h5>
                        <p className="color-lightgray">Oracle Module • CosmWasm Module</p>
                    </div>
                </div>
                
                
            </div>
        </div>
        </>
    )
}
export default FeaturedApps