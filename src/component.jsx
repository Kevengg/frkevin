import React from "react";
import { Link } from "react-router-dom";
import sampleImg from "./img/manipulerende_design.jpg";
import forbrukerrtilsynet from "./img/Forbrukerrtilsynet.png";
import insertCoin from "./img/insert_coin.png";
import nyheter from "./data/nyheter.json";
import tester from "./data/tester.json";
import kontakter from "./data/kontakter.json";
import horinger from "./data/horinger.json";
import rapporter from "./data/rapporter.json";

export function sortAlfa(a, b) {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else if (a == b) {
        return 0;
    }
}

export function LinkBtn(props) {
    let name = props.className ? `linkBtn ${props.className}` : "linkBtn";

    if (props.href) {
        return (
            <a
                href={props.href}
                className={name}
                style={{ ...props.style, ...(props.color ? { backgroundColor: props.color } : {}) }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = props.hover;
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = props.color;
                }}
            >
                {props.children}
            </a>
        );
    } else if (props.to) {
        return (
            <Link
                to={props.to}
                className={name}
                style={{ ...props.style, ...(props.color ? { backgroundColor: props.color } : {}) }}
                onClick={props.onClick}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = props.hover;
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = props.color;
                }}
            >
                {props.children}
            </Link>
        );
    } else {
        return (
            <div
                className={name}
                style={{ ...props.style, ...(props.color ? { backgroundColor: props.color } : {}) }}
                onClick={props.onClick}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = props.hover;
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = props.color;
                }}
            >
                {props.children}
            </div>
        );
    }
}

export function LinkBtnOld({
    external,
    href,
    download,
    className,
    content,
    color,
    hover,
    onClick,
    to,
    chevron,
    style,
}) {
    let propHref;
    if (external) {
        propHref = href;
    } else if (download) {
        propHref = download;
    } else if (href) {
        propHref = href;
    }
    let name = className ? `linkBtn ${className}` : "linkBtn";

    if (!content) {
        return;
    }
    let propChevron = chevron ? <i className="fa-solid fa-chevron-right"></i> : "";

    if (propHref) {
        return (
            <a
                href={propHref}
                className={name}
                style={{ ...style, ...(color ? { backgroundColor: color } : {}) }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = hover;
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = color;
                }}
            >
                {content}
                {download ? (
                    <i className="fa-solid fa-download"></i>
                ) : external ? (
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                ) : (
                    propChevron
                )}
            </a>
        );
    } else if (to) {
        return (
            <Link
                to={to}
                className={name}
                style={{ ...style, ...(color ? { backgroundColor: color } : {}) }}
                onClick={onClick}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = hover;
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = color;
                }}
            >
                {content}
                {propChevron}
            </Link>
        );
    } else {
        return (
            <div
                className={name}
                style={{ ...style, ...(color ? { backgroundColor: color } : {}) }}
                onClick={onClick}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = hover;
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = color;
                }}
            >
                {content}
                {propChevron}
            </div>
        );
    }

    // let href;
    // if (props.external) {
    //     href = props.href;
    // } else if (props.download) {
    //     href = props.download;
    // } else if (props.href) {
    //     href = props.href;
    // }
    // let name = props.className ? `linkBtn ${props.className}` : "linkBtn";

    // if (!props.content) {
    //     return;
    // }
    // let chevron = props.chevron ? <i className="fa-solid fa-chevron-right"></i> : "";

    // if (href) {
    //     return (
    //         <a
    //             href={href}
    //             className={name}
    //             style={props.color ? { backgroundColor: props.color } : {}}
    //             onMouseEnter={(e) => {
    //                 e.currentTarget.style.backgroundColor = props.hover;
    //             }}
    //             onMouseLeave={(e) => {
    //                 e.currentTarget.style.backgroundColor = props.color;
    //             }}
    //         >
    //             {props.content}
    //             {props.download ? (
    //                 <i className="fa-solid fa-download"></i>
    //             ) : props.external ? (
    //                 <i className="fa-solid fa-arrow-right-from-bracket"></i>
    //             ) : (
    //                 chevron
    //             )}
    //         </a>
    //     );
    // } else if (props.to) {
    //     return (
    //         <Link
    //             to={props.to}
    //             className={name}
    //             style={props.color ? { backgroundColor: props.color } : {}}
    //             onClick={props.onClick}
    //             onMouseEnter={(e) => {
    //                 e.currentTarget.style.backgroundColor = props.hover;
    //             }}
    //             onMouseLeave={(e) => {
    //                 e.currentTarget.style.backgroundColor = props.color;
    //             }}
    //         >
    //             {props.content}
    //             {chevron}
    //         </Link>
    //     );
    // } else {
    //     return (
    //         <div
    //             className={name}
    //             style={props.color ? { backgroundColor: props.color } : {}}
    //             onClick={props.onClick}
    //             onMouseEnter={(e) => {
    //                 e.currentTarget.style.backgroundColor = props.hover;
    //             }}
    //             onMouseLeave={(e) => {
    //                 e.currentTarget.style.backgroundColor = props.color;
    //             }}
    //         >
    //             {props.content}
    //             {chevron}
    //         </div>
    //     );
    // }
}

export function Slider(props) {
    const gap = ((props.max - props.min) / 100) * (props.gap ? props.gap : 5);
    return (
        <div className={`slider ${props.class}`}>
            <div className="sliderBack"></div>
            <input
                className="sliderMax"
                type="range"
                max={props.max}
                value={props.maxValue}
                min={props.min}
                onChange={(e) => {
                    if (parseInt(e.target.value) - props.minValue > gap) {
                        props.setMaxValue(parseInt(e.target.value));
                    } else props.setMaxValue(props.minValue + (gap + 1));
                }}
            />
            <input
                className="sliderMin"
                type="range"
                value={props.minValue}
                max={props.max}
                min={props.min}
                onChange={(e) => {
                    if (props.maxValue - parseInt(e.target.value) > gap) {
                        props.setMinValue(parseInt(e.target.value));
                    } else props.setMinValue(props.maxValue - (gap + 1));
                }}
            />
            {/* <div className="sliderChevronWrap">
                <Chevron
                    style={{ marginLeft: "15px" }}
                    onClick={(e) => {
                        e.target.closest(".slider").querySelector(".sliderMin");
                    }}
                ></Chevron>
            </div> */}
        </div>
    );
}

export function GrayBoxCustom(props) {
    if (props.flip) {
        return (
            <div className="grayBox">
                <div className="grayBoxContent">{props.children}</div>
                <div className="grayBoxImgWrap imgWrap">
                    <img src={props.img ? props.img : forbrukerrtilsynet} alt={props.imgAlt} />
                </div>
            </div>
        );
    } else {
        return (
            <div className="grayBox">
                <div
                    className="grayBoxImgWrap imgWrap"
                    // style={{ height: this.parentElement.querySelector(".grayBoxContent").height }}
                >
                    <img src={props.img ? props.img : forbrukerrtilsynet} alt={props.imgAlt} />
                </div>
                <div className="grayBoxContent">{props.children}</div>
            </div>
        );
    }
}

export function GrayBox(props) {
    var content = props.content;

    if (props.flip) {
        return (
            <div className="grayBox">
                <div className="grayBoxContent">
                    <h4>{props.topic}</h4>
                    <h2>{props.header}</h2>
                    <div className="smalLineSpacer" aria-hidden></div>
                    <p>{formatContent(content)}</p>

                    {props.linkBtn.length >= 3 && (
                        <div>
                            {props.linkBtn.map((btn) => {
                                return (
                                    <LinkBtnOld
                                        content={btn.content}
                                        chevron={btn.chevron}
                                        href={btn.href}
                                        external={btn.external}
                                        download={btn.download}
                                    />
                                );
                            })}
                        </div>
                    )}
                    {props.linkBtn.length <= 3 && (
                        <span>
                            {props.linkBtn.map((btn) => {
                                return (
                                    <LinkBtnOld
                                        content={btn.content}
                                        chevron={btn.chevron}
                                        href={btn.href}
                                        external={btn.external}
                                        download={btn.download}
                                    />
                                );
                            })}
                        </span>
                    )}
                </div>
                <div className="grayBoxImgWrap imgWrap">
                    <img src={props.img ? props.img : forbrukerrtilsynet} alt={props.imgAlt} />
                </div>
            </div>
        );
    } else {
        return (
            <div className="grayBox">
                <div
                    className="grayBoxImgWrap imgWrap"
                    // style={{ height: this.parentElement.querySelector(".grayBoxContent").height }}
                >
                    <img src={props.img ? props.img : forbrukerrtilsynet} alt={props.imgAlt} />
                </div>
                <div className="grayBoxContent">
                    <h4>{props.topic}</h4>
                    <h2>{props.header}</h2>
                    <div className="smalLineSpacer" aria-hidden></div>
                    <p>{formatContent(content)}</p>
                    {props.linkBtn.length >= 3 && (
                        <div>
                            {props.linkBtn.map((btn) => {
                                return (
                                    <LinkBtnOld
                                        content={btn.content}
                                        chevron={btn.chevron}
                                        href={btn.href}
                                        external={btn.external}
                                        download={btn.download}
                                    />
                                );
                            })}
                        </div>
                    )}
                    {props.linkBtn.length <= 3 && (
                        <span>
                            {props.linkBtn.map((btn) => {
                                return (
                                    <LinkBtnOld
                                        content={btn.content}
                                        chevron={btn.chevron}
                                        href={btn.href}
                                        external={btn.external}
                                        download={btn.download}
                                    />
                                );
                            })}
                        </span>
                    )}
                </div>
            </div>
        );
    }
}

function Nytt(props) {
    var img = "/img/" + props.img;

    return (
        <a
            className="nytt"
            href={
                (props.href && props.href) ||
                (props.header &&
                    `/siste-nytt/artikkel?artikkel=${props.header
                        .toLowerCase()
                        .replace(/ /g, "-")}`)
            }
        >
            <div className="imgWrap">
                <img src={img ? img : sampleImg} alt={props.imgAlt} />
            </div>
            <div className="sisteNyttContent">
                <div className="topic">{props.topic}</div>
                <h3>{props.header}</h3>
            </div>
        </a>
    );
}

export function Nyheter(props, { filter }) {
    // optimized and explained by chatGPT

    function sortNews(a, b) {
        if (a.test) {
            a = tester
                .map((test) => {
                    if (test.header == a.test) {
                        return test;
                    }
                })
                .filter((item) => item !== undefined)[0].date;
        } else {
            a = a.article.date;
        }

        if (b.test) {
            b = tester
                .map((test) => {
                    if (test.header == b.test) {
                        return test;
                    }
                })
                .filter((item) => item !== undefined)[0].date;
        } else {
            b = b.article.date;
        }

        if (a < b) {
            return 1;
        }
        if (a > b) {
            return -1;
        } else {
            return 0;
        }
    }
    let nyheterList;
    if (props.sort) {
        nyheterList = nyheter.filter((item) =>
            !item.test
                ? item.topic.toLowerCase() === props.sort.toLowerCase()
                : tester
                      .map((test) => {
                          if (test.header == item.test) {
                              return test;
                          }
                      })
                      .filter((item) => item !== undefined)[0]
                      .topic.replace(/Hus og hjem/, "Bolig")
                      .replace(/Mat og drikke/, "Mat")
                      .toLowerCase() === props.sort.toLowerCase()
        );
        nyheterList = nyheterList.sort(sortNews).slice(0, 3);
    } else {
        console.log("nyheter.sort(sortNews)", nyheter.sort(sortNews));
        nyheterList = nyheter.sort(sortNews).slice(0, 3);
    }

    function testForNyhet() {
        if (nyheterList[0]) {
            return nyheterList.map((nyhet, index) => {
                if (nyhet.test) {
                    let test = tester
                        .map((test) => {
                            if (test.header == nyhet.test) {
                                return test;
                            }
                        })
                        .filter((item) => item !== undefined)[0];
                    console.log("test", test);
                    return (
                        <Nytt
                            key={index}
                            img={test.img ? test.img : sampleImg}
                            imgAlt={test.imgAlt ? test.imgAlt : ""}
                            topic={test.topic
                                .replace(/Hus og hjem/, "Bolig")
                                .replace(/Mat og drikke/, "Mat")}
                            header={test.readMore.header}
                            href={`/tester?page=${test.header.replace(/ /g, "-").toLowerCase()}`}
                        />
                    );
                } else {
                    return (
                        <Nytt
                            key={index}
                            img={nyhet.img ? nyhet.img : sampleImg}
                            imgAlt={nyhet.imgAlt ? nyhet.imgAlt : ""}
                            topic={nyhet.topic}
                            header={nyhet.header}
                        />
                    );
                }
            });
        } else {
            return (
                <div>
                    <h2 style={{ color: "red" }}> ingen tester/nyheter, noe gikk galt</h2>
                </div>
            );
        }
    }

    return (
        <>
            {props.header && (
                <div className="sisteNyttHeaderWrapper">
                    <h2 style={{ marginBottom: "20px" }}>{props.header}</h2>
                    <a href="/siste-nytt">
                        les mer
                        <i
                            style={{ verticalAlign: "baseline" }}
                            className="fa-solid fa-xs fa-chevron-right"
                        ></i>
                    </a>
                </div>
            )}
            <div className="sisteNytt">{testForNyhet()}</div>
        </>
    );
}

export function ContactPreset(props) {
    if (props.tlf) {
        if (props.tlfAlt) {
            var tlf = props.tlfAlt + " " + props.tlf;
        } else {
            var tlf = "(+47) " + props.tlf;
        }
    } else {
        var tlf;
    }
    var img = props.img.includes("://") ? props.img : "/img/" + props.img;

    function presse() {
        if (props.presseBilder) {
            return <a href={"./" + props.pictures}> Pressebilder</a>;
        }
    }

    return (
        <div className={`pressekontakt ${props.className}`}>
            <div className="pressekontaktImg">
                <img src={img} alt={"bilde av " + props.name} />
            </div>

            <div className="pressekontaktContent">
                <h3 className="navn"> {props.name} </h3>
                <p className="position">{props.position}</p>
                <p className="tlf" aria-label={"tlf.: " + tlf}>
                    {tlf}
                </p>
                <p className="email">{props.email}</p>
                {presse()}
            </div>
        </div>
    );
}

export function Contacts(props) {
    if (!props.names) {
        return (
            <div className={`pressekontakt ${props.className}`} style={{ color: "red" }}>
                something whent wrong! no names
            </div>
        );
    } else if (typeof props.names != "object") {
        return (
            <div className={`pressekontakt ${props.className}`} style={{ color: "red" }}>
                something whent wrong! not object
            </div>
        );
    }
    var kontaktList = [];
    props.names.map((name) => {
        for (let index = 0; index < kontakter.length; index++) {
            if (kontakter[index].firstName.toLowerCase() == name.toLowerCase()) {
                kontaktList.push(kontakter[index]);
                break;
            } else if (name.toLowerCase() == "andreas strandskog") {
                kontaktList.push(kontakter[7]);
                break;
            }
        }
    });

    function header() {
        if (props.header || props.header === "") {
            return props.header;
        } else {
            return <h2>Kontaktinformasjon</h2>;
        }
    }

    if (kontaktList.length == 0) {
        return (
            <div className={`pressekontakt ${props.className}`} style={{ color: "red" }}>
                something whent wrong! no contacts with that name
            </div>
        );
    }
    return (
        <div style={{ margin: "70px 0" }}>
            {header()}
            <div className="pressekontakter">
                {kontaktList.map((kontakt) => {
                    var img = kontakt.img;

                    return (
                        <ContactPreset
                            className={props.className}
                            key={kontaktList.indexOf(kontakt)}
                            img={img}
                            name={`${kontakt.firstName}${
                                kontakt.secondName
                                    ? kontakt.secondName.charAt(0) === "-"
                                        ? "" + kontakt.secondName
                                        : " " + kontakt.secondName
                                    : ""
                            } ${kontakt.lastName}`}
                            position={kontakt.position}
                            tlf={kontakt.tlf}
                            email={kontakt.email}
                            presseBilder={props.presseBilder}
                            pictures={kontakt.pictures}
                        ></ContactPreset>
                    );
                })}
            </div>
        </div>
    );
}

function Raport(props) {
    return (
        <div className="rapport">
            <h3>{props.header}</h3>
            <p>{props.content}</p>
            <button className="rapportBtn" tabIndex="0">
                <i className="fa-solid fa-file-arrow-down"></i>
                Last ned rapporten
            </button>
        </div>
    );
}

export function Raporter(props) {
    var rapporterList = [];
    if (props.sort) {
        for (let index = 0; index < rapporter.length; index++) {
            if (
                rapporter[rapporter.length - (index + 1)].topic.includes(props.sort.toLowerCase())
            ) {
                rapporterList.push(rapporter[rapporter.length - (index + 1)]);
            }
            if (rapporterList.length >= 3) {
                break;
            }
        }
    } else {
        rapporterList.push(
            rapporter[rapporter.length - 1],
            rapporter[rapporter.length - 2],
            rapporter[rapporter.length - 3]
        );
    }

    return (
        <div>
            <h2>Rapporter</h2>
            <div className="rapporter">
                {rapporterList.map((rapport) => {
                    return (
                        <Raport
                            key={rapporter.indexOf(rapport)}
                            header={rapport.header}
                            content={rapport.content}
                            href={rapport.href}
                        ></Raport>
                    );
                })}
            </div>
        </div>
    );
}

export function Tester({ sort }) {
    // get tests based on { filter }

    let filteredTests = tester.map((t, i) => {
        if (sort && t.topic.toLowerCase() == sort.toLowerCase()) {
            console.log(sort);
            return t;
        } else if (!sort) {
            return t;
        }
    });

    function testSort(a, b) {
        if (a.date > b.date) {
            return 1;
        } else if (a.date < b.date) {
            return -1;
        } else {
            return 0;
        }
    }

    filteredTests = filteredTests.sort(testSort);
    filteredTests = [filteredTests[0], filteredTests[1], filteredTests[2]];
    return (
        <div style={{ marginTop: "70px" }}>
            <div className="sisteNyttHeaderWrapper">
                <h2 style={{ marginBottom: "20px" }}>Tester</h2>
            </div>

            <div className="sisteNytt">
                {filteredTests[0] &&
                    filteredTests.map((test, index) => {
                        return (
                            <Nytt
                                key={index}
                                img={test.img ? test.img : null}
                                imgAlt={test.imgAlt ? test.imgAlt : ""}
                                topic={test.topic}
                                header={test.header}
                            />
                        );
                    })}
                {!filteredTests[0] && (
                    <div>
                        <h2 style={{ color: "red" }}> ingen tester funnet, noe gikk galt</h2>
                    </div>
                )}
            </div>
        </div>
    );
}

function Horing(props) {
    return (
        <div className="horing">
            <div className="date">{props.date}</div>
            <h3> {props.header} </h3>
            <p>{props.content}</p>
            <button className="rapportBtn" tabIndex="0">
                <i className="fa-solid fa-file-arrow-down"></i>
                Last ned
            </button>
        </div>
    );
}

export function Horinger(props) {
    var horingerList = [];
    if (props.sort) {
        for (let index = 0; index < horinger.length; index++) {
            if (horingerList.length >= 2) {
                break;
            }
            if (
                horinger[horinger.length - (index + 1)].topic.includes(props.sort.toLowerCase()) ||
                horinger[horinger.length - (index + 1)].topic.includes(props.sort)
            ) {
                horingerList.push(horinger[horinger.length - (index + 1)]);
            }
        }
    } else {
        horingerList.push(horinger[horinger.length - 1], horinger[horinger.length - 2]);
    }
    return (
        <div style={{ marginTop: "70px" }}>
            <h2 style={{ marginBottom: "20px" }}>Høringer</h2>
            <div className="horingerContainer">
                {horingerList.map((horing, index) => {
                    return (
                        <Horing
                            key={index}
                            date={horing.date}
                            header={horing.header}
                            content={horing.content}
                        ></Horing>
                    );
                })}
            </div>
        </div>
    );
}

export function Campain(props) {
    return (
        <div>
            <h2 style={{ margin: "100px 0 20px 0" }}>kampanjer</h2>
            <div className="kampanjer">
                {props.header1 && (
                    <a className="kampanje" href="#">
                        <div className="kampanjeImg">
                            <img
                                style={{ width: "auto", height: "100%" }}
                                src={props.img1 ? props.img1 : insertCoin}
                                alt=""
                            />
                        </div>
                        <div className="kampanjeContent">
                            <div className="topic">{props.topic1}</div>

                            <h3>{props.header1}</h3>
                        </div>
                    </a>
                )}
                {props.header2 && (
                    <a className="kampanje" href="#">
                        <div className="kampanjeImg">
                            <img
                                style={{ width: "auto", height: "100%" }}
                                src={props.img2 ? props.img2 : insertCoin}
                                alt=""
                            />
                        </div>
                        <div className="kampanjeContent">
                            <div className="topic">{props.topic2}</div>

                            <h3>{props.header2}</h3>
                        </div>
                    </a>
                )}
            </div>
        </div>
    );
}

export function ToppSectionCustom({ children, path, img, imgAlt, className, style }) {
    return (
        <div className={`toppSection ${className}`} style={style}>
            <div style={{ backgroundColor: "var(--FR-color-lb)" }}>
                <div className="toppSectionContent">
                    {path && (
                        <div className="path">
                            <>
                                <a href="/">Forsiden</a>
                                {path.map((p, index) => (
                                    <span key={index}>
                                        <i className="fa-solid fa-chevron-right fa-sm"></i>
                                        <a
                                            href={
                                                "/" +
                                                p
                                                    .toLowerCase()
                                                    .replace(/[^a-zA-Z ]/g, "")
                                                    .replace(/ /g, "-")
                                            }
                                        >
                                            {p}
                                        </a>
                                    </span>
                                ))}
                            </>
                        </div>
                    )}
                    {children}
                </div>
            </div>
            <div className="imgWrap">
                <img
                    src={img || "https://picsum.photos/id/435/1300/520"}
                    alt={imgAlt || "Default image"}
                />
            </div>
        </div>
    );
}

export function ToppSection({ header, content, path, img, imgAlt }) {
    // optimized and explained by chatGPT
    let formattedContent;

    if (content) {
        formattedContent = formatContent(content);
    }

    // let pathNames = [];

    // let pathPath = path.map((p) => {
    //     pathNames.push(p.toLowerCase().replace(/ /g, "-"));
    //     let toReturn = "";
    //     pathNames.forEach((name) => {
    //         toReturn = toReturn + "/" + name;
    //     });
    //     return toReturn;
    // });

    return (
        <div className="toppSection">
            <div style={{ backgroundColor: "var(--FR-color-lb)" }}>
                <div className="toppSectionContent">
                    <div calcItems="path">
                        {path && (
                            <>
                                <a href="/">Forsiden</a>
                                {path.map((p, index) => (
                                    <span key={index}>
                                        <i
                                            key={index + 1}
                                            className="fa-solid fa-chevron-right fa-sm"
                                        ></i>
                                        <a
                                            href={
                                                "/" +
                                                p
                                                    .toLowerCase()
                                                    .replace(/[^a-zA-Z ]/g, "")
                                                    .replace(/ /g, "-")
                                            }
                                        >
                                            {p}
                                        </a>
                                    </span>
                                ))}
                            </>
                        )}
                    </div>
                    {/* <BreadCrumb
                        names={["Forsiden", ...pathNames]}
                        path={["/", ...pathPath]}
                    ></BreadCrumb> */}
                    <h1>{header}</h1>
                    <p>{formattedContent}</p>
                </div>
            </div>
            <div className="imgWrap">
                <img
                    src={img || "https://picsum.photos/id/435/1300/520"}
                    alt={imgAlt || "Default image"}
                />
            </div>
        </div>
    );
}

export const GuideBtn = (props) => {
    return (
        <div className="guideBtnWrap" style={props.style}>
            <a href="/tips-og-rettigheter/har_du_en_sak" className="guideBtn" tabIndex="0">
                <h2>Har du en sak?</h2>
                <div
                    className="gridRowSpan2"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        width: "100%",
                    }}
                >
                    <i className="fa-solid fa-chevron-right fa-xl gridRowSpan2"></i>
                </div>
                <p>Finn ut om du har grunn til å klage</p>
            </a>

            <a href="/tips-og-rettigheter/slik_klager_du" className="guideBtn" tabIndex="0">
                <h2>Slik klager du</h2>
                <div
                    className="gridRowSpan2"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        width: "100%",
                    }}
                >
                    <i className="fa-solid fa-chevron-right fa-xl gridRowSpan2"></i>
                </div>
                <p>Sjekk vår klageguide</p>
            </a>

            <a href="/tips-og-rettigheter/kontrakter" className="guideBtn" tabIndex="0">
                <h2>Kontrakter</h2>
                <div
                    className="gridRowSpan2"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        width: "100%",
                    }}
                >
                    <i className="fa-solid fa-chevron-right fa-xl gridRowSpan2"></i>
                </div>
                <p>Reduser faren for konflikt med kontrakt</p>
            </a>
        </div>
    );
};

export function BreadCrumb({ names, path, style, className }) {
    return (
        <nav className={`path ${className}`} style={style}>
            {names.map((name, i) => {
                return (
                    <div key={i}>
                        {i != 0 && <Chevron size={"xs"}></Chevron>}
                        {i != path.length && <a href={path[i]}>{name}</a>}
                        {i == path.length && <span href={path[i]}>{name}</span>}
                    </div>
                );
            })}
        </nav>
    );
}

export function getNthOccurrence(str, target, n) {
    let start = str.indexOf(target);
    let end = start;

    for (let i = 1; i < n; i++) {
        start = str.indexOf(target, end + 1);
        end = start;
    }
    return str.substring(start, end + target.length);
}

export function formatDate(date, format) {
    const dateDate = new Date(date);
    let dateFormatted;
    let options = {};
    if (format == "DD longM YYYY") {
        options = {
            day: "numeric",
            month: "long",
            year: "numeric",
        };

        dateFormatted = dateDate.toLocaleDateString("nb-NO", options);
    } else if (format == "DD.longM.YYYY") {
        options = {
            day: "numeric",
            month: "long",
            year: "numeric",
        };
        dateFormatted = dateDate
            .toLocaleDateString("nb-NO", options)
            .replace(/ /g, ".")
            .replace(/\.\./g, ".");
    } else if (format == "DD MM YYYY") {
        options = {
            day: "numeric",
            month: "numeric",
            year: "numeric",
        };

        dateFormatted = dateDate.toLocaleDateString("nb-NO", options);
    } else if (format == "DD/MM/YYYY") {
        options = {
            day: "numeric",
            month: "numeric",
            year: "numeric",
        };

        dateFormatted = dateDate
            .toLocaleDateString("nb-NO", options)
            .replace(/ /g, "/")
            .replace(/\./g, "");
    } else if (format == "DD.MM.YYYY") {
        options = {
            day: "numeric",
            month: "numeric",
            year: "numeric",
        };
        dateFormatted = dateDate
            .toLocaleDateString("nb-NO", options)
            .replace(/ /g, ".")
            .replace(/\.\./g, ".");
    } else if (format == "DD-MM-YYYY") {
        options = {
            day: "numeric",
            month: "numeric",
            year: "numeric",
        };
        dateFormatted = dateDate
            .toLocaleDateString("nb-NO", options)
            .replace(/ /g, "-")
            .replace(/\./g, ".");
    }
    return dateFormatted;
}

export function findName(array, filter) {
    return Object.keys(array).find((key) => array[key] === filter);
}

export const Rettigheter = () => {
    return (
        <>
            <h1 style={{ textAlign: "left", marginTop: "60px" }}>Tips og rettigheter</h1>
            <div className="rettigheterWrap">
                {/* <!-- Bil --> */}
                <a className="rettigheter" href="#">
                    <div className=" rettigheterSymbol">
                        <i className="fa-solid fa-car-side fa-xl"></i>
                    </div>
                    <div className=" rettigheterHeader">
                        <h2>Bil</h2>
                    </div>
                    <div className=" rettigheterFollow gridRowSpan2">
                        <i className="fa-solid fa-chevron-right fa-xl"></i>
                    </div>
                    <div className=" rettigheterDescription gridColSpan2">
                        <p>Kjøp, salg, reprasjon, leie, leasing, bøter, oppkjøring.</p>
                    </div>
                </a>
                {/* <!-- bolig --> */}
                <a className="rettigheter" href="#">
                    <div className=" rettigheterSymbol">
                        <i className="fa-solid fa-house fa-xl"></i>
                    </div>
                    <div className=" rettigheterHeader">
                        <h2>Bolig</h2>
                    </div>
                    <div className=" rettigheterFollow gridRowSpan2">
                        <i className="fa-solid fa-chevron-right fa-xl"></i>
                    </div>
                    <div className=" rettigheterDescription gridColSpan2">
                        <p>
                            Kjøp, salg, leie, bygging, oppussing, borettslag- og samleie, strøm,
                            vannlevering, flyttetjenester.
                        </p>
                    </div>
                </a>
                {/* <!-- økonomi og betaling --> */}
                <a className="rettigheter" href="#">
                    <div className=" rettigheterSymbol">
                        <i className="fa-regular fa-credit-card fa-xl"></i>
                    </div>
                    <div className=" rettigheterHeader">
                        <h2>Økonomi og betaling</h2>
                    </div>
                    <div className=" rettigheterFollow gridRowSpan2">
                        <i className="fa-solid fa-chevron-right fa-xl"></i>
                    </div>
                    <div className=" rettigheterDescription gridColSpan2">
                        <p>
                            Banktjenester, forsikring, inkasso, betalingsproblem, netthandel,
                            konkurs, kortreklamarsjon, svindel.
                        </p>
                    </div>
                </a>
                {/* <!-- reise --> */}
                <a className="rettigheter" href="/tips-og-rettigheter/reise">
                    <div className=" rettigheterSymbol">
                        <i className="fa-solid fa-plane-arrival fa-xl"></i>
                    </div>
                    <div className=" rettigheterHeader">
                        <h2>Reise</h2>
                    </div>
                    <div className=" rettigheterFollow gridRowSpan2">
                        <i className="fa-solid fa-chevron-right fa-xl"></i>
                    </div>
                    <div className=" rettigheterDescription gridColSpan2">
                        <p>Fly, pakkereise, tog, buss, taxi/drosje, hotellovernating.</p>
                    </div>
                </a>
                {/* <!-- digitalt --> */}
                <a className="rettigheter" href="#">
                    <div className=" rettigheterSymbol">
                        <i className="fa-solid fa-mobile-screen-button fa-xl"></i>
                    </div>
                    <div className=" rettigheterHeader">
                        <h2>Digitalt</h2>
                    </div>
                    <div className=" rettigheterFollow gridRowSpan2">
                        <i className="fa-solid fa-chevron-right fa-xl"></i>
                    </div>
                    <div className=" rettigheterDescription gridColSpan2">
                        <p>
                            Bredbånd, mobilabonnement, innholdstjenester på mobil, tv-tenester,
                            tjenester, strømmetjenester, digitalt innhold.
                        </p>
                    </div>
                </a>
                {/* <!-- Andre varer og tenester --> */}
                <a className="rettigheter" href="#">
                    <div className=" rettigheterSymbol">
                        <i className="fa-solid fa-bag-shopping fa-xl"></i>
                    </div>
                    <div className=" rettigheterHeader">
                        <h2>Andre varer og tenester</h2>
                    </div>
                    <div className=" rettigheterFollow gridRowSpan2">
                        <i className="fa-solid fa-chevron-right fa-xl"></i>
                    </div>
                    <div className=" rettigheterDescription gridColSpan2">
                        Elektoniske varer, kler, møbler, velvære, andre tenester.
                    </div>
                </a>
            </div>
        </>
    );
};

// simple font awsome
export function Chevron({ size: size, color: color, left: left, style: style }) {
    const sizeCalc = () => {
        if (size == "xxs" || size == "2xs") {
            return "fa-2xs";
        } else if (size == "xs") {
            return "fa-xs";
        } else if (size == "s" || size == "sm") {
            return "fa-sm";
        } else if (size == "l" || size == "lg") {
            return "fa-lg";
        } else if (size == "xl") {
            return "fa-xl";
        } else if (size == "xxl" || size == "2xl") {
            return "fa-2xl";
        }
    };

    return (
        <i
            className={`fa-solid fa-chevron-${left ? "left" : "right"} ${sizeCalc()}`}
            style={{ color: color, ...style }}
        ></i>
    );
}

// fr droppdown
export const FrDroppDown = ({ header, children, style, className, active }) => {
    return (
        <div
            className={`frDropDown ${active ? "frDropDownContentActive" : ""} ${className}`}
            style={style}
        >
            <div
                className="frDropDownHeader"
                onClick={(e) => {
                    const target = e.target.closest(".frDropDown");
                    target
                        .querySelector(".frDropDownContent")
                        .classList.toggle("frDropDownContentActive");
                    target.querySelector(".fa-solid").classList.toggle("fa-plus");
                    target.querySelector(".fa-solid").classList.toggle("fa-minus");
                }}
            >
                <h3>{header}</h3>
                <i className="fa-solid fa-plus fa-lg "></i>
            </div>
            <div className="frDropDownContent">{children}</div>
        </div>
    );
};

// error pages
export function Error({ type, back }) {
    return (
        <div className="maxWidthSmall">
            <div className="error">
                <div className="imgWrap">
                    <img
                        src="https://www.forbrukerradet.no/wp-content/themes/fr/img/404.png"
                        alt="feilmelling 404.ilustrasjon"
                    />
                </div>
                <div>
                    {(type == "404" && (
                        <>
                            <h1>Siden finnes ikke</h1>
                            <h2>
                                Beklager, vi finner ikke siden du lette etter. Vil du tilbake?{" "}
                                <a href="/">Klikk her.</a>
                            </h2>
                        </>
                    )) || (
                        <>
                            <h1>ops! Noe gjik galt</h1>
                            <h2>
                                Beklager, noe gjik galt mere informasjon er ikke tiljengelig. Vil du
                                tilbake? <a href={back ? back : "/"}>Klikk her.</a>
                            </h2>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

// to make a ul/ol from an object, mainly for translating text to lists
export const ListObject = ({ type, items }) => {
    if (type == "ul" || type == "unordered list" || type == "unorderedlist") {
        return (
            <ul>
                {items.map((i, index) => {
                    return <li key={index}>{i}</li>;
                })}
            </ul>
        );
    } else {
        return (
            <ol>
                {items.map((i, index) => {
                    return <li key={index}>{i}</li>;
                })}
            </ol>
        );
    }
};

// parsly gennerated using chatGTP
// based on prompt:
// how wuld i go ahead an ad moar to check than just content and chevron? for example external="{true}"
// anmd the code from last itteration
export function formatContent(input) {
    // Split the input string into an array of strings separated by LinkBtnOld />
    let elements = input.split("LinkBtnOld");
    let result = [];

    // Iterate over each element in the `elements` array
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        let match;

        // Check if the element includes "<br />"
        if (element.includes("<br />")) {
            // If the element includes "<br />",
            // split the element into an array of strings separated by "<br />"
            let subElements = element.split("<br />");

            // Iterate over each subElement in the `subElements` array
            for (let j = 0; j < subElements.length; j++) {
                let subElement = subElements[j];

                // Check if the subElement matches the format of LinkBtnOld />
                if ((match = subElement.match(/(?<=LinkBtnOld).*content='(.*?)'(.*?)\/>(.*)/))) {
                    let content = match[1];
                    let chevron = false;
                    let external = false;
                    let href = "";
                    let download = "";

                    // Extract the value of chevron if it's present
                    if (match[2].includes("chevron={")) {
                        chevron = match[2].includes("true");
                    }

                    // Extract the value of external if it's present
                    if (match[2].includes("external={")) {
                        external = match[2].includes("true");
                    }

                    // Extract the value of href if it's present
                    if (match[2].includes("href=")) {
                        let hrefMatch = match[2].match(/href='(.*?)'/);
                        href = hrefMatch[1];
                    }

                    // Extract the value of download if it's present
                    if (match[2].includes("download=")) {
                        let downloadMatch = match[2].match(/download='(.*?)'/);
                        download = downloadMatch[1];
                    }

                    // Push a <LinkBtnOld /> component to the `result` array
                    result.push(
                        <LinkBtnOld
                            key={(j + 1) * Math.random(2, 200) + j}
                            content={content}
                            chevron={chevron}
                            external={external}
                            href={href}
                            download={download}
                        />
                    );
                    match[3] && result.push(match[3]);
                } else {
                    // If it doesn't match, push the original string as text
                    result.push(subElement);
                }

                // Push a <br /> component to the `result` array if it's not the last subElement
                if (j < subElements.length - 1) {
                    result.push(<br key={j} />);
                }
            }
        } else {
            // Check if the element matches the format of LinkBtnOld />
            if ((match = element.match(/content='(.*?)'(.*?)\/>(.*)/))) {
                let content = match[1];
                let chevron = false;
                let external = false;
                let href = "";
                let download = "";

                // Extract the value of chevron if it's present
                if (match[2].includes("chevron={")) {
                    chevron = match[2].includes("true");
                }

                // Extract the value of external if it's present
                if (match[2].includes("external={")) {
                    external = match[2].includes("true");
                }

                // Extract the value of href if it's present
                if (match[2].includes("href=")) {
                    let hrefMatch = match[2].match(/href='(.*?)/);
                    href = hrefMatch[1];
                }

                // Extract the value of download if it's present
                if (match[2].includes("download=")) {
                    let downloadMatch = match[2].match(/download='(.*?)/);
                    download = downloadMatch[1];
                }

                // Push a LinkBtnOld /> component to the `result` array

                result.push(
                    <LinkBtnOld
                        content={content}
                        chevron={chevron}
                        external={external}
                        href={href}
                        download={download}
                    />
                );

                match[3] && result.push(match[3]);
            } else {
                // If it doesn't match, push the original string as text
                result.push(element);
            }
        }
    }

    function formatLists(items) {
        let toreturn = [];
        items.flat(Infinity).forEach((item, index) => {
            if (typeof item == "string" && item.includes("<li")) {
                // index 0:everything, index 1: everything before, index 2: opening tagg,
                // index 3: content, index 4: rest
                item = item.includes("<ul")
                    ? item.match(/(.*?)(<ul.*?>)(.*?)<\/ul>((?<=<\/ul>).*)/)
                    : item.match(/(.*?)(<ol.*?>)(.*?)<\/ol>((?<=<\/ol>).*)/);
                let content = item
                    ? [...item[3].matchAll(/<li(.*?)>(.*?)<\/li>/g)].map((li, index) => {
                          let className = li[1].match(/(?<=className=').*?(?=')/);
                          let style = [];
                          li[1] &&
                              li[1].match(/(?<=style={{).*?(?=}})/) &&
                              li[1]
                                  .match(/(?<=style={{).*?(?=}})/)[0]
                                  .split(/, /)
                                  .forEach((i) => {
                                      let keep = i.match(/(.*?(?=:)).*?((?<=').*?(?='))/);
                                      style.push({ [keep[1]]: keep[2] });
                                  });
                          style = style.length
                              ? style
                                  ? style.reduce((result, obj) => {
                                        return { ...result, ...obj };
                                    })
                                  : null
                              : {};
                          return (
                              <li className={className} style={style} key={`li${index.toString()}`}>
                                  {li[2]}
                              </li>
                          );
                      })
                    : null;
                let className = item[2].match(/(?<=className=').*?(?=')/);
                let style = [];
                item[2] &&
                    item[2].match(/(?<=style={{).*?(?=}})/) &&
                    item[2]
                        .match(/(?<=style={{).*?(?=}})/)[0]
                        .split(/, /)
                        .forEach((i) => {
                            let keep = i.match(/(.*?(?=:)).*?((?<=').*?(?='))/);
                            style.push({ [keep[1]]: keep[2] });
                        });
                style = style.length
                    ? style
                        ? style.reduce((result, obj) => {
                              return { ...result, ...obj };
                          })
                        : null
                    : {};
                toreturn.push(item[1]);
                toreturn.push(
                    item[2].includes("<ul") ? (
                        <ul className={className} style={style} key={`ul${index}`}>
                            {format(content)}
                        </ul>
                    ) : item[2].includes("<ol") ? (
                        <ol className={className} style={style} key={`ul${index}`}>
                            {format(content)}
                        </ol>
                    ) : undefined
                );
                toreturn = toreturn.concat(formatLists([item[4]]));
            } else toreturn.push(item);
        });
        return toreturn;
    }

    function formatDiv(items) {
        let toreturn = [];
        items.flat(Infinity).forEach((item, index) => {
            if (typeof item == "string" && item.includes("<div")) {
                let remaining = item.match(/<div/g).length;
                let target = item.match(/(.*?)<div(.*?)>(.*)/); // holds ewerything before [1], ewerything inside the opening tagg[2], and ewerything inside[3]
                let targetIndex; // holds the index of the item containing last target closing dropdown
                let targetRemaining; // counts how manny closing tags into an item the last closingtag is
                for (let i = index + 1; remaining > 0 && i <= items.length; i++) {
                    targetRemaining = remaining;
                    typeof items[i] == "string" &&
                        items[i].match(/<div/g) &&
                        (remaining += items[i].match(/<div/g).length);

                    typeof items[i] == "string" &&
                        items[i].match(/<\/div>/g) &&
                        (remaining -= items[i].match(/<\/div>/g).length);
                    targetIndex = i;
                }
                let fromItems = items.splice(index + 1, targetIndex - index);
                // var that holds ewerything remaining outside in the last close, to be pushed back into items
                let rest = [];

                // array that holds all items inside the dropdown only
                let insideTarget = [];

                function calcItems() {
                    let itemsFromCalc;
                    // rest
                    // everything that shuld be returned
                    // everything that shuld be returned
                    // // this stil may brake if an object is inside the div, the content left in the original index may be forgotten
                    let nr = targetRemaining;
                    if (fromItems.length > 0 && fromItems.map((i) => !!i).includes(true)) {
                        itemsFromCalc = fromItems
                            .map((i, indexOfI) => {
                                if (typeof i == "string") {
                                    return i.split("</div>").map((iOfI, indexOfIOfI) => {
                                        if (nr == 0) {
                                            if (indexOfIOfI < i.split("</div>").length - 1) {
                                                nr -= 1;
                                            }
                                            rest.push(iOfI);
                                        } else if (
                                            nr > 0 &&
                                            indexOfIOfI < i.split("</div>").length - 1
                                        ) {
                                            if (indexOfIOfI < i.split("</div>").length - 1) {
                                                nr -= 1;
                                            }
                                            return iOfI + "</div>";
                                        } else if (nr > 0) {
                                            if (indexOfIOfI < i.split("</div>").length - 1) {
                                                nr -= 1;
                                            }
                                            return iOfI;
                                        } else {
                                            if (indexOfIOfI < i.split("</div>").length - 1) {
                                                nr -= 1;
                                            }
                                            rest.push(iOfI);
                                        }
                                    });
                                } else {
                                    if (nr <= 0) {
                                        rest.push(i);
                                    } else {
                                        return i;
                                    }
                                }
                            })
                            .flat();
                    } else {
                        itemsFromCalc = [
                            ...(() => {
                                let i = target[3];
                                if (typeof i == "string") {
                                    return i.split("</div>").map((iOfI, indexOfIOfI) => {
                                        if (nr == 0) {
                                            if (indexOfIOfI < i.split("</div>").length - 1) {
                                                nr -= 1;
                                            }
                                            rest.push(iOfI);
                                        } else if (
                                            nr > 0 &&
                                            indexOfIOfI < i.split("</div>").length - 2
                                        ) {
                                            if (indexOfIOfI < i.split("</div>").length - 1) {
                                                nr -= 1;
                                            }
                                            return iOfI + "</div>";
                                        } else if (nr > 0) {
                                            if (indexOfIOfI < i.split("</div>").length - 1) {
                                                nr -= 1;
                                            }
                                            return iOfI;
                                        } else {
                                            if (indexOfIOfI < i.split("</div>").length - 1) {
                                                nr -= 1;
                                            }
                                            rest.push(iOfI);
                                        }
                                    });
                                } else {
                                    if (nr <= 0) {
                                        rest.push(i);
                                    } else {
                                        return i;
                                    }
                                }
                            })(),
                        ];
                    }

                    // figure out whitch item from fromItems has the rellevant close tag
                    // remove the rellevant closing tag
                    // dump what is left in the rest
                    // store items inbetween in storage
                    insideTarget = [...itemsFromCalc];
                }
                calcItems();

                items.splice(index + 1, 0, ...rest);
                // find props for dropdown
                let header = target[2].match(/(?<=header=').*?(?=')/);
                let style = [];
                target[2] &&
                    target[2].match(/(?<=style={{).*?(?=}})/) &&
                    target[2]
                        .match(/(?<=style={{).*?(?=}})/)[0]
                        .split(/, /)
                        .forEach((i) => {
                            let keep = i.match(/(.*?(?=:)).*?((?<=').*?(?='))/);
                            style.push({ [keep[1]]: keep[2] });
                        });
                style = style.length
                    ? style
                        ? style.reduce((result, obj) => {
                              return { ...result, ...obj };
                          })
                        : null
                    : {};

                let className = target[2].match(/(?<=className=').*?(?=')/);

                // push to toreturn the frdropdown and rests
                toreturn.push(target[1]);
                toreturn.push(
                    <div header={header} className={className} style={style} key={`div ${index}`}>
                        {format(insideTarget)}
                        {/* {insideTarget} */}
                    </div>
                );
                toreturn.push(rest);
            } else {
                toreturn.push(item);
            }
        });

        return toreturn;
    }

    let resultV2 = [];
    result.forEach((r, index) => {
        if (typeof r == "string" && r.includes("<ListObject")) {
            r = r.match(/(.*)(<ListObject.*?\/>)(.*)/);
            let type = r[2].match(/(?<=type=').*?(?=')/);
            let items = r[2];
            items = items.match(/(?<=items=\[).*?(?=\])/)[0].match(/(?<=')(?!,).*?(?=')/g);
            resultV2.push(
                r[1] ? r[1] : null,
                r[2] ? <ListObject key={result.length + index} type={type} items={items} /> : null,
                r[3] ? formatContent(r[3]) : null
            );
        } else resultV2.push(r);
    });

    // to find and replace list elements
    function formatFrDroppDown(items) {
        let toreturn = [];
        items.forEach((item, index) => {
            if (typeof item == "string" && item.includes("<FrDroppDown")) {
                let remaining = item.match(/<FrDroppDown/g).length;
                let target = item.match(/(.*?)<FrDroppDown(.*?)>(.*)/); // holds ewerything before [1], ewerything inside the opening tagg[2], and ewerything inside[3]
                let targetIndex; // holds the index of the item containing last target closing dropdown
                let targetRemaining; // counts how manny closing tags into an item the last closingtag is
                for (let i = index + 1; remaining > 0 && i <= items.length; i++) {
                    targetRemaining = remaining;
                    typeof items[i] == "string" &&
                        items[i].match(/<FrDroppDown/g) &&
                        (remaining += items[i].match(/<FrDroppDown/g).length);

                    typeof items[i] == "string" &&
                        items[i].match(/<\/FrDroppDown>/g) &&
                        (remaining -= items[i].match(/<\/FrDroppDown>/g).length);
                    targetIndex = i;
                }
                let fromItems = items.splice(index + 1, targetIndex - index);

                // var that holds ewerything remaining outside in the last close, to be pushed back into items
                let rest = [];
                // array that holds all items inside the dropdown only
                let insideTarget = [target[3], ...calcItems()];

                function calcItems() {
                    // rest

                    // everything that shuld be returned
                    // everything that shuld be returned
                    // // to mutch gets pushed to rest, last item that shuld go to itemsFromCalc goes to rest
                    let nr = targetRemaining;
                    let itemsFromCalc = [
                        ...fromItems
                            .map((i, indexOfI) => {
                                if (typeof i == "string") {
                                    return i.split("</FrDroppDown>").map((iOfI, indexOfIOfI) => {
                                        if (indexOfIOfI < i.split("</FrDroppDown>").length - 1) {
                                            nr -= 1;
                                        }

                                        if (nr == 0) {
                                            return iOfI;
                                        } else if (
                                            nr > 0 &&
                                            indexOfIOfI < i.split("</FrDroppDown>").length - 1
                                        ) {
                                            return iOfI + "</FrDroppDown>";
                                        } else if (nr > 0) {
                                            return iOfI;
                                        } else {
                                            rest.push(iOfI);
                                        }
                                    });
                                } else {
                                    if (nr <= 0) {
                                        rest.push(i);
                                    } else {
                                        return i;
                                    }
                                }
                            })
                            .flat(),
                    ];
                    // figure out whitch item from fromItems has the rellevant close tag
                    // remove the rellevant closing tag
                    // dump what is left in the rest
                    // store items inbetween in storage

                    return itemsFromCalc;
                }

                items.splice(index + 1, 0, ...rest);
                // find props for dropdown
                let header = target[2].match(/(?<=header=').*?(?=')/);
                let style = target[2].match(/(?<=style=').*?(?=')/);
                let className = target[2].match(/(?<=className=').*?(?=')/);

                // push to toreturn the frdropdown and rests
                toreturn.push(target[1]);
                toreturn.push(
                    <FrDroppDown
                        header={header}
                        className={className}
                        style={style}
                        key={`FrDroppDown ${index}`}
                    >
                        {format(insideTarget)}
                        {/* {insideTarget} */}
                    </FrDroppDown>
                );
            } else toreturn.push(item);
        });

        return toreturn;
    }

    function filterImg(items) {
        let toreturn = [];
        items.forEach((item, index) => {
            if (typeof item == "string" && item.includes("<img") && item) {
                item = item.match(/(.*?)(<img.*?\/>)(.*)/);
                let src = item ? item[2].match(/(?<=src=').*?(?=')/) : null;
                let alt = item ? item[2].match(/(?<=alt=').*?(?=')/) : null;
                let style = [];
                console.log("item", item);

                item &&
                    item[2] &&
                    item[2].match(/(?<=style={{).*?(?=}})/) &&
                    item[2]
                        .match(/(?<=style={{).*?(?=}})/)[0]
                        .split(/, /)
                        .forEach((i) => {
                            let keep = i.match(/(.*?(?=:)).*?((?<=').*?(?='))/);
                            style.push({ [keep[1]]: keep[2] });
                        });
                style = style.length
                    ? style
                        ? style.reduce((result, obj) => {
                              return { ...result, ...obj };
                          })
                        : null
                    : {};

                toreturn.push(item && item[1]);
                toreturn.push(
                    <img key={"img " + index.toString()} src={src} alt={alt} style={style} />
                );
                toreturn = toreturn.concat(filterImg([item && item[3]]));
            } else toreturn.push(item);
        });

        return toreturn;
    }

    function formatLinks(items) {
        let toreturn = [];
        items.forEach((item, index) => {
            if (typeof item == "string" && item.includes("<a")) {
                item = item.match(/(.*?)<a(.*?)>(.*?)<\/a>(.*)/);

                let href =
                    item && item[2].match(/(?<=href=').*?(?=')/)
                        ? item[2].match(/(?<=href=').*?(?=')/)[0]
                        : null;

                let className =
                    item && item[2].match(/(?<=className=').*?(?=')/)
                        ? item[2].match(/(?<=className=').*?(?=')/)[0]
                        : null;

                let style = [];

                item &&
                    item[2].match(/(?<=style={{).*?(?=}})/) &&
                    item[2]
                        .match(/(?<=style={{).*?(?=}})/)[0]
                        .split(/, /)
                        .forEach((i) => {
                            let keep = i.match(/(.*?(?=:)).*?((?<=').*?(?='))/);
                            style.push({ [keep[1]]: keep[2] });
                        });
                style = style.length
                    ? style
                        ? style.reduce((result, obj) => {
                              return { ...result, ...obj };
                          })
                        : null
                    : {};

                toreturn.push(item ? item[1] : null);
                toreturn.push(
                    <a href={href} className={className} style={style} key={`a ${index}`}>
                        {item ? item[3] : null}
                    </a>
                );
                toreturn.push(formatLinks(item ? [item[4]] : []));
            } else toreturn.push(item);
        });

        return toreturn;
    }

    function formatHeader(items) {
        let toreturn = [];
        items.forEach((item, index) => {
            if (typeof item == "string" && item.includes("<h")) {
                item = item.match(/(.*?)(<h..*?\/h.>)(.*)/);
                let type = item[2] ? item[2].match(/(?<=<h)./)[0] : null;
                let className =
                    item[2] && item[2].match(/(?<=className=').*?(?=')/)
                        ? item[2].match(/(?<=className=').*?(?=')/)[0]
                        : null;
                let style = [];
                item[2] &&
                    item[2].match(/(?<=style={{).*?(?=}})/) &&
                    item[2]
                        .match(/(?<=style={{).*?(?=}})/)[0]
                        .split(/, /)
                        .forEach((i) => {
                            let keep = i.match(/(.*?(?=:)).*?((?<=').*?(?='))/);
                            style.push({ [keep[1]]: keep[2] });
                        });
                style = style.length
                    ? style
                        ? style.reduce((result, obj) => {
                              return { ...result, ...obj };
                          })
                        : null
                    : {};
                let content = item ? item[2].match(/(?<=>).*?(?=<\/h.*?>)/)[0] : null;
                toreturn.push(
                    item.length && item[1],
                    type || content ? (
                        type == 1 ? (
                            <h1 className={className} style={style} key={`header ${index}`}>
                                {content}
                            </h1>
                        ) : type == 2 ? (
                            <h2 className={className} style={style} key={`header ${index}`}>
                                {content}
                            </h2>
                        ) : type == 3 ? (
                            <h3 className={className} style={style} key={`header ${index}`}>
                                {content}
                            </h3>
                        ) : type == 4 ? (
                            <h4 className={className} style={style} key={`header ${index}`}>
                                {content}
                            </h4>
                        ) : type == 5 ? (
                            <h5 className={className} style={style} key={`header ${index}`}>
                                {content}
                            </h5>
                        ) : type == 6 ? (
                            <h6 className={className} style={style} key={`header ${index}`}>
                                {content}
                            </h6>
                        ) : (
                            content
                        )
                    ) : (
                        ""
                    )
                );
                toreturn = toreturn.concat(formatHeader([item[3]]));
            } else toreturn.push(item);
        });

        return toreturn;
    }

    function formatStyle(items) {
        let toreturn = [];

        items.flat(Infinity).forEach((item, index) => {
            if (typeof item == "string" && item.includes("<style>")) {
                item = item.match(/(.*?)<style>(.*?)<\/style>(.*)/);
                toreturn.push(item[1]);
                toreturn.push(<style key={`style ${index.toString()}`}>{item[2]}</style>);
                toreturn.push(item[3]);
            } else {
                toreturn.push(item);
            }
        });
        return toreturn;
    }

    function format(input) {
        return formatDiv(
            formatStyle(formatLinks(formatLists(formatFrDroppDown(filterImg(formatHeader(input))))))
        );
    }
    return format(resultV2);
}

// itteration 3
// based on prompt
// add code sutch that if the string element includes
// "<br />" than cnhange the string "<br />" whith the jsx ellement <br />
// and the code form last itteration
// export function formatContent(input) {
//     // Split the input string into an array of strings separated by LinkBtnOld />
//     let elements = input.split("LinkBtnOld");
//     let result = [];

//     // Iterate over each element in the `elements` array
//     for (let i = 0; i < elements.length; i++) {
//         let element = elements[i];
//         let match;

//         // Check if the element includes "<br />"
//         if (element.includes("<br />")) {
//             // If the element includes "<br />",
//             // split the element into an array of strings separated by "<br />"
//             let subElements = element.split("<br />");

//             // Iterate over each subElement in the `subElements` array
//             for (let j = 0; j < subElements.length; j++) {
//                 let subElement = subElements[j];

//                 // Check if the subElement matches the format of LinkBtnOld />
//                 if ((match = subElement.match(/content='(.*?)'(.*?)\/>/))) {
//                     let content = match[1];
//                     let chevron = false;

//                     // Extract the value of chevron if it's present
//                     if (match[2].includes("chevron={")) {
//                         chevron = match[2].includes("true");
//                     }

//                     // Push a LinkBtnOld /> component to the `result` array
//                     result.push(LinkBtnOld content={content} chevron={chevron} />);
//                 } else {
//                     // If it doesn't match, push the original string as text
//                     result.push(subElement);
//                 }

//                 // Push a <br /> component to the `result` array if it's not the last subElement
//                 if (j < subElements.length - 1) {
//                     result.push(<br />);
//                 }
//             }
//         } else {
//             // Check if the element matches the format of LinkBtnOld />
//             if ((match = element.match(/content='(.*?)'(.*?)\/>/))) {
//                 let content = match[1];
//                 let chevron = false;
//                 let external = false;

//                 // Extract the value of chevron if it's present
//                 if (match[2].includes("chevron={")) {
//                     chevron = match[2].includes("true");
//                 }

//                 // Push a LinkBtnOld /> component to the `result` array
//                 result.push(LinkBtnOld content={content} chevron={chevron} external={external} />);
//             } else {
//                 // If it doesn't match, push the original string as text
//                 result.push(element);
//             }
//         }
//     }
//     return result;
// }
// second itteration of format content
// gennerated using chatGTP
// based on input:
// i need to split the string = "test test test LinkBtnOld content='hello' chevron={true} /> test test  LinkBtnOld content='hello' /> test"
// into a jsx object that has LinkBtnOld content='' /> and some text id it based on the "LinkBtnOld content='' chevron={} /> " in the string
// where content is what it says that content is in the strin, and chevron is what it says it is in the string if it is there, the props
// can also apear in a random order
//
// ad code to replace the string "<br />" with the jsx element <br />
// export function formatContent(input) {
//     // Split the input string into an array of strings separated by LinkBtnOld />
//     let elements = input.split("LinkBtnOld");
//     let result = [];

//     // Iterate over each element in the `elements` array
//     for (let i = 0; i < elements.length; i++) {
//         let element = elements[i];
//         let match;
//         // if (element.includes("<br />")) {
//         //     // added by chat (non functinal) :
//         //     // If the element includes "<br />",
//         //     // push a <br /> component to the result array
//         //     // result.push(<br />);
//         // }

//         // Check if the element matches the format of LinkBtnOld />
//         if ((match = element.match(/content='(.*?)'(.*?)\/>/))) {
//             let content = match[1];
//             let chevron = false;

//             // Extract the value of chevron if it's present
//             if (match[2].includes("chevron={")) {
//                 chevron = match[2].includes("true");
//             }

//             // Push a LinkBtnOld /> component to the `result` array
//             result.push(LinkBtnOld content={content} chevron={chevron} />);
//         } else {
//             // If it doesn't match, push the original string as text
//             result.push(element);
//         }
//     }

//     return result;
// }
// explaind by chatGTP as:
// The parseString function takes in an input string as an argument. The first step it performs
// is to split the input string into an array of strings separated by instances of "LinkBtnOld".

// The function then iterates over each element in the resulting elements array. For each element,
// it checks if the element matches the format of "LinkBtnOld content='...' ... />". If it does, the
// function uses regular expressions to extract the values of "content" and "chevron". If the element
//  doesn't match the format, the original string is pushed as text to the result array.

// The extracted values are used to create a LinkBtn component, which is then pushed to the result
// array. After all elements have been processed, the result array is returned.

// Note that the result array can contain both instances of the LinkBtn component as well as text
// strings, so the result is not just an array of components, but a mixture of components and text.

// // prompt: continue

// The code takes in a string as an input, then uses the split method to divide the string into an array
// of substrings, separated by the string "LinkBtnOld". The result of the split operation is stored in the
// elements variable.

// Next, the code uses a for loop to iterate over each element in the elements array. For each iteration
// of the loop, the code checks if the current element matches the format of a LinkBtn component in a
// string format. It does this by using a regular expression and the match method. If the current element
// matches the format, the code extracts the values of the content and chevron props by using the square
// bracket notation to access the matched groups in the regular expression.

// The code then creates a LinkBtnOld /> component with the extracted values as props and pushes it to the
// result array. If the current element doesn't match the format, it is pushed to the result array as text.

// Finally, the result array is returned as the output of the function.

// original proof of consept:
// export function formatContent(content) {
//     let formattedContent = content;
//     if (formattedContent.includes("<br />")) {
//         formattedContent = formattedContent.split("<br />").map((item, index) => (
//             <>
//                 {item}
//                 <br key={index} />
//             </>
//         ));
//     }
//     if (formattedContent.includes("LinkBtnOld")) {
//         // from chatGTP:
//         formattedContent = formattedContent.split("LinkBtnOld").map((item, index) => {
//             let splitItem = item.split("'");
//             let props = [];
//             splitItem.forEach((item) => {
//                 if (item && !item.includes("content") && !item.includes("/>") && item !== " ") {
//                     props.push(item);
//                 }
//             });
//             return LinkBtnOld content={props[0]} test="test" key={index} />;
//         });
//         return formattedContent;
//         // Explanation of changes:
//         // Used forEach loop instead of for loop for iterating over splitItem
//         // Used === operator for comparison instead of ==
//         // Added key prop to the LinkBtn component to ensure each component has a unique key in the rendered list of components.
//         //
//         //
//         //    original:
//         // formattedContent = formattedContent.split("LinkBtnOld").map((item, index) => {
//         //     return item.split("/>").map((item, index) => {
//         //         let props = [];
//         //         let splitItem = item.split("'");
//         //         for (let i = 0; i < splitItem.length; i++) {
//         //             item = splitItem[i];
//         //             if (item && !item.includes("content") && item != " ") {
//         //                 props.push(item);
//         //             }
//         //         }
//         //         return LinkBtnOld content={props[0]} test="test" key={index} />;
//         //     });
//         // });
//         // return formattedContent;
//     }
//     return;
// }

// return (
//     <>
//         {"<div>"}
//         test test test {"<div>"}test{"</div>"}
//         {"<div>"}tester{"</div>"}
//         {"<div>"}
//         {"</div>"}
//         {"<div>"}
//         {"<div>"}
//         LinkBtnOld content="hello" /> LinkBtnOld content="hello" chevron={true} />
//         LinkBtnOld content="hello" external={true} href="/" />
//         LinkBtnOld content="hello" download="/tester" />
//         {"</div>"}
//         {"</div>"}
//         {"</div>"}
//     </>
// );

// const splitJSX = (jsx) => {
//     if (!Array.isArray(jsx)) {
//         return jsx;
//     } else {
//         let newJSX = []; // array to store the modified JSX

//         // split the input JSX by the string '<div>'
//         let split = jsx.split("<div>");

//         // loop through each split
//         for (let i = 0; i < split.length; i++) {
//             // find the last '</div>' in the split string
//             let end = split[i].lastIndexOf("</div>");

//             // if there is not a '<div>' before the next '</div>'
//             if (split[i].indexOf("<div>", end + 5) === -1) {
//                 // remove the '<div>' and '</div>' from the string
//                 let content = split[i].substring(0, end);

//                 // wrap the content in a div element
//                 let wrapped = <div>{content}</div>;

//                 // add the wrapped content to the newJSX array
//                 newJSX.push(wrapped);

//                 // add the rest of the split string to the newJSX array
//                 newJSX.push(split[i].substring(end + 6));
//             } else {
//                 // if there is a '<div>' before the next '</div>', add the split to the newJSX array without modification
//                 newJSX.push(split[i]);
//             }
//         }

//         // return the modified JSX
//         return newJSX;
//     }
// };

function splitJSXString(jsx) {
    let out = [];
    jsx.map((item, index) => {
        let num = 0;
        if (typeof item === "string" && item.includes("<div>")) {
            let itemHold = [item];

            while (itemHold.includes("<div>")) {
                num++;
                let newItem = [];
                itemHold.map((item, index) => {
                    if (typeof item === "string") {
                        let tempItem = item.match(
                            /(.*?)(<div>(?!.*(?<!<\/div>)(?:<div>)).*?<\/div>)(.*)/g
                        );
                        newItem = [];
                        if (tempItem[1]) {
                            newItem.push(tempItem[1]);
                        }
                        if (tempItem[2]) {
                            newItem.push(tempItem[2]);
                        }
                        if (tempItem[3]) {
                            newItem.push(tempItem[3]);
                        }
                    } else {
                        newItem.push(item);
                    }
                });
                itemHold = newItem;
            }
        }

        // if (typeof item == "string") {
        //     if (item.includes("<div>")) {

        // let modItemArr = itemHold.match(
        //     /(.*?)(<div>(?!.*(?<!<\/div>)(?:<div>)).*?<\/div>)(.*)/g
        // );

        // while (itemHold && itemHold.includes("<div>")) {
        //     num++;
        //     if (num > 5) {
        //         break;
        //     }
        // }

        // let num = 0;
        // let itemHold = item;
        // let modItemArr = [];
        // while (itemHold && itemHold.includes("<div>")) {
        //     modItemArr = itemHold.match(/(.*?)(<div>(?!.*(?<!<\/div>)(?:<div>)).*?<\/div>)(.*)/g);
        //     modItemArr[1] = <div>{modItemArr[2].replace(/<\/?div>/g, "")}</div>;
        //     modItemArr = [modItemArr[1],modItemArr[2],modItemArr[3]]
        //     num++;
        //     if (num > 5) {
        //         break;
        //     }
        // }
        // out.push(modItemArr);
        //         } else out.push(item);
        //     } else out.push(item);
    });

    return out;

    // let out = [];
    // let item = "<div>hi <div><div>HEI</div><div>hei på deg</div> HALOYSAN</div></div>";

    // while () {
    //     let cases = [];
    //     cases = item.match(/.*(<div>(?!.*(?<!<\/div>)(?:<div>)).*?<\/div>).*/);
    //     // cases = ["<div>hi <div><div>HEI</div><div></div> HALOYSAN</div></div>", "<div></div>"];

    //     let temp = cases[1].replace(/<\/?div>/g, "");

    //     out.push(cases[0]);
    //     out.push(<div>{temp}</div>);
    //     if (cases[2]) {
    //         out.push(cases[2]);
    //     }
    //     break;
    // }
    // return out;
    // for (let index = 0; index < jsx.length; index++) {

    //     if (typeof item == "string") {
    //         for (let index = 1; index; index) {
    //             let cases = [];
    //             cases = item.match(/<div>(.*?)<\/div>$/g);
    //             if (cases) {
    //                 // break;
    //             }
    //             break;
    //         }
    //     }
    // }
}

// function splitJSXString(jsx) {

//     let splitJSXElements = [];

//     if (!Array.isArray(jsx)) {
//         splitJSXElements.push(jsx);
//     } else {
//         splitJSXElements = [...jsx];
//     }

//     let modifiedJSXElements = [];

//     while (splitJSXElements.length > 0) {
//         let currentElement = splitJSXElements.shift();
//         let temp = [];
//         if (typeof currentElement === "string") {
//             // const startIndex = currentElement.indexOf("<div>");
//             // const endIndex = currentElement.indexOf("</div>");
//             // if (startIndex === -1 && endIndex === -1) {
//             //     modifiedJSXElements.push(currentElement);
//             // } else if (startIndex !== -1 && (startIndex < endIndex || endIndex === -1)) {
//             //     const content = currentElement.substring(startIndex, endIndex);
//             //     modifiedJSXElements.push(<div>{content}</div>);
//             //     splitJSXElements.unshift(currentElement.substring(endIndex + 6));
//             // }
//         } else {
//             modifiedJSXElements.push(currentElement);
//         }
//     }

//     return modifiedJSXElements;
// }
