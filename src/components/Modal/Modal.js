import React from "react";
import { RemoveScroll } from "react-remove-scroll";
import { useModal } from "./useModal";
import styles from "./styles.module.scss";
import { LazyMotion, m, AnimatePresence } from "framer-motion";
import FocusTrap from "focus-trap-react";
import common from "../../styles/common.module.scss";
import close from "../../images/close.svg";
import clsx from "clsx";
import { ModalContent } from "./ModalContent";

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
                    <ModalContent />
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
