import logo from "../images/logo.png"
import orwan from "../images/orjwan.png"
import fosha from "../images/fosha.png"
import itc from "../images/itc.png"
import moon from "../images/moon.png"
import "./Sponsers.css"

function Sponsers() {


    return (
        <>
            <div className="sponsers">
                <div className="container">
                    <div className="row">
                    <div className="col-12">
                    <h2 className="text-center OurServSecH2 mb-2">شراكاتنا</h2>
                    </div>
                            <div className="col-12 col-md-4 col-lg-3 mb-4">
                                    <img src={orwan} alt="..." className="sponserImage w-100" style={{marginTop:"20%"}}/>
                            </div>
                            <div className="col-12 col-md-4 col-lg-3 mb-4">
                                    <img src={fosha} alt="..." className="sponserImage w-100" />
                            </div>
                            <div className="col-12 col-md-4 col-lg-3 mb-4">
                                    <img src={itc} alt="..." className="sponserImage w-100" />
                            </div>
                            <div className="col-12 col-md-4 col-lg-3 ">
                                    <img src={moon} alt="..." className="sponserImage w-100" />
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sponsers;
