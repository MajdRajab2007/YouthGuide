import { Link } from "react-router-dom";
import "./Signup.css";
import logo from "../images/logo.png";
import { useLocalState } from "../until/useLocalStorage";
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from '../axios';
import { useAuth } from '../contexts/AuthContext';






function Signin() {

        // const [jwt, setJwt] = useLocalState("" , "jwt")
        const { user } = useAuth();
        if (user) {
            return <Navigate to="/" />;
        }
        const { setUser, csrfToken } = useAuth();
	const [error, setError] = React.useState(null);

	// login user
	const handleSubmit = async (e) => {
		e.preventDefault();
		const { email, password } = e.target.elements;
		const body = {
			email: email.value,
			password: password.value,
		};
		await csrfToken();
		try {
			const resp = await axios.post('/login', body);
			if (resp.status === 200) {
				setUser(resp.data.user);
				return <Navigate to="/" />;
			}
		} catch (error) {
			if (error.response.status === 401) {
				setError(error.response.data.message);
			}
		}
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
                            action="http://127.0.0.1:8000/api/login"
                            method="POST"
                            onSubmit={() => {
                                    setJwt("jwt")
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
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signin;
