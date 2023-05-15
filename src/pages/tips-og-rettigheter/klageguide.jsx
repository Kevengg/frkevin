import { ToppSection, formatContent, LinkBtn } from "../../component";
import styles from "../../css/klageguide.module.css";

export default function KlageGuide() {
    function close(id) {
        console.log("click");
        var target = id + "content";
        document.getElementById(target);
        console.log(id, target);
    }

    function Box(props) {
        return (
            <div>
                <div>
                    <i></i>
                    <h2></h2>
                    <i></i>
                </div>
                <div>
                    {props.header.map((h, index) => {
                        return (
                            <>
                                <h3>{h}</h3>
                                <div>{formatContent(props.content[index])}</div>
                            </>
                        );
                    })}
                </div>
            </div>
        );
    }

    return (
        <main>
            <ToppSection
                path={["Tips og rettigheter", "Slik klager du"]}
                header={"Slik klager du"}
                content={
                    "Er det en feil eller mangel med det du har kjøpt? Her finner du informasjon om hvordan du går frem for å klage."
                }
            ></ToppSection>
            <div className="maxWidth">
                <div id={styles.langBtnWrap}>
                    <section
                        onClick={() => {}}
                        className={styles.langBtn}
                        id="NOB"
                        style={{ backgroundColor: "var(--FR-color-db)", color: "white" }}
                    >
                        Bokmål
                    </section>
                    <section onClick={() => {}} className={styles.langBtn} id="NON">
                        Nynorsk
                    </section>
                    <section onClick={() => {}} className={styles.langBtn} id="E">
                        English
                    </section>
                </div>
                <div className={styles.boxWArrowWrap}>
                    <a href="#selger">
                        <div className={styles.boxWArrow}>
                            <div className={styles.arrow}></div>
                            <div className={styles.arrowShadow}></div>
                            <h2>1</h2>
                            <div className={styles.boxWArrowSpacer} aria-hidden></div>
                            <p>Klag til selger</p>
                        </div>
                    </a>

                    <a href="#banken">
                        <div className={styles.boxWArrow}>
                            <div className={styles.arrow}></div>
                            <div className={styles.arrowShadow}></div>
                            <h2>2</h2>
                            <div className={styles.boxWArrowSpacer} aria-hidden></div>
                            <p>Klag til banken</p>
                        </div>
                    </a>

                    <a href="#klageorgan">
                        <div className={styles.boxWArrow}>
                            <div className={styles.arrow}></div>
                            <div className={styles.arrowShadow}></div>
                            <h2>3</h2>
                            <div className={styles.boxWArrowSpacer} aria-hidden></div>
                            <p>Klag til klageorgan</p>
                        </div>
                    </a>
                </div>
                <Box
                    header={["header"]}
                    content={[
                        " test <br /> test test <LinkBtn content='hello' /> <div>hi <div><div>HEI</div><div>here</div> HALOYSAN</div></div> <LinkBtn content='hello' chevron={true} /><LinkBtn content='hello' external={true} href='/' /> <LinkBtn content='hello' download='/tester' /> <br /> hi",
                    ]}
                ></Box>
            </div>
        </main>
    );
}
