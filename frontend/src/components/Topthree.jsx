import { useEffect, useState } from "react"


function TopThree(props) {
    let [lessons, setLessons] = useState([])
    useEffect(() => {
        fetch(`http://localhost:8000/api/posts/tag_lang/1/${props.name}/`).then((res) => res.json()).then((data) => setLessons(data.data))
    },[])

        lessons.length = 3;

        let allthings = lessons.map((lesson) => {
            return (
                <>
                    <div key={lesson.id} className="cardLesson col-lg-4 col-md-6 col-12">

                    <div className="lessonText">
                    <h2 className="lessonHead">{lesson.title}</h2>

                             {lesson.body}
                           </div>
                     </div>
                </>
            )
        })
    return(
        <>
        {allthings}
        </>
    )
}

export default TopThree