import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


function AllPosts(props) {

    let [lessons, setLessons] = useState([])
    useEffect(() => {
        fetch(`http://localhost/api/posts/${props.tag}/${props.section}/${props.name || ""}`).then((res) => res.json()).then((data) => setLessons(data.data))
    }, [])
    let allPosts = lessons.map((lesson) => {
        return (
            <>
                <Link key={lesson.id} to={`/blog/${lesson.id}`} className="col-12">
                    <div className=" lesson-card mb-5">
                        <img className="lesson-image" src={`http://localhost/storage/${lesson.image}`} alt="..." />
                        <h2 className="lesson-title"> <span >{lesson.title}</span></h2>
                        <p className="lesson-desc">{lesson.body}</p>
                    </div>
                </Link>
                <hr />
            </>
        )
    })


    return (
        <>
            {allPosts}

        </>
    )
}

export default AllPosts
