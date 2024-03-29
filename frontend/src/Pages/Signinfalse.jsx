import { Link } from "react-router-dom";
import "./Signup.css";
import logo from "../images/logo.png";
import {  Navigate } from "react-router-dom";
import { useEffect } from "react"


function Signinfalse() {
        let jwt = "1544sad8as4d4sad45sa4f8sa4f8sa4fasf8a4sfas4f38yr83utrewgHGDHOIfuU9IOSDGOSDHUGSDUIHFIOoy897389uio3hrihehioH0W9Q0UR90382REMNFBZDFCBSHAGFEWY90RU89Y88t7TE2GEUIh"
             
        useEffect(() => {
          <Navigate to="/signin" />
    }, [])
         window.localStorage.setItem(jwt, "");
                  window.localStorage.setItem("messege", "البيانات المدخلة غير صحيحة");

         window.location.href = "/signin"
         localStorage.removeItem("email")
               


    return (
        <>
            <div>
                <div className="login template d-flex vh-100 ms-5 align-items-center w-100  backgroundForForm">
                    <div
                        className="40-w p-5 rounded  formContainer"
                        style={{ height: "70%" }}
                    >
                        <form
                            action="/login"
                            method="POST"
                        >
                            <img
                                className="mt-5 logoAct "
                                src={logo}
                                alt="sada"
                            />
                            <h3 className="text-center mb-5">تسجيل الدخول</h3>

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
                                />
                                <p
                                    style={{ color: "red", fontWeight: "bold" }}
                                    className="warning"
                                ></p>
                            </div>

                            <div className="d-grid">
                            <input className="btn btn-youth" type="submit" value="تسجيل الدخول"/>
                            </div>
                            <p className="text-left mt-2">
                                لا تملك حساب؟
                                <Link className="me-2" to="/signup">
                                    إنشاء حساب جديد
                                </Link>
                            </p>
                        </form>
                        <p className="wrongData">البيانات المدخلة غير صحيحة</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signinfalse;
