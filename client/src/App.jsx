import React, { useState, useEffect, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen.jsx";
import Catalogue from "./screens/Catalogue.jsx";
import ContactScreen from "./screens/ContactScreen.jsx";
import Exports from "./screens/Exports.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import LogoLoader from "./components/LogoLoader.jsx";
import PageNotFound from "./screens/PageNotFound.jsx";
import ComingSoon from "./components/ComingSoon.jsx";
import TileCalculator from "./screens/TileCalculator.jsx";
import PackingDetails from "./screens/PackingDetails.jsx";
import Infrastructure from "./components/Infrastructure.jsx";
import CompanyProfile from "./components/CompanyProfile.jsx";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating data loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      {isLoading ? (
        <LogoLoader />
      ) : (
        <>
          <Suspense fallback={null}>
            <Header />

            <Routes>
              <Route exact path="/" element={<HomeScreen />} />
              <Route path="/infrastructure" element={<Infrastructure />} />
              <Route path="/companyProfile" element={<CompanyProfile />} />
              <Route path="/certificate" element={<ComingSoon />} />
              <Route path="/packingDetails" element={<PackingDetails />} />
              <Route path="/tileCalculator" element={<TileCalculator />} />
              <Route path="/catalogue" element={<Catalogue />} />
              <Route path="/exports" element={<Exports/>} />
              <Route path="/contactUs" element={<ContactScreen />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
          </Suspense>
        </>
      )}
    </BrowserRouter>
  );
};

export default App;





