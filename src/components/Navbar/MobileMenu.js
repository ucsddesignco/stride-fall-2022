import React from "react";
import { NavbarLink } from "./NavbarLink";
import styles from "./styles.module.scss";
import { LazyMotion, m, AnimatePresence } from "framer-motion";
const loadMotion = () => {
  return import("../../utils/motion.js").then((res) => res.default);
};

const MobileMenu = ({ children }) => {
  return (
    <>
      <LazyMotion features={loadMotion}>
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.24, ease: "easeInOut" }}
          className={styles.mobileMenu}
        >
          {children}
        </m.div>
      </LazyMotion>
    </>
  );
};

export default MobileMenu;
