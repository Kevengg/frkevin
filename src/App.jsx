import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Forbrukerpolitikk from "./pages/forbrukerpolitikk/forbrukerpolitikk";
import TipsOgRettigheter from "./pages/tips-og-rettigheter/tips-og-rettigheter";
import Kontrakter from "./pages/tips-og-rettigheter/kontrakter";
import HarDuEnSak from "./pages/tips-og-rettigheter/har_du_en_sak";
import TesterV2 from "./pages/tester/testerv2";
import KontaktOss from "./pages/kontakt_oss/kontakt_oss";
import Presse from "./pages/kontakt_oss/presse_kontakt";
import KlageGuide from "./pages/tips-og-rettigheter/klageguide";
import SearchPage from "./pages/search/search";
import Article from "./pages/articles/articlePreset";
import SisteNytt from "./pages/siste_nytt/sisteNytt";
import KontaktPage from "./pages/kontakt_oss/kontakt";
import Reise from "./pages/tips-og-rettigheter/reise/reise";
import Fly from "./pages/tips-og-rettigheter/reise/fly/fly";
import Flykalkulator from "./pages/tips-og-rettigheter/reise/fly/flykalkulator/flykalkulator";

// app
export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tester" element={<TesterV2 />} />
            <Route path="/forbrukerpolitikk" element={<Forbrukerpolitikk />} />
            <Route path="/tips-og-rettigheter" element={<TipsOgRettigheter />} />
            <>
                <Route path="/tips-og-rettigheter/reise" element={<Reise />} />
                <>
                    <>
                        <Route path="/tips-og-rettigheter/reise/fly" element={<Fly />} />
                        <>
                            <Route
                                path="/tips-og-rettigheter/reise/fly/flykalkulator"
                                element={<Flykalkulator />}
                            />
                        </>
                    </>
                    <Route path="/tips-og-rettigheter/kontrakter" element={<Kontrakter />} />
                    <Route path="/tips-og-rettigheter/har_du_en_sak" element={<HarDuEnSak />} />
                    <Route path="/tips-og-rettigheter/slik_klager_du" element={<KlageGuide />} />
                </>
            </>
            <Route path="/kontakt-oss" element={<KontaktOss />} />
            <>
                <Route path="/kontakt-oss/presse" element={<Presse />} />
                <>
                    <Route path="/kontakt-oss/presse/kontakter" element={<KontaktPage />} />
                </>
            </>
            <Route path="/search" element={<SearchPage />} />
            <>
                <Route path="/siste-nytt" element={<SisteNytt />} />
                <>
                    <Route path="/siste-nytt/artikkel" element={<Article />} />
                </>
            </>
        </Routes>
    );
}
