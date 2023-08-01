import React from "react";
import Hero from "../components/Hero";
import News from "../components/News";
import About from "../components/About";
import Resources from "../components/Resources";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import EnrollCard from "../components/EnrollCard";
import FadeInWhenVisible from "../utility/FadeInWhenVisible";
import { useAuth } from "../providers/AuthProvider";
import EnrollCardNonLogin from "../components/EnrollCardNonLogin";

const Home = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <FadeInWhenVisible>
        <Hero />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        {isLoggedIn ? <EnrollCard /> : <EnrollCardNonLogin />}
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Resources />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <News />
      </FadeInWhenVisible>
      <About />
      <FadeInWhenVisible>
        <FAQ />
      </FadeInWhenVisible>

      <Footer />
    </>
  );
};

export default Home;
