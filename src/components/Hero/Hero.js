import React, { lazy, Suspense } from "react";
import styles from "./styles.module.scss";
import common from "../../styles/common.module.scss";

const StickerBackground = lazy(() => import("./StickerBackground"));
import designCo from "../../images/design-co.svg";
import stride from "../../images/stride-large.svg";
export const Hero = () => {
  return (
    <div className={styles.hero}>
      <Suspense>
        <StickerBackground />
      </Suspense>
      <div className={styles.heroContent}>
        <h1>
          <span>Stride</span>
          <img
            src={stride}
            role="presentation"
            aria-hidden="true"
            focusable="false"
          />
        </h1>
        <div className={styles.subtitle}>
          <p>A design-centric career fair by</p>
          <img src={designCo} alt="Design Co" />
        </div>
      </div>
    </div>
  );
};
