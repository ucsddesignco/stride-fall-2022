import React from "react";
import { RemoveScroll } from "react-remove-scroll";
import { useModal } from "./useModal";
import styles from "./styles.module.scss";
import { LazyMotion, m, AnimatePresence } from "framer-motion";
import FocusTrap from "focus-trap-react";
import common from "../../styles/common.module.scss";
import close from "../../images/close.svg";
import clsx from "clsx";

const loadMotion = () => {
  return import("../../utils/motion.js").then((res) => res.default);
};

const modalOverlayAnimation = {
  open: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
  closed: { opacity: 0, transition: { duration: 0.2 } },
};

const modalAnimation = {
  open: { scale: 1, transition: { duration: 0.2 } },
  closed: { scale: 1.05, transition: { duration: 0.2 } },
};

const Modal = () => {
  const { modal, dispatch } = useModal();

  const handleClick = () => {
    dispatch({
      type: "hide",
    });
  };
  return (
    <LazyMotion features={loadMotion}>
      <AnimatePresence>
        {modal.isOpen && (
          <RemoveScroll enabled={modal.isOpen} removeScrollBar={false}>
            <FocusTrap>
              <m.div
                className={styles.overlay}
                onClick={handleClick}
                variants={modalOverlayAnimation}
                initial="closed"
                animate={modal.isOpen ? "open" : "closed"}
                exit="closed"
              >
                <div className={styles.wrapper}>
                  <m.div
                    aria-modal="true"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    className={styles.modal}
                    variants={modalAnimation}
                  >
                    <div className={styles.titlebar}>
                      <h3 focu>{modal.name}</h3>
                      <button onClick={handleClick} aria-label="Close ">
                        <img src={close} width="100%" />
                      </button>
                    </div>
                    <div className={styles.content}>
                      <div>
                        <div className={styles.subtitle}>
                          <h4>About {modal.name}</h4>
                          <div className={common.divider} />
                        </div>
                        <div className={styles.paragraphWrapper}>
                          <p>
                            Sony’s purpose is simple. We aim to fill the world
                            with emotion, through the power of creativity and
                            technology. We want to be responsible for getting
                            hearts racing, stirring ambition, and putting a
                            smile on the faces of our customers. That challenge,
                            combined with our spirit of innovation, motivates us
                            to create groundbreaking technology, entertainment,
                            and services for people worldwide.
                          </p>
                        </div>
                      </div>
                      <div className={styles.details}>
                        <div className={styles.subtitle}>
                          <h4>Available For</h4>
                          <div className={common.divider} />
                        </div>
                        <div
                          className={clsx(
                            styles.paragraphWrapper,
                            styles.infoPillWrapper
                          )}
                        >
                          <span className={styles.infoPill}>One-to-One</span>
                          <span className={styles.infoPill}>Info Session</span>
                        </div>
                        <div className={styles.subtitle}>
                          <h4>Links</h4>
                          <div className={common.divider} />
                        </div>
                        <div className={styles.paragraphWrapper}>
                          <a href="/">Sony</a>
                        </div>
                        <div className={styles.subtitle}>
                          <h4>Open Roles</h4>
                          <div className={common.divider} />
                        </div>
                        <div className={styles.paragraphWrapper}>
                          <ul>
                            <li>
                              <a href="/">UI Design/Research (Full Time)</a>
                            </li>
                            <li>
                              <a href="/">UX/UI (Internship)</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </m.div>
                </div>
              </m.div>
            </FocusTrap>
          </RemoveScroll>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
};

export default Modal;
