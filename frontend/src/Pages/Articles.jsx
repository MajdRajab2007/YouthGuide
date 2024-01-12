// import SearchBar from "../components/SearchBar"
import "./Articles.css"
import { Link } from "react-router-dom"
import logo from "../images/logo.png"
import programming from "../images/programming.png"
import leaderShip from "../images/leadership.png"
import bullhorn from "../images/bullhorn.png"
import dAndv from "../images/DesigningAndVideoEditing.png"

function Aticles() {

    return (
        <>
                <div className="articles">
                         <div className="container">
                         <div className="row mt-3 headOfBlog">
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
                            <p className="whous ">المدونة</p>
                        </div>
                    </div>
                         </div>

                </div>
                <Link to="/" className="btn backHome">الصفحة الرئيسية</Link>


                <div className="articlesContainer mt-5 row">

                    <div className="col-md-6 col-lg-6 col-12 ">

                        <Link to="/programming">
                        <div className="articleBox">
                                <h2 className="articleH2">برمجة</h2>
                        <img src={programming} alt="..." className="articleImage" />
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-6 col-lg-6 col-12 ">

                            <Link to="/leaderShip">
                            <div className="articleBox">
                                                    <h2 className="articleH2">ريادة الأعمال</h2>
                        <img src={leaderShip} alt="..." className="articleImage" />
                                </div>
                            </Link>
                    </div>
                    <div className="col-md-6 col-lg-6 col-12 ">

                           <Link to="/bullhorn">
                           <div className="articleBox">
                                                        <h2 className="articleH2">تسويق</h2>
                        <img src={bullhorn} alt="..." className="articleImage" />
                            </div>
                           </Link>
                    </div>
                    <div className="col-md-6 col-lg-6 col-12 ">

                          <Link to="Designing-and-VideoEditing">
                          <div className="articleBox">
                                                        <h2 className="articleH2">تصميم ومونتاج</h2>
                        <img src={dAndv} alt="..." className="articleImage" />
                            </div>
                          </Link>
                    </div>

                </div>


        </>
    )
}
export default Aticles
