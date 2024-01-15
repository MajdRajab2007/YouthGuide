import { Link } from "react-router-dom";
import logo from "../images/logo.png"
import "./Programming.css"
function Programming() {

    return (
        <>
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
                            <p className="whous ">البرمجة</p>
                        </div>
                    </div>
                         </div>
                         <Link to="/" className="btn backHome">الصفحة الرئيسية</Link>
                         <Link to="/articles" className="btn backStep">رجوع</Link>

                    <div className="container mt-5">
                        <div className="row langProgContainer">

                            <div className="col-12 col-md-4 col-lg-4">
                                <Link to="/programming/html" className="langBox">
                                        HTML
                                </Link>
                            </div>
                            <div className="col-12 col-md-4 col-lg-4">
                                <div className="langBox">
                                        CSS
                                </div>
                            </div>
                            <div className="col-12 col-md-4 col-lg-4">
                                <div className="langBox">
                                        JAVASCRIPT
                                </div>
                            </div>
                            <div className="col-12 col-md-4 col-lg-4">
                                <div className="langBox" style={{direction:"ltr"}}>
                                        C++
                                </div>
                            </div>
                            <div className="col-12 col-md-4 col-lg-4">
                                <div className="langBox">
                                        PYTHON
                                </div>
                            </div>
                            <div className="col-12 col-md-4 col-lg-4">
                                <div className="langBox">
                                        PHP
                                </div>
                            </div>

                        </div>
                    </div>

        </>
    )
}
export default Programming;
