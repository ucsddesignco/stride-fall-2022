import React from "react";
import styles from "./styles.module.scss";
import common from "../../styles/common.module.scss";
import arrowSmall from "../..//images/arrow-small.svg";
import { LazyMotion, m, AnimatePresence } from "framer-motion";
import clsx from "clsx";
const loadMotion = () => {
  return import("../../utils/motion.js").then((res) => res.default);
};

const arrowAnimation = {
  open: { rotate: 0 },
  closed: { rotate: -90 },
};

export const FaqItem = ({ title, content, openIndex, index, handleClick }) => {
  const isOpen = index === openIndex;

  return (
    <LazyMotion features={loadMotion}>
      <li>
        <button
          className={styles.item}
          aria-expanded={isOpen ? "true" : "false"}
          onClick={() => {
            handleClick(index);
          }}
        >
          <div className={styles.title}>
            <p className={clsx(common.subtitle, styles.subtitle)}>{title}</p>
            <div className={styles.arrowWrapper}>
              <m.img
                src={arrowSmall}
                alt=""
                variants={arrowAnimation}
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                width="100%"
              />
            </div>
          </div>
          <AnimatePresence>
            {isOpen && (
              <m.div
                className={styles.content}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: [0, 0, 0, 1], height: "initial" }}
                exit={{ opacity: [1, 0, 0, 0], height: 0 }}
                transition={{ duration: 0.24, ease: "easeInOut" }}
              >
                <m.p>{content}</m.p>
              </m.div>
            )}
          </AnimatePresence>
        </button>
      </li>
    </LazyMotion>
  );
};
