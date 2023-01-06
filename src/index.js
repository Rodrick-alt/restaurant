import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/Index.css';
import App from './App';
import Reservation from './Pages/Reservation';
import NoPage from './Pages/NoPage';
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";


function Index() {
  // Scroll to top on route change
  const ScrollToTop = (props) => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }

  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route>
          <Route index element={<App />} />
          <Route path="/" element={<App />} />
          <Route path="reservation" element={<Reservation />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode >
);