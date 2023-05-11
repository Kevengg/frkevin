import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import nyheter from "../../data/nyheter.json";
import { Chevron, Contacts, Nyheter, formatContent, formatDate, Error } from "../../component";
import style from "../../css/tester/readMore.module.css";

export default function Article(params) {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const [page, setPage] = useState();

    useEffect(() => {
        var article = queryParams.get("artikkel");
        nyheter.forEach((news) => {
            if (
                typeof article == "string" &&
                news.header.toLowerCase().replace(/ /g, "-") ==
                    article.toLowerCase().replace(/ /g, "-")
            ) {
                article = news;
            }
        });
        setPage(article);
    }, [location.search]);

    return (
        <>
            {(typeof page == "object" && (
                <main>
                    <div className="maxWidthSmall">
                        <nav className="path">
                            <Link to="">Tester</Link>
                            <Chevron size="xs" />
                            <Link
                                to={`?searchBar:&searchBtn:${page.topic
                                    .toLowerCase()
                                    .replace(/ /g, "-")}`}
                            >
                                {page.topic}
                            </Link>
                            <Chevron size="xs" />
                            <span>{page.header}</span>
                        </nav>
                        <h1 className={style.pageHeader}>{page.header}</h1>
                        <div className={style.date}>
                            {formatDate(page.article.date, "DD.longM.YYYY")}
                        </div>
                        <div className={style.page}>
                            <div className={style.pageLeft}>
                                {page.article.content ? (
                                    formatContent(page.article.content)
                                ) : (
                                    <Error back={"/siste-nytt"}></Error>
                                )}
                            </div>
                            <div className={style.pageRight}>
                                <Contacts
                                    names={page.article.writers}
                                    header=""
                                    className={style.contacts}
                                />
                                <div className={style.tldr}>
                                    <h2>{page.article.tldr.header}</h2>
                                    <div className={style.tldrSpacer}></div>
                                    <article>{formatContent(page.article.tldr.content)}</article>
                                </div>
                                <div>
                                    {page.article.tldr.btns
                                        ? page.article.tldr.btns.map((btn, index) => {
                                              return (
                                                  <a
                                                      className={style.newsLetter}
                                                      href={btn.href}
                                                      style={{ textDecoration: "none" }}
                                                      key={index}
                                                  >
                                                      {formatContent(btn.content)}
                                                  </a>
                                              );
                                          })
                                        : null}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.related}>
                        <h2 className="maxWidthSmall">Relaterte saker</h2>
                    </div>
                    <div className="maxWidthSmall">
                        <Nyheter />
                    </div>
                </main>
            )) || <Error type="404"></Error>}
        </>
    );
}
