import React from "react";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

// COMP
import Hero from "../components/Hero";
import Transact from "../components/Transact";
import UpHero from "../components/UpHero";
import Layout from "../layout";

const Home = () => {
  return (
    <Layout>
      <UpHero />
      <Hero />
      <Transact />
      <Contact />
      <Footer />
    </Layout>
  );
};

export default Home;
