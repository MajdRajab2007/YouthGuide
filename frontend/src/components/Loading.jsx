import whiteLogo from "../images/logoWhite.png"
import "./Loading.css"
function Loading(props) {

    return(<>
            <div className={`Loading ${props.display}`}>
                    <img src={whiteLogo} alt="..." className=" loadingLogo" />
                    <h4 className="loading-text1">Learn</h4>
                    <h4 className="loading-text2">Create</h4>
                    <h4 className="loading-text3">Develop</h4>
            </div>
    </>)
}
export default Loading
