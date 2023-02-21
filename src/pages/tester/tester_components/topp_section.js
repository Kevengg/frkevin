import style from "../../../css/tester/tester_hjem.module.css";
import SearchBar from "./search_bar";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Category(props) {
    const location = useLocation();
    var [color, setColor] = useState(
        props.searchData.searchBtn.includes(props.content.toLowerCase())
            ? { backgroundColor: "var(--FR-color-db)", color: "white" }
            : { backgroundColor: "var(--FR-color-lg)", color: "black" }
    );

    useEffect(() => {
        window.onload = () => {
            if (performance.getEntriesByType("navigation")[0].nextHopProtocol === "http/1.1") {
                setColor(
                    props.searchData.searchBtn.includes(props.content.toLowerCase())
                        ? { backgroundColor: "var(--FR-color-db)", color: "white" }
                        : { backgroundColor: "var(--FR-color-lg)", color: "black" }
                );
            }
        };
    }, []);

    return (
        <div
            id={props.content}
            className={style.categoryBtn}
            onClick={() => {
                props.updateSearchData(undefined, props.content);

                if (color.backgroundColor == "var(--FR-color-lg)") {
                    setColor({ backgroundColor: "var(--FR-color-db)", color: "white" });
                } else {
                    setColor({ backgroundColor: "var(--FR-color-lg)", color: "black" });
                }
            }}
            style={color}
        >
            {props.content}
        </div>
    );
}

export default function ToppSection(props) {
    return (
        <div>
            <div className={style.pageTopWrap}>
                <h1>Forbrukerrådets tester</h1>
                <p>
                    Det skal være lett å velge miljøvennlig, også når du må kjøpe noe nytt. Våre
                    tester skal hjelpe deg å ta gode valg, enten du er opptatt av miljø, pris eller
                    kvalitet. Hvis du vil unngå produkter som raskt går i stykker, fungerer dårlig
                    eller inneholder skadelige kjemikalier, kan du lese alle testene våre her.
                </p>
                <SearchBar
                    updateSearchData={props.updateSearchData}
                    search={props.search}
                    setSearch={props.setSearch}
                ></SearchBar>
                <div className={style.categoryWrap}>
                    <Category
                        updateSearchData={props.updateSearchData}
                        searchData={props.searchData}
                        content="Mat og drikke"
                    />
                    <Category
                        updateSearchData={props.updateSearchData}
                        searchData={props.searchData}
                        content="Fritid"
                    />
                    <Category
                        updateSearchData={props.updateSearchData}
                        searchData={props.searchData}
                        content="Bilbarneseter"
                    />
                    <Category
                        updateSearchData={props.updateSearchData}
                        searchData={props.searchData}
                        content="Helse og pleie"
                    />
                    <Category
                        updateSearchData={props.updateSearchData}
                        searchData={props.searchData}
                        content="Hus og hjem"
                    />
                </div>
            </div>
        </div>
    );
}
