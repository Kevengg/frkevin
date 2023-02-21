import style from "../../../css/tester/tester_hjem.module.css";

export default function FilterWrap(props) {
    const searchData = props.searchData;
    const updateSearchData = (searchBar, searchBtn) => {
        props.updateSearchData(searchBar, searchBtn);
    };
    const updateTopsection = props.updateTopsection;
    const forceUpdateTopsection = (not) => {
        props.forceUpdateTopsection(not);
    };

    function Filter(props) {
        return (
            <div
                style={{
                    display: searchData.searchBtn.includes(props.filter.toLowerCase())
                        ? "flex"
                        : "none",
                }}
                className={style.filter}
                onClick={() => {
                    updateSearchData(undefined, props.filter);
                    forceUpdateTopsection(!updateTopsection);
                }}
            >
                <span>{props.filter}</span>
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
            <Filter filter="Mat og drikke"></Filter>
            <Filter filter="Fritid"></Filter>
            <Filter filter="Bilbarneseter"></Filter>
            <Filter filter="Helse og pleie"></Filter>
            <Filter filter="Hus og hjem"></Filter>
        </div>
    );
}
