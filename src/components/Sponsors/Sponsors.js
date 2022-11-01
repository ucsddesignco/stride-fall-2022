import React from "react";
import common from "../../styles/common.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { SponsorsList } from "./SponsorsList";
import arrow from "../../images/arrow.svg";

export const Sponsors = () => {
  const companies = [
    { name: "Company A" },
    { name: "Company B" },
    { name: "Company C" },
  ];

  return (
    <div className={common.section}>
      <div className={common.content}>
        <div className={styles.desktopTitle}>
          <h2>Top Sponsors</h2>
          <div className={styles.divider} />
          <Link>
            View all attending companies
            <img src={arrow} alt="" width={24} height={24} />
          </Link>
        </div>
        <div className={styles.mobileTitle}>
          <div className={common.title}>
            <h2>Top Sponsors</h2>
            <div className={common.divider} />
          </div>
          <Link>
            <p>View all companies</p>
            <img src={arrow} alt="" width={24} height={24} />
          </Link>
        </div>

        <div className={styles.sponsorsListWrapper}>
          <SponsorsList companies={companies} />
        </div>
      </div>
    </div>
  );
};
