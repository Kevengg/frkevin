import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "../../css/search.module.css";
import tester from "../../data/tester.json";
import kontakter from "../../data/kontakter.json";
import nyheter from "../../data/nyheter.json";
import horinger from "../../data/horinger.json";
import rapporter from "../../data/rapporter.json";
import { formatContent, formatDate, Chevron } from "../../component";

export default function SearchPage(params) {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const [searchResult, setSearchResult] = useState([]);
    const [searchTester, setSearchTester] = useState([]);
    const [searchNyheter, setSearchNyheter] = useState([]);
    const [searchKontakter, setSearchKontakter] = useState([]);

    const [page, setPage] = useState(1);

    let value = "12";

    useEffect(() => {
        var searchKey = queryParams.get("search");
        let newData = [];
        let newNyheter = [];
        let newTester = [];
        let newKontakter = [];

        // tester
        tester.forEach((test) => {
            if (
                test.header.includes(searchKey) ||
                test.topic.includes(searchKey) ||
                test.content.includes(searchKey)
            ) {
                newData.push(test);
                newTester.push(test);
            } else {
                test.objects.forEach((object) => {
                    if (
                        object.manufacturer.includes(searchKey) ||
                        object.product.includes(searchKey)
                    ) {
                        newData.push(test);
                        newTester.push(test);
                    }
                });
            }
        });

        kontakter.forEach((kontakt) => {
            if (
                kontakt.img.includes(searchKey) &&
                kontakt.firstName.includes(searchKey) &&
                kontakt.secondName.includes(searchKey) &&
                kontakt.lastName.includes(searchKey) &&
                kontakt.position.includes(searchKey) &&
                kontakt.tlf.includes(searchKey) &&
                kontakt.email.includes(searchKey)
            ) {
                newData.push(kontakt);
                newKontakter.push(kontakt);
            }
        });

        // nyheter
        nyheter.forEach((nytt) => {
            if (nytt.header.includes(searchKey) || nytt.topic.includes(searchKey)) {
                newData.push(nytt);
                newNyheter.push(nytt);
            }
        });

        function sortData(a, b) {
            if (
                a.article
                    ? a.article.date
                    : a.date
                    ? a.date
                    : 1 > b.article
                    ? b.article.date
                    : b.date
                    ? b.date
                    : 1
            ) {
                return -1;
            } else if (
                a.article
                    ? a.article.date
                    : a.date
                    ? a.date
                    : 1 < b.article
                    ? b.article.date
                    : b.date
                    ? b.date
                    : 1
            ) {
                return 1;
            } else if (
                a.article
                    ? a.article.date
                    : a.date
                    ? a.date
                    : 1 == b.article
                    ? b.article.date
                    : b.date
                    ? b.date
                    : 1
            ) {
                return 0;
            }
        }

        setSearchResult(newData.sort(sortData));
        setSearchNyheter(newNyheter);
        setSearchTester(newTester);
        setSearchKontakter(newKontakter);
    }, [location.search]);

    const pageNr = () => {
        let arr = [];
        for (let index = 0; index < Math.ceil(searchResult.length / 10); index++) {
            arr.push(
                <span
                    style={{ [page == index + 1 ? "backgroundColor" : ""]: "var(--FR-color-lb)" }}
                    className={style.pageNr}
                    onClick={() => {
                        setPage(index + 1);
                        if (page != index + 1) {
                            window.scrollTo({ top: 1 });
                        }
                    }}
                    key={`pageNr${index + 1}`}
                >
                    {index + 1}
                </span>
            );
        }
        return <>{arr}</>;
    };

    return (
        <main>
            <div className="maxWidthMedium">
                <div className={style.pageSplitt}>
                    <div>
                        <div className={style.topSection}>
                            <div className={style.infoTop}>
                                <b>{searchResult.length}</b> artikkler funnet:
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
                        {console.log("searchResult", searchResult)}
                        <div className={style.resultList}>
                            {searchResult.map((result, index) => {
                                if (index + 1 > (page - 1) * 10 && index < page * 10) {
                                    if (result.objects) {
                                        return (
                                            <a
                                                href={`/tester?page=${result.header
                                                    .toLowerCase()
                                                    .replace(/ /g, "-")}`}
                                                className={style.result}
                                                key={`Test${index}`}
                                            >
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
                                                <div>
                                                    {formatDate(result.date, "DD.longM.YYYY")}
                                                </div>
                                                {/*date*/}
                                                <div
                                                    style={{
                                                        marginTop: "-30px",
                                                        marginLeft: "90%",
                                                    }}
                                                >
                                                    Test
                                                </div>
                                            </a>
                                        );
                                    } else if (!!result.article) {
                                        return (
                                            <a
                                                href={`/siste-nytt/artikkel?artikkel=${result.header
                                                    .toLowerCase()
                                                    .replace(/ /g, "-")}`}
                                                className={style.result}
                                                key={`nyhet${index}`}
                                            >
                                                <h2>{result.header}</h2>
                                                {/*header from page or artikle*/}
                                                <article>
                                                    {formatContent(
                                                        result.article.content
                                                            .substring(0, 294)
                                                            .includes("<br />")
                                                            ? result.article.content
                                                                  .substring(0, 294)
                                                                  .split("<br />")[0]
                                                                  .includes("<h2>")
                                                                ? result.article.content
                                                                      .substring(0, 294)
                                                                      .split("<br />")[0]
                                                                      .match(
                                                                          /(<h2>)(.*?)(<\/h2>)/
                                                                      )[2]
                                                                : result.article.content
                                                                      .substring(0, 294)
                                                                      .split("<br />")[0]
                                                            : result.article.content
                                                                  .substring(0, 294)
                                                                  .includes("<h2>")
                                                            ? result.article.content
                                                                  .substring(0, 294)
                                                                  .match(/(<h2>)(.*?)(<\/h2>)/)[2]
                                                            : result.article.content.substring(
                                                                  0,
                                                                  294
                                                              )
                                                    )}
                                                    ...
                                                </article>
                                                {/*first bitt of content*/}
                                                <div>
                                                    {formatDate(
                                                        result.article.date,
                                                        "DD.longM.YYYY"
                                                    )}
                                                </div>
                                                {/*date*/}
                                                <div
                                                    style={{
                                                        marginTop: "-30px",
                                                        marginLeft: "90%",
                                                    }}
                                                >
                                                    Nyhet
                                                </div>
                                            </a>
                                        );
                                    } else if (result.firstName) {
                                        return (
                                            <a
                                                href={`/kontakt-oss/presse/kontakter?preson=${result.firstName
                                                    .toLowerCase()
                                                    .replace(/ /g, "-")}-${result.secondName
                                                    .toLowerCase()
                                                    .replace(/ /g, "-")}-${result.lastName
                                                    .toLowerCase()
                                                    .replace(/ /g, "-")}`}
                                                className={style.result + " " + style.personResult}
                                                key={`kontakt${index}`}
                                            >
                                                <div className={`imgWrap ${style.personResultImg}`}>
                                                    <img
                                                        src={
                                                            result.img.includes("://")
                                                                ? result.img
                                                                : `/img/${result.img}`
                                                        }
                                                        alt={result.alt}
                                                    />
                                                </div>
                                                <h2>
                                                    {result.firstName} {result.secondName}{" "}
                                                    {result.lastName}
                                                </h2>
                                                <div>{result.position}</div>
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
                                }
                            })}
                        </div>
                        <div
                            style={{
                                maxWidth: "700px",
                                marginLeft: "0px",
                                marginTop: "30px",
                                display: searchResult.length > 10 ? "block" : "none",
                            }}
                        >
                            <div className={style.pageNr}>
                                <span
                                    className={style.pageBtn}
                                    onClick={() => {
                                        if (page != 1) {
                                            setPage(1);
                                            window.scrollTo({ top: 1 });
                                        }
                                    }}
                                >
                                    <Chevron
                                        left
                                        size="L"
                                        style={{ marginRight: "-5px" }}
                                    ></Chevron>
                                    <Chevron left size="L"></Chevron>
                                </span>
                                <span
                                    className={style.pageBtn}
                                    onClick={() => {
                                        if (page != 1) {
                                            setPage(page - 1);
                                            window.scrollTo({ top: 1 });
                                        }
                                    }}
                                >
                                    <Chevron left size="L"></Chevron>
                                </span>

                                {pageNr()}

                                <span
                                    className={style.pageBtn}
                                    onClick={() => {
                                        if (page + 1 <= Math.ceil(searchResult.length / 10)) {
                                            setPage(page + 1);
                                            window.scrollTo({ top: 1 });
                                        }
                                    }}
                                >
                                    <Chevron size="L"></Chevron>
                                </span>
                                <span
                                    className={style.pageBtn}
                                    onClick={() => {
                                        if (page + 1 <= Math.ceil(searchResult.length / 10)) {
                                            setPage(Math.ceil(searchResult.length / 10));
                                            window.scrollTo({ top: 1 });
                                        }
                                    }}
                                >
                                    <Chevron size="L"></Chevron>
                                    <Chevron size="L" style={{ marginLeft: "-5px" }}></Chevron>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={style.searchFilter}>
                            <h4>Begrens søkeresultatet:</h4>

                            <div className={style.searchFilterFilter}>
                                <input type="checkbox" name="" id="" />
                                <div>
                                    Tester <section>{`(${searchTester.length})`}</section>
                                </div>
                            </div>

                            <div className={style.searchFilterFilter}>
                                <input type="checkbox" name="" id="" />
                                <div>
                                    Nyheter <section>{`(${searchNyheter.length})`}</section>
                                </div>
                            </div>

                            <div className={style.searchFilterFilter}>
                                <input type="checkbox" name="" id="" />
                                <div>
                                    Sider <section>{`(${value})`}</section>
                                </div>
                            </div>

                            <div className={style.searchFilterFilter}>
                                <input type="checkbox" name="" id="" />
                                <div>
                                    Personer <section>{`(${searchKontakter.length})`}</section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
