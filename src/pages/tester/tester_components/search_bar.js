import { useState } from "react";
import style from "../../../css/tester/tester_hjem.module.css";

// {
//     topic:
//     header:
//     content:
//     subject:
// }

export default function SearchBar(props) {
    const searchBtnPressed = () => {
        props.updateSearchData(props.search);
        console.log(props.search);
    };

    return (
        <div id="search" className={` ${style.search}`}>
            <input
                type="text"
                id="searchField"
                className={style.searchField}
                placeholder="Søk etter test"
                value={props.search}
                onChange={(e) => props.updateSearchData(e.target.value)}
                onKeyDown={(e) => {
                    if (e.code === "Enter") {
                        searchBtnPressed();
                    }
                }}
            />

            <button id="searchBtn" className={style.searchBtn} onClick={() => searchBtnPressed()}>
                <i className="fa-solid fa-magnifying-glass fa-lg"></i> <span>Søk</span>
            </button>
        </div>
    );
}
