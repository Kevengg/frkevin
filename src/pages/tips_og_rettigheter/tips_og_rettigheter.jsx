import { ToppSection, GuideBtn, Rettigheter } from "../../component";
import style from "../../css/tips_og_rettigheter.module.css";

const TipsOgRettigheter = () => {
    return (
        <main>
            <ToppSection
                path={["Tips og rettigheter"]}
                header="Tips og rettigheter"
                content="Her finner du tips og råd om hva du bør tenke på før du kjøper en vare eller en tjeneste, og hvilke rettigheter du har hvis kjøpet ikke ble som forventet."
            />
            <div className="maxWidth">
                <GuideBtn />

                <Rettigheter />

                <div className={style.veiledning}>
                    <div>
                        <h2>Trenger du mer veiledning?</h2>
                    </div>
                    <div>
                        <p>
                            Vi kan rådgi deg når du har handlet en vare eller tjeneste som
                            privatperson. Er du næringsdrivende kan vi veilede deg i spørsmål om
                            forbrukerens rettigheter.
                        </p>
                    </div>
                    <div>
                        <a className="linkBtn" href="/konakt-oss/kontakt-oss.php">
                            Kontakt oss
                            <i className="fa-solid fa-chevron-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default TipsOgRettigheter;
