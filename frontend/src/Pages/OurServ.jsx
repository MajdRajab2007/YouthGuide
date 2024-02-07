import { Link } from "react-router-dom"
import wLogo from "../images/logoWhite.png"
import plane from "../images/plane.png"
import video from "../images/video.png"
import pen from "../images/pen.png"
import "./AboutUs.css"
import "./OurServ.css"
import Footer from "../components/Footer"
import Loading from "../components/Loading"
import { useEffect, useState } from "react"

function OurServ() {

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
            <div className={displayNone}>
                <div className="aboutus ourserv">
                    <div className="container">
                        <div className="row headOfAbout">
                            <div className=" col-4 mt-3" style={{ display: "flex", alignItems: "center" }}>
                                <Link to="/"><img className="teamlogo" style={{ backgroundColor: "#" }} src={wLogo} alt=".." /></Link>

                            </div>
                            <div className="col-7" style={{ display: "flex", alignItems: "center" }}><p className="whous whatWeHave">خدماتنا</p></div>
                        </div>

                        {/* <h4 className="col-12 mt-4 defineWhoAreUs ms-4">دليل الشباب: شركة برمجية ناشئة تهدف لخلق المهارات البرمجية عن طريق مبدأ تدريب اليافعين بالفياعفين أنفسهم</h4> */}
                        <div className="row mt-3">
                            <div className="cardAbout  col-lg-4 col-md-6 col-12 mt-4">
                                <div className="aboutText cardServ">
                                    <img className="OurServIcons" style={{ width: "200px", height: "200px" }} src={video} alt="..." />
                                    <h3 className="ourServHead">إنتاج الفيديوهات</h3>
                                    <p className="mt-3" style={{ color: "black", fontSize: "18px", width: "70%", lineHeight: "1" }}>تسجيل الفيديوهات المجانية في مختلف المجالات بشكل مجاني</p>
                                </div>

                            </div>
                            <div className="cardAbout  col-lg-4 col-md-6 col-12 mt-4">
                                <div className="aboutText cardServ">
                                    <img className="OurServIcons" style={{ width: "200px", height: "200px" }} src={pen} alt="..." />
                                    <h3 className="ourServHead">التدوين وكتابة المقالات</h3>
                                    <p className="mt-3" style={{ color: "black", fontSize: "18px", width: "70%", lineHeight: "1" }}>تدوين وكتابة مقالات قصيرة تدريبية لتغطية مختلف المهارات والمجالات البرمجية</p>


                                </div>

                            </div>
                            <div className="cardAbout  col-lg-4 col-md-6 col-12 mt-4">
                                <div  className="aboutText cardServ">

                                    <img className="OurServIcons" style={{ width: "200px", height: "200px" }} src={plane} alt="..." />
                                    <h3 className="ourServHead">تقديم خارطة الطريق</h3>
                                    <p className="mt-3" style={{ color: "black", fontSize: "18px", width: "70%", lineHeight: "1" }}>تقديم خارطة الطريق الصحيح لأكثر من 120 مجال تريد تعلمه من خلال الاعتماد على تقنية الذكاء الصنعي</p>

                                                <p className="inProgress">IN PROGRESS</p>
                                </div>

                            </div>
                        </div>


                    </div>
                    <div className="mb-5" style={{ clear: "both" }}></div>
                    <Link to="/" className="btn backHome">الصفحة الرئيسية</Link>
                </div>
                <Footer fix="fixed-bottom" />
            </div>


        </>
    )
}

export default OurServ;
