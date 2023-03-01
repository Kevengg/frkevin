import React from "react";
import styles from "../../../css/tester/testPage.module.css";

export default function SortBy({ param, test, call }) {
    let eachOfParam = [];
    let uniqueOfParam = [];
    test.objects.map((o) => {
        eachOfParam.push(o[param]);
        if (!uniqueOfParam.includes(o[param])) {
            uniqueOfParam.push(o[param]);
        }
    });
    // console.log(uniqueOfParam, eachOfParam);
    function Sort({ sort }) {
        return (
            <>
                <div>
                    <input
                        id={sort}
                        className="checkbox"
                        type="checkbox"
                        onChange={(e) => {
                            call(e, param);
                        }}
                    ></input>
                    <label htmlFor={sort} className="checkmark"></label>
                </div>
                <span>
                    {sort} {"("}
                    {eachOfParam.reduce((acc, val) => {
                        return val === sort ? acc + 1 : acc;
                    }, 0)}
                    {")"}
                </span>
            </>
        );
    }

    return (
        <div className={styles.ratingWrap}>
            {uniqueOfParam.map((sort, i) => (
                <Sort sort={sort} key={i}></Sort>
            ))}
        </div>
    );
}
