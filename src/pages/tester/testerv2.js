import { useState } from "react";
import TesterHjem from "./tester_components/tester_home";
import TestPage from "./tester_components/test";
import TestObjectPage from "./tester_components/testObjectPage";

export default function TesterV2() {
    const [page, setPage] = useState(<TesterHjem updatePage={updatePage}></TesterHjem>);

    function updatePage(page, info) {
        // console.log(page);
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
