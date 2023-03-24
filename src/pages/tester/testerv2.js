import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import TesterHjem from "./tester_components/tester_home";
import TestPage from "./tester_components/test";
import TestObjectPage from "./tester_components/testObjectPage";
import testsList from "../../data/tester.json";
import ComparePage from "./tester_components/comparePage";
import ReadMore from "./tester_components/readMore";

export default function TesterV2() {
    const [page, setPage] = useState(<TesterHjem updatePage={updatePage}></TesterHjem>);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    useEffect(() => {
        var url = queryParams.get("page");
        var compare = queryParams.get("compare");
        var readMore = queryParams.get("readmore");

        if (compare) {
            // [{testObject}, {testObject}], [index, index]

            updatePage(
                testsList.find((obj) => obj.header.toLowerCase().replace(/ /g, "-") === url)
                    .objects,
                compare.split(""),
                testsList.find((obj) => obj.header.toLowerCase().replace(/ /g, "-") === url)
            );
        } else if (url) {
            var page = url.split("/");

            var pageUrl = [
                testsList.find((obj) => obj.header.toLowerCase().replace(/ /g, "-") === page[0]),
            ];

            pageUrl.push(
                pageUrl[0].objects.find(
                    (obj) => obj.product.toLowerCase().replace(/ /g, "-") === page[1]
                )
            );

            updatePage(pageUrl[1] ? pageUrl[1] : pageUrl[0], pageUrl[1] ? pageUrl[0] : undefined);
        } else updatePage();
        // makes query string empty insted of searchBar:&searchBtn: when none is selected
    }, [location.search]);

    function updatePage(page, info, info2) {
        var readMore = queryParams.get("readmore");
        // console.log(page);
        // console.log(typeof page);
        // console.log("info", info);
        if (typeof page === "object") {
            if (readMore) {
                setPage(<ReadMore page={page}></ReadMore>);
            } else if (page.hasOwnProperty("header")) {
                setPage(<TestPage page={page} info={info} updatePage={updatePage} />);
            } else if (page.hasOwnProperty("product")) {
                setPage(
                    <TestObjectPage obj={page} info={info} updatePage={updatePage}></TestObjectPage>
                );
            } else {
                setPage(<ComparePage obj={page} info={info} parent={info2}></ComparePage>);
            }
        } else setPage(<TesterHjem updatePage={updatePage} />);
        window.scrollTo(0, 0);
    }

    return <>{page}</>;
}
