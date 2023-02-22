import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import style from "../../../css/tester/tester_hjem.module.css";

export default function SearchBar(props) {
    const location = useLocation();

    // holds the seach bar value
    const [search, setSearch] = useState(findInitSearch());
    function findInitSearch() {
        let search = location.search
            ? location.search.includes("searchBar:")
                ? location.search.split("&")[0].match(/(?<=:).*/)[0]
                : ""
            : "";
        return search;
    }

    // to make ^ <- forget search
    useEffect(() => {
        window.onload = () => {
            if (performance.getEntriesByType("navigation")[0].nextHopProtocol === "http/1.1") {
                setSearch(" ");
            }
        };
    }, []);

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
                onChange={(e) => {
                    // props.updateSearchData(e.target.value);
                    setSearch(e.target.value);
                }}
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
