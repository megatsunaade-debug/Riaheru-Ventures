import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Header, Footer } from '@/components';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { InfoPage } from '@/pages/InfoPage';
import { ModalProvider } from '@/context/ModalContext';
import { ContactModal } from '@/components/ContactModal/ContactModal';


// Component to scroll to top on route change
function ScrollToTop() {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
}

import { INFO_PAGES } from '@/data/infoPages';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Helmet>
        <title>Riaheru | Engenharia de Software</title>
        <meta name="description" content="Software House híbrida especializada em desenvolvimento de alta performance, estratégia jurídica e infraestrutura escalável." />
      </Helmet>
      <ModalProvider>
        <div className="min-h-screen antialiased">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<About />} />
              {INFO_PAGES.map((page) => (
                <Route key={page.path} path={page.path} element={<InfoPage {...page} />} />
              ))}
            </Routes>
          </main>
          <Footer />
          <ContactModal />
        </div>
      </ModalProvider>
    </Router>
  );
}

export default App;
