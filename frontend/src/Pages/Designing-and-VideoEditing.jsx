
import { Link } from "react-router-dom";
import logo from "../images/logo.png"
import "./Programming.css"
import Loading from "../components/Loading";
import { useEffect, useState } from "react";
function DesigningandVideoEditing() {
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
                
            <div className="container">
                         <div className="row mt-3 headOfProgramming">
                        <div
                            className=" col-4"
                            style={{ display: "flex", alignItems: "center" }}
                        >
                           <Link to="/"> <img className="teamlogo" src={logo} alt=".." /></Link>
                        </div>
                        <div
                            className="col-7"
                            style={{ display: "flex", alignItems: "center" }}
                        >
                            <p className="whous ">التصميم والمونتاج</p>
                        </div>
                    </div>
                         </div>
                         <Link to="/" className="btn backHome">الصفحة الرئيسية</Link>
                         <Link to="/blog" className="btn backStep">رجوع</Link>

                    <div className="container mt-5">
                        <div className="row langProgContainer">

                            <div className="col-12 col-md-4 col-lg-4">
                                <Link to="/Designing-and-VideoEditing/photoshop" className="SectioBox">
                                        فوتوشوب
                                </Link>
                            </div>
                            <Link to="/Designing-and-VideoEditing/ui-ux" className="col-12 col-md-4 col-lg-4">
                                <div className="SectioBox">
                                        تصميم الواجهات الأمامية UI UX
                                </div>
                            </Link>
                            <Link to="/Designing-and-VideoEditing/video-editing" className="col-12 col-md-4 col-lg-4">
                                <div className="SectioBox">
                                        مونتاج فيديوهات
                                </div>
                            </Link>


                        </div>
                    </div>
            </div>

        </>
    )
}
export default DesigningandVideoEditing;
