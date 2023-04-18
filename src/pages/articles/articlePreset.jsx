import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import nyheter from "../../data/nyheter.json";
import { Chevron, Contacts, Nyheter, formatContent, formatDate } from "../../component";
import style from "../../css/tester/readMore.module.css";

export default function Article(params) {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const [page, setPage] = useState();

    useEffect(() => {
        var article = queryParams.get("article");
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
        console.log("article", article);
    }, [location.search]);

    return (
        <>
            {page && (
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
                        <div className={style.date}>{formatDate(page.date, "DD.longM.YYYY")}</div>
                        <div className={style.page}>
                            <div className={style.pageLeft}>
                                {" "}
                                {formatContent(page.article.content)}{" "}
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
                                    {page.article.tldr.btns.map((btn, index) => {
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
                                    })}
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
            )}
        </>
    );
}
