import React from "react";

import { Cta } from "../components/Cta/Cta";
import { CompaniesHero } from "../components/Hero/CompaniesHero";
import { AttendingCompanies } from "../components/Sponsors/AttendingCompanies";
import common from "../styles/common.module.scss";
export const Companies = () => {
  return (
    <div className={common.page}>
      <CompaniesHero />
      <AttendingCompanies />
      <Cta />
    </div>
  );
};
