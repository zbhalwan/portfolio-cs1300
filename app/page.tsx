// page.tsx
"use client";
import Hero from "./components/hero-section/Hero";
import Works from "./components/work-section/Works";
import About from "./components/about-section/About";
import Contact from "./components/contact+footer/Contact";
import Footer from "./components/contact+footer/Footer";
import AccCompPage from "./pages/AccCompPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { initialBlobityOptions } from "@/utils/blobity.config";
import useBlobity from "blobity/lib/react/useBlobity";

export default function Home() {
  const blobity = useBlobity(initialBlobityOptions);

  return (
    <Router>
      <main className="overflow-x-hidden sm:overflow-x-visible">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Works />
              <About />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/acc-comp" element={<AccCompPage />} />
        </Routes>
      </main>
    </Router>
  );
}
