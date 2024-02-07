import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


function TopThree(props) {
    let [lessons, setLessons] = useState([])
    useEffect(() => {
        fetch(`http://localhost:8000/api/posts/${props.tag}/${props.section}/${props.name || ""}`).then((res) => res.json()).then((data) => setLessons(data.data))
    },[])

       

       
    return(
        lessons.map((lesson) => {
            return (
                <>
                        
                    <Link key={lesson.id}  to={`/blog/${lesson.id}`} style={{overflow:"auto"}}  className="cardLesson col-lg-4 col-md-6 col-12">

                    <div  className="lessonText">
                    <h2  className="lessonHead">{lesson.title}</h2>

                             {lesson.review}
                           </div>
                     </Link>
                </>
            )
        }).slice(0,3)
    )
}

export default TopThree
