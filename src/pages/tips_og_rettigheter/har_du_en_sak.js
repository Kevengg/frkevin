import { ToppSection } from "../../component";
import style from "../../css/har_du_en_sak.module.css";
import { useState } from "react";

export default function HarDuEnSak() {
    const [where, setWhere] = useState("");
    const [fault, setFault] = useState("");
    const [who, setWho] = useState("");
    const [when, setWhen] = useState("");
    const [location, setLocation] = useState("");
    const [answer, setAnswer] = useState("");
    const [more, setMore] = useState("");

    var submit = {
        what: null,
        where: null,
        fault: null,
        location: null,
        when: null,
    };

    function handleHva(id) {
        submit.what = id;
        setWhere(
            <div id="hvor">
                <h2>Hvor kjøpte du varen/tjenesten?</h2>
                <div className={style.valgWrap}>
                    <div
                        id="hvorNorge"
                        onClick={() => handleWhere("hvorNorge")}
                        className={style.valg}
                        tabIndex="0"
                        role="button"
                    >
                        <p>Norge</p>
                    </div>
                    <div
                        onClick={() => handleWhere("hvorEu")}
                        className={style.valg}
                        tabIndex="0"
                        role="button"
                    >
                        <p>EU</p>
                    </div>
                    <div
                        onClick={() => handleWhere("hvorVerden")}
                        className={style.valg}
                        tabIndex="0"
                        role="button"
                    >
                        <p>Verden</p>
                    </div>
                </div>
            </div>
        );
        setFault();
        setWho();
        setLocation();
        setWhen();
        setAnswer();
        setMore();
    }

    function handleWhere(id) {
        submit.where = id;

        if (id === "hvorNorge") {
            setFault(
                <div id="feil">
                    <h2>Hva skyldes feilen?</h2>
                    <div className={style.valgWrap}>
                        <div
                            onClick={() => handleFault("kvalitet")}
                            className={style.valg}
                            tabIndex="0"
                            role="button"
                        >
                            Dårglig kvalitet
                        </div>
                        <div
                            onClick={() => handleFault("pris")}
                            className={style.valg}
                            tabIndex="0"
                            role="button"
                        >
                            Feil pris
                        </div>
                        <div
                            onClick={() => handleFault("forsinkelse")}
                            className={style.valg}
                            tabIndex="0"
                            role="button"
                        >
                            Forsinkelse
                        </div>
                        <div
                            onClick={() => handleFault("feilUhell")}
                            className={style.valg}
                            tabIndex="0"
                            role="button"
                        >
                            Uhell
                        </div>
                    </div>
                </div>
            );
        } else if (id === "hvorEu") {
            setFault(
                <a className={`${style.svar} ${style.svarMedPil}`} tabIndex="0" role="link">
                    <div>
                        <h1>Kjøp i EU/EØS</h1>
                        <p>Forbruker Europa behandler klager på varer kjøpt i EU/EØS.</p>
                        <p>Du finner mer informasjon på deres nettsider.</p>
                    </div>
                    <i
                        className="fa-solid fa-chevron-right fa-xl"
                        style={{ display: "flex", alignItems: "center" }}
                    ></i>
                </a>
            );
        } else if (id === "hvorVerden") {
            setFault(
                <div className={style.svar} tabIndex="0">
                    <h1 className="gridRowSpan2">Kjøp utenfor EU/EØS</h1>
                    <p className="gridRowSpan2">
                        Forbrukerrådet kan ikke bistå dersom varen er kjøpt utenfor Norge.
                    </p>
                    <p className="gridRowSpan2">
                        Det er store variasjoner i forbrukerrettighetene i ulike deler av verden.
                        Sjekk vilkårene til butikken og hva som gjelder i det landet du har handlet
                        fra.
                    </p>
                </div>
            );
        }
        setWho();
        setLocation();
        setWhen();
        setAnswer();
        setMore();
    }

    function handleFault(id) {
        submit.fault = id;

        if (id === "feilUhell") {
            setWho(
                <div
                    id="uhellSvar"
                    className={style.svar}
                    tabIndex="0"
                    aria-description="rettigheter ved uhell"
                >
                    <p className="exclude">
                        Hvis du kjente til feilen da du kjøpte varen, eller at den skyldes uhell
                        eller uvettig bruk, så må du ta regningen selv.
                    </p>
                    <p>Du kan eventuelt sjekke om du har en forsikring som kan benyttes.</p>
                </div>
            );
        } else {
            setWho(
                <div id="hvem">
                    <h2 tabIndex="0">Hvem har du kjøpt varen av?</h2>
                    <div className={style.valgWrap}>
                        <div
                            className={style.valg}
                            onClick={() => handleWho("nering")}
                            tabIndex="0"
                            role="button"
                        >
                            Næringsdrivende
                        </div>
                        <div
                            className={style.valg}
                            onClick={() => handleWho("privat")}
                            tabIndex="0"
                            role="button"
                        >
                            privatperson
                        </div>
                    </div>
                </div>
            );
        }
        setLocation();
        setWhen();
        setAnswer();
        setMore();
    }

    function handleWho(id) {
        submit.who = id;
        if (id === "nering") {
            setLocation(
                <div id="lokasjon">
                    <h2 tabIndex="0">Hvor har du kjøpt varen/tjenesten?</h2>
                    <div className={style.valgWrap}>
                        <div
                            className={style.valg}
                            onClick={() => handleLocation("butikk")}
                            tabIndex="0"
                            role="button"
                        >
                            Butikk
                        </div>
                        <div
                            className={style.valg}
                            onClick={() => handleLocation("internett")}
                            tabIndex="0"
                            role="button"
                        >
                            Internett/dørsalg/stand
                        </div>
                    </div>
                </div>
            );
            setWhen("");
            setAnswer();
            setMore();
        } else if (id === "privat") {
            setWhen(
                <div id="naar">
                    <h2 tabIndex="0">Når ble kjøpet gjort?</h2>
                    <div className={style.valgWrap}>
                        <div
                            className={style.valg}
                            onClick={() => handleWhen("less2")}
                            tabIndex="0"
                            role="button"
                        >
                            Mindre enn 2 år siden
                        </div>
                        <div
                            className={style.valg}
                            onClick={() => handleWhen("25")}
                            tabIndex="0"
                            role="button"
                        >
                            2-5år siden
                        </div>
                        <div
                            className={style.valg}
                            onClick={() => handleWhen("more5")}
                            tabIndex="0"
                            role="button"
                        >
                            Mer enn 5år siden
                        </div>
                    </div>
                </div>
            );
            setLocation("");
            setAnswer();
            setMore();
        }
    }

    function handleLocation(id) {
        submit.location = id;
        setWhen(
            <div id="naar">
                <h2 tabIndex="0">Når ble kjøpet gjort?</h2>
                <div className={style.valgWrap}>
                    <div
                        className={style.valg}
                        onClick={() => handleWhen("less2")}
                        tabIndex="0"
                        role="button"
                    >
                        Mindre enn 2 år siden
                    </div>
                    <div
                        className={style.valg}
                        onClick={() => handleWhen("25")}
                        tabIndex="0"
                        role="button"
                    >
                        2-5år siden
                    </div>
                    <div
                        className={style.valg}
                        onClick={() => handleWhen("more5")}
                        tabIndex="0"
                        role="button"
                    >
                        Mer enn 5år siden
                    </div>
                </div>
            </div>
        );
    }

    function handleWhen(id) {
        submit.when = id;

        if (submit.who === "privat" && submit.when === "less2") {
            setAnswer(
                <>
                    <div id="sakPrivat" className={`${style.svar} ${style.sakJa}`} tabIndex="0">
                        <h1 className="gridRowSpan2">Ja, det ser ut som du har en sak</h1>
                        <p className="gridRowSpan2">
                            Det er i utgangspunktet 2 års klagefrist når du har kjøpt noe av en
                            privatperson. De aller fleste kjøp mellom private knytter seg til brukte
                            varer, og det må være et større avvik før du kan klage på varen.
                        </p>
                        <p className="gridRowSpan2">
                            Du kan uansett klage dersom det er gitt uriktig informasjon om varen,
                            eller dersom viktige opplysninger ikke ble videreformidlet ved salget.
                        </p>
                        <p className="gridRowSpan2">
                            Du kan ikke klage på feil du ville funnet ut av ved å sjekke varen før
                            du kjøpte den.
                        </p>
                    </div>

                    <div id={style.kalgeGuideWrap}>
                        <div
                            style={{
                                width: "0",
                                height: "0",
                                overflow: "hidden",
                                margin: "0",
                                padding: "0",
                            }}
                        >
                            <label tabIndex="0"> klage hjelp</label>
                        </div>
                        <div id={style.kalgeGuide}>
                            <div id={style.guide}>
                                <div className={style.guideBobble}>1</div>
                                <div className={style.guideSpacer}></div>
                                <div className={style.guideBobble}>2</div>
                                <div className={style.guideSpacer}></div>
                                <div className={style.guideBobble}>3</div>
                            </div>
                            <div style={{ height: "100%", margin: "0" }}>
                                <p
                                    tabIndex="0"
                                    aria-label="1: Ta kontakt med selger og se om dere kan bli enige om en løsning."
                                >
                                    Ta kontakt med selger og se om dere kan bli enige om en løsning.
                                </p>
                                <p
                                    tabIndex="0"
                                    aria-label="2: Hvis saken ikke løser seg, bør du sende e-post eller brev, slik at
                                    du har bevis på at du har klaget. Benytt gjerne et av Forbrukerrådets
                                    klagebrev."
                                >
                                    Hvis saken ikke løser seg, bør du sende e-post eller brev, slik
                                    at du har bevis på at du har klaget. Benytt gjerne et av
                                    Forbrukerrådets klagebrev.
                                </p>
                                <p
                                    className="exclude"
                                    tabIndex="0"
                                    aria-label="3: Hvis du ikke kommer til enighet med selger, kan du ta saken til
                                    mekling hos Forbrukertilsynet."
                                >
                                    Hvis du ikke kommer til enighet med selger, kan du ta saken til
                                    mekling hos Forbrukertilsynet.
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            );
        } else if (submit.who === "privat") {
            setAnswer(
                <div id="ikkeSakPrivat" className={style.svar} tabIndex="0">
                    <h1 className="gridRowSpan2">Det ser dessverre ikke ut som du har en sak</h1>
                    <p className="gridRowSpan2">
                        Det er kun to års klagefrist når du kjøper noe fra en privatperson.
                    </p>
                </div>
            );
            setMore();
        } else if (submit.who != "privat" && submit.when != "more5") {
            setAnswer(
                <>
                    <div id="sak" className={`${style.svar} ${style.sakJa}`} tabIndex="0">
                        <h1>Ja, det ser ut som du har en sak</h1>
                        <p>
                            Det er fem års klagefrist på de fleste kjøp. Forbruksvarer og andre
                            varer med kort holdbarhet har to års klagefrist. Du kan som hovedregel
                            ikke klage på vanlig slitasje.
                        </p>
                        <p>
                            Hvis varen eller tjenesten har en garanti, kan det hende du kan klage
                            selv om reklamasjonsfristen er ute.
                        </p>
                    </div>

                    <InternetCalc />

                    <div id={style.kalgeGuideWrap}>
                        <div
                            style={{
                                width: "0",
                                height: "0",
                                overflow: "hidden",
                                margin: "0",
                                padding: "0",
                            }}
                        >
                            <label tabIndex="0"> klage hjelp</label>
                        </div>
                        <div id={style.kalgeGuide}>
                            <div id={style.guide}>
                                <div className={style.guideBobble}>1</div>
                                <div className={style.guideSpacer}></div>
                                <div className={style.guideBobble}>2</div>
                                <div className={style.guideSpacer}></div>
                                <div className={style.guideBobble}>3</div>
                            </div>
                            <div style={{ height: "100%", margin: "0" }}>
                                <p
                                    tabIndex="0"
                                    aria-label="1: Ta kontakt med selger og se om dere kan bli enige om en løsning."
                                >
                                    Ta kontakt med selger og se om dere kan bli enige om en løsning.
                                </p>
                                <p
                                    tabIndex="0"
                                    aria-label="2: Hvis saken ikke løser seg, bør du sende e-post eller brev, slik at
                                    du har bevis på at du har klaget. Benytt gjerne et av Forbrukerrådets
                                    klagebrev."
                                >
                                    Hvis saken ikke løser seg, bør du sende e-post eller brev, slik
                                    at du har bevis på at du har klaget. Benytt gjerne et av
                                    Forbrukerrådets klagebrev.
                                </p>
                                <p
                                    className="exclude"
                                    tabIndex="0"
                                    aria-label="3: Hvis du ikke kommer til enighet med selger, kan du ta saken til
                                    mekling hos Forbrukertilsynet."
                                >
                                    Hvis du ikke kommer til enighet med selger, kan du ta saken til
                                    mekling hos Forbrukertilsynet.
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            );
        } else if (submit.who != "privat" && submit.when === "more5") {
            setAnswer(
                <div id="ikkeSak" className={style.svar} tabIndex="0">
                    <h1>Det ser dessverre ikke ut som du har en sak</h1>
                    <p>
                        Klagefristen er begrenset til fem år. Sjekk om eventuell garanti gir deg
                        rettigheter til å reklamere utover dette. Det kan også være lurt å sjekke om
                        du har forsikring som du kan benytte
                    </p>
                </div>
            );
            setMore();
        }

        if (submit.who != "privat" && submit.when != "more5") {
            const msg = "Her finner du mer informasjon om dine rettigheter ved kjøp av ";
            if (submit.what === "koptBil") {
                setMore(<MerOm content={msg + "bil"}></MerOm>);
            } else if (submit.what === "koptHandverk") {
                setMore(<MerOm content={msg + "håndverktjenester for bolig"}></MerOm>);
            } else if (submit.what === "koptElektro") {
                setMore(<MerOm content={msg + "elektronikk"}></MerOm>);
            } else if (submit.what === "koptHvitevarer") {
                setMore(<MerOm content={msg + "hvitevarer"}></MerOm>);
            } else if (submit.what === "koptMobler") {
                setMore(<MerOm content={msg + "møbler"}></MerOm>);
            } else if (submit.what === "koptKler") {
                setMore(<MerOm content={msg + "klær og sko"}></MerOm>);
            } else if (submit.what === "koptVerksted") {
                setMore(<MerOm content={msg + "verkstedtjenester"}></MerOm>);
            } else if (submit.what === "koptAndre") {
                setMore(<MerOm content={msg + "varer"}></MerOm>);
            }
        }
    }

    function MerOm(props) {
        return (
            <div id={style.merOm}>
                <a href="" id={style.merOmLink} className={`${style.svarMedPil} ${style.sakJa}`}>
                    <div> {props.content} </div>
                    <i
                        style={{ color: "var(--site-text-color)" }}
                        className="fa-solid fa-chevron-right fa-la"
                    ></i>
                </a>
            </div>
        );
    }

    function InternetCalc() {
        if (submit.location === "internett") {
            return (
                <div id="paInternet" className={`${style.svar} ${style.sakJa}`} tabIndex="0">
                    Hvis du har kjøpt varen på nett, på døra eller på stand, så har du 14 dagers
                    angrefrist. Sjekk også om butikken opererer med åpent kjøp i en periode.
                </div>
            );
        }
    }

    return (
        <main>
            <ToppSection
                path={["Tips og rettigheter", "Har du en sak?"]}
                header="Har du en sak?"
                content="Er ikke produktet eller tjenesten som forventet? Sjekk om du har grunn til å klage."
            ></ToppSection>
            <div className="maxWidth">
                <div id={style.calc}>
                    {/* <!-- Hva har du kjøpt? --> */}
                    <h2 role="header">Hva har du kjøpt?</h2>
                    <div id={style.hvaWrap}>
                        <div
                            className={style.hva}
                            id="koptBil"
                            onClick={() => handleHva("koptBil")}
                            tabIndex="0"
                            role="button"
                            aria-label="Bil"
                        >
                            <i className="fa-solid fa-car-side"></i>
                            <p>Bil</p>
                        </div>
                        <div
                            className={style.hva}
                            id="koptHandverk"
                            onClick={() => handleHva("koptHandverk")}
                            tabIndex="0"
                            role="button"
                        >
                            <i className="fa-solid fa-house"></i>
                            <p>Håndverktjeneste (bolig)</p>
                        </div>
                        <div
                            className={style.hva}
                            id="koptElektro"
                            onClick={() => handleHva("koptElektro")}
                            tabIndex="0"
                            role="button"
                        >
                            <i className="fa-solid fa-laptop"></i>
                            <p>Elektronikk</p>
                        </div>
                        <div
                            className={style.hva}
                            id="koptHvitevarer"
                            onClick={() => handleHva("koptHvitevarer")}
                            tabIndex="0"
                            role="button"
                        >
                            <i className="fa-solid fa-square"></i>
                            <p>Hvitevarer</p>
                        </div>
                        <div
                            className={style.hva}
                            id="koptMobler"
                            onClick={() => handleHva("koptMobler")}
                            tabIndex="0"
                            role="button"
                        >
                            <i className="fa-solid fa-couch"></i>
                            <p>Møbler</p>
                        </div>
                        <div
                            className={style.hva}
                            id="koptKler"
                            onClick={() => handleHva("koptKler")}
                            tabIndex="0"
                            role="button"
                        >
                            <i className="fa-solid fa-square"></i>
                            <p>Klær og sko</p>
                        </div>
                        <div
                            className={style.hva}
                            id="koptVerksted"
                            onClick={() => handleHva("koptVerksted")}
                            tabIndex="0"
                            role="button"
                        >
                            <i className="fa-solid fa-screwdriver-wrench"></i>
                            <p>Verkstedtjenester</p>
                        </div>
                        <div
                            className={style.hva}
                            id="koptAndre"
                            onClick={() => handleHva("koptAndre")}
                            tabIndex="0"
                            role="button"
                        >
                            <i className="fa-solid fa-bag-shopping"></i>
                            <p>Andre varer</p>
                        </div>
                        <a href="" className={style.hva} tabIndex="0" role="link">
                            <i className="fa-solid fa-plane"></i>
                            <p>Flyreiser</p>
                        </a>
                    </div>

                    {/* where */}
                    {where}

                    {/* fault / not FR's terretory */}
                    {fault}

                    {/* who did you buy it from / accident */}
                    {who}

                    {/* did you buy online or fom stand */}
                    {location}

                    {/* when */}
                    {when}

                    {/* coclution */}
                    {answer}

                    {/* more obout: */}
                    {more}
                </div>
            </div>
        </main>
    );
}
