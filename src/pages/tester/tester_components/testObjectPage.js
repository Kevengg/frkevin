import React from "react";
import { Chevron, formatDate } from "../../../component";
import styles from "../../../css/tester/testObjectPage.module.css";

export default function TestObjectPage({ obj, updatePage }) {
    // console.log(lastPage);
    function RatingPoint({ point, score, type }) {
        return (
            <div className={styles.ratingPoint}>
                <span>{point}</span>
                {(type === "text" && <span>{score}</span>) ||
                    (type === "smiley" && (
                        <span className={styles.imgWrap}>
                            <img
                                src={
                                    obj.rating === "good"
                                        ? "/img/grade-positive.svg"
                                        : obj.rating === "ok"
                                        ? "/img/grade-neutral.svg"
                                        : "/img/grade-negative.svg"
                                }
                            />
                        </span>
                    )) ||
                    (type === "bolian" && ((score == true && <span>Ja</span>) || <span>Nei</span>))}
            </div>
        );
    }

    return (
        <main>
            <div className={`maxWidth`}>
                {/* <nav className={styles.path}>
                    <span onClick={() => updatePage()}>Tester</span>
                    <Chevron size="xxs" />
                    <span onClick={() => updatePage()}>{lastPage.topic}</span>
                    <Chevron size="xxs" />
                    <span onClick={() => updatePage()}>{lastPage.header}</span>
                    <Chevron size="xxs" />
                </nav> */}

                <div className={styles.pageWrap}>
                    <div className={styles.imgWrap}>
                        <img src={`/img/${obj.img}`} alt={obj.imgAlt} />
                        <img
                            src={
                                obj.rating === "good"
                                    ? "/img/grade-positive.svg"
                                    : obj.rating === "ok"
                                    ? "/img/grade-neutral.svg"
                                    : "/img/grade-negative.svg"
                            }
                        />
                    </div>
                    <div>
                        <h1>{obj.manufacturer}</h1>
                        <h2>{obj.product}</h2>
                        <div>Testdato: {formatDate(obj.date, "DD.MM.YYYY")}</div>
                        <h2>Samlet score:</h2>
                        <img
                            src={
                                obj.rating === "good"
                                    ? "/img/grade-positive.svg"
                                    : obj.rating === "ok"
                                    ? "/img/grade-neutral.svg"
                                    : "/img/grade-negative.svg"
                            }
                        />
                        <div>
                            <RatingPoint
                                point="Produsent"
                                score={obj.manufacturer}
                                type="text"
                            ></RatingPoint>
                            {obj.ratingPoints.map((o) => (
                                <RatingPoint point={o[0]} score={o[1]} type={o[2]} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
