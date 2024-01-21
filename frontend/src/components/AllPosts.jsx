import { useEffect, useState } from "react"


function AllPosts(props) {

    let [lessons, setLessons] = useState([])
    useEffect(() => {
        fetch(`http://localhost:8000/api/posts/tag_lang/${props.section}/${props.name}/`).then((res) => res.json()).then((data) => setLessons(data.data))
    },[])
    let allPosts =   lessons.map((lesson) => {
        return (
            <>
                 <div className="col-12">
  <div className=" lesson-card mb-5">
 <img className="lesson-image" src={`http://localhost:8000/storage/${lesson.image}`} alt="..." />
 <h2  className="lesson-title"> <span >{lesson.title}</span></h2>
 <p className="lesson-desc">{lesson.body}</p>
      </div>
 </div>
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
