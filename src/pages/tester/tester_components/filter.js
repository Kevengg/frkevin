import style from "../../../css/tester/tester_hjem.module.css";

export default function FilterWrap(props) {
    function Filter(props) {
        return (
            <div
                style={{
                    display: props.searchData.searchBtn.includes(props.filter) ? "block" : "none",
                }}
            >
                {props.filter}
                <i className="fa-solid fa-x"></i>
            </div>
        );
    }

    function styleClacFilter(filter) {
        if (props.searchData == filter.filter) {
            return `${style.filter} ${style.filterOn}`;
        } else return style.filter;
    }
    return (
        <div className={style.filterWrap}>
            <Filter filter="mat og drikke" searchData={props.searchData}></Filter>
            <Filter filter="fritid" searchData={props.searchData}></Filter>
            <Filter filter="bilbarneseter" searchData={props.searchData}></Filter>
            <Filter filter="helse og pleie" searchData={props.searchData}></Filter>
            <Filter filter="hus og hjem" searchData={props.searchData}></Filter>
        </div>
    );
}
