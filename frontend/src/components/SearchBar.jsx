import { useState } from "react";
import "./SearchBar.css"
import { FaSearch } from "react-icons/fa";

function SearchBar() {

    let [active, setActive] = useState(false)

    setTimeout(() => {
            setActive(true)
    },1500)

    return (
        <>
                  <div className="search-box">
    <button className="btn-search"><FaSearch /></button>
    <input type="text" className={active === true ? "input-search activeS" : "input-search"  } placeholder="اكتب هنا للبحث" />
  </div>


        </>
    )
}
export default SearchBar;
