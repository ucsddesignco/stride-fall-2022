import React, { useState } from "react";
import styles from "./styles.module.scss";
import random from "lodash/random";
import { LazyMotion, m } from "framer-motion";

const loadMotion = () => {
  return import("../../utils/motion.js").then((res) => res.default);
};

export const Sticker = ({ x, y, isVisible, imageURL }) => {
  const [rotation] = useState(random(-15, 15));
  return (
    <LazyMotion features={loadMotion}>
      {isVisible && (
        <m.div
          style={{
            left: x * 100 + "%",
            top: y * 100 + "%",
          }}
          animate={{ scale: 0.8, rotate: rotation + "deg" }}
          transition={{
            type: "spring",
            damping: 16,
            stiffness: 400,
          }}
          className={styles.sticker}
        >
          <div
            style={{
              backgroundImage: `url(${imageURL})`,
            }}
            className={styles.stickerImage}
          />
        </m.div>
      )}
    </LazyMotion>
  );
};
