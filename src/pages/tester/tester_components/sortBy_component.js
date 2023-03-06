import React, { useEffect, useState } from "react";
import styles from "../../../css/tester/testPage.module.css";

export default function SortBy({ param, test, call, filter }) {
    let eachOfParam = [];
    let uniqueOfParam = [];
    test.objects.map((o) => {
        eachOfParam.push(o[param]);
        if (!uniqueOfParam.includes(o[param])) {
            uniqueOfParam.push(o[param]);
        }
    });

    function Sort({ sort }) {
        const [checked, setChecked] = useState(
            filter
                ? filter[param]
                    ? filter[param].includes(typeof sort === "number" ? sort.toString() : sort)
                        ? true
                        : false
                    : false
                : false
        );

        return (
            <>
                <div>
                    <input
                        id={typeof sort === "number" ? sort.toString() : sort}
                        type="checkbox"
                        className="checkbox"
                        checked={checked}
                        onChange={(e) => {
                            setChecked(!checked);
                            call(e, param);
                        }}
                    ></input>
                    <label
                        htmlFor={typeof sort === "number" ? sort.toString() : sort}
                        className="checkmark"
                    ></label>
                </div>
                <span
                    onClick={(e) => {
                        document
                            .getElementById(typeof sort === "number" ? sort.toString() : sort)
                            .click();
                    }}
                >
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
