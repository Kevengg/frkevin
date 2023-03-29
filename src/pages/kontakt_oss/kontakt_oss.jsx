import {
    GuideBtn,
    LinkBtnOld,
    GrayBox,
    ToppSection,
    LinkBtn,
    Chevron,
    FrDroppDown,
} from "../../component";
import styles from "../../css/kontakt_oss.module.css";

export default function KontaktOss() {
    return (
        <main>
            <ToppSection
                path={["Kontakt oss"]}
                header="Kontakt oss"
                content="Vi hjelper deg med spørsmål om dine forbrukerrettigheter."
            ></ToppSection>
            <div className="maxWidth" style={{ padding: "0" }}>
                <GuideBtn></GuideBtn>
            </div>
            <div className="maxWidthSmall">
                <div style={{ display: "none" }}>
                    <h2>Mange lurer på</h2>
                    <div>
                        <div>
                            <h3>Rettighetene dine ved Flyr-konkurs</h3> <i>{/* + / - */}</i>
                        </div>
                        <div>
                            <p>
                                Flyr lyktes ikke med ny finansieringsplan{" "}
                                <a href="#">og har begjært selskapet konkurs</a>. Alle Flyrs
                                flygninger er innstilt og billettsalget er stanset.
                            </p>
                            <br />
                            <p>
                                Alle reiser med Flyr er innstilt, og selskapet vil dessverre heller
                                ikke kunne ordne med ombooking. Dette gjelder også hvis du er på
                                reise og trenger ny retur.
                            </p>
                            <br />
                            <p>
                                Krav om refusjon må meldes til konkursboet {"("}
                                <a href="flyr@kvale.no">flyr@kvale.no</a>
                                {")"} . Som forbruker stiller du langt bak i køen av kreditorer, og
                                det er liten sjanse for at du får ut penger fra boet.
                            </p>
                            <br />
                            <p>
                                OBS! Hvis du har bestilt reisen med et bankkort vil du ha rett på
                                tilbakebetaling av billettene fra kortutsteder, som i de fleste
                                tilfeller er banken din. Dette gjelder også ved bruk av Vipps.{" "}
                                <a href="">Les mer om kortreklamasjon.</a>
                            </p>
                            <br />
                            <p>
                                Erstatning andre tapsposter må rettes til konkursboet. Slike
                                tapsposter er typisk nye billetter med andre selskaper, leiebil,
                                hotell og kulturaktiviteter du ikke får avbestilt.
                            </p>
                            <br />
                            <p>Reiseforsikringen din dekker ikke tap som skyldes konkurs.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>Kan jeg kreve prisreduksjon som følge av Teslas priskutt?</h3>
                            <i>{/* + / - */}</i>
                        </div>
                        <div>
                            <p>
                                I utgangspunktet er avtalen du har inngått bindende. I tillegg er
                                det fri prissetting i Norge, noe som betyr at næringslivet innenfor
                                svært vide rammer kan sette egne priser. Det er alltid en risiko ved
                                kjøp av varer, og at varen enten faller i pris eller kommer på salg
                                etter handelen er en av disse.
                            </p>
                            <br />
                            <p>
                                Hvis du har bestilt og venter på ny Tesla, så har Forbrukerrådet i
                                dialog med Tesla forstått det slik at kunder som allerede har bil i
                                bestilling blir flyttet til ny pris. Det betyr at prisjustering
                                gjelder også for disse kundene, uten at de trenger å legge inn ny
                                bestilling.
                            </p>
                            <br />
                            <p>
                                Hvis du har bestilt ny Tesla på nett, løper angrefristen ut 14 dager
                                etter levering, noe som betyr at du kan angre også de to første
                                ukene etter du har hentet ut bilen. Det er likevel viktig å huske at
                                Tesla kan kreve at du betaler for den verdireduksjonen som dagene
                                har medført. Som en tommelfingerregel har du samme rett til å prøve
                                bilen etter angrerettloven som du har når du prøvekjører.
                            </p>
                            <br />
                            <p>
                                Hvis du har kjøpt bilen hos en bruktbilselger eller privat så er det
                                ingen mulighet å forhandle med prisen. Hvis du skal selge en Tesla
                                brukt, og opplever at prisreduksjonen gjør at du taper penger ved at
                                bruksverdien faller, så er det heller ikke noe du kan kreve
                                erstattet.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>Venter du på penger fra Stayclassy?</h3> <i>{/* + / - */}</i>
                        </div>
                        <div>
                            <p>
                                Stayclassy har varslet at de vil begjære selskapet konkurs. Slik går
                                du frem hvis selskapets skylder deg penger.
                            </p>
                            <br />
                            <p>
                                Hvis du har et utestående krav hos selskapet, må du nå melde det inn
                                til konkursboet (
                                <a href="stayclassy.no">
                                    kontaktinformasjon legges trolig på stayclassy.no
                                </a>
                                ). Her stiller du i midlertidig langt bak i køen av kreditorer, og
                                sjansen for at du får tilbake penger er liten.
                            </p>
                            <br />
                            <p>
                                Steg to er å benytte seg av såkalt kortreklamasjon. Det betyr at
                                hvis du har betalt med debet- eller kredittkort, så kan du kreve
                                pengene tilbake fra kortutsteder, som i de fleste tilfeller er
                                banken din. Dette gjelder både hvis du har bestilt og kjøpt varen på
                                nett og i butikk. <a href="">Les mer om kortreklamasjon</a>.
                            </p>
                            <br />
                            <br />
                            <h4>Venter du på levering eller reperasjon</h4>
                            <br />
                            <p>
                                Hvis du venter på noe annet enn penger fra Stayclassy, som for
                                eksempel en ny del eller reparasjon av sykkelen din blir det
                                annerledes. Siden verken Stayclassy eller konkursboet kommer til å
                                oppfylle disse kravene, må de gjøres om til pengekrav for å rettes
                                mot banken.
                            </p>
                            <br />
                            <p>
                                Du har rett på pengene tilbake for kjøpet, eventuelt et prisavslag,
                                hvis sparkesykkelen ikke blir fikset. Det er dette kravet du kan
                                sende til banken som kortreklamasjon. Merk at banken er ikke
                                ansvarlig for å få varen fikset, og er kun ansvarlig for et
                                økonomisk oppgjør.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2>Ta kontakt med oss</h2>
                    <div className={styles.kontaktskjemaWrap}>
                        <div className={styles.kontaktskjemaHeader}>
                            <i className="fa-regular fa-regular fa-envelope">{/* letter */}</i>
                            <label htmlFor="kontaktskjema">Kontaktskjema</label>
                            <div className="openSymbol gridRowSpan2">
                                <div className=" openSymbol1 openSymbol1close"></div>
                                <div className="openSymbol2 "></div>
                            </div>
                            <p className="gridColSpan2">
                                Du får normalt svar innen fem virkedager. OBS! Vi opplever for tiden
                                stor pågang. Det vil dessverre ta lengre tid å få svar.
                            </p>
                        </div>
                        <div className={styles.kontaktskjema}>
                            <form id="kontaktskjema">
                                <h4>Har du et spørsmål kan du benytte vårt kontaktskjema.</h4>
                                <p>Alle felter merket * er obligatoriske og må fylles ut.</p>

                                <label htmlFor="navn">Navn*</label>
                                <input id="navn" type="text" placeholder="Ditt navn" />

                                <label htmlFor="postnummer">Postnummer*</label>
                                <input
                                    id="postnummer"
                                    type="number"
                                    placeholder="Ditt postnummer"
                                />

                                <label htmlFor="ePost">E-post*</label>
                                <input id="ePost" type="text" placeholder="Din epost" />

                                <label htmlFor="tlf">Telefonnummer*</label>
                                <input id="tlf" type="number" placeholder="Ditt telefonnummer" />

                                <label htmlFor="overkategori">Hva gjelder henvendelsen*</label>
                                <select id="overkategori">
                                    <option value={null} selected disabled>
                                        -- Velg hovedkategori --
                                    </option>
                                </select>

                                <label htmlFor="underkategori">Velg underkategori*</label>
                                <select id="underkategori">
                                    <option value={null} selected disabled>
                                        -- Velg underkategori --
                                    </option>
                                </select>

                                <label htmlFor="underkategori">
                                    Hva er årsaken til henvendelsen*
                                </label>
                                <select id="underkategori">
                                    <option value={null} selected disabled>
                                        -- Velg årsaken til henvendelsen --
                                    </option>
                                </select>

                                <label htmlFor="avtalepart">Hvem er selger eller avtalepart*</label>
                                <select id="avtalepart">
                                    <option value={null} selected disabled>
                                        -- Velg selger eller avtalepart --
                                    </option>
                                </select>

                                <label htmlFor="Salgsmetode">Salgsmetode*</label>
                                <select id="Salgsmetode">
                                    <option value={null} selected disabled>
                                        -- Velg Salgsmetode --
                                    </option>
                                </select>

                                <label htmlFor="fritekst">Fritekst*</label>
                                <textarea id="fritekst" cols="30" rows="10"></textarea>

                                <div className={styles.formSelect}>
                                    <div>
                                        <label htmlFor="tilatTlf">
                                            Hvis du krysser av for at vi kan kontakte deg på
                                            telefon, vil vi kunne besvare henvendelsen din raskere.
                                        </label>
                                        <input
                                            className="checkbox"
                                            id="tilatTlf"
                                            type="checkbox"
                                        ></input>
                                        <label htmlFor="tilatTlf" className="checkmark"></label>
                                    </div>

                                    <div>
                                        <label htmlFor="undersøkelser">
                                            Jeg vil gjerne delta på forbrukerundersøkelser i regi av
                                            Forbrukerrådet.
                                        </label>
                                        <input
                                            id="undersøkelser"
                                            className="checkbox"
                                            type="checkbox"
                                        ></input>
                                        <label
                                            htmlFor="undersøkelser"
                                            className="checkmark"
                                        ></label>
                                    </div>

                                    <div>
                                        <label htmlFor="samtykke">
                                            Jeg samtykker til at Forbrukerrådet behandler mine
                                            persondata for å følge opp henvendelsen min.*
                                        </label>
                                        <input
                                            id="samtykke"
                                            className="checkbox"
                                            type="checkbox"
                                        ></input>
                                        <label htmlFor="samtykke" className="checkmark"></label>
                                    </div>
                                </div>

                                <a href="#" style={{ textDecoration: "underline" }}>
                                    Fobrukerrådets personvernerklæring
                                </a>

                                <LinkBtnOld content="Send" onClick={() => {}}></LinkBtnOld>
                            </form>

                            <div>
                                <h4>Du får normalt svar innen fem virkedager.</h4>
                                <p>
                                    Vi kan hjelpe deg når du har handlet en vare eller tjeneste som
                                    privatperson. Er du næringsdrivende kan vi hjelpe deg med
                                    spørsmål om forbrukerens rettigheter.
                                </p>
                                <br />
                                <p>
                                    OBS! Noen ganger er det svært mange som kontakter oss, og da kan
                                    det dessverre ta noe lengre tid før vi får hjulpet deg.
                                </p>
                                <br />
                                <h4>Personopplysninger</h4>
                                <p>
                                    Vi trenger informasjon om problemet ditt for å kunne gi deg
                                    veiledning. Det er likevel ikke behov for mye informasjon om
                                    deg. Vi ber om at du ikke skriver inn sentrale
                                    personopplysninger som fødsels- eller personnummer,
                                    sykdomshistorikk eller lignende informasjon. Svar fra oss vil
                                    sendes via kryptert epost. Les personvernserklæringen vår her.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div id="ring">
                        <div className="ringHeader">
                            <i>{/* tlf */}</i>
                            <h3>Snakk med oss</h3>
                            <i> {/* + / - */} </i>
                            <p>Vi svarer deg så fort som mulig.</p>
                        </div>
                        <div className="ringContent">
                            <article>
                                <h4>Telefonnummer:</h4>
                                <p>23 40 05 00</p>
                                <h4>Åpningstider:</h4>
                                <p>Mandag-tirsdag: 09:00-14:00</p>
                                <p>Onsdag: 09:00-11.00</p>
                                <p>Torsdag-fredag: 09.00-14.00</p>
                                <p>
                                    Grunnet stor pågang av henvendelser kan det være litt ventetid.
                                    Vi svarer deg så fort som mulig.
                                </p>
                            </article>
                        </div>
                    </div>

                    <GrayBox
                        topic="Forbrukertilsynet"
                        header="Kontakt Forbrukertilsynet"
                        content="Ta kontakt hvis du ønsker å klage på ulovlig markedsføring eller avtalevilkår.
                        <br /><br />Tilsynet kan også bidra med mekling hvis du er i konflikt med en næringsdrivende."
                        linkBtn={[
                            {
                                content: "Forbrukertilsynet",
                                external: true,
                                href: "#",
                            },
                        ]}
                    ></GrayBox>

                    <div id="adresse">
                        <div id="adresseHeader">
                            <i>{/* lokation */}</i>
                            <h3>Forbrukerrådets adresse</h3>
                        </div>
                        <span>
                            <h4>Bedriftsadresse: </h4>
                            <p>Fred Olsens gate 1, 0152 Oslo.</p>
                        </span>
                        <p>
                            Vi har dessverre ikke anledning til å ta imot forbrukere ved vårt
                            kontor, men kontakt oss gjerne på telefon eller via kontaktskjema.
                        </p>

                        <span>
                            <h4>Postboks: </h4>
                            <p>
                                463 Sentrum, 0105 Oslo,{" "}
                                <a href="#" style={{ textDecoration: "underline" }}>
                                    postmottak
                                </a>
                            </p>
                        </span>
                        <p>
                            Forbrukerhenvendelser sendes inn via kontaktskjemaet ovenfor. Denne
                            kontaktadressen er kun ment for administrativ post, og ikke for
                            forbrukerspørsmål.
                        </p>
                        <p>
                            Har du spørsmål om nettsiden kontakt{" "}
                            <a href="#" style={{ textDecoration: "underline" }}>
                                nettansvarlig
                            </a>
                            .
                        </p>
                        <div style={{ backgroundColor: "blue" }}></div>
                        <LinkBtnOld content="Finn oss på kartet" external={true}></LinkBtnOld>
                    </div>
                </div>
            </div>
        </main>
    );
}
