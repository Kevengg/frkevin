import style from "../../../css/tester/tester_hjem.module.css";
import FilterWrap from "./filter";

export default function TestWrap(props) {
    function Test(test) {
        return (
            <a className={style.test} href={test.test.href}>
                {props.updateTestCount(props.testsList.length)}
                <div className={style.testImgWrap}>
                    <img src={test.test.img} alt={test.test.imgAlt} />
                </div>
                <div className={style.testCategory}>{test.test.topic}</div>
                <h3>{test.test.header}</h3>
                <p> {test.test.content} </p>
            </a>
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
