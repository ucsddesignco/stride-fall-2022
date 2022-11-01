import { useModalContext, useModalDispatch } from "./ModalContext";

export const useModal = () => {
  const modal = useModalContext();
  const dispatch = useModalDispatch();

  return { modal, dispatch };
};
