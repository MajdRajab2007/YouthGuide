import "./Profile.css"
import background from "../images/backgroundForProfilePage.jpg"
import logo from "../images/logo.png"
import profilepic from "../images/profilePic.png"
import { FaArrowAltCircleRight, FaLongArrowAltLeft, FaLongArrowAltRight, FaPlus } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import Loading from "../components/Loading"
function Profile() {
    let [display, setDisplay] = useState("");
    let [displayNone, setDisplayNone] = useState("d-none");
    useEffect(() => {
        setTimeout(() => {
            setDisplay("d-none")
            setDisplayNone("")
        }, 2000)
    }, [])

    return (
        <>
                <Loading display={display} />
            <div className={`profile ${displayNone}`}>
                    <div >
                        <img src={background} alt="..." className=" w-100 backgroundProfilePage" />
                    </div>
                    <div className="marginTopForImage"></div>
                <div className="container ">
                    <div className="row profileDis" style={{    position: "relative",bottom: "1px"}}>
                        <div className="col-12 col-md-6 col-lg-6">
                            {/* <div className="profile-read-header">
                                    <h2>المقالات المقروءة</h2>
                                    <button className="showAllReadButton">شاهد الكل</button>
                            </div>
                            <div className="row mt-5 ">
                            <div className="col-6 reduceTheWidth ">
                                 <div className="readCard">
                                    <p className="courseName">HTML</p>
                                    <p className="numberOfLessons">7+</p>
                                    <div className="arrowConatiner">
                                        <FaLongArrowAltRight className="ArrowAltRight" />
                                    </div>
                                    </div>
                                </div>
                            <div className="col-6 reduceTheWidth ">
                                 <div className="readCard">
                                    <p className="courseName">HTML</p>
                                    <p className="numberOfLessons">7+</p>
                                    <div className="arrowConatiner">
                                        <FaLongArrowAltRight className="ArrowAltRight" />
                                    </div>
                                    </div>
                                </div>
                            <div className="col-6 reduceTheWidth ">
                                 <div className="readCard">
                                    <p className="courseName">HTML</p>
                                    <p className="numberOfLessons">7+</p>
                                    <div className="arrowConatiner">
                                        <FaLongArrowAltRight className="ArrowAltRight" />
                                    </div>
                                    </div>
                                </div>
                            <div className="col-6 reduceTheWidth ">
                                 <div className="readCard">
                                    <p className="courseName">HTML</p>
                                    <p className="numberOfLessons">7+</p>
                                    <div className="arrowConatiner">
                                        <FaLongArrowAltRight className="ArrowAltRight"  />
                                    </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="profile-pic">

                                <div className="profile-image">
                                <img src={logo} alt="..." className="UserImage " />
                                <div className="changepic"><FaPlus/></div>
                                </div>
                                <h1 className="text-center">سارة غزال</h1>

                                    <p className="mt-4" style={{direction:"ltr",fontSize:"27px",fontWeight:"bold", display:"flex"}}>Email: <p className="fs-4 ms-3">saraghazal@gmail.com</p></p>

                                <h3 style={{direction:"ltr"}}>About:</h3>
                                <p style={{direction:"ltr"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam assumenda ad hic repellat exercitationem? Eos rerum, enim vero alias deserunt excepturi libero fugit! Sapiente blanditiis repellendus quaerat consequuntur architecto unde?</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to="/" className="btn backStep">رجوع</Link>

            </div>
        </>
    )
}
export default Profile
