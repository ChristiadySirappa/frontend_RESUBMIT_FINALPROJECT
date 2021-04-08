import React, {useContext, useState} from "react";
import { FontAwesomeIcon  } from "@fortawesome/react-fontawesome";
import { faSearch, faFilter  } from "@fortawesome/free-solid-svg-icons";
import "./sass/searchBar.scss";
import PopUpMobile from "./popUp_mobile";
import {ThemeContext} from "./context";
unction SearchBar({setInput}) {

    const [input, setInuptWord] = useState("");
    const [isShown, setIsShown] = useState(false);

    const {dark} = useContext(ThemeContext);

    function getInput(data) {
        setInput(data);
    }
  return (
      <>
        <section className="searchBar_container" dark-theme={dark.toString()}>
            <form action="">
                <label htmlFor="input">Filter by title</label>
                <input type="text" placeholder="Filter by title..." className="input" id="input" onChange={e => setInuptWord(e.target.value)}/>
            </form>
            <div className="funnel_container" onClick={() => setIsShown(!false)}>
                <FontAwesomeIcon icon={faFilter} className="filter_icon"></FontAwesomeIcon>
            </div>
      </>

)

}

export default SearchBar;
