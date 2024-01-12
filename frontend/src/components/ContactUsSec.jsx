import "./ContactUsSec.css"
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";
import phone from "../images/phoneHomeSec.png"


function ContactUsSec() {

    return (
        <>
                <div className="container mt-5 mb-5">
                <div className="contactUsSecDetails row">
                    <div className="col-12">
                    <h2 className="text-center contactUsSecH2">تواصل معنا</h2>
                    </div>
                    <div className="col-12 contactUsSecCap row">
                            <div className="col-12 col-md-6 col-lg-6 sideCap">
                                <div className="">
                                    نقدّم في قسم المدونة مقالات متعددة بما يتعلق بالمجال التقني
                                </div>
                                <Link to="/contact-us" className="  artLink"><FaArrowAltCircleRight style={{fontSize:"81px", color:"#09dbbe"}}/></Link>
                            </div>
                            <div className="col-12 contactUsSecImage mt-5 col-md-6 col-lg-6">
                                <img src={phone} alt="..." className="img-fluid" />
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUsSec;
