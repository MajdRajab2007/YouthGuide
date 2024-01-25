import "./Footer.css"

function Footer(props) {


    return (
        <>
                <footer className={`footer ${props.fix}`}  >
                    <div className="container">
                        <p className="footerText">حقوق الملكية محفوظة 2023&copy;  دليل الشباب - Youth Guide</p>
                    </div>
                </footer>
        </>
    )
}
export default Footer;
