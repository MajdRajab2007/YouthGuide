import { Link } from "react-router-dom";
import "./Signup.css";
import logo from "../images/logo.png";
import { useState } from "react";
import apiClient from "../axios";


function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();

      apiClient.get("/sanctum/csrf-cookie").then((response) => {
        apiClient
          .post("/api/login", {
            email: email,
            password: password,
            device_name: "React v0.1",
          })
          .then((response) => {
            console.log(response);
          });
      });
    };

    return (
        <>
            <div>
                <div className="login template d-flex vh-100 ms-5 align-items-center w-100  backgroundForForm">
                    <div
                        className="40-w p-5 rounded  formContainer"
                        style={{ height: "70%" }}
                    >
                        <form
                                onSubmit={handleSubmit}
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
                                    value={email}
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
                                    minLength="10"
                                    maxLength="28"
                                    placeholder="كلمة السر"
                                    className="form-control"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
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
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signin;
