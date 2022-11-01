import React, { useState, Suspense, lazy } from "react";
import tokens from "../../styles/tokens/tokens.json";
import styles from "./styles.module.scss";
import stride from "../../images/stride.svg";
import menu from "../../images/menu.svg";

import { NavbarLink } from "./NavbarLink";
import { RemoveScroll } from "react-remove-scroll";
import { AnimatePresence } from "framer-motion";
const MobileMenu = lazy(() => import("./MobileMenu"));
const paths = [
  { title: "Home", path: "/", color: "none", hasIcon: false },
  { title: "Companies", path: "/companies", color: "none", hasIcon: false },
  {
    title: "How to Prepare",
    path: "/",
    hasIcon: true,
  },
  {
    title: "Register",
    path: "/",
    color: tokens.color.base.yellow,
    hasIcon: true,
  },
];

export const Navbar = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  return (
    <nav className={styles.navbarWrapper}>
      <div className={styles.navbar}>
        <img className={styles.logo} src={stride} alt="Stride" width="100%" />
        <div className={styles.divider}></div>
        <ul>
          {paths.map((path) => (
            <li>
              <NavbarLink
                path={path.path}
                color={path.color}
                hasIcon={path.hasIcon}
              >
                {path.title}
              </NavbarLink>
            </li>
          ))}
        </ul>
        <button
          className={styles.menu}
          onClick={() => setIsMobileMenuVisible(!isMobileMenuVisible)}
        >
          <img src={menu} />
        </button>
      </div>
      <AnimatePresence>
        {isMobileMenuVisible && (
          <RemoveScroll enabled={isMobileMenuVisible} removeScrollBar={false}>
            <Suspense>
              <MobileMenu isVisible={isMobileMenuVisible}>
                <ul>
                  {paths.map((path) => (
                    <li>
                      <NavbarLink
                        path={path.path}
                        color={path.color}
                        hasIcon={path.hasIcon}
                        onClick={() => setIsMobileMenuVisible(false)}
                      >
                        {path.title}
                      </NavbarLink>
                    </li>
                  ))}
                </ul>
              </MobileMenu>
            </Suspense>
          </RemoveScroll>
        )}
      </AnimatePresence>
    </nav>
  );
};
