import { useEffect, useState } from "react"
import BlogSec from "../components/BlogSec"
import ContactUsSec from "../components/ContactUsSec"
import Navbar from "../components/Navbar"
import OurServSec from "../components/OurServSec"
import Slider from "../components/Slider"
import AboutUsSec from "../components/AboutUsSec"
import Sponsers from "../components/Sponsers"
import Footer from "../components/Footer"
import Loading from "../components/Loading"
import { useSelector } from "react-redux"


    function Home()
 {
    
        let [display, setDisplay] = useState("");
        let [displayNone, setDisplayNone] = useState("d-none");


      useEffect(() => {
        setTimeout(() => {
            setDisplay("d-none")
            setDisplayNone("")
},2000)
      },[])

    return (
        <>
            <Loading display={display}/>
          <div className={displayNone}>
          <Navbar />
            <Slider />
            <BlogSec />
            <OurServSec />
            <ContactUsSec />
            <AboutUsSec />
            <Sponsers />
            <Footer />
          </div>



        </>
    )
 }

 export default Home
