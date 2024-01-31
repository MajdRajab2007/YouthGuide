import { Link, useParams } from "react-router-dom"
import "./Lesson.css"
import { useEffect, useState } from "react"
function Lesson() {
    let params = useParams()
    let [lessonDetails, setLessonDetails] = useState([])
    console.log(params.lessonID)
    let lessonId = params.lessonID
    useEffect(() => {
            fetch(`http://localhost:8000/api/posts/${lessonId}`).then((res) => res.json()).then((data) => setLessonDetails(data))
        }, [])

        console.log(lessonDetails)
        return (
        <>
        <div className="Lesson-style-container">
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
