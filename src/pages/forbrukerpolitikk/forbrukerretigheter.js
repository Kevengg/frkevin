import { Nyheter, Contacts, GrayBox, Raporter, Horinger, Campain } from "../../component";

export default function Forbrukerretigheter() {
    return (
        <div id="forbrukerretigheter">
            <Nyheter sort="Forbrukerretigheter" />

            <GrayBox
                topic="forbrukerpolitikk"
                header="Våre prioriteringer"
                content="Bedre kundeservice, sikre passasjerrettighetene, trygge kjøp av nullutslippsbiler og øke forbrukerkunnskap hos unge."
                linkBtn={[
                    {
                        content: "Se vår strattegi",
                        chevron: true,
                    },
                ]}
            />

            <Raporter sort="Forbrukerretigheter" />

            <Campain header1="Report on loot boxes: Insert coin" topic1="Kampanje digital" />

            <Horinger sort="forbrukerretigheter" />

            <Contacts names={["thomas", "maren"]} />
        </div>
    );
}
