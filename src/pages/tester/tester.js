import style from "../../css/tester/tester_hjem.module.css";
import { useState, useEffect } from "react";

import SearchBar from "./tester_components/search_bar";

function Category(props) {
    return <div className={style.categoryBtn}>{props.content}</div>;
}

// page nummer
var pageNr = 0;

function PageNr() {
    pageNr++;
    return <div className="pageNr">{pageNr}</div>;
}

export default function Tester() {
    const [testCount, setTestCount] = useState(0);
    const [tests, setTests] = useState({ tests: [] });

    useEffect(() => {
        for (let i = 0; i < 10; i++) {
            var placeholder = {
                href: "#",
                img: "https://picsum.photos/600",
                category: "Hus og hjem",
                header: "Bakeformer" + i,
                content:
                    "Vi har testet bakeformer i silikon for å undersøke om de lekker kjemikalier til maten. 8 av 18 bakeformer får rødt lys og bunnotering i testen. Problematiske siloksaner smitter over fra formene til kaker og muffins under steking.",
            };
            let testHolder = tests;
            testHolder.tests.push(placeholder);
            setTests(testHolder);
        }
    }, []);

    function TestWrap(props) {
        // need:
        // href
        // img
        // cattegory
        // tittle
        // content

        return (
            <div className={style.testsWrap}>
                {props.tests.map((test) => {
                    return (
                        <a className={style.test} href={test.href}>
                            <div className={style.testImgWrap}>
                                <img src={test.img} alt={test.imgAlt} />
                            </div>
                            <div className={style.testCategory}>{test.category}</div>
                            <h3>{test.header}</h3>
                            <p> {test.content} </p>
                        </a>
                    );
                })}
            </div>
        );

        // return (
        //     <a className={style.test} href={props.href}>
        //         <div className={style.testImgWrap}>
        //             <img src={props.img} alt={props.imgAlt} />
        //         </div>
        //         <div className={style.testCategory}>{props.category}</div>
        //         <h3>{props.header}</h3>
        //         <p> {props.content} </p>
        //     </a>
        // );
    }

    const [searchData, setSearchData] = useState({});
    const updateSearchData = (searchData) => {
        setSearchData(searchData);
    };

    return (
        <div className="App">
            <div className={style.pageTopWrap}>
                <h1>Forbrukerrådets tester</h1>
                <p>
                    Det skal være lett å velge miljøvennlig, også når du må kjøpe noe nytt. Våre
                    tester skal hjelpe deg å ta gode valg, enten du er opptatt av miljø, pris eller
                    kvalitet. Hvis du vil unngå produkter som raskt går i stykker, fungerer dårlig
                    eller inneholder skadelige kjemikalier, kan du lese alle testene våre her.
                </p>

                <SearchBar updateSearchData={updateSearchData}></SearchBar>
                <p>{searchData.data ? searchData["data"] : "no data"}</p>

                <div className={style.categoryWrap}>
                    <Category content="Mat og drikke" />
                    <Category content="Fritid" />
                    <Category content="Bilbarneseter" />
                    <Category content="Helse og pleie" />
                    <Category content="Hus og hjem" />
                </div>
            </div>

            <div className="maxWidth">
                <div className={style.testHeader}>
                    <h2>Alle våre {testCount} tester</h2>
                    <div className={style.testSort}>
                        mest rellevante tester <i className="fa-solid fa-chevron-down fa-2xs"></i>
                    </div>
                </div>
                <TestWrap tests={tests["tests"]}></TestWrap>
                {/* <Test
                        href="#"
                        img="https://picsum.photos/600"
                        category="Hus og hjem"
                        header="Bakeformer"
                        content="Vi har testet bakeformer i silikon for å undersøke om de lekker kjemikalier til maten. 8 av 18 bakeformer får rødt lys og bunnotering i testen. Problematiske siloksaner smitter over fra formene til kaker og muffins under steking."
                    />
                    <Test
                        href="#"
                        img="https://picsum.photos/600"
                        category="Hus og hjem"
                        header="Bakeformer"
                        content="Vi har testet bakeformer i silikon for å undersøke om de lekker kjemikalier til maten. 8 av 18 bakeformer får rødt lys og bunnotering i testen. Problematiske siloksaner smitter over fra formene til kaker og muffins under steking."
                    />
                    <Test
                        href="#"
                        img="https://picsum.photos/600"
                        category="Hus og hjem"
                        header="Bakeformer"
                        content="Vi har testet bakeformer i silikon for å undersøke om de lekker kjemikalier til maten. 8 av 18 bakeformer får rødt lys og bunnotering i testen. Problematiske siloksaner smitter over fra formene til kaker og muffins under steking."
                    />
                    <Test
                        href="#"
                        img="https://picsum.photos/600"
                        category="Hus og hjem"
                        header="Bakeformer"
                        content="Vi har testet bakeformer i silikon for å undersøke om de lekker kjemikalier til maten. 8 av 18 bakeformer får rødt lys og bunnotering i testen. Problematiske siloksaner smitter over fra formene til kaker og muffins under steking."
                    />
                    <Test
                        href="#"
                        img="https://picsum.photos/600"
                        category="Hus og hjem"
                        header="Bakeformer"
                        content="Vi har testet bakeformer i silikon for å undersøke om de lekker kjemikalier til maten. 8 av 18 bakeformer får rødt lys og bunnotering i testen. Problematiske siloksaner smitter over fra formene til kaker og muffins under steking."
                    />
                    <Test
                        href="#"
                        img="https://picsum.photos/600"
                        category="Hus og hjem"
                        header="Bakeformer"
                        content="Vi har testet bakeformer i silikon for å undersøke om de lekker kjemikalier til maten. 8 av 18 bakeformer får rødt lys og bunnotering i testen. Problematiske siloksaner smitter over fra formene til kaker og muffins under steking."
                    />
                    <Test
                        href="#"
                        img="https://picsum.photos/600"
                        category="Hus og hjem"
                        header="Bakeformer"
                        content="Vi har testet bakeformer i silikon for å undersøke om de lekker kjemikalier til maten. 8 av 18 bakeformer får rødt lys og bunnotering i testen. Problematiske siloksaner smitter over fra formene til kaker og muffins under steking."
                    />
                    <Test
                        href="#"
                        img="https://picsum.photos/600"
                        category="Hus og hjem"
                        header="Bakeformer"
                        content="Vi har testet bakeformer i silikon for å undersøke om de lekker kjemikalier til maten. 8 av 18 bakeformer får rødt lys og bunnotering i testen. Problematiske siloksaner smitter over fra formene til kaker og muffins under steking."
                    />
                    <Test
                        href="#"
                        img="https://picsum.photos/600"
                        category="Hus og hjem"
                        header="Bakeformer"
                        content="Vi har testet bakeformer i silikon for å undersøke om de lekker kjemikalier til maten. 8 av 18 bakeformer får rødt lys og bunnotering i testen. Problematiske siloksaner smitter over fra formene til kaker og muffins under steking."
                    />
                    <Test
                        href="#"
                        img="https://picsum.photos/600"
                        category="Hus og hjem"
                        header="Bakeformer"
                        content="Vi har testet bakeformer i silikon for å undersøke om de lekker kjemikalier til maten. 8 av 18 bakeformer får rødt lys og bunnotering i testen. Problematiske siloksaner smitter over fra formene til kaker og muffins under steking."
                    />
                    <Test
                        href="#"
                        img="https://picsum.photos/600"
                        category="Hus og hjem"
                        header="Bakeformer"
                        content="Vi har testet bakeformer i silikon for å undersøke om de lekker kjemikalier til maten. 8 av 18 bakeformer får rødt lys og bunnotering i testen. Problematiske siloksaner smitter over fra formene til kaker og muffins under steking."
                    />
                    <Test
                        href="#"
                        img="https://picsum.photos/600"
                        category="test"
                        header="tester"
                        content="test test test"
                    />

                    <Test
                        href="#"
                        img="https://picsum.photos/600"
                        header="header"
                        content="content"
                    /> */}

                <PageNr />
                <PageNr />
                <PageNr />
                <PageNr />
                <PageNr />
                <PageNr />
            </div>
            {useEffect(() => {
                setTestCount(document.querySelectorAll("." + style.test).length);
            }, [])}
        </div>
    );
}
