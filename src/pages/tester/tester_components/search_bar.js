import { useState } from "react";
import style from "../../../css/tester/tester_hjem.module.css";

// {
//     topic:
//     header:
//     content:
//     subject:
// }

export default function SearchBar(props) {
    const [search, setSearch] = useState("");

    const searchBtnPressed = () => {
        props.updateSearchData(search);
    };

    return (
        <div id="search" className={` ${style.search}`}>
            <input
                type="text"
                id="searchField"
                className={style.searchField}
                placeholder="Søk etter test"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <button id="searchBtn" className={style.searchBtn} onClick={() => searchBtnPressed()}>
                <i className="fa-solid fa-magnifying-glass fa-lg"></i> <span>Søk</span>
            </button>
        </div>
    );
}
