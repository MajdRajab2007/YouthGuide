import { useEffect } from "react"
import BlogSec from "../components/BlogSec"
import ContactUsSec from "../components/ContactUsSec"
import Navbar from "../components/Navbar"
import OurServSec from "../components/OurServSec"
import Slider from "../components/Slider"
import AboutUsSec from "../components/AboutUsSec"


    function Home()
 {
    // useEffect(() => {
    //     if(window.location.href === 'http://localhost:8000/' ) {
    //         localStorage.setItem('jwt','jwt')
    //     }
    // }, [])


    return (
        <>
            <Navbar />
            <Slider />
            <BlogSec />
            <OurServSec />
            <ContactUsSec />
            <AboutUsSec />


        </>
    )
 }

 export default Home
