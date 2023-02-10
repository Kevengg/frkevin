import { Nyheter, Contacts, GrayBox, Raporter, Horinger } from "../../component";

export default function Okonomi() {
    return (
        <div id="okonomi">
            <Nyheter sort="Økonomi" />

            <GrayBox
                topic="forbrukerpolitikk"
                header="Våre prioriteringer"
                content="Gjøre det enklere å få oversikt over egen økonomi, et mer forbrukervennlig inkasssomarked og bedre forbrukervren ved kreditt og gjeld."
                linkBtn={[
                    {
                        content: "Se vår strattegi",
                        chevron: true,
                    },
                ]}
            />

            <Raporter sort="økonomi" />

            <Horinger sort="økonomi" />

            <Contacts names={["jorge", "andreas"]} />
        </div>
    );
}
