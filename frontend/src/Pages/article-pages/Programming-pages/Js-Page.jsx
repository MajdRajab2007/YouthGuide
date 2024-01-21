import { Link } from "react-router-dom";
import "./ProgrammingStyle.css"
import logo from "../../../images/logo.png"
import { useState } from "react";
import desc from "../../../images/lesson.jpg"
function JsPage() {

    let [lessons, setLessons] = useState([])
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/posts/javascript").then((res) => res.json()).then((data) => setLessons(data))
    },[])

    let threeArticles = <div className="row mt-3">
                                    <div className="cardLesson col-lg-4 col-md-6 col-12">

<div className="lessonText">
    <h2 className="lessonHead">this is articale</h2>

يقوم فريق دليل الشباب بتقديم دورات تدريبية مجانية باللغة العربية على منصة يوتيوب
    </div>                            </div>
<div className="cardLesson col-lg-4 col-md-6 col-12">

<div className="lessonText">
<h2 className="lessonHead">this is articale</h2>
يوجد لدينا أيضاً خدمة المساعدة بتقديم خارطة التعلم لأكثر من 20 مجال برمجي
    </div>                            </div>
<div className="cardLesson col-lg-4 col-md-6 col-12">

<div className="lessonText">
<h2 className="lessonHead">this is articale</h2>

من الخدمات التي يقدمها فريق دليل الشباب أيضاً هي كتابة مقالات عن مواضيع تقنية متعددة
    </div>                            </div>

    <button onClick={() => setContent(allArticles)} className="showMore col-lg-4 col-md-6 col-12 btn">
            عرض المزيد
    </button>
    </div>;
    let allArticles =    <div className="row mt-5">

        <div className="col-12">
          <div className=" lesson-card mb-5">
         <img className="lesson-image" src={desc} alt="..." />
         <h2  className="lesson-title">تعلم مبادئ لغة <span style={{direction:"ltr"}}>++C</span></h2>
         <p className="lesson-desc">لغة جميلة تهدف إلى خلق المهارات البرمجية عند المبرمج الذي يبرمج برامج مفيدة برمجة المنطق العام البرمجي في عالم البرمجيات الذي يبرمج برنامجنا</p>
              </div>
     </div>
        <div className="col-12">
          <div className=" lesson-card mb-5">
         <img className="lesson-image" src={desc} alt="..." />
         <h2  className="lesson-title">تعلم مبادئ لغة <span style={{direction:"ltr"}}>++C</span></h2>
         <p className="lesson-desc">لغة جميلة تهدف إلى خلق المهارات البرمجية عند المبرمج الذي يبرمج برامج مفيدة برمجة المنطق العام البرمجي في عالم البرمجيات الذي يبرمج برنامجنا</p>
              </div>
     </div>
        <div className="col-12">
          <div className=" lesson-card mb-5">
         <img className="lesson-image" src={desc} alt="..." />
         <h2  className="lesson-title">تعلم مبادئ لغة <span style={{direction:"ltr"}}>++C</span></h2>
         <p className="lesson-desc">لغة جميلة تهدف إلى خلق المهارات البرمجية عند المبرمج الذي يبرمج برامج مفيدة برمجة المنطق العام البرمجي في عالم البرمجيات الذي يبرمج برنامجنا</p>
              </div>
     </div>
        <div className="col-12">
          <div className=" lesson-card mb-5">
         <img className="lesson-image" src={desc} alt="..." />
         <h2  className="lesson-title">تعلم مبادئ لغة <span style={{direction:"ltr"}}>++C</span></h2>
         <p className="lesson-desc">لغة جميلة تهدف إلى خلق المهارات البرمجية عند المبرمج الذي يبرمج برامج مفيدة برمجة المنطق العام البرمجي في عالم البرمجيات الذي يبرمج برنامجنا</p>
              </div>
     </div>
        <div className="col-12">
          <div className=" lesson-card mb-5">
         <img className="lesson-image" src={desc} alt="..." />
         <h2  className="lesson-title">تعلم مبادئ لغة <span style={{direction:"ltr"}}>++C</span></h2>
         <p className="lesson-desc">لغة جميلة تهدف إلى خلق المهارات البرمجية عند المبرمج الذي يبرمج برامج مفيدة برمجة المنطق العام البرمجي في عالم البرمجيات الذي يبرمج برنامجنا</p>
              </div>
     </div>
        <div className="col-12">
          <div className=" lesson-card mb-5">
         <img className="lesson-image" src={desc} alt="..." />
         <h2  className="lesson-title">تعلم مبادئ لغة <span style={{direction:"ltr"}}>++C</span></h2>
         <p className="lesson-desc">لغة جميلة تهدف إلى خلق المهارات البرمجية عند المبرمج الذي يبرمج برامج مفيدة برمجة المنطق العام البرمجي في عالم البرمجيات الذي يبرمج برنامجنا</p>
              </div>
     </div>


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
                            <p className="whous ">JavaScript</p>
                        </div>
                    </div>


                    <div >
                            {content}


                    </div>
                    </div>

                </div>
                <Link to="/" className="btn backHome">الصفحة الرئيسية</Link>
                         <Link to="/programming" className="btn backStep">رجوع</Link>

        </>
    )
}
export default JsPage;
