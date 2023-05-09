import { Link } from "react-router-dom";
import frLogo from "../img/forbrukerradet_logo.svg";
import frLogoSmall from "../img/forbrukerradet_logo_symbol.svg";
import { useState } from "react";

console.log("main js loaded");

var menuOpen = false;
function openMenu() {
    if (document.getElementById("headerSearchHide").classList != "headerSearchHidden") {
        document.getElementById("headerSearchHide").classList.toggle("headerSearchHidden");
    }
    if (menuOpen == false) {
        document.getElementById("bar1").classList = "burgerBar bar1X";
        document.getElementById("bar2").classList = "burgerBar bar2X";
        document.getElementById("bar3").classList = "burgerBar bar3X";
        document.getElementById("menuBack").style = "background-color: #04aac4;";
        menuOpen = true;
        document.getElementById("menuHide").classList = "";
        document.body.style = "position: fixed;";
    } else if (menuOpen == true) {
        document.getElementById("bar1").classList = "burgerBar";
        document.getElementById("bar2").classList = "burgerBar";
        document.getElementById("bar3").classList = "burgerBar";
        document.getElementById("menuBack").style = "background-color: none";
        menuOpen = false;
        document.getElementById("menuHide").classList = "menuHidden";
        document.body.style = "position: static;";
    }
}

function openSearch() {
    if (menuOpen == true) {
        openMenu();
    }
    document.getElementById("headerSearchHide").classList.toggle("headerSearchHidden");
    if (document.body.style.position == "fixed") {
        document.body.style = "position: static;";
    } else {
        document.body.style = "position: fixed;";
    }
}

// handle enter click on page
window.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        document.activeElement.click();
    }
});

export default function Headers() {
    const [headerSearch, setHeaderSearch] = useState("");

    return (
        <header>
            <a href="#" id="hopp" style={{ position: "absolute" }}>
                hopp til innhold
            </a>
            <nav className="headerNav">
                <div>
                    <a href="/" style={{ height: "fit-content", width: "fit-content" }}>
                        <picture>
                            <source media="(min-width: 461px)" srcSet={frLogo} />
                            <img src={frLogoSmall} alt="DoesntMatchAnyMedia" />
                        </picture>
                    </a>
                </div>

                <div className="headerLinkHolder">
                    <a href="/tips_og_rettigheter">Tips og rettigheter</a>

                    <a href="/forbrukerpolitikk">Forbrukerpolitikk</a>

                    <a href="/kontakt-oss"> kontakt oss </a>
                </div>

                <div
                    className="headerSearchHolder"
                    role="search"
                    aria-label="Søk"
                    tabIndex="0"
                    onClick={(e) => {
                        openSearch();
                        e.target.closest("header").querySelector("#headerSearch").focus();
                    }}
                >
                    <i
                        style={{ color: "#9a9a9a" }}
                        className="fa-solid fa-magnifying-glass fa-sm"
                    ></i>
                    <p style={{ color: "#9a9a9a" }}>Søk</p>
                </div>

                <div
                    className="menuBack"
                    id="menuBack"
                    onClick={() => {
                        openMenu();
                    }}
                    tabIndex="0"
                    role="navigation"
                >
                    <div className="menuFront" id="menuFront">
                        <div className="burgerMenu">
                            <span>
                                <div id="bar1" className="burgerBar"></div>
                            </span>
                            <span>
                                <div id="bar2" className="burgerBar"></div>
                            </span>
                            <span>
                                <div id="bar3" className="burgerBar"></div>
                            </span>
                        </div>
                        <p>Meny</p>
                    </div>
                </div>
            </nav>
            <div
                className="headerSearchHidden"
                id="headerSearchHide"
                onClick={() => {
                    openSearch();
                }}
            >
                <div
                    id="headerSearchBox"
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    <div id="headerSearchBarSpacer">
                        <div id="headerSearchBar">
                            <input
                                type="search"
                                name=""
                                id="headerSearch"
                                placeholder="Søk"
                                value={headerSearch}
                                onChange={(e) => {
                                    setHeaderSearch(e.target.value);
                                }}
                                onKeyDown={(e) => {
                                    if (e.key == "Enter") {
                                        e.target
                                            .closest("#headerSearchBar")
                                            .querySelector("a")
                                            .click();
                                    }
                                }}
                            />
                            <a
                                href={
                                    (headerSearch.length >= 3 || true) &&
                                    `/search?search=${headerSearch}`
                                }
                                id="headerSearchBtn"
                            >
                                <div>
                                    <i className="fa-solid fa-magnifying-glass fa-lg"></i> Søk
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menuHidden" id="menuHide">
                <div className="menuWidth">
                    <nav id="menu">
                        <div id="viHjelperDeg" className="menuColum">
                            <a href="" className="menuHeader">
                                <h3>Vi hjelper deg</h3>
                            </a>
                            <div className="menuSpacer"></div>
                            <a href="/tips_og_rettigheter/har_du_en_sak">Har du en sak?</a>
                            <a href="">Angrer du på et kjøp?</a>
                            <a href="/tips_og_rettigheter/slik_klager_du">Slik klager du</a>
                            <a href="">Klagebrev</a>
                            <a href="/tips_og_rettigheter/kontrakter">Kontrakter</a>
                            <a href="/tester">Våre tester</a>
                            <a href="">Flykalkulatoren</a>
                        </div>
                        <div id="TipsOgRettigheter" className="menuColum">
                            <a href="/tips_og_rettigheter" className="menuHeader">
                                <h3>Tips og rettigheter</h3>
                            </a>
                            <div className="menuSpacer"></div>
                            <a href="">Bil</a>
                            <a href="">Bolig</a>
                            <a href="">Økonomi og betaling</a>
                            <a href="">Digitale</a>
                            <a href="">Reise</a>
                            <a href="">Andre varer og tjenester</a>
                        </div>
                        <div id="Forbrukerpolitikk" className="menuColum">
                            <a href="/forbrukerpolitikk" className="menuHeader">
                                <h3>Forbrukerpolitikk</h3>
                            </a>
                            <div className="menuSpacer"></div>
                            <a href="/forbrukerpolitikk?side=berekraft">Bærekraft</a>
                            <a href="/forbrukerpolitikk?side=digitaleRettigheter">
                                Digitale rettigheter
                            </a>
                            <a href="/forbrukerpolitikk?side=okonomi">Økonomi</a>
                            <a href="/forbrukerpolitikk?side=forbrukerretigheter">
                                Forbrukerrettigheter
                            </a>
                            <a href="/forbrukerpolitikk?side=strom">Strøm</a>
                            <a href="/forbrukerpolitikk?side=bolig">Bolig</a>
                            <a href="/forbrukerpolitikk?side=mat">Mat</a>
                        </div>
                        <div id="detteErOss" className="menuColum">
                            <a href="" className="menuHeader">
                                <h3>Dette er oss</h3>
                            </a>
                            <div className="menuSpacer"></div>
                            <a href="">Om oss</a>
                            <a href="/kontakt-oss">Kontakt oss</a>
                            <a href="">Jobb hos oss</a>
                            <a href="">Klagebrev</a>
                            <a href="/kontakt-oss/presse">Presse</a>
                            <a href="/siste-nytt">Siste nytt</a>
                            <a href="">Høringssvars</a>
                        </div>
                    </nav>
                </div>
                <div
                    className="menuClose"
                    onClick={() => {
                        openMenu();
                    }}
                    aria-label="trykk får å lukke menyen"
                    tabIndex="0"
                ></div>
            </div>
        </header>
    );
}
