import governsafe from "../assets/govern_by_inj_safe.svg"
import  governcenter from "../assets/govern_by_inj_center.svg"
import  governburn from "../assets/govern_by_inj_burn.svg"
import { FiArrowRightCircle } from "react-icons/fi";

function GovernINJ() {
  return (
    <>
      <div className="container margin-top bg-white rounded-4">
        <div className="row p-5 m-3">
          <div className="col mt-5">
            <div className="font-64"  id="font-weight-800">Govern with INJ</div>
            <p className="color-blue font-20" id="font-weight-600"> Injective is governed by a global community through its native crypto asset, INJ. </p>
          </div>
          <div className="col mt-5">
            <p className="font-16" id="font-weight-300"> INJ enables Web3 community members to participate in various activities such as approving proposals for protocol upgrades, staking for rewards, participating in burn auctions, and more, all within the Injective blockchain network. </p>
          </div>
        </div>
        <div className="row mt-5 m-4 text-center">
            <div className="col">
                <div className=""><h2>$239M</h2></div>
                <span className="bg-gray p-2 ps-4 fw-bold pe-4 rounded-5 ">Annual gas saving</span>
                <div className="border-shadow ms-5"><img src={governsafe} alt="" /></div>
            </div>
            <div className="col">
                <img src={governcenter} style={{height:"200px"}} alt="" />
            </div>
            <div className="col">
                <div className=""><h2>6,179,035</h2></div>
                <span className="bg-gray p-2 ps-4 fw-bold pe-4 rounded-5 ">Total INJ Burned</span>
                <div className="border-shadow "><img src={governburn} alt="" /></div>
            </div>
        </div>
        <div className="row text-center pb-5">
            <div className="col">
            <button className="border-0 ps-4 pe-4 p-2 rounded btn-blue text-light uphover-animation"> Stake INJ </button>
            <button className="border-0 bg-white ms-5 hover-blue btnhover-icon-animation"> Get INJ <FiArrowRightCircle id="hover-animation"/> </button>
            </div>
        </div>
      </div>
    </>
  );
}
export default GovernINJ;
