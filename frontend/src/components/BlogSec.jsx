import {  FaArrowAltCircleRight } from "react-icons/fa"
import { Link } from "react-router-dom"
import blog from "../images/articleSe.png"
import "./BlogSec.css"




function BlogSec
() {


    return (

        <>
             <div className="container mt-5 mb-5">
                <div className="blogDetails row">
                    <div className="col-12">
                    <h2 className="text-center blogH2">المدونة</h2>
                    </div>
                    <div className="col-12 blogCap row">
                            <div className="col-12 col-md-6 col-lg-6 sideCap">
                                <div className="">
                                    نقدّم في قسم المدونة مقالات متعددة بما يتعلق بالمجال التقني
                                </div>
                                <Link to="/articles" className="  artLink"><FaArrowAltCircleRight style={{fontSize:"81px", color:"#09dbbe"}}/></Link>
                            </div>
                            <div className="col-12 blogImage mt-5 col-md-6 col-lg-6">
                                <img src={blog} alt="..." className="img-fluid" />
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BlogSec
