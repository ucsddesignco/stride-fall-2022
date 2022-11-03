import React, { lazy, Suspense } from "react";
import styles from "./styles.module.scss";
import common from "../../styles/common.module.scss";

const StickerBackground = lazy(() => import("./StickerBackground"));
import designCo from "../../images/design-co.svg";
import stride from "../../images/stride-fall.svg";
export const Hero = () => {
  return (
    <div className={styles.hero}>
      <Suspense>
        <StickerBackground />
      </Suspense>
      <div className={styles.heroContent}>
        {/* <div className={styles.date}>
          <p>Fall</p>
          <div className={common.divider} />
          <p>2022</p>
        </div> */}
        <div className={styles.subtitle}>
          <p>A design-centric career fair by</p>
          <img src={designCo} alt="Design Co" />
        </div>
        <h1>
          <span>Stride</span>
          <img
            src={stride}
            role="presentation"
            aria-hidden="true"
            focusable="false"
          />
        </h1>
      </div>
    </div>
  );
};
