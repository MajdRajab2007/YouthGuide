import { Link } from "react-router-dom"
// import Navbar from "../components/Navbar"
import logo from "../images/logo.png"
import "./AboutUs.css"
import { useEffect, useState } from "react"
import firstWeb from "../images/firstWeb.png"
import Loading from "../components/Loading"

function AboutUs() {
  let [display, setDisplay] = useState("");
  let [displayNone, setDisplayNone] = useState("d-none");
  useEffect(() => {
    setTimeout(() => {
      setDisplay("d-none")
      setDisplayNone("")
    }, 2000)
  }, [])
  let [content, setContent] = useState(<div>

    <h4 className="col-12 mt-4 defineWhoAreUs ms-4">دليل الشباب: شركة برمجية ناشئة تهدف لخلق المهارات البرمجية عن طريق مبدأ تدريب اليافعين باليافعين أنفسهم</h4>
    <div className="row mt-3">
      <div className="cardAbout col-lg-4 col-md-6 col-12">
        <p className="aboutText">
          يقوم فريق دليل الشباب بتقديم دورات تدريبية مجانية باللغة العربية على منصة يوتيوب
        </p>                            </div>
      <div className="cardAbout col-lg-4 col-md-6 col-12">
        <p className="aboutText">

          يوجد لدينا أيضاً خدمة المساعدة بتقديم خارطة التعلم لأكثر من 20 مجال برمجي
        </p>                            </div>
      <div className="cardAbout col-lg-4 col-md-6 col-12">
        <p className="aboutText">

          من الخدمات التي يقدمها فريق دليل الشباب أيضاً هي كتابة مقالات عن مواضيع تقنية متعددة
        </p>                            </div>
    </div>
  </div>)
  let youthGuide = <div>

    <h4 className="col-12 mt-4 defineWhoAreUs ms-4">دليل الشباب: شركة برمجية ناشئة تهدف لخلق المهارات البرمجية عن طريق مبدأ تدريب اليافعين باليافعين أنفسهم</h4>
    <div className="row mt-3">
      <div className="cardAbout col-lg-4 col-md-6 col-12">
        <p className="aboutText">
          يقوم فريق دليل الشباب بتقديم دورات تدريبية مجانية باللغة العربية على منصة يوتيوب
        </p>                            </div>
      <div className="cardAbout col-lg-4 col-md-6 col-12">
        <p className="aboutText">
          يوجد لدينا أيضاً خدمة المساعدة بتقديم خارطة التعلم لأكثر من 20 مجال برمجي
        </p>                            </div>
      <div className="cardAbout col-lg-4 col-md-6 col-12">
        <p className="aboutText">

          من الخدمات التي يقدمها فريق دليل الشباب أيضاً هي كتابة مقالات عن مواضيع تقنية متعددة
        </p>                            </div>
    </div>


  </div>
  let webTeam = <div>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner teamsImgs mb-5">
        <div className="carousel-item  active">
          <img src={firstWeb} className="d-block w-100 text-center" alt="..." />
        </div>
        <div className="carousel-item ">
          <img src={firstWeb} className="d-block w-100 text-center" alt="..." />
        </div>
        <div className="carousel-item ">
          <img src={firstWeb} className="d-block w-100 text-center" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev Sliderarrows" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden ">Previous</span>
      </button>
      <button className="carousel-control-next Sliderarrows" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  let mediaTeam = <div>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner teamsImgs mb-5">
        <div className="carousel-item  active">
          <img src={firstWeb} className="d-block w-100 text-center" alt="..." />
        </div>
        <div className="carousel-item ">
          <img src={firstWeb} className="d-block w-100 text-center" alt="..." />
        </div>
        <div className="carousel-item ">
          <img src={firstWeb} className="d-block w-100 text-center" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev Sliderarrows" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden ">Previous</span>
      </button>
      <button className="carousel-control-next Sliderarrows" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  let orgTeam = <div>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner teamsImgs mb-5">
        <div className="carousel-item  active">
          <img src={firstWeb} className="d-block w-100 text-center" alt="..." />
        </div>
        <div className="carousel-item ">
          <img src={firstWeb} className="d-block w-100 text-center" alt="..." />
        </div>
        <div className="carousel-item ">
          <img src={firstWeb} className="d-block w-100 text-center" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev Sliderarrows" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden ">Previous</span>
      </button>
      <button className="carousel-control-next Sliderarrows" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>




  let [youthGuideClicked, setyouthGuideClicked] = useState(true)
  let [webTeamClicked, setwebTeamClicked] = useState(false)
  let [mediaTeamClicked, setmediaTeamClicked] = useState(false)
  let [orgTeamClicked, setorgTeamClicked] = useState(false)









  return (
    <>








      <div className={`aboutus mt-4 `}>
        <Loading display={display} />
        <div className="container">
          <div className="row mt-3 headOfAbout">
            <div className=" col-4" style={{ display: "flex", alignItems: "center" }}>
              <Link to="/"><img className="teamlogo" src={logo} alt=".." /></Link>

            </div>
            <div className="col-7" style={{ display: "flex", alignItems: "center" }}><p className="whous ">من نحن؟</p></div>
          </div>

          <div className="container mt-5 mb-5 sliderControl">
            <ul className="nav nav-pills nav-fill">
              <li className="nav-item">
                <button onClick={() => {
                  setContent(youthGuide)
                  setyouthGuideClicked(true)
                  setwebTeamClicked(false)
                  setmediaTeamClicked(false)
                  setorgTeamClicked(false)
                }} className={youthGuideClicked ? "nav-link sliderButtonActive" : "nav-link sliderButtons"} aria-current="page " >دليل الشباب</button>
              </li>
              <li className="nav-item ">
                <button className={webTeamClicked ? "nav-link sliderButtonActive" : "nav-link  sliderButtons"} onClick={() => {
                  setContent(webTeam)
                  setyouthGuideClicked(false)
                  setwebTeamClicked(true)
                  setmediaTeamClicked(false)
                  setorgTeamClicked(false)
                }}>فريق الويب</button>
              </li>
              <li className="nav-item ">
                <button className={mediaTeamClicked ? "nav-link sliderButtonActive" : "nav-link sliderButtons"} onClick={() => {
                  setContent(mediaTeam)
                  setyouthGuideClicked(false)
                  setwebTeamClicked(false)
                  setmediaTeamClicked(true)
                  setorgTeamClicked(false)
                }} >الفريق الإعلامي</button>
              </li>
              <li className="nav-item ">
                <button className={orgTeamClicked ? "nav-link sliderButtonActive" : "nav-link sliderButtons"} onClick={() => {
                  setContent(orgTeam)
                  setyouthGuideClicked(false)
                  setwebTeamClicked(false)
                  setmediaTeamClicked(false)
                  setorgTeamClicked(true)
                }} >الفريق التنظيمي</button>
              </li>

            </ul>
          </div>


          {content}



        </div>
        <div style={{ clear: "both" }}></div>
        <Link to="/" className="btn backHome">الصفحة الرئيسية</Link>
      </div>


    </>
  )
}

export default AboutUs
