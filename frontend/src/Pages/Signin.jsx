import { Link } from "react-router-dom";
import "./Signup.css";
import logo from "../images/logo.png";
import { useEffect, useState } from "react";
import { useLocalState } from "../until/useLocalStorage";
import { useDispatch, useSelector } from "react-redux";
import { addUserInfo } from "../rtk/slices/user-slice";

function Signin() {
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [currentPass, setCurrentPass] = useState("")
    const [ValidPass, setValidPass] = useState("")
useEffect(() => {


},[])
    let [userData, setUserData] = useState([])

let myCode = "A648jdkfsjnvvXddt738yr83utrewgHGDHOIfuU9IOSDGOSDHUGSDUIHFIOoy897389uio3hrihehioH0W9Q0UR90382REMNFBZDFCBSHAGFEWY90RU89Y88t7TE2GEUIh()uIHIOHSD09FUESNFPIh8gd98AYDH09AWHNFInbUIHGAIOhd90y89dHDKsjfosauf90hsdfnsdigh9seghioasdfhioAHGIDHCSiFAHIOhiFJSDOIFHonfpouaofwihfio;ashogfsdhfkAHGIOaHBfdoisakgbs,HAFkrlbfvmhaefjlsghfdksajfhsioa;fgdoarihtgawuufsoaebtkszufrwehghsahfsopdhgbhdosgbsdkgjkjsdfjkd;lxhgsoapvmxdksM,fdfksdklaskgklfdklgnsdlgkdslgjsdogjdjgsdogjsogjdsogsdjgdsogndskaOHahHIOIOjNKLhsfmnf msakgfdmnfla;skfasjpofisakpgfospdgfaioedosdfdIOmfsdajognfkldskgmlsdkhdkKPlAkjkpfSNBKLFJSAKFKAJKhsoansjKNAKLJK';SDZ CKJSJGKDS'GJIOSUFSDLMFNJKadhijfdspjfiosahfnsdfldsikgmdspgjsdopfhsaoidhOPAKAF';FJDSPGNKDNGOPDSFHSAODBXKFHUIESBJFLNFSAGKNASHIOFKSDMFKSAHDJZOhdospghiosdjgdsklgds,jfsaiofhsa9r3u5623523793jfnkdlsfgse=-t9-=wejgnsdlkhfsa98fs8tafbkndlsgior-gopjdnvxklfgsd89f29748923ghrfea8rfy83wgru983u12ygruiwegifhewigfjdgfjshgfmhsgmhgcmnvbmxnsxbcvmsncgshvbmc9m6snbxcsncmwvsnxcmvsnxmcsvbvbsnxcbvsnbxcv4msn89bxc4mv4sn89xmc489vsvbsmnbcsmncbvsnb1v5m6snxb45smn4bwxc5mvs4n9b8xc4mv9s8nxbnc67863w45FTYSADGFYSGDEUFSUIDFSASDFSDFSDFDSFDSFSDFSD"
let jwt = "1544sad8as4d4sad45sa4f8sa4f8sa4fasf8a4sfas4f38yr83utrewgHGDHOIfuU9IOSDGOSDHUGSDUIHFIOoy897389uio3hrihehioH0W9Q0UR90382REMNFBZDFCBSHAGFEWY90RU89Y88t7TE2GEUIh"
    return (
        <>
            <div>
                <div className="login template d-flex vh-100 ms-5 align-items-center w-100  backgroundForForm">
                    <div
                        className="40-w p-5 rounded  formContainer"
                        style={{ height: "70%" }}
                    >
                        <form
                            action="http://127.0.0.1:8000/login"
                            method="POST"
                            onSubmit={() => {
                                localStorage.setItem(jwt, myCode)


                            }}

                        >
                            <img
                                className="mt-5 logoAct "
                                src={logo}
                                alt="sada"

                            />
                            <h3  className="text-center mb-5">تسجيل الدخول</h3>

                            <div className="mb-4">
                                <label htmlFor="email" className="mb-2">
                                    البريد الإلكتروني
                                </label>
                                <input
                                    name="loginemail"
                                    required
                                    type="email"
                                    placeholder="البريد الإلكتروني"
                                    className="form-control"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <p
                                    style={{ color: "red", fontWeight: "bold" }}
                                    className="warning"
                                ></p>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="mb-2">
                                    كلمة السر
                                </label>
                                <input
                                    name="loginpassword"
                                    type="password"
                                    required
                                    minLength="10"
                                    maxLength="28"
                                    placeholder="كلمة السر"
                                    className="form-control"
                                    onChange={(e) => setCurrentPass(e.target.value)}
                                />
                                <p
                                    style={{ color: "red", fontWeight: "bold" }}
                                    className="warning"
                                ></p>
                            </div>

                            <div className="d-grid">
                                <input  onClick={() => {
                                fetch(`http://127.0.0.1:8000/api/users/${email}`).then((res) => res.json()).then((data) => {
                                    localStorage.setItem("email", data.data.email)

                                })

                            }} className="btn btn-youth" type="submit" value="تسجيل الدخول"/>
                            </div>
                            <p

                             className="text-left mt-2">
                                لا تملك حساب؟
                                <Link className="me-2" to="/signup">
                                    إنشاء حساب جديد
                                </Link>
                            </p>
                        </form>
                        <div className="bg-red warning-message">{window.localStorage.getItem("messege")} </div>
                        <hr />
                        <Link to="/" className="text-center" style={{fontWeight:'bold', color:"#1234ff"}}>المتابعة كضيف
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signin;
