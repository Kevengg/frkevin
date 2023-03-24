import { Contacts, Nyheter, formatContent, formatDate } from "../../../component";
import style from "../../../css/readMore.module.css";
export default function ReadMore({ page }) {
    return (
        <main>
            <div className="maxWidthMedium">
                <h1>{page.readMore.header}</h1>
                <div className={style.date}>{formatDate(page.date, "dd.longm.yyyy")}</div>
                <div className={style.page}>
                    <div className={style.pageLeft}> {formatContent(page.readMore.left)} </div>
                    <div className={style.pageRight}>
                        <div className={style.contacts}>
                            <Contacts names={page.readMore.right.writers} />
                            <div className={style.tldr}>
                                <h2>Om testen</h2>
                                <div className={style.tldrSpacer}>
                                    <article>{formatContent(page.readMore.right.tldr)}</article>
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
