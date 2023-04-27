import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Forbrukerpolitikk from "./pages/forbrukerpolitikk/forbrukerpolitikk";
import TipsOgRettigheter from "./pages/tips_og_rettigheter/tips_og_rettigheter";
import Kontrakter from "./pages/tips_og_rettigheter/kontrakter";
import HarDuEnSak from "./pages/tips_og_rettigheter/har_du_en_sak";
import TesterV2 from "./pages/tester/testerv2";
import KontaktOss from "./pages/kontakt_oss/kontakt_oss";
import Presse from "./pages/kontakt_oss/presse_kontakt";
import KlageGuide from "./pages/tips_og_rettigheter/klageguide";
import SearchPage from "./pages/search/search";
import Article from "./pages/articles/articlePreset";
import SisteNytt from "./pages/siste_nytt/sisteNytt";

// app
export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tester" element={<TesterV2 />} />
            <Route path="/forbrukerpolitikk" element={<Forbrukerpolitikk />} />
            <Route path="/tips_og_rettigheter" element={<TipsOgRettigheter />} />
            <Route path="/tips_og_rettigheter/kontrakter" element={<Kontrakter />} />
            <Route path="/tips_og_rettigheter/har_du_en_sak" element={<HarDuEnSak />} />
            <Route path="/tips_og_rettigheter/slik_klager_du" element={<KlageGuide />} />
            <Route path="/kontakt_oss" element={<KontaktOss />} />
            <Route path="/kontakt_oss/presse" element={<Presse />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/siste-nytt" element={<SisteNytt />} />
            <Route path="/siste-nytt/artikkel" element={<Article />} />
        </Routes>
    );
}
