import { LinkBtnOld, ToppSectionCustom, sortAlfa, Chevron } from "../../component";
import style from "../../css/sisteNytt.module.css";
import nyheter from "../../data/nyheter.json";
import tester from "../../data/tester.json";
import { useState, useEffect } from "react";

export default function SisteNytt(params) {
    const [newsList, updateNewsList] = useState([...nyheter]);
    const [newsFilter, updateNewsFilter] = useState(null);
    const [page, setPage] = useState(1);

    function pageNrs() {
        let arr = [];
        for (
            let index = 0;
            index < Math.ceil((newsList.sort(sortData).length - 17) / 18);
            index++
        ) {
            arr.push(
                <span
                    style={{ [page == index + 2 ? "backgroundColor" : ""]: "var(--FR-color-lb)" }}
                    className={style.pageNr}
                    onClick={() => {
                        setPage(index + 2);
                        if (page != index + 2) {
                            window.scrollTo({ top: 1 });
                        }
                    }}
                    key={`pageNr${index + 2}`}
                >
                    {index + 2}
                </span>
            );
        }
        return <>{arr}</>;
    }

    useEffect(() => {
        window.scrollTo({ top: 10 });
    }, [newsList.sort(sortData)]);

    function sortData(a, b) {
        if (a.test) {
            a = [
                tester
                    .map((test) => {
                        if (test.header == a.test) {
                            return test;
                        }
                    })
                    .filter((item) => item !== undefined)[0].date,
                tester
                    .map((test) => {
                        if (test.header == a.test) {
                            return test;
                        }
                    })
                    .filter((item) => item !== undefined)[0].header,
            ];
        } else {
            a = [a.article.date, a.header];
        }

        if (b.test) {
            b = [
                tester
                    .map((test) => {
                        if (test.header == b.test) {
                            return test;
                        }
                    })
                    .filter((item) => item !== undefined)[0].date,
                tester
                    .map((test) => {
                        if (test.header == b.test) {
                            return test;
                        }
                    })
                    .filter((item) => item !== undefined)[0].header,
            ];
        } else {
            b = [b.article.date, b.header];
        }
        if (a[0] > b[0]) {
            return -1;
        } else if (a[0] < b[0]) {
            return 1;
        } else if (a[0] == b[0]) {
            return sortAlfa(a[1].replace(/ /g, ""), b[1].replace(/ /g, ""));
        }
    }
    useEffect(() => {
        if (newsFilter == null) {
            updateNewsList(nyheter.sort(sortData));
        } else
            updateNewsList(
                nyheter
                    .map((n) => {
                        if (n.topic == newsFilter) {
                            return n;
                        }
                    })
                    .filter((i) => {
                        return !!i && i;
                    })
            );
    }, [newsFilter]);

    function Nytt({ news }) {
        if (news.test) {
            news = tester
                .map((test) => {
                    if (test.header == news.test) {
                        return test;
                    }
                })
                .filter((item) => item !== undefined)[0];
        }
        return (
            <a
                className={style.news}
                href={
                    news.readMore
                        ? `/tester?page=${news.header
                              .toLowerCase()
                              .replace(/ /g, "-")}&readmore=true`
                        : `/siste-nytt/artikkel?artikkel=${
                              news.header && news.header.toLowerCase().replace(/ /g, "-")
                          }`
                }
            >
                <div className={`imgWrap ${style.newsImg}`}>
                    <img
                        src={news.img && (news.img.includes(":\\") ? news.img : `/img/${news.img}`)}
                        alt={nyheter[nyheter.length - 1].alt}
                    />
                </div>
                <div className={style.newsContent}>
                    <div className={style.newsTopic}>{news.topic}</div>
                    <h3 className={style.newsHeader}>
                        {news.readMore ? news.readMore.header : news.header.substring(0, 65)}
                        {news.readMore
                            ? news.readMore.header.length > 65 && "..."
                            : news.header.length > 65 && "..."}
                    </h3>
                </div>
            </a>
        );
    }

    let allTopics = nyheter.map((i) => {
        return i.topic;
    });
    let topics = [];
    allTopics.forEach((i) => {
        !topics.includes(i) && topics.push(i);
    });
    // hello there test

    return (
        <main>
            <ToppSectionCustom path={["Siste nytt"]} img="">
                <h1>Siste Nytt</h1>
                <p>
                    Her finner du de siste aktuelle sakene fra oss. Husk at du også kan melde deg på
                    vårt nyhetsvarsel.
                </p>
                <br />
                <LinkBtnOld content={"Abonner på vårt nyhetsvarsel"} chevron={true}></LinkBtnOld>
            </ToppSectionCustom>
            <div className="maxWidthSmall">
                <div className={style.topicSelect}>
                    <LinkBtnOld
                        content={"Alle nyheter"}
                        chevron={false}
                        onClick={() => {
                            updateNewsFilter(null);
                            newsFilter != null && setPage(1);
                        }}
                        color={(newsFilter == null && "var(--FR-color-db)") || "var(--FR-color-g)"}
                        hover={(newsFilter == null && "var(--FR-color-db)") || "var(--FR-color-g)"}
                        style={{ color: (newsFilter == null && "white") || "initial" }}
                    ></LinkBtnOld>
                    {topics.sort(sortAlfa).map((t) => {
                        return (
                            <LinkBtnOld
                                content={t}
                                key={`topic:${t}`}
                                chevron={false}
                                onClick={() => {
                                    updateNewsFilter(t);
                                    newsFilter != t && setPage(1);
                                }}
                                color={
                                    (newsFilter == t && "var(--FR-color-db)") || "var(--FR-color-g)"
                                }
                                hover={
                                    (newsFilter == t && "var(--FR-color-db)") || "var(--FR-color-g)"
                                }
                                style={{ color: (newsFilter == t && "white") || "initial" }}
                            ></LinkBtnOld>
                        );
                    })}
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "10px",
                        marginTop: "20px",
                    }}
                >
                    <h2 style={{ marginRight: "10px" }}>
                        {newsFilter == null ? "Alle nyheter" : newsFilter}
                    </h2>
                    <span>({newsList.sort(sortData).length})</span>
                </div>

                <div className={style.topNews} style={{ display: page != 1 ? "none" : "grid" }}>
                    {newsList[0] && <Nytt news={newsList[0]}></Nytt>}
                    {newsList[1] && <Nytt news={newsList[1]}></Nytt>}
                </div>
                <div className={style.newsList}>
                    {/* {newsList
                        .map((n, i) => {
                            if (i > 1) {
                                return n && <Nytt news={n} key={i}></Nytt>;
                            }
                        })
                        .filter((i) => {
                            return !!i && i;
                        })} */}

                    {newsList.sort(sortData).map((i, index) => {
                        if (page == 1) {
                            if (index + 1 < 18 && index + 1 > 2) {
                                return <Nytt news={i} key={`nytt${index}`}></Nytt>;
                            }
                        } else {
                            if (index + 1 > (page - 1) * 18 - 1 && page * 18 - 1) {
                                return <Nytt news={i} key={`nytt${index}`}></Nytt>;
                            }
                        }
                    })}
                </div>
                <div className={style.pageNrWrap}>
                    {page > 2 && (
                        <span
                            className={style.pageBtn}
                            onClick={() => {
                                if (page != 1) {
                                    setPage(1);
                                    window.scrollTo({ top: 1 });
                                }
                            }}
                        >
                            <Chevron left size="L" style={{ marginRight: "-5px" }}></Chevron>
                            <Chevron left size="L"></Chevron>
                        </span>
                    )}
                    {page != 1 && (
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
                    )}

                    {Math.ceil((newsList.sort(sortData).length - 17) / 18 + 1) != 1 && (
                        <span
                            style={{ [page == 1 ? "backgroundColor" : ""]: "var(--FR-color-lb)" }}
                            className={style.pageNr}
                            onClick={() => {
                                setPage(1);
                                window.scrollTo({ top: 1 });
                            }}
                        >
                            1
                        </span>
                    )}
                    {pageNrs()}

                    {page + 1 <= Math.ceil((newsList.sort(sortData).length - 17) / 18 + 1) && (
                        <span
                            className={style.pageBtn}
                            onClick={() => {
                                if (
                                    page + 1 <=
                                    Math.ceil((newsList.sort(sortData).length - 17) / 18 + 1)
                                ) {
                                    setPage(page + 1);
                                    window.scrollTo({ top: 1 });
                                }
                            }}
                        >
                            <Chevron size="L"></Chevron>
                        </span>
                    )}

                    {page < Math.ceil((newsList.sort(sortData).length - 17) / 18 + 1) - 2 && (
                        <span
                            className={style.pageBtn}
                            onClick={() => {
                                if (
                                    page + 1 <=
                                    Math.ceil((newsList.sort(sortData).length - 17) / 18 + 1)
                                ) {
                                    setPage(
                                        Math.ceil((newsList.sort(sortData).length - 17) / 18 + 1)
                                    );
                                    window.scrollTo({ top: 1 });
                                }
                            }}
                        >
                            <Chevron size="L"></Chevron>
                            <Chevron size="L" style={{ marginLeft: "-5px" }}></Chevron>
                        </span>
                    )}
                </div>
            </div>
        </main>
    );
}
