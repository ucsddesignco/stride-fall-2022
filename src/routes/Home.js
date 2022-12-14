import React, { Suspense } from "react";

import common from "../styles/common.module.scss";

import { About } from "../components/About/About";
import { Hero } from "../components/Hero/Hero";
import { TopCompanies } from "../components/Companies/TopCompanies";
import { Faq } from "../components/Faq/Faq";
import { Marquee } from "../components/Marquee/Marquee";
import { Cta } from "../components/Cta/Cta";

export const Home = () => {
  return (
    <div className={common.page}>
      <Hero />
      <Marquee />
      <TopCompanies />
      <About />
      <Faq />
      <Cta />
    </div>
  );
};
