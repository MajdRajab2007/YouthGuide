import "./Profile.css"
import background from "../images/backgroundForProfilePage.jpg"
import logo from "../images/logo.png"
import profilepic from "../images/guest.png"
import { FaArrowAltCircleRight, FaLongArrowAltLeft, FaLongArrowAltRight, FaPenAlt, FaPlus } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import Loading from "../components/Loading"
import axios from "axios"
function Profile() {

    let email = localStorage.getItem("email")

    let [apiText, setApiText] = useState("")
    let [apiImage, setApiImage] = useState("")
    let [content, setContent] = useState("")
    let [showTextArea, setShowTextArea] = useState(false)
    let [userInfo, setUserInfo] = useState({})
    let [display, setDisplay] = useState("");
    let [displayNone, setDisplayNone] = useState("d-none");



    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/users/${email}`).then((res) => res.json()).then((data) => setUserInfo(data.data))
        
        setTimeout(() => {
            setDisplay("d-none")
            setDisplayNone("")
        }, 2000)
    }, [])
    console.log(userInfo)


    const updateBio = () => {
        fetch(`http://localhost:8000/api/users/edit/${email}`,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "PUT",
            body: JSON.stringify({ about: apiText })
        }).then(res => res.json())
    }
    const setNewBio = () => {
        fetch(`http://127.0.0.1:8000/api/users/${email}`)
        .then((res) => res.json())
        .then((data) => setContent(data.data.about))
    }

    // Handle Upload Image
    let [file, setFile] = useState(null)

    const handleFile = (e) => {
         setFile(e.target.files[0])
         
    }
    const updateImage = () => {
        fetch(`http://127.0.0.1:8000/users/edit/${email}`,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "PUT",
            body: JSON.stringify({ image: apiImage })
        }).then(res => res.json())
    }
    const handleUpload = (e) => {
            let formData = new FormData()
            formData.append('image', apiImage.name)
            

            axios({
                url:`http://localhost:8000/api/users/edit/${email}`,
                method:'PUT',
                headers: {
                    Authorization: "your token",
                    Accept: 'application/json',
                    "Content-Type":'application/json'
                },
                data: formData
            })
    }

    return (
        <>
            <Loading display={display} />
            <div className={`profile ${displayNone}`}>
                <div >
                    <img src={background} alt="..." className=" w-100 backgroundProfilePage" />
                </div>
                <div className="marginTopForImage"></div>
                <div className="container ">
                    <div className="row profileDis" style={{ position: "relative", bottom: "1px" }}>
                       
                        <div className="col-12 col-md-6 col-lg-6 athorInfo" >
                        
                                <div className="mt-2"
                                 style={{ direction: "ltr", fontSize: "24px", fontWeight: "bold", display: "flex" }}>
                                    Email: <p className="fs-6 ms-3 mt-2">{userInfo.email}
                                    </p>
                                    </div>

                                <h3 style={{ direction: "ltr" }}>Joined On:</h3>
                                <p style={{ direction: "ltr" }}>{Date(userInfo.created_at)}</p>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="profile-pic">

                                <div style={{ overflow:"hidden" }} className="profile-image">
                                    <img src={profilepic} alt="..." className="UserImage " />
                                     
                                </div>
                                <h1 className="text-center">{userInfo.name} {userInfo.lName}</h1>
                                <div className="baio" >
                                    <FaPenAlt className="ms-3 mb-2 editBio"

                                        onClick={() => setShowTextArea(true)}
                                    />
                                    <span className="fs-3">{userInfo.about}</span>
                                </div>
                                <div>{content}</div>
                                {showTextArea ? (<form
                                                      method="POST"
                                                     action={`http://localhost:8000/api/users/edit/${email}`}
                                                >
                                    <input style={{ width: "1px", height: "1px" }} type="text" name="about" value={apiText} />
                                    <textarea className="textareaPlace"
                                        onChange={(e) => setApiText(e.target.value)}
                                        name=""
                                        id="" cols="30" rows="10">

                                    </textarea>
                                    <input className="btn btn-youth" value="send"
                                        onClick={() => {
                                            setShowTextArea(false)
                                                updateBio()

                                                setNewBio()
                                                setContent("جاري التحديث")
                                                setTimeout(() => {
                                                    setContent("")
                                                    window.location.reload()
                                                    
                                                },3000)
                                                
                                        }}
                                    />
                                </form>) : ""}
                                


                            

                            </div>
                        </div>
                    </div>
                </div>
                <Link to="/" className="btn backStep">رجوع</Link>

            </div>
        </>
    )
}
export default Profile
