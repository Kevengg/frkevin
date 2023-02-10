import { Nyheter, Contacts, GrayBox, Raporter, Horinger, Campain, Tester } from "../../component";

export default function Mat() {
    return (
        <div id="mat">
            <Nyheter sort="mat" />

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

            <Raporter sort="mat" />

            <Campain
                header1="Appetitt på livet"
                topic1="Kampanje mat"
                header2="Energidrikk"
                topic2="Kampanje mat"
            />

            <Tester />

            <Horinger sort="mat" />

            <Contacts names={["Gunstein", "Aysha", "Andreas"]} />
        </div>
    );
}
