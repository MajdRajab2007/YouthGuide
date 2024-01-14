import BlogSec from "../components/BlogSec"
import ContactUsSec from "../components/ContactUsSec"
import Navbar from "../components/Navbar"
import OurServSec from "../components/OurServSec"
import Slider from "../components/Slider"
import { useEffect } from "react"
import { useAuth } from "../contexts/AuthContext"
import axios from "axios"
import { Navigate } from "react-router-dom"


    function Home()
 {
    const { user, setUser } = useAuth();

	// check if user is logged in or not from server
	useEffect(() => {
		(async () => {
			try {
				const resp = await axios.get('/user');
				if (resp.status === 200) {
					setUser(resp.data.data);
				}
			} catch (error) {
				if (error.response.status === 401) {
					localStorage.removeItem('user');
					window.location.href = '/';
				}
			}
		})();
	}, []);

	// if user is not logged in, redirect to login page
	if (!user) {
		return <Navigate to="/signin" />;
	}


    return (
        <>
            <Navbar />
            <Slider />
            <BlogSec />
            <OurServSec />
            <ContactUsSec />


        </>
    )
 }

 export default Home
