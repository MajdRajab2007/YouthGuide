import { FaArrowAltCircleRight } from "react-icons/fa"
import "./AboutUsSec.css"
import { Link } from "react-router-dom"
import meetTeam from "../images/meetTeam.png"

function AboutUsSec() {


    return (

        <>
                     <div className="container mt-5 mb-5">
                <div className="blogDetails row">
                    <div className="col-12">
                    <h2 className="text-center blogH2">من نحن؟</h2>
                    </div>
                    <div className="col-12 blogCap row">
                            <div className="col-12 col-md-6 col-lg-6 sideCap">
                                <div className="">
                                    نقدّم في قسم المدونة مقالات متعددة بما يتعلق بالمجال التقني
                                </div>
                                <Link to="/about-us" className="  artLink"><FaArrowAltCircleRight style={{fontSize:"81px", color:"#09dbbe"}}/></Link>
                            </div>
                            <div className="col-12 blogImage mt-5 col-md-6 col-lg-6">
                                <img src={meetTeam} alt="..." className="img-fluid" />
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUsSec
