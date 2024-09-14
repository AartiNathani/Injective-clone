import slider1 from "../assets/injective-slider-img1.jpg"
import slider2 from "../assets/injective-slider-img2.jpg"
import slider3 from "../assets/injective-slider-img3.jpg"
import { IoArrowForward } from "react-icons/io5";
import { IoMdArrowBack } from "react-icons/io";


function FeaturedNews () {
    return(
        <>
        <div className="container margin-top">
            <div className="row">
                <div className="col">
                    <div className="font-64" id="font-weight-800">Featured News</div>
                    <button className="border-0 mt-5 ps-4 pe-4 p-2 fw-bold font-18 uphover-animation rounded btn-blue text-light"> See all news </button>
                </div>



                <div className="col">
                    <div className="">
                        <div className="">
                            <a href=""> <img className="slider-img-height rounded" src={slider1} alt="" /> </a>
                        </div>
                        <div className="h4"><a href="" className="text-dark text-decoration-none hover-underline">Pantera, Jump Crypto Back $150M Injective Ecosystem Fund</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="">
                        <div className="">
                            <a href=""> <img className="slider-img-height rounded" src={slider2} alt="" /> </a>
                        </div>
                        <div className="h4"><a href="" className="text-dark text-decoration-none hover-underline">Pantera, Jump Crypto Back $150M Injective Ecosystem Fund</a></div>
                    </div>
                </div>
                <div className="col">
                    <div className="">
                        <div className="">
                            <a href=""> <img className="slider-img-height rounded" src={slider3} alt="" /> </a>
                        </div>
                        <div className="h4"><a href="" className="text-dark text-decoration-none hover-underline">Pantera, Jump Crypto Back $150M Injective Ecosystem Fund</a></div>
                    </div>
                </div>
            </div>

            <div className="text-center mt-5">
                <button className="rounded"> <IoMdArrowBack/> </button>
                <button className="rounded ms-2"> <IoArrowForward/> </button>
            </div>


            {/* <div id="carouselExampleControls" className="carousel carousel-dark slide" data-bs-ride="carousel" >
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="card-wrapper container-sm d-flex  justify-content-around">
          <div className="card  " style={{ width: "18rem" }}>
            <img
              src={slider1}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Pantera, Jump Crypto Back $150M Injective Ecosystem Fund</h5>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={slider2}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Jump Crypto leads Injective`s` $40M round to help expand DeFi applications</h5>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={slider3}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Injective tests inEVM Layer 2 to support Ethereum applications</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="card-wrapper container-sm d-flex   justify-content-around">
          <div className="card  " style={{ width: "18rem" }}>
            <img
              src={slider1}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Pantera, Jump Crypto Back $150M Injective Ecosystem Fund</h5>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={slider2}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Jump Crypto leads Injective`s` $40M round to help expand DeFi applications</h5>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={slider3}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Injective tests inEVM Layer 2 to support Ethereum applications</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="card-wrapper container-sm d-flex  justify-content-around">
          <div className="card " style={{ width: "18rem" }}>
            <img
              src={slider1}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Pantera, Jump Crypto Back $150M Injective Ecosystem Fund</h5>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={slider2}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Jump Crypto leads Injective`s` $40M round to help expand DeFi applications</h5>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={slider3}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Injective tests inEVM Layer 2 to support Ethereum applications</h5>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
            </div> */}

                <div className="row mt-5 d-flex w-75 p-4 " style={{marginLeft:"150px"}}>
                    <div className="col bg-white m-5 p-4 rounded-4 hoverup-animation ">
                        <a href="" className="text-decoration-none text-dark">
                        <div className="h3" id="font-weight-600">Blog <span className=""><IoArrowForward className="bg-gray p-1 rounded color-blue"/></span> </div>
                        </a>
                    </div>
                    <div className="col bg-white m-5 p-4 rounded-4 hoverup-animation">
                        <a href="" className="text-decoration-none text-dark">
                        <div className="h3" id="font-weight-600">Press <span className=""><IoArrowForward className="bg-gray p-1 rounded color-blue"/></span> </div>
                        </a>
                    </div>
                </div> 
        </div>
        </>
    )
}
export default FeaturedNews