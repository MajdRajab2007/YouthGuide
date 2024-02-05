import { Link, useParams } from "react-router-dom"
import "./Lesson.css"
import { useEffect, useState } from "react"
import Loading from "../components/Loading";
function Lesson() {

    let [display, setDisplay] = useState("");
    let [displayNone, setDisplayNone] = useState("d-none");



    let params = useParams()
    let [lessonDetails, setLessonDetails] = useState([])
    console.log(params.lessonID)
    let lessonId = params.lessonID
    useEffect(() => {
            fetch(`http://localhost:8000/api/posts/${lessonId}`).then((res) => res.json()).then((data) => setLessonDetails(data))

            setTimeout(() => {
                setDisplay("d-none")
                setDisplayNone("")
              }, 2000)
      
        }, [])

        console.log(lessonDetails)
        return (
        <>
                <Loading display={display} />
        <div className={`Lesson-style-container ${displayNone}`}>
            <div className="container">
                <div className="lesson-body">
                    <h1 className="lesson-title">{lessonDetails.title}</h1>
                    <h5 className="lesson-disc">
                       {lessonDetails.body}
                    </h5>
                    <p className="lesson-author-name">{lessonDetails.team_name}</p>
                </div>
            </div>
        </div>

                         <Link to="/blog" className="btn backStep backstepLesson">رجوع</Link>
        </>
    )
}

export default Lesson
