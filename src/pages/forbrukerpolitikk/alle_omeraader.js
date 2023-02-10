import { Nyheter, GrayBox } from "../../component";
import politikk from "../../img/Forbrukerrtilsynet.png";

export default function AlleOmeraader() {
    return (
        <div id="alleOmeraader">
            <Nyheter />

            <GrayBox
                img={politikk}
                category="Forbrukerpolitik"
                header="Vår politikk"
                content="Forbrukerrådet skal være en synlig, tydelig og uavhengig interessepolitisk aktør, som ivaretar forbrukeres rettigheter og perspektiv og styrker deres muligheter til å utøve forbrukermakt."
                linkBtn={[
                    {
                        content: "Se vår strattegi",
                        chevron: true,
                    },
                ]}
            />

            <h2 style={{ marginBottom: "30px" }}>Våre prioriteringer</h2>
            <div id="prioriteringer">
                <a className="prioritet" tabIndex="0">
                    <i className="fa-solid fa-chevron-right"></i>
                    <h3>Digitale rettigheter</h3>
                    <i className="fa-solid fa-chevron-right"></i>
                </a>

                <a className="prioritet" tabIndex="0">
                    <i className="fa-solid fa-chevron-right"></i>
                    <h3>Digitale rettigheter</h3>
                    <i className="fa-solid fa-chevron-right"></i>
                </a>

                <a className="prioritet" tabIndex="0">
                    <i className="fa-solid fa-chevron-right"></i>
                    <h3>Digitale rettigheter</h3>
                    <i className="fa-solid fa-chevron-right"></i>
                </a>

                <a className="prioritet" tabIndex="0">
                    <i className="fa-solid fa-chevron-right"></i>
                    <h3>Digitale rettigheter</h3>
                    <i className="fa-solid fa-chevron-right"></i>
                </a>

                <a className="prioritet" tabIndex="0">
                    <i className="fa-solid fa-chevron-right"></i>
                    <h3>Digitale rettigheter</h3>
                    <i className="fa-solid fa-chevron-right"></i>
                </a>

                <a className="prioritet" tabIndex="0">
                    <i className="fa-solid fa-chevron-right"></i>
                    <h3>Digitale rettigheter</h3>
                    <i className="fa-solid fa-chevron-right"></i>
                </a>

                <a className="prioritet" tabIndex="0">
                    <i className="fa-solid fa-chevron-right"></i>
                    <h3>Digitale rettigheter</h3>
                    <i className="fa-solid fa-chevron-right"></i>
                </a>
            </div>
        </div>
    );
}
