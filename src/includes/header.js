import frLogo from "../img/forbrukerradet_logo.svg";
import frLogoSmall from "../img/forbrukerradet_logo_symbol.svg";

console.log("main js loaded");
var menuOpen = false;
function openMenu() {
    if (menuOpen == false) {
        document.getElementById("bar1").classList = "burgerBar bar1X";
        document.getElementById("bar2").classList = "burgerBar bar2X";
        document.getElementById("bar3").classList = "burgerBar bar3X";
        document.getElementById("menuBack").style = "background-color: #04aac4;";
        menuOpen = true;
        document.getElementById("menuHide").classList = "shown";
        document.body.style = "position: fixed;";
    } else if (menuOpen == true) {
        document.getElementById("bar1").classList = "burgerBar";
        document.getElementById("bar2").classList = "burgerBar";
        document.getElementById("bar3").classList = "burgerBar";
        document.getElementById("menuBack").style = "background-color: none";
        menuOpen = false;
        document.getElementById("menuHide").classList = "hidden";
        document.body.style = "position: static;";
    }
}

// handle enter click on page
window.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        document.activeElement.click();
    }
});

export default function Headers() {
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

                    <a href="/kontakt_oss"> kontakt oss </a>
                </div>

                <div className="headerSearchHolder" role="search" aria-label="Søk" tabIndex="0">
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
            <div className="hidden" id="menuHide">
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
                            <a href="">Våre tester</a>
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
                            <a href="/forbrukerpolitikk/bærekraft">Bærekraft</a>
                            <a href="/forbrukerpolitikk#openDigitaleRettigheter">
                                Digitale rettigheter
                            </a>
                            <a href="/forbrukerpolitikk#openoOkonomi">Økonomi</a>
                            <a href="/forbrukerpolitikk#openForbrukerretigheter">
                                Forbrukerrettigheter
                            </a>
                            <a href="/forbrukerpolitikk#openStrom">Strøm</a>
                            <a href="/forbrukerpolitikk#openBolig">Bolig</a>
                            <a href="/forbrukerpolitikk#openMat">Mat</a>
                        </div>
                        <div id="detteErOss" className="menuColum">
                            <a href="" className="menuHeader">
                                <h3>Dette er oss</h3>
                            </a>
                            <div className="menuSpacer"></div>
                            <a href="">Om oss</a>
                            <a href="/kontakt_oss">Kontakt oss</a>
                            <a href="">Jobb hos oss</a>
                            <a href="">Klagebrev</a>
                            <a href="/kontakt_oss/presse">Presse</a>
                            <a href="">Siste nytt</a>
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
