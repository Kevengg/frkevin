import { Nyheter, formatContent, formatDate } from "../../../component";

export default function readMore({ page }) {
    return (
        <main>
            <div className="maxWidth">
                <h1>{page.readMore.header}</h1>
                <div className={style.date}>{formatDate(page.date, "dd.longm.yyyy")}</div>
                <div className={style.page}>
                    <div className={style.pageLeft}> {formatContent(page.readMore.content)} </div>
                    <div className={style.pageRight}>
                        <div className={style.contacts}>
                            <Contacts names={page.readMore.right.writers} />
                            <div className={style.tldr}>
                                <h2>Om testen</h2>
                                <div className={style.tldrSpacer}>
                                    <article>{formatContent(page.right.tldr)}</article>
                                </div>
                                <div>Aboner på vårt nyhetsbrev</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="maxWidth">Relaterte saker</div>
            </div>
            <div className="maxWidth">
                <Nyheter sort={page.topic} />
            </div>
        </main>
    );
}
