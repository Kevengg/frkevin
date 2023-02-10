import { Nyheter, Contacts, GrayBox, Raporter, Horinger } from "../../component";

export default function Strom() {
    return (
        <div id="strom">
            <Nyheter sort="strøm" />

            <GrayBox
                topic="forbrukerpolitikk"
                header="Våre prioriteringer"
                content="Det skal bli enklere å ta gode strømvalg, redusere energifattigdom og legge til rette for økt energisparing."
                linkBtn={[
                    {
                        content: "Se vår strattegi",
                        chevron: true,
                    },
                ]}
            />

            <Raporter sort="strøm" />

            <Horinger sort="strøm" />

            <Contacts names={["Andreas Strandskog", "Øyvind"]} />
        </div>
    );
}
