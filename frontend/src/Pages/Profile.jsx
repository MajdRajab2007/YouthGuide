import "./Profile.css"
import background from "../images/backgroundForProfilePage.jpg"
import logo from "../images/logo.png"
import profilepic from "../images/guest.png"
import { FaArrowAltCircleRight, FaCircle, FaGgCircle, FaLongArrowAltLeft, FaLongArrowAltRight, FaPenAlt, FaPlus } from "react-icons/fa"
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

    let gender = userInfo.gender

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/users/${email}`).then((res) => res.json()).then((data) => setUserInfo(data.data))

        setTimeout(() => {
            setDisplay("d-none")
            setDisplayNone("")
        }, 2000)
    }, [])
    // console.log(userInfo)


    const updateBio = () => {
        fetch(`http://localhost/api/users/edit/${email}`,
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
            url: `http://localhost/api/users/edit/${email}`,
            method: 'PUT',
            headers: {
                Authorization: "your token",
                Accept: 'application/json',
                "Content-Type": 'application/json'
            },
            data: formData
        })
    }

    return (
        <>
            <Loading display={display} />
            <div className={`profile ${displayNone}`}>
               
                <div className="marginTopForImage"></div>
                <div className="container ">
                    <div className="row profileDis" style={{ position: "relative", bottom: "1px" }}>

                        <div className="col-12 col-md-6 col-lg-6 athorInfo" >

                                <div className="gender mt-4 ms-auto">
                                    <h4>الجنس: 
                                        <div className="genderSelction">
                                            <div className="gend">
                                                <div>{userInfo.gender === "male" ? <FaCircle className="selectedFromSignUp" /> : ""}</div>
                                                ذكر
                                            </div>
                                            <div className="gend">
                                                <div>{userInfo.gender === "female" ? <FaCircle className="selectedFromSignUp" /> : ""}</div>
                                                    أنثى
                                            </div>
                                        </div>
                                    </h4>
                                </div>
                                <div className="occupation mt-4" style={{width:"100%"}}>
                                    <h4>الحالة: 
                                    <div className="occupationSelction">
                                            <div className="occupationField">
                                                <div>{userInfo.occupation === "employed" ? <FaCircle className="selectedFromSignUp" /> : ""}</div>
                                                موظف
                                            </div>
                                            <div className="occupationField">
                                                <div>{userInfo.occupation === "student" ? <FaCircle className="selectedFromSignUp" /> : ""}</div>
                                                    طالب
                                            </div>
                                        </div>
                                    </h4>

                                </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="profile-pic">

                                <div style={{ overflow: "hidden", backgroundColor:"#fff" }} className="profile-image">
                                    <img src={profilepic} alt="..." className="UserImage " />

                                </div>
                                <h1 className="text-center">{userInfo.name} {userInfo.lName}</h1>
                                <div className="baio" >
                                    <FaPenAlt className="ms-3 mb-2 editBio"

                                        onClick={() => setShowTextArea(true)}
                                    />
                                    <span className="fs-3">{content === "جاري التحديث" ? content : userInfo.about}</span>
                                </div>
                                <div>{content}</div>
                                {showTextArea ? (<form
                                    method="POST"
                                    action={`http://localhost/api/users/edit/${email}`}
                                >
                                    <input style={{ width: "1px", height: "1px" }} type="text" name="about" value={apiText} />
                                    <textarea className="textareaPlace"
                                        onChange={(e) => setApiText(e.target.value)}
                                        name=""
                                        id="" cols="30" rows="10">
                                        

                                    </textarea>
                                    <button className="btn btn-danger" 
                                        style={{    margin: "0 10px"}}
                                        onClick={() => setShowTextArea(false)}
                                    >إلغاء</button>
                                    <input className="btn btn-youth" value="تحديث"
                                        onClick={() => {
                                            setShowTextArea(false)
                                            updateBio()

                                            // setNewBio()
                                            setContent("جاري التحديث")
                                            setTimeout(() => {
                                                setContent("")
                                                window.location.reload()

                                            }, 3000)

                                        }}
                                    />
                                </form>) : ""}
                                <div className=" ms-auto emailField">
                               <h4 >البريد الإلكتروني:</h4>
                                    <h5>{userInfo.email}</h5>
                            </div>
                               





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
