import "./OurServSec.css"
import optImage from "../images/options.png"
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";
function OurServSec() {


    return (
        <>
                <div className="container mt-5 mb-5">
                <div className="OurServSecDetails row">
                    <div className="col-12">
                    <h2 className="text-center OurServSecH2">خدماتنا</h2>
                    </div>
                    <div className="col-12 OurServSecCap row">
                            <div className="col-12 col-md-6 col-lg-6 sideCap">
                                <div className="">
                                نقدم في هذا القسم خدمات نوعية تساعدك في أثناء
                                رحلة التعلم 
                                 </div>
                                <Link to="/our-services" className="  artLink"><FaArrowAltCircleRight style={{fontSize:"81px", color:"#09dbbe"}}/></Link>
                            </div>
                            <div className="col-12  mt-5 col-md-6 col-lg-6">
                                <img src={optImage} alt="..." className="img-fluid OurServSecImage" />
                            </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default OurServSec;
