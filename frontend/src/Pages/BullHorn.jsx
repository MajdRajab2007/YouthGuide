import { Link } from "react-router-dom";
import "./article-pages/Programming-pages/ProgrammingStyle.css"
import logo from "../images/logo.png"
import { useEffect, useState } from "react";

import TopThree from "../components/Topthree";
import AllPosts from "../components/AllPosts";
function BullHorn() {

    let [lessons, setLessons] = useState([])
    useEffect(() => {
        fetch("http://localhost:8000/api/posts/tag_lang/1/1/").then((res) => res.json()).then((data) => setLessons(data.data))
    },[])



    let threeArticles = <div className="row mt-3">
        <TopThree name="1" section="3" />



    <button onClick={() => setContent(allArticles)} className="showMore col-lg-4 col-md-6 col-12 btn">
            عرض المزيد
    </button>
    </div>;
    let allArticles =    <div className="row mt-5">

            <AllPosts name="1" section="3" />
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
                            <p className="whous ">التسويق</p>
                        </div>
                    </div>


                    <div >
                            {content}


                    </div>
                    </div>

                </div>
                <Link to="/" className="btn backHome">الصفحة الرئيسية</Link>
                         <Link to="/blog" className="btn backStep">رجوع</Link>

        </>
    )
}
export default BullHorn;

