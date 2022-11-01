import React from "react";
import common from "../../styles/common.module.scss";
import clsx from "clsx";
import { CompanyList } from "./CompanyList";
import styles from "./styles.module.scss";
import { CompanyData } from "./companyData";
export const AllCompanies = () => {
  const companies = CompanyData;

  return (
    <div className={clsx(common.section)}>
      <div className={clsx(common.content)}>
        <div className={common.title}>
          <h2>Attending Companies</h2>
          <div className={common.divider} />
        </div>
        <div className={styles.wrapper}>
          <p>
            Our participating companies come from diverse backgrounds,
            representing multiple industries, products, and services. Stop by
            Stride to connect with professionals and learn more about internship
            and full-time opportunities at a wide range of companies.
          </p>
        </div>

        <CompanyList companies={companies} />
      </div>
    </div>
  );
};
