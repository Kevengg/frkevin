import style from "../../../css/tester/tester_hjem.module.css";
import SearchBar from "./search_bar";
import { useState } from "react";

function Category(props) {
    var [color, setColor] = useState({ backgroundColor: "var(--FR-color-lg)" });
    return (
        <div
            id={props.content}
            className={style.categoryBtn}
            onClick={() => {
                props.updateSearchData(undefined, props.content);

                if (color.backgroundColor == "var(--FR-color-lg)") {
                    setColor({ backgroundColor: "var(--FR-color-b)" });
                } else {
                    setColor({ backgroundColor: "var(--FR-color-lg)" });
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
                <SearchBar updateSearchData={props.updateSearchData}></SearchBar>
                <div className={style.categoryWrap}>
                    <Category updateSearchData={props.updateSearchData} content="Mat og drikke" />
                    <Category updateSearchData={props.updateSearchData} content="Fritid" />
                    <Category updateSearchData={props.updateSearchData} content="Bilbarneseter" />
                    <Category updateSearchData={props.updateSearchData} content="Helse og pleie" />
                    <Category updateSearchData={props.updateSearchData} content="Hus og hjem" />
                </div>
            </div>
        </div>
    );
}
