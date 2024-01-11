import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Slider from "../components/Slider"
import blog from "../images/articleSe.png"
import "./Home.css"
import {  FaArrowAltCircleRight } from "react-icons/fa"


    function Home()
 {

    return (
        <>
            <Navbar />
            <Slider />
            <div className="container mt-5 mb-5">
                <div className="blogDetails row">
                    <div className="col-12">
                    <h2 className="text-center blogH2">المدونة</h2>
                    </div>
                    <div className="col-12 blogCap row">
                            <div className="col-6 sideCap">
                                <div className="">
                                sdjpjdaopjdopsakdopskdosapd
                                </div>
                                <Link to="/article" className="  artLink"><FaArrowAltCircleRight /></Link>
                            </div>
                            <div className="col-6">
                                <img src={blog} alt="..." className="" />
                            </div>
                    </div>
                </div>
            </div>

        </>
    )
 }

 export default Home
