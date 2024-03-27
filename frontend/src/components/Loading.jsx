import whiteLogo from "../images/logoWhite.png"
import "./Loading.css"
import loading from "../images/Loading.mp4"
function Loading(props) {

    return(<>
            <div className={`Loading ${props.display}`}>
                    <video className="loading-video" src={loading} autoPlay muted></video>
            </div>
    </>)
}
export default Loading
