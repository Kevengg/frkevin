import { Nyheter, Contacts, GrayBox, Raporter, Horinger, Tester } from "../../component";

export default function Bolig() {
    return (
        <div id="bolig">
            <Nyheter sort="bolig" />

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

            <Raporter sort="bolig" />

            <Horinger sort="bolig" />

            <Contacts names={["Olav", "Hanne", "Bengt"]} />
        </div>
    );
}
