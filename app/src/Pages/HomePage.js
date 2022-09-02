import React from "react";
import Footer from "../components/Footer";
import Ts2 from "../components/Ts2";
import MainContent from "../components/MainContent";
import Navbar from "../components/Navbar";
import "./pages.css";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <MainContent />
      <div class="about-section">
        <Ts2 />
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>
          Resize the browser window to see that this page is responsive by the
          way.
        </p>
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
