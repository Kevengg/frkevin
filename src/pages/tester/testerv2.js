import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import TesterHjem from "./tester_components/tester_home";
import TestPage from "./tester_components/test";
import TestObjectPage from "./tester_components/testObjectPage";
import testsList from "../../data/tester.json";

// to do:
// make lower "Category" btn for text box?
// make "alle våre x tester" text change?
// make next page function for testWrap
// make text search take priorety over topic? (complex logic)
// style bread crumbs on testPage and TestObjectPage
// style all pages to work on mobile
// finish styling testPage
// make a sortComponent that sorts based on the sortBy object on a test

export default function TesterV2() {
    const [page, setPage] = useState(<TesterHjem updatePage={updatePage}></TesterHjem>);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    useEffect(() => {
        var url = queryParams.get("page");
        if (url) {
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

    function updatePage(page, info) {
        // console.log(page);
        // console.log(typeof page);
        // console.log("info", info);
        if (typeof page === "object") {
            if (page.hasOwnProperty("header")) {
                setPage(<TestPage page={page} info={info} updatePage={updatePage} />);
            } else {
                setPage(
                    <TestObjectPage obj={page} info={info} updatePage={updatePage}></TestObjectPage>
                );
            }
        } else setPage(<TesterHjem updatePage={updatePage} />);
        window.scrollTo(0, 0);
    }

    return <>{page}</>;
}
