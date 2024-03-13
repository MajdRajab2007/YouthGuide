import { Link } from "react-router-dom";
import logo from "../../../../images/logo.png"
import { useEffect, useState } from "react";
// import desc from "../../../../images/lesson.jpg"
import TopThree from "../../../../components/Topthree";
import AllPosts from "../../../../components/AllPosts";
function BasicUiUx() {

    let [lessons, setLessons] = useState([])
    useEffect(() => {
        fetch("http://localhost/api/posts/tag/6/").then((res) => res.json()).then((data) => setLessons(data.data))
    }, [])



    let threeArticles = <div className="row mt-3">
        <TopThree tag="tag" section="6" />



        <div className="row">
            <button onClick={() => setContent(allArticles)} className="showMore col-lg-4 col-md-6 col-12 btn">
            عرض المزيد
    </button>
            </div>
    </div>;
    let allArticles = <div className="row mt-5">

        <AllPosts tag="tag" section="6" />
    </div>

    let [content, setContent] = useState(threeArticles)



    return (
        <>
            <div className="htmlPage">
                <div className="container">
                    <div className="row mt-3 headOfAbout">
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
                            <p className="whous ">Basic UI UX</p>
                        </div>
                    </div>


                    <div >
                        {content}


                    </div>
                </div>

            </div>
            <Link to="/" className="btn backHome">الصفحة الرئيسية</Link>
            <Link to="/Designing-and-VideoEditing/ui-ux" className="btn backStep">رجوع</Link>

        </>
    )
}
export default BasicUiUx;
