import { formatDate } from "../../../component";
import styles from "../../../css/tester/testPage.module.css";

export default function ComparePage({ obj, info }) {
    function SortItem({ item }) {
        return (
            <div className={styles.compareItem}>
                <div className={styles.compareListHeader}>
                    <div
                        className="imgWrap"
                        style={{
                            backgroundColor: "white",
                            margin: " 5px 2.5px 0 2.5px",
                            overflow: "hidden",
                        }}
                    >
                        <img
                            src={item.img.includes("://") ? item.img : "./img/" + item.img}
                            alt=""
                        />
                    </div>
                    <div className={styles.CompareListItem}> {item.product} </div>
                </div>
                <div className={styles.comparePoints}></div>
                <div className={styles.CompareListItem}>
                    {item.ratingType == "grade" ? `${item.rating} / 10` : item.rating}
                </div>
                <div className={styles.CompareListItem}>{formatDate(item.date, "dd.mm.yyy")}</div>
                {item.price && <div className={styles.CompareListItem}>kr {item.price}</div>}
                <div className={styles.CompareListItem}> {item.manufacturer} </div>
                {item.ratingPoints.map((p, i) => {
                    return (
                        <div className={styles.CompareListItem} key={i}>
                            {p[1] === true ? "ja" : p[1] === false ? "nei" : p[1]}
                        </div>
                    );
                })}
            </div>
        );
    }

    return (
        <main>
            <div className="maxWidth">
                <div className={styles.compareWrap}>
                    <div className={styles.comparePoints}>
                        <div className={styles.compareListHeader}></div>
                        <div className={styles.CompareListItem}> Samlet score </div>
                        <div className={styles.CompareListItem}>Test dato</div>
                        {obj[info[0]].price && <div className={styles.CompareListItem}>Pris</div>}
                        <div className={styles.CompareListItem}>Produsent</div>
                        {obj[info[0]].ratingPoints.map((p, i) => {
                            return (
                                <div className={styles.CompareListItem} key={i}>
                                    {p[0]}
                                </div>
                            );
                        })}
                        <div className={styles.falseScroll}></div>
                    </div>

                    <div className={styles.compareItemsWrap}>
                        {console.log(obj)}
                        {obj.map((o, i) => {
                            return <SortItem item={o} key={i}></SortItem>;
                        })}
                    </div>
                </div>
            </div>
        </main>
    );
}
