import style from "../../../css/tester/tester_hjem.module.css";

export default function FilterWrap(props) {
    function Filter(props) {
        return (
            <div className={styleClacFilter(props.searchData)}>
                {props.filter}
                <i className="fa-solid fa-x"></i>
            </div>
        );
    }

    function styleClacFilter(filter) {
        if (props.searchData == filter.Filter) {
            return `${style.filter} ${style.filterOn}`;
        } else return style.filter;
    }
    return (
        <div className={style.filterWrap}>
            <Filter filter="mat og drikke" searchData={props.searchData}></Filter>
            <Filter filter="fritid" searchData={props.searchData}></Filter>
            <Filter filter="barneseter" searchData={props.searchData}></Filter>
            <Filter filter="helse og pleie" searchData={props.searchData}></Filter>
            <Filter filter="hus og hjem" searchData={props.searchData}></Filter>
        </div>
    );
}
