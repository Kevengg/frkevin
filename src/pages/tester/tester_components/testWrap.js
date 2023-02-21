import style from "../../../css/tester/tester_hjem.module.css";
import FilterWrap from "./filter";
import { Link } from "react-router-dom";

export default function TestWrap(props) {
    function Test(t) {
        let test = t.test;
        var img = test.img.includes("://") ? test.img : "/img/" + test.img;
        return (
            <Link
                className={style.test}
                to={`/tester?page=${test.header.toLowerCase().replace(/ /g, "-")}`}
            >
                {props.updateTestCount(props.testsList.length)}
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
                <h2>Alle våre {props.testCount} tester</h2>
                <FilterWrap searchData={props.searchData}></FilterWrap>
                <select
                    className={style.testSort}
                    onChange={(i) => props.updateSortBy(i.target.value)}
                >
                    <option defaultValue value="date">
                        Mest rellevante tester
                    </option>
                    <option value="alfabetical">Alfabetisk stigende</option>
                    <option value="alfabeticalReverse">Alfabetisk synkende</option>
                </select>
            </div>
            <div className={style.testsWrap}>
                {props.testsList &&
                    props.testsList.map((test) => {
                        return <Test test={test} key={props.testsList.indexOf(test)}></Test>;
                    })}
            </div>
        </div>
    );
}
