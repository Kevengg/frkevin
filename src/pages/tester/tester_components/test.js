import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Chevron, formatContent, LinkBtn, formatDate, Slider } from "../../../component";
import styles from "../../../css/tester/testPage.module.css";
import SortBy from "./sortBy_component";

// something blocks the objList, something to do with newCustomFilter

export default function TestPage({ page }) {
    let test = page;
    // console.log(test);
    const [sortBy, setSortBy] = useState("resultSynk");
    const [search, setsearch] = useState("");
    const [vurdering, setvurdering] = useState([]);
    const [priceMaxValue, setPriceMaxValue] = useState(calcPriceMax());
    const [priceMinValue, setPriceMinValue] = useState(calcPriceMin());
    const [customFilter, setCustomFilter] = useState({ manufacturer: [] });
    // expects example: {manufacturer: ["Nortura SA", "Fatland Sandefjord for Coop Norge SA"]}

    const handleVurdering = (e) => {
        let newVurdering = [...vurdering];
        if (!e.target.id.includes(",")) {
            if (e.target.checked) {
                newVurdering.push(e.target.id);
                console.log(newVurdering);
            } else {
                newVurdering.splice(newVurdering.indexOf(e.target.id), 1);
            }
        } else if (e.target.id.includes(",")) {
            e.target.id.split(/,/g).map((num) => {
                if (e.target.checked) {
                    newVurdering.push(parseInt(num));
                } else {
                    newVurdering.splice(newVurdering.indexOf(parseInt(num)), 1);
                }
            });
        }
        setvurdering(newVurdering);
    };

    function handleCustomFilter(e, param) {
        let newCustomFilter = customFilter;
        if (!Object.keys(newCustomFilter).includes(param)) {
            newCustomFilter[param] = [];
        }
        if (!e.target.checked) {
            newCustomFilter[param].splice(newCustomFilter[param].indexOf(e.target.id), 1);
        } else {
            newCustomFilter[param].push(e.target.id);
        }
        if (newCustomFilter[param].length == 0) {
            delete newCustomFilter[param];
        }
        console.log(newCustomFilter);
        setCustomFilter(newCustomFilter);
    }

    function TestObject({ obj }) {
        var img = obj.img.includes("://") ? obj.img : "/img/" + obj.img;
        return (
            <Link
                className={styles.testObject}
                to={`?page=${page.header.toLowerCase().replace(/ /g, "-")}/${obj.product
                    .toLowerCase()
                    .replace(/ /g, "-")}`}
            >
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
            </Link>
        );
    }
    // console.log("test", test);

    function sortTest(tests) {
        function compare(a, b) {
            if (sortBy === "resultSynk") {
                if (a.ratingType === "grade") {
                    if (a.rating > b.rating) {
                        return -1;
                    } else if (a.rating < b.rating) {
                        return 1;
                    } else return 0;
                } else if (a.ratingType === "smiley") {
                    let aRating = a.rating === "good" ? 1 : a.rating === "ok" ? 0 : -1;
                    let bRating = b.rating === "good" ? 1 : b.rating === "ok" ? 0 : -1;

                    if (aRating > bRating) {
                        return -1;
                    } else if (aRating < bRating) {
                        return 1;
                    } else return 0;
                }
            } else if (sortBy === "resultRize") {
                if (a.ratingType === "grade") {
                    if (a.rating < b.rating) {
                        return -1;
                    } else if (a.rating > b.rating) {
                        return 1;
                    } else return 0;
                } else if (a.ratingType === "smiley") {
                    let aRating = a.rating === "good" ? 1 : a.rating === "ok" ? 0 : -1;
                    let bRating = b.rating === "good" ? 1 : b.rating === "ok" ? 0 : -1;
                    if (aRating < bRating) {
                        return -1;
                    } else if (aRating > bRating) {
                        return 1;
                    } else return 0;
                }
            } else if (sortBy === "nameRize") {
                if (a.product.toLowerCase() < b.product.toLowerCase()) {
                    return 1;
                } else if (a.product.toLowerCase() > b.product.toLowerCase()) {
                    return -1;
                } else return 0;
            } else if (sortBy === "nameSynk") {
                if (a.product.toLowerCase() < b.product.toLowerCase()) {
                    return -1;
                } else if (a.product.toLowerCase() > b.product.toLowerCase()) {
                    return 1;
                } else return 0;
            } else if (sortBy === "new") {
                const adate = a.date.split("T")[0].replace(/-/g, "");
                const bdate = b.date.split("T")[0].replace(/-/g, "");
                if (adate > bdate) {
                    return -1;
                } else if (adate < bdate) {
                    return 1;
                } else {
                    return 0;
                }
            } else if (sortBy === "old") {
                const adate = a.date.split("T")[0].replace(/-/g, "");
                const bdate = b.date.split("T")[0].replace(/-/g, "");
                if (adate > bdate) {
                    return 1;
                } else if (adate < bdate) {
                    return -1;
                } else {
                    return 0;
                }
            }
        }
        return tests.sort(compare);
    }

    function filter(tester) {
        let filterd = [];
        if (search && search != "") {
            tester.map((test) => {
                if (
                    test &&
                    (test.product.toLowerCase().includes(search) ||
                        test.manufacturer.toLowerCase().includes(search))
                ) {
                    filterd.push(test);
                }
            });
            // returns original value if false
        } else filterd = [...tester];
        let filterdWRating = [];
        // console.log(filterd);

        if (vurdering && vurdering != "") {
            filterd.map((test) => {
                if (test && vurdering.length && vurdering.includes(test.rating)) {
                    filterdWRating.push(test);
                }
            });
            // returns last value if false
        } else filterdWRating = [...filterd];

        let filterdWPrice = [];

        if (filterdWRating.length && filterdWRating[0].price) {
            filterdWRating.map((i) => {
                if (i.price <= priceMaxValue && i.price >= priceMinValue) {
                    filterdWPrice.push(i);
                }
            });
        } else filterdWRating = [...filterdWRating];

        let filteredWCustom = [];
        // checs if customFilter is not empty object, nor null/undefined
        if (Object.keys(customFilter).length) {
            console.log("here");
            // deconstructs customFilter to a list of its keys
            const filterType = [...Object.keys(customFilter)];
            // deconstucts customFilter to an array of its values
            const filterObj = [...Object.values(customFilter)];
            // iterates thru the data filter with price
            filterdWPrice.map((i) => {
                // iterates thru the array of arrays of custom filters, giving [this,this]
                filterObj.map((f) => {
                    // iterates thru eatch array from the array of arrays of custom filters, giving [["this","this","this"]]
                    f.map((fO) => {
                        // itterates thru filterType, giving ["this"]
                        filterType.map((fT) => {
                            // checks if the item from array from the array of arrays of custom filters is the same as the itteration the data filter with price's
                            // value of the current itteration of filterType
                            if (fO == i[fT]) {
                                filteredWCustom.push(i);
                            }
                        });
                    });
                });
            });
            // returns last value if false
        } else filteredWCustom = [...filterdWPrice];
        console.log("filterd", filterd);
        console.log("filterdWRating", filterdWRating);
        console.log("filterdWPrice", filterdWPrice);
        console.log("filteredWCustom", filteredWCustom);
        console.log();

        return filteredWCustom;
    }
    // reset filters
    const [reset, doReset] = useState(false);
    const nulstill = () => {
        setsearch();
        setSortBy("resultSynk");
        setvurdering([]);
        doReset(!reset);
        setPriceMaxValue(calcPriceMax());
        setPriceMinValue(calcPriceMin());
        //
        window.scroll({ top: 300, behavior: "auto" });
    };

    // to find the max price in the list of products
    function calcPriceMax() {
        function compare(a, b) {
            if (a.price < b.price) {
                return 1;
            } else if (a.price > b.price) {
                return -1;
            } else return 0;
        }
        return Math.ceil(test.objects.sort(compare)[0].price);
    }
    // to find the min price in the list of products
    function calcPriceMin() {
        function compare(a, b) {
            if (a.price < b.price) {
                return -1;
            } else if (a.price > b.price) {
                return 1;
            } else return 0;
        }
        return Math.floor(test.objects.sort(compare)[0].price);
    }

    return (
        <main key={reset}>
            <div className={`maxWidth ${styles.testPage}`}>
                <nav className={styles.path}>
                    <Link to="">Tester</Link>
                    <Chevron size="xxs" />
                    <Link
                        to={`?searchBar:&searchBtn:${test.topic.toLowerCase().replace(/ /g, "-")}`}
                    >
                        {test.topic}
                    </Link>
                    <Chevron size="xxs" />
                    <span>{test.header}</span>
                </nav>

                <div id={styles.testPageGrayBox}>
                    <div className="imgWrap">
                        <img
                            src={test.img.includes("://") ? test.img : "/img/" + test.img}
                            alt={test.imgAlt}
                        />
                    </div>
                    <div className={styles.testPageGrayBoxContent}>
                        <LinkBtn
                            content={test.topic}
                            href={`?searchBar:&searchBtn:${test.topic
                                .toLowerCase()
                                .replace(/ /g, "-")}`}
                        ></LinkBtn>
                        <h2>{test.header}</h2>
                        <p style={{ marginBottom: "10px" }}>
                            Publissert: {formatDate(test.date, "DD longM YYYY")}
                        </p>
                        <p>{formatContent(test.content)}</p>
                        <LinkBtn content="Les mer om testen" chevron></LinkBtn>
                    </div>
                </div>

                {/*  */}

                <div className={styles.testHeader}>
                    <p>Filter</p>
                    <LinkBtn
                        content="Nulstill filter"
                        color="transparent"
                        hover="transparent"
                        className={styles.filter}
                        onClick={() => {
                            nulstill();
                        }}
                    ></LinkBtn>
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Søk etter produkt"
                        value={search}
                        onChange={(e) => setsearch(e.target.value)}
                    />
                    <label htmlFor="search" className={styles.search}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </label>
                    <select
                        name="sort"
                        id="sort"
                        onChange={(e) => {
                            setSortBy(e.target.value);
                        }}
                    >
                        <option value="resultSynk">Testresultat stigende</option>
                        <option value="resultRize">Testresultat synkende</option>
                        <option value="nameSynk">Produktnavn synkende</option>
                        <option value="nameRize">Produktnavn stigende</option>
                        <option value="new">Nyeste først</option>
                        <option value="old">Eldste først</option>
                    </select>
                    <label htmlFor="sort" className={styles.sortV}>
                        <i className="fa-solid fa-chevron-down"></i>
                    </label>
                    <LinkBtn
                        content="Sammenlign"
                        color="var(--FR-color-lg)"
                        hover="var(--FR-color-lb)"
                        className={styles.compare}
                    ></LinkBtn>
                </div>

                {/*  */}

                <div className={styles.testList}>
                    <div>
                        <h4>Vurdering</h4>
                        {test.objects[0].ratingType === "smiley" && (
                            <div className={styles.ratingWrap}>
                                <div>
                                    <input
                                        id="good"
                                        className="checkbox"
                                        type="checkbox"
                                        onChange={(e) => {
                                            handleVurdering(e);
                                        }}
                                    ></input>
                                    <label htmlFor="good" className="checkmark"></label>
                                </div>
                                <span>God</span>
                                <div>
                                    <input
                                        id="ok"
                                        className="checkbox"
                                        type="checkbox"
                                        onChange={(e) => {
                                            handleVurdering(e);
                                        }}
                                    ></input>
                                    <label htmlFor="ok" className="checkmark"></label>
                                </div>
                                <span>Medium</span>
                                <div>
                                    <input
                                        id="bad"
                                        className="checkbox"
                                        type="checkbox"
                                        onChange={(e) => {
                                            handleVurdering(e);
                                        }}
                                    ></input>
                                    <label htmlFor="bad" className="checkmark"></label>
                                </div>
                                <span>Lav</span>
                            </div>
                        )}
                        {test.objects[0].ratingType === "grade" && (
                            <>
                                <div className={styles.ratingWrap}>
                                    <div>
                                        <input
                                            id="9,10"
                                            className="checkbox"
                                            type="checkbox"
                                            onChange={(e) => {
                                                handleVurdering(e);
                                            }}
                                        ></input>
                                        <label htmlFor="9,10" className="checkmark"></label>
                                    </div>
                                    <span>9 - 10</span>
                                    <div>
                                        <input
                                            id="7,8"
                                            className="checkbox"
                                            type="checkbox"
                                            onChange={(e) => {
                                                handleVurdering(e);
                                            }}
                                        ></input>
                                        <label htmlFor="7,8" className="checkmark"></label>
                                    </div>
                                    <span>7 - 8</span>
                                    <div>
                                        <input
                                            id="5,6"
                                            className="checkbox"
                                            type="checkbox"
                                            onChange={(e) => {
                                                handleVurdering(e);
                                            }}
                                        ></input>
                                        <label htmlFor="5,6" className="checkmark"></label>
                                    </div>
                                    <span>5 - 6</span>
                                    <div>
                                        <input
                                            id="3,4"
                                            className="checkbox"
                                            type="checkbox"
                                            onChange={(e) => {
                                                handleVurdering(e);
                                            }}
                                        ></input>
                                        <label htmlFor="3,4" className="checkmark"></label>
                                    </div>
                                    <span>3 - 4</span>
                                    <div>
                                        <input
                                            id="1,2"
                                            className="checkbox"
                                            type="checkbox"
                                            onChange={(e) => {
                                                handleVurdering(e);
                                            }}
                                        ></input>
                                        <label htmlFor="1,2" className="checkmark"></label>
                                    </div>
                                    <span>1 - 2</span>
                                </div>
                                <p>Pris {`(Kr. ${calcPriceMin()} - ${calcPriceMax()},-)`}</p>
                                <div style={{ width: "50%", margin: "0 auto" }}>
                                    <Slider
                                        max={calcPriceMax()}
                                        min={calcPriceMin()}
                                        maxValue={priceMaxValue}
                                        setMaxValue={setPriceMaxValue}
                                        minValue={priceMinValue}
                                        setMinValue={setPriceMinValue}
                                    ></Slider>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            marginTop: "20px",
                                        }}
                                    >
                                        <span style={{ marginLeft: "-10px" }}>
                                            Kr: {priceMinValue},-
                                        </span>
                                        <span style={{ marginRight: "-20px" }}>
                                            Kr: {priceMaxValue},-
                                        </span>
                                    </div>
                                </div>
                            </>
                        )}
                        <SortBy param="manufacturer" test={test} call={handleCustomFilter}></SortBy>
                    </div>
                    <div>
                        <div className={styles.testObjectWrap}>
                            {sortTest(filter(test.objects)).map((obj, i) => (
                                <TestObject obj={obj} key={i}></TestObject>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
