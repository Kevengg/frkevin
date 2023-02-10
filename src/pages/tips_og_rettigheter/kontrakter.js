import { ToppSection } from "../../component";
import style from "../../css/kontrakter.module.css";

const Kontrakt = (props) => {
    return (
        <div class={style.kontrakt}>
            <div class={style.kontrakterMark}>Kontrakt</div>
            <h2>{props.header}</h2>
            <p>{props.content}</p>

            {props.nbHref && (
                <>
                    <a href="props.nbHref" class={`linkBtn ${style.linkBtn}`}>
                        <p>Bokmål</p>
                        <i class="fa-solid fa-chevron-right"></i>
                    </a>
                </>
            )}
            {props.nnHref && (
                <>
                    <a href="props.nnHref" class={`linkBtn ${style.linkBtn}`}>
                        <p>Nynorsk</p>
                        <i class="fa-solid fa-chevron-right"></i>
                    </a>
                </>
            )}
            {props.enHref && (
                <>
                    <a href="props.enHref" class={`linkBtn ${style.linkBtn}`}>
                        <p>English</p>
                        <i class="fa-solid fa-chevron-right"></i>
                    </a>
                </>
            )}
        </div>
    );
};

export default function Kontrakter() {
    return (
        <>
            <style></style>
            <main>
                <ToppSection
                    path={["Tips og rettigheter", "Kontrakter"]}
                    header="Kontrakter"
                    content="Det er lurt å bruke kontrakt når du kjøper eller leier. Det blir enklere å fastslå hva dere er blitt enige om og gjør at du står sterkere ved en eventuell konflikt."
                ></ToppSection>

                <div className="maxWidth">
                    {/*  */}
                    <div class={style.kontrakterWrap}>
                        <Kontrakt
                            header="Husleiekontrakt"
                            content="Standardkontrakt for leie av bolig. Det skal skrives leiekontrakt hvis en av partene krever det."
                            nbHref="#"
                            nnHref="#"
                            enHref="#"
                        ></Kontrakt>
                        <Kontrakt
                            header="Kjøp av fast eiendom"
                            content="Kontrakten kan brukes ved kjøp av hus, eierseksjon eller hytte mellom private uten bruk av megler."
                            nbHref="#"
                            nnHref="#"
                            enHref="#"
                        ></Kontrakt>
                        <Kontrakt
                            header="Håndverkertjenester"
                            content="Kontrakten kan brukes for avtaler om arbeid på fast eiendom, men ikke for nyoppføring av bolig."
                            nbHref="#"
                            nnHref="#"
                            enHref="#"
                        ></Kontrakt>
                        <Kontrakt
                            header="Kjøp av bruktbil"
                            content="Bruk kontrakten når du skal kjøpe bruktbil, så forsikrer du deg mot de verste bilfellene."
                            nbHref="#"
                            nnHref="#"
                            enHref="#"
                        ></Kontrakt>
                        <Kontrakt
                            header="Kjøp av brukt campingvogn"
                            content="Dette er en kontrakt som kan brukes ved salg av brukt campingvogn mellom privatpersoner."
                            nbHref="#"
                            nnHref="#"
                            enHref="#"
                        ></Kontrakt>
                        <Kontrakt
                            header="Kjøp av brukt bobil"
                            content="Dette er en kontrakt som kan brukes ved salg av brukt bobil mellom privatpersoner."
                            nbHref="#"
                            nnHref="#"
                            enHref="#"
                        ></Kontrakt>
                        <Kontrakt
                            header="Kjøp av brukt motorsykkel/moped"
                            content="Dette er en kontrakt som kan brukes ved salg av brukt motorsykkel, moped eller ATV mellom privatpersoner."
                            nbHref="#"
                            nnHref="#"
                            enHref="#"
                        ></Kontrakt>
                        <Kontrakt
                            header="Kjøp av fritidsbåt"
                            content="Dette er en kontrakt som kan brukes ved salg av brukt fritidsbåt mellom privatpersoner."
                            nbHref="#"
                            nnHref="#"
                            enHref="#"
                        ></Kontrakt>
                        <Kontrakt
                            header="Kjøp av ting"
                            content="Kontrakt ved kjøp og salg av ting. Fyll ut alle punktene som er relevante, og undersøk gjenstanden først."
                            nbHref="#"
                            nnHref="#"
                            enHref="#"
                        ></Kontrakt>
                        <Kontrakt
                            header="Kjøp av husdyr"
                            content="Kontrakt for når du kjøper eller selger husdyr. Fyll ut alle relevante punkter, og undersøk dyret før inngåelse."
                            nbHref="#"
                            nnHref="#"
                            enHref="#"
                        ></Kontrakt>
                        <Kontrakt
                            header="Kjøp av Elsykkel"
                            content="Dette er en kontrakt som kan brukes ved salg av brukt elsykkel mellom privatpersoner."
                            nbHref="#"
                        ></Kontrakt>
                    </div>
                </div>
            </main>
        </>
    );
}
