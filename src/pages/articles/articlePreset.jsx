import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import nyheter from "../../data/nyheter.json";
import {
    Chevron,
    Contacts,
    Nyheter,
    formatContent,
    formatDate,
    Error,
    LinkBtnOld,
} from "../../component";
import style from "../../css/tester/readMore.module.css";
import { BreadCrumb } from "../../component";
import kontakter from "../../data/kontakter.json";

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
                    <div className="maxWidthMedium">
                        <BreadCrumb
                            names={["Forsiden", "Siste nytt", page.header]}
                            path={[
                                "/",
                                "/siste-nytt",
                                `/siste-nytt/artikkel?artikkel=${page.header
                                    .toLowerCase()
                                    .replace(/ /g, "-")}`,
                            ]}
                        ></BreadCrumb>
                    </div>
                    <div className="maxWidthSmall" style={{ padding: 0 }}>
                        <div className={style.pageTopic}>{page.topic}</div>
                    </div>
                    <div className="maxWidthSmall" style={{ padding: "20px 0" }}>
                        <div className={style.pageWrap}>
                            <div className={style.pageLeft}>
                                <div>
                                    <h1 style={{ padding: " 0 0 20px 0" }}> {page.header}</h1>
                                    <div className={style.date} style={{ padding: " 0 0 20px 0" }}>
                                        {formatDate(page.article.date, "DD.longM.YYYY")}
                                    </div>
                                    <article>
                                        {page.article.content ? (
                                            formatContent(page.article.content)
                                        ) : (
                                            <Error back={"/siste-nytt"}></Error>
                                        )}
                                    </article>
                                </div>
                            </div>
                            <div className={style.pageRight}>
                                {/* side */}
                                <div>
                                    {page.article.writers.map((w) => {
                                        let writer = kontakter
                                            .map((kontakt) => {
                                                if (
                                                    kontakt.firstName.toLowerCase() ==
                                                    w.toLowerCase()
                                                ) {
                                                    return kontakt;
                                                }
                                            })
                                            .filter((item) => item !== undefined)[0];

                                        return (
                                            <div
                                                style={{
                                                    marginBottom: "30px",
                                                    borderBottom: "1px solid var(--FR-color-lb) ",
                                                }}
                                            >
                                                <div className={style.contactHeader}>
                                                    <div className={`imgWrap ${style.contactImg}`}>
                                                        <img
                                                            src={
                                                                writer.img.includes("://")
                                                                    ? writer.img
                                                                    : `/img/${writer.img}`
                                                            }
                                                            alt={writer.alt}
                                                        />
                                                    </div>
                                                    <div>
                                                        <h4>{`${writer.firstName} ${writer.secondName} ${writer.lastName}`}</h4>
                                                        <div>{writer.position}</div>
                                                    </div>
                                                </div>
                                                <div>
                                                    {writer.tlf
                                                        ? writer.tlf.includes("(")
                                                            ? writer.tlf
                                                            : "(+47) " + writer.tlf
                                                        : ""}
                                                </div>
                                                <div style={{ marginTop: "15px" }}>
                                                    {writer.email}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className={style.articleTldr}>
                                    <article>{formatContent(page.article.tldr.content)}</article>
                                </div>
                                <div>
                                    {page.article.tldr.btns
                                        ? page.article.tldr.btns.map((btn, index) => {
                                              return (
                                                  <LinkBtnOld
                                                      content={formatContent(btn.content)}
                                                      href={btn.href}
                                                      key={index}
                                                      color={"var(--FR-color-lb)"}
                                                      hover={"#88e2e6"}
                                                      style={{ width: "100%", marginTop: "20px" }}
                                                  ></LinkBtnOld>
                                              );
                                          })
                                        : null}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="maxWidthSmall">
                        <Nyheter header="Relaterte saker" />
                    </div>
                </main>
            )) || <Error type="404"></Error>}
        </>
    );
}
