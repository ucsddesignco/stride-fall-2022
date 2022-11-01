import React, { createContext, useContext, useReducer } from "react";
import { useImmerReducer } from "use-immer";

const ModalContext = createContext(null);

const ModalDispatchContext = createContext(null);

export function ModalProvider({ children }) {
  const [modal, dispatch] = useImmerReducer(modalReducer, initialState);

  return (
    <ModalContext.Provider value={modal}>
      <ModalDispatchContext.Provider value={dispatch}>
        {children}
      </ModalDispatchContext.Provider>
    </ModalContext.Provider>
  );
}

export function useModalContext() {
  return useContext(ModalContext);
}

export function useModalDispatch() {
  return useContext(ModalDispatchContext);
}

function modalReducer(draft, action) {
  switch (action.type) {
    case "show": {
      draft.isOpen = true;
      break;
    }
    case "hide": {
      draft.isOpen = false;
      break;
    }
    case "setCompany": {
      draft.companyData = action.companyData;
      break;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

const initialState = { isOpen: false, companyData: null };
