import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "../../css/search.module.css";
import tester from "../../data/tester.json";
import kontakter from "../../data/kontakter.json";
import nyheter from "../../data/nyheter.json";
import horinger from "../../data/horinger.json";
import rapporter from "../../data/rapporter.json";
import { formatContent, formatDate } from "../../component";

export default function SearchPage(params) {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const [searchResult, setSearchResult] = useState([]);

    let value = "12";
    let artikles = 112;

    useEffect(() => {
        var searchKey = queryParams.get("search");
        let newData = [];

        // tester
        tester.forEach((test) => {
            if (
                test.header.includes(searchKey) ||
                test.topic.includes(searchKey) ||
                test.content.includes(searchKey)
            ) {
                newData.push(test);
            } else {
                test.objects.forEach((object) => {
                    if (
                        object.manufacturer.includes(searchKey) ||
                        object.product.includes(searchKey)
                    ) {
                        newData.push(test);
                    }
                });
            }
        });

        // nyheter
        nyheter.forEach((nytt) => {
            if (nytt.header.includes(searchKey) || nytt.topic.includes(searchKey)) {
                newData.push(nytt);
            }
        });

        console.log("newData", newData);
        setSearchResult(newData);
    }, [location.search]);

    return (
        <main>
            <div className="maxWidthMedium">
                <div className={style.pageSplitt}>
                    <div>
                        <div className={style.topSection}>
                            <div className={style.infoTop}>
                                <b>{artikles}</b> artikkler funnet:
                            </div>
                            <div className={style.filterTop}>
                                <form>
                                    <span>Sorter etter:</span>
                                    <span>
                                        <input
                                            type="radio"
                                            name="sortRelevance"
                                            id="sortRelevance"
                                        />
                                        <label htmlFor="sortRelevance">Relevans</label>
                                    </span>
                                    <span>
                                        <input type="radio" name="sortDate" id="sortDate" />
                                        <label htmlFor="sortDate">Dato</label>
                                    </span>
                                </form>
                            </div>
                        </div>
                        <div className={style.resultList}>
                            {searchResult.map((result) => {
                                if (result.objects) {
                                    return (
                                        <a href="" className={style.result}>
                                            <h2>{result.header}</h2>
                                            {/*header from page or artikle*/}
                                            <article>
                                                {formatContent(
                                                    result.content
                                                        .substring(0, 294)
                                                        .includes("<br />")
                                                        ? result.content
                                                              .substring(0, 294)
                                                              .split("<br />")[0]
                                                        : result.content.substring(0, 294)
                                                )}
                                                ...
                                            </article>
                                            {/*first bitt of content*/}
                                            <div> {formatDate(result.date, "DD.longM.YYYY")} </div>
                                            {/*date*/}
                                        </a>
                                    );
                                } else {
                                    return (
                                        <a href="" className={style.result}>
                                            <h2>{result.header}</h2>
                                            {/*header from page or artikle*/}
                                            <article>{result.topic}</article>
                                            {/*first bitt of content*/}
                                            {/* <div> {formatDate(result.date, "DD.longM.YYYY")} </div> */}
                                            {/*date*/}
                                        </a>
                                    );
                                }
                            })}
                        </div>

                        <div className={style.pageNr}>
                            <span>Første</span>
                            <span>Forrige</span>
                            <span>1</span>
                            <span>1</span>
                            <span>1</span>
                            <span>1</span>
                            <span>Neste</span>
                            <span>Siste</span>
                        </div>
                    </div>
                    <div>
                        <div className={style.searchFilter}>
                            <h4>Begrens søkeresultatet:</h4>

                            <div className={style.searchFilterFilter}>
                                <input type="checkbox" name="" id="" />
                                <div>
                                    post <section>{`(${value})`}</section>
                                </div>
                            </div>

                            <div className={style.searchFilterFilter}>
                                <input type="checkbox" name="" id="" />
                                <div>
                                    post <section>{`(${value})`}</section>
                                </div>
                            </div>

                            <div className={style.searchFilterFilter}>
                                <input type="checkbox" name="" id="" />
                                <div>
                                    post <section>{`(${value})`}</section>
                                </div>
                            </div>

                            <div className={style.searchFilterFilter}>
                                <input type="checkbox" name="" id="" />
                                <div>
                                    post <section>{`(${value})`}</section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
