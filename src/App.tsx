import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Startpagina from './pages/Startpagina';
import CasinoOverzichtPagina from './pages/CasinoOverzichtPagina';
import CasinoRecensiePagina from './pages/CasinoRecensiePagina';
import BonussenPagina from './pages/BonussenPagina';
import BlogPagina from './pages/BlogPagina';
import BlogBerichtPagina from './pages/BlogBerichtPagina';
import ContactPagina from './pages/ContactPagina';
import VerantwoordGokkenPagina from './pages/VerantwoordGokkenPagina';
import OverOnsPagina from './pages/OverOnsPagina';
import PaginaNietGevonden from './pages/PaginaNietGevonden';
import PrivacyBeleidPagina from './pages/PrivacyBeleidPagina';
import CookieBeleidPagina from './pages/CookieBeleidPagina';
import AlgemeneVoorwaardenPagina from './pages/AlgemeneVoorwaardenPagina';
import SpellenPagina from './pages/SpellenPagina';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Startpagina />} />
          <Route path="/casinos" element={<CasinoOverzichtPagina />} />
          <Route path="/casinos/:name" element={<CasinoRecensiePagina />} />
          <Route path="/bonussen" element={<BonussenPagina />} />
          <Route path="/blog" element={<BlogPagina />} />
          <Route path="/blog/:slug" element={<BlogBerichtPagina />} />
          <Route path="/contact" element={<ContactPagina />} />
          <Route path="/verantwoord-gokken" element={<VerantwoordGokkenPagina />} />
          <Route path="/over-ons" element={<OverOnsPagina />} />
          <Route path="/privacybeleid" element={<PrivacyBeleidPagina />} />
          <Route path="/cookiebeleid" element={<CookieBeleidPagina />} />
          <Route path="/algemenevoorwaarden" element={<AlgemeneVoorwaardenPagina />} />
          <Route path="/games" element={<SpellenPagina />} />
          <Route path="*" element={<PaginaNietGevonden />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
