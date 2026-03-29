import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import FAQPage from "./pages/FAQPage";
import SupportPage from "./pages/SupportPage";

function App() {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/support" element={<SupportPage />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;