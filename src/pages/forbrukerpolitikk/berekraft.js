import { Nyheter, Contacts, GrayBox, Raporter, Tester, Horinger } from "../../component";
import forbrukerrtilsynet from "../../img/Forbrukerrtilsynet.png";

export default function Berekraft() {
    return (
        <div id="berekraft">
            <Nyheter sort="Bærekraft" />
            <div className="hero">
                <h2>Brukt til jul?</h2>
                <div className="heroBtn" tabIndex="0">
                    Rettigheter for bruktkjøp
                    <i className="fa-solid fa-chevron-right fa-xs"></i>
                </div>
            </div>

            <GrayBox
                topic="Forbrukerpolitik"
                header="Våre prioriteringer"
                img={forbrukerrtilsynet}
                content="Det må bli enklere å velge miljøvennlig, styrke rettighetene ved sirkulære forretningsmodeller og gjøre det tryggere, enklere og billigere å reparere, kjøpe brukt og leie."
                linkBtn={[
                    {
                        content: "Se vår strattegi",
                        chevron: true,
                    },
                ]}
            />

            <Raporter sort="Bærekraft" />

            <Horinger sort="Bærekraft" />

            <Contacts names={["Gunstein", "Andreas"]} />
        </div>
    );
}
