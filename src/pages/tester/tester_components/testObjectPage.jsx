import React from "react";
import { Link } from "react-router-dom";
import { BreadCrumb, Chevron, formatDate } from "../../../component";
import styles from "../../../css/tester/testObjectPage.module.css";

export default function TestObjectPage({ obj, info }) {
    function RatingPoint({ point, score, type }) {
        return (
            <div className={styles.ratingPoint}>
                <span>{point}</span>
                {(type === "text" && <span>{score}</span>) ||
                    (type === "smiley" && (
                        <span className={styles.imgWrap}>
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
                        </span>
                    )) ||
                    (type === "bolian" &&
                        ((score == true && <span>Ja</span>) || <span>Nei</span>)) ||
                    (type === "number" && <span>{score}</span>)}
            </div>
        );
    }

    function Score() {
        if (obj.ratingType === "smiley") {
            return (
                <img
                    className={styles.ratingTotal}
                    src={
                        obj.rating === "good"
                            ? "/img/grade-positive.svg"
                            : obj.rating === "ok"
                            ? "/img/grade-neutral.svg"
                            : "/img/grade-negative.svg"
                    }
                />
            );
        } else if (obj.ratingType === "grade") {
            return (
                <>
                    <div className={styles.grade}>
                        <span>{obj.rating + " "}</span>/ 10
                    </div>
                    <div className={styles.gradeBar}>
                        <div style={{ width: 10 * obj.rating + "%" }}></div>
                    </div>
                </>
            );
        }
    }

    return (
        <main>
            <div className={`maxWidth`}>
                <BreadCrumb
                    names={["Forsiden", "Tester", info.topic, info.header, obj.product]}
                    path={[
                        "/",
                        "tester",
                        `?searchBar:&searchBtn:${info.topic.toLowerCase().replace(/ /g, "-")}`,
                        `?page=${info.header.toLowerCase().replace(/ /g, "-")}`,
                    ]}
                    style={{ marginBottom: "30px" }}
                ></BreadCrumb>

                <div className={styles.pageWrap}>
                    <div className={`${styles.bigImgWrap} imgWrap`}>
                        <img
                            src={obj.img.includes("://") ? obj.img : `/img/${obj.img}`}
                            alt={obj.imgAlt}
                        />
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
                    <div className={styles.statWrap}>
                        <h1>{obj.manufacturer}</h1>
                        <h2>{obj.product}</h2>
                        <div className={styles.date}>
                            Testdato: {formatDate(obj.date, "DD.MM.YYYY")}
                        </div>
                        <div>{obj.price && obj.price}</div>
                        <div>{obj.note && obj.note}</div>
                        <h2>Samlet score</h2>
                        <Score></Score>
                        <div>
                            <RatingPoint
                                point="Produsent"
                                score={obj.manufacturer}
                                type="text"
                            ></RatingPoint>
                            {obj.ratingPoints.map((o, i) => (
                                <RatingPoint point={o[0]} score={o[1]} type={o[2]} key={i} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
