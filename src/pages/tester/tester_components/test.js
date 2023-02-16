import React from "react";
import { Chevron, formatContent, LinkBtn, formatDate } from "../../../component";
import styles from "../../../css/tester/testPage.module.css";

export default function TestPage({ page, updatePage }) {
    let test = page;
    // console.log(test);

    function TestObject({ obj }) {
        var img = obj.img.includes("://") ? obj.img : "/img/" + obj.img;
        return (
            <div className={styles.testObject} onClick={() => updatePage(obj, page)}>
                <div className="imgWrap" style={{ backgroundColor: "white" }}>
                    <img src={img} alt={obj.imgAlt} />
                    {(obj.ratingType === "smiley" && (
                        <img
                            className={styles.rating}
                            src={
                                obj.rating === "good"
                                    ? "/img/grade-positive.svg"
                                    : obj.rating === "ok"
                                    ? "/img/grade-neutral.svg"
                                    : "/img/grade-negative.svg"
                            }
                        />
                    )) ||
                        (obj.ratingType === "grade" && (
                            <div className={styles.grade}>
                                <span>{obj.rating + " "}</span>/ 10
                            </div>
                        ))}
                </div>
                <div className={styles.content}>
                    <h4>{obj.manufacturer}</h4>
                    <h5> {obj.product} </h5>
                    {obj.note && <div>{obj.note}</div>}
                    <div style={{ textDecoration: "underline", marginBottom: "auto" }}>
                        Les mer om produktet
                    </div>
                </div>
                <input
                    id={`select${test.objects.indexOf(obj)}`}
                    className="checkbox"
                    type="checkbox"
                ></input>
                <label htmlFor={`select${test.objects.indexOf(obj)}`} className="checkmark"></label>
            </div>
        );
    }
    // console.log("test", test);
    return (
        <main>
            <div className={`maxWidth ${styles.testPage}`}>
                <nav className={styles.path}>
                    <span onClick={() => updatePage()}>Tester</span>
                    <Chevron size="xxs" />
                    <span onClick={() => updatePage()}>{test.topic}</span>
                    <Chevron size="xxs" />
                    <span>{test.header}</span>
                </nav>

                <div id={styles.testPageGrayBox}>
                    <div className="imgWrap">
                        <img src={test.img} alt={test.imgAlt} />
                    </div>
                    <div className={styles.testPageGrayBoxContent}>
                        <LinkBtn content={test.topic} onClick={() => updatePage()}></LinkBtn>
                        <h2>{test.header}</h2>
                        <p style={{ marginBottom: "10px" }}>
                            Publissert: {formatDate(test.date, "DD longM YYYY")}
                        </p>
                        <p>{formatContent(test.content)}</p>
                        <LinkBtn content="Les mer om testen" chevron onClick={() => {}}></LinkBtn>
                    </div>
                </div>

                <div className={styles.testList}>
                    <div className={styles.testHeader}>
                        <LinkBtn
                            content="Nulstill filter"
                            color="var(--FR-color-lg)"
                            hover="var(--FR-color-lb)"
                        ></LinkBtn>
                        <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Søk etter produkt"
                        />
                        <select name="sort" id="sort">
                            <option value="synk">Testresultat synkende</option>
                        </select>
                        <LinkBtn
                            content="Sammenlign"
                            color="var(--FR-color-lg)"
                            hover="var(--FR-color-lb)"
                        ></LinkBtn>
                    </div>
                    <div>
                        <div>{"rating sort"}</div>
                        <div className={styles.testObjectWrap}>
                            {test.objects.map((obj) => (
                                <TestObject obj={obj}></TestObject>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
