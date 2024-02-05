import { Link } from "react-router-dom";
import logo from "../images/logo.png"
import "./Programming.css"
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
function Programming() {
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
            <div className={displayNone} >
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
                         <Link to="/blog" className="btn backStep">رجوع</Link>

                    <div className="container mt-5">
                        <div className="row langProgContainer">

                            <div className="col-12 col-md-4 col-lg-4">
                                <Link to="/programming/html" className="langBox">
                                        HTML
                                </Link>
                            </div>
                            <Link to="/programming/css" className="col-12 col-md-4 col-lg-4">
                                <div className="langBox">
                                        CSS
                                </div>
                            </Link>
                            <Link to="/programming/javascript" className="col-12 col-md-4 col-lg-4">
                                <div className="langBox">
                                        JAVASCRIPT
                                </div>
                            </Link>
                            <Link to="/programming/c++" className="col-12 col-md-4 col-lg-4">
                                <div className="langBox" style={{direction:"ltr"}}>
                                        C++
                                </div>
                            </Link>
                            <Link to="/programming/python" className="col-12 col-md-4 col-lg-4">
                                <div className="langBox">
                                        PYTHON
                                </div>
                            </Link>
                            <Link to="/programming/php" className="col-12 col-md-4 col-lg-4">
                                <div className="langBox">
                                        PHP
                                </div>
                            </Link>

                        </div>
                    </div>
            </div>

        </>
    )
}
export default Programming;
