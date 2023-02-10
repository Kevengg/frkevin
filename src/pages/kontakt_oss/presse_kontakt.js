import styles from "../../css/presse.module.css";
import { Contacts, LinkBtn, Nyheter, ToppSection } from "../../component";

export default function Presse() {
    async function close(t) {
        if (document.getElementById("direktørWrap").className == styles.contactsWrapClosed) {
            document.getElementById("direktørWrap").className = styles.contactsWrap;
        } else {
            document.getElementById("direktørWrap").className = styles.contactsWrapClosed;
        }
    }

    return (
        <main>
            <ToppSection
                path={["Kontakt oss", "Presse"]}
                header="Presse"
                content={`Kontakt oss gjerne hvis du har spørsmål eller ønsker et intervju. Du kan også holde deg oppdatert ved å abonnere på vårt nyhetsvarsel.`}
            ></ToppSection>

            <div className="maxWidth">
                <Contacts names={["Bengt", "maren", "Andreas", "øyvind", "tove"]}></Contacts>

                <Nyheter header="Siste nytt"></Nyheter>

                <div className={styles.pressebilder}>
                    <h2>Pressebilder</h2>
                    <div className="pressebilderWrap">
                        <h3
                            onClick={() => {
                                close("direktør");
                            }}
                        >
                            {" "}
                            Direktør{" "}
                        </h3>
                        <div id="direktørWrap" className={styles.contactsWrap}>
                            <Contacts header="" presseBilder={true} names={["Inger"]}></Contacts>
                        </div>
                    </div>

                    <div className="pressebilderWrap">
                        <h3 onClick=""> Talspersoner </h3>
                        <div className={styles.contactsWrap}>
                            <Contacts
                                header=""
                                presseBilder={true}
                                names={[
                                    "finn",
                                    "thomas",
                                    "Gunstein",
                                    "tone",
                                    "jorge",
                                    "olav",
                                    "Amna",
                                    "Nora",
                                ]}
                            ></Contacts>
                        </div>
                    </div>

                    <div id={styles.merSom}>
                        <div className={styles.merSomItem}>
                            <h3>Abonner på nyhetsvarsel</h3>
                            <LinkBtn
                                content="Få varsel om siste nytt"
                                chevron={true}
                                href="#"
                            ></LinkBtn>
                        </div>
                        <div className={styles.merSomItem}>
                            <h3>Be om innsyn i en sak</h3>
                            <LinkBtn content="Søk eInnsyn" external={true} href="#"></LinkBtn>
                        </div>
                        <div className={styles.merSomItem}>
                            <h3>Retningslinjer for bruk av logo</h3>
                            <LinkBtn
                                content="Retningslinjer for bruk av logo"
                                download="#"
                            ></LinkBtn>
                            <LinkBtn content="Forbrukerrådets logo(jpeg)" download="#"></LinkBtn>
                        </div>
                    </div>

                    <div className={styles.pressehenvendelser}>
                        <h2>Registrering av pressehenvendelser</h2>
                        <p>
                            Vi registrerer alle mediehenvendelser i verktøyet Medieloggen, med
                            opplysninger om redaksjon, navn, telefon og e-post, og hva saken
                            gjelder. Opplysningene blir bare brukt internt i seksjonen for
                            kommunikasjon, og de blir ikke utlevert. Vi følger opp og evaluerer
                            henvendelsene, men bruker ikke opplysningene til andre formål. Dersom du
                            ønsker at kontaktinformasjonen din og henvendelsen din ikke skal
                            loggføres, eller du vil at vi skal slette opplysningene fra tidligere
                            henvendelser, ta kontakt med en av pressekontaktene ovenfor.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
