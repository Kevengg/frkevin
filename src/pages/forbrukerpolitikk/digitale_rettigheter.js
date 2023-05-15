import { Nyheter, Contacts, GrayBox, Raporter, Horinger, Campain, Tester } from "../../component";
import forbrukerrtilsynet from "../../img/Forbrukerrtilsynet.png";

export default function DigitaleRettigheter() {
    return (
        <div id="DigitaleRettigheter">
            <Nyheter sort="Digitalt" />
            <GrayBox
                topic="forbrukerpolitikk"
                header="Våre prioriteringer"
                content="Manipulerende design, overvåkningsbasert markedsføring, kunstig intelligens, sikkerhet i tilkoblede produkter, digital barndom, utenforskap og konkurranse i bredbåndsmarkedet."
                linkBtn={[
                    {
                        content: "Se vår strattegi",
                        chevron: true,
                    },
                ]}
                img={forbrukerrtilsynet}
            />

            <Raporter sort="Digitalt" />

            <Campain
                header1="Report on loot boxes: Insert coin"
                topic1="Kampanje digital"
                header2="Report on loot boxes: Insert coin"
                topic2="Kampanje digital"
            />

            <Horinger sort="Digitalt" />

            <Contacts names={["Finn", "øyvind"]} />
        </div>
    );
}
