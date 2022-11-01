import React from "react";

import { Cta } from "../components/Cta/Cta";
import { CompaniesHero } from "../components/Hero/CompaniesHero";
import { AllCompanies } from "../components/Companies/AllCompanies";
import common from "../styles/common.module.scss";
export const Companies = () => {
  return (
    <div className={common.page}>
      <CompaniesHero />
      <AllCompanies />
      <Cta />
    </div>
  );
};
