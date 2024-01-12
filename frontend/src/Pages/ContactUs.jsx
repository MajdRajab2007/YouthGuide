import logo from "../images/logo.png";
import { FaFacebook, FaInstagram, FaInstagramSquare, FaMailBulk, FaPhone, FaSearchLocation, FaTelegram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./ContactUs.css"
import Footer from "../components/Footer";

function ContactUs() {
    return (
        <>
            <div className="contactus">
                <div className="container">
                    <div className="row mt-3 headOfAbout">
                        <div
                            className=" col-4"
                            style={{ display: "flex", alignItems: "center" }}
                        >
                           <Link to="/"> <img className="teamlogo" src={logo} alt=".." /></Link>
                        </div>
                        <div
                            className="col-7"
                            style={{ display: "flex", alignItems: "center" }}
                        >
                            <p className="whous ">تواصل معنا</p>
                        </div>
                    </div>

                    <div className="row mt-4" style={{position:"relative"}}>
                        <div className="contactcard">
                            <div className="before"></div>
                            <div className="linkcontact">
                                <FaSearchLocation className="iconsForContact" /> <span className="me-1">سوريا - اللاذقية</span>
                            </div>
                            <div className="linkcontact">
                                <FaMailBulk className="iconsForContact" />         <span className="me-1" style={{fontSize:"14px"}}>youthguide1@gmail.com</span>
                            </div>
                            <div className="linkcontact">
                                <FaWhatsapp className="iconsForContact" /> <span className="me-1">963937088453+</span>
                            </div>
                            <div className="linkcontact">
                                <FaPhone className="iconsForContact" /> <span className="me-1">963937088453+</span>
                            </div>
                        </div>
                    </div>
                    <Link to="/" className="btn backHome">الصفحة الرئيسية</Link>
                    <div className="socialmediaContact mt-5">
                        <p>أو عبر وسائل التواصل الأجتماعي</p>
                        <div className="socialIcons">
                            <a href="https://youtube.com/@YouthGuide4U?feature=shared" target="_blank"><span className="socialIcon" style={{color:"#1292ad"}} ><FaYoutube /></span></a>
                            <a href="https://www.facebook.com/YouthGuide1" target="_blank"><span className="socialIcon" style={{color:"#1292ad"}}><FaFacebook/></span></a>
                            <a href="https://t.me/youthguidechannel" target="_blank"><span className="socialIcon" style={{color:"#1292ad"}}><FaTelegram /></span></a>
                            <a href="https://www.instagram.com/youthguideoffical?igsh=MTB0OGJoc3Bqamtydw==" target="_blank"><span className="socialIcon" style={{color:"#1292ad"}}><FaInstagram /></span></a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default ContactUs;
