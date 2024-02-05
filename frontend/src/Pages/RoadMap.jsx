import { Link } from "react-router-dom"
import "./RoadMap.css"
import logo from "../images/logo.png"
import SearchBar from "../components/SearchBar"
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

function RoadMap() {
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
            <div className={`roadmap ${displayNone}`}>
                <div className="row mt-3 ">
                    <div className=" col-4" style={{ display: "flex", alignItems: "center" }}>
                        <Link to="/"><img className="teamlogo" src={logo} alt=".." /></Link>

                    </div>
                    <div className="col-7" style={{ display: "flex", alignItems: "center" }}><p className="roadmapTitle ">خارطة الطريق</p></div>
                </div>
                <div className="row">
                    <div className="col-12 mt-5" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <SearchBar />
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="roadmap-path">
                            front end
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="roadmap-path">
                            back end
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="roadmap-path">
                            front end
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="roadmap-path">
                            front end
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="roadmap-path">
                            front end
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="roadmap-path">
                            front end
                        </div>
                    </div>
                </div>
            </div>

            <Link to="/" className="btn backHome backHome-roadmap">الصفحة الرئيسية</Link>
        </>
    )
}
export default RoadMap
