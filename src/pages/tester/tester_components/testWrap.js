import style from "../../../css/tester/tester_hjem.module.css";
import FilterWrap from "./filter";
import TestPage from "./test";

export default function TestWrap(props) {
    function Test(t) {
        let test = t.test;
        var img = test.img.includes("://") ? test.img : "/img/" + test.img;
        return (
            <div className={style.test} onClick={() => props.updatePage(test)}>
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
            </div>
        );
    }
    return (
        <div>
            <div className={style.testHeader}>
                <h2>Alle våre {props.testCount} tester</h2>
                <FilterWrap searchData={props.searchData}></FilterWrap>
                <div className={style.testSort}>
                    mest rellevante tester <i className="fa-solid fa-chevron-down fa-2xs"></i>
                </div>
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
