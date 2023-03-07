import style from "../../../css/tester/tester_hjem.module.css";
import FilterWrap from "./filter";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function TestWrap(props) {
    function Test(t) {
        let test = t.test;
        var img = test.img.includes("://") ? test.img : "/img/" + test.img;
        return (
            <Link
                key={props.pushTestCount}
                className={style.test}
                to={`/tester?page=${test.header.toLowerCase().replace(/ /g, "-")}`}
            >
                <div className={`imgWrap ${style.testImgWrap}`}>
                    <img src={img} alt={test.imgAlt} />
                </div>
                <div className={style.testCategory}>{test.topic}</div>
                <h3>{test.header}</h3>
                <p>
                    {test.content.includes("<br />")
                        ? test.content.match(/^.*?(?=<br \/>)/)
                        : test.content}
                </p>
            </Link>
        );
    }

    return (
        <div id="TestWrap">
            <div className={style.testHeader}>
                <h2>Alle våre {props.testsList[1]} tester</h2>
                <FilterWrap
                    searchData={props.searchData}
                    updateSearchData={props.updateSearchData}
                    forceUpdateTopsection={props.forceUpdateTopsection}
                    updateTopsection={props.updateTopsection}
                ></FilterWrap>
                <select
                    id="testSort"
                    className={style.testSort}
                    onChange={(i) => props.updateSortBy(i.target.value)}
                >
                    <option defaultValue value="date">
                        Mest rellevante tester
                    </option>
                    <option value="alfabetical">Alfabetisk stigende</option>
                    <option value="alfabeticalReverse">Alfabetisk synkende</option>
                </select>
                <label htmlFor="testSort" className={style.testSortV}>
                    <i className="fa-solid fa-chevron-down"></i>
                </label>
            </div>
            <div className={style.testsWrap}>
                {props.testsList &&
                    props.testsList[0].map((test, i) => {
                        if (
                            i + 1 > (props.page - 1) * 12 && i + 1 <= (props.page - 1) * 12 + 12
                                ? true
                                : false
                        ) {
                            return <Test test={test} key={props.testsList[0].indexOf(test)}></Test>;
                        }
                    })}
            </div>
        </div>
    );
}
