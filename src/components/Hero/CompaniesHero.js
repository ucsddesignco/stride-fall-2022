import React, { lazy, Suspense } from "react";
const StickerBackground = lazy(() => import("./StickerBackground"));
import clsx from "clsx";
import common from "../../styles/common.module.scss";
import styles from "./styles.module.scss";

export const CompaniesHero = () => {
  return (
    <div className={clsx(styles.companiesHero)}>
      <Suspense>
        <StickerBackground />
      </Suspense>
      <h1>Companies</h1>
    </div>
  );
};
