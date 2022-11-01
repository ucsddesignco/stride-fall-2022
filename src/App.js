import React, { useEffect, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";

import { Home } from "./routes/Home";
import { Companies } from "./routes/Companies";
import { Navbar } from "./components/Navbar/Navbar";

import { ModalProvider } from "./components/Modal/ModalContext";
import { Footer } from "./components/Footer/Footer";

const Modal = lazy(() => import("./components/Modal/Modal"));

export default function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <>
      <Router>
        <ScrollToTop />
        <ModalProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/companies" element={<Companies />} />
          </Routes>
          <Footer />
          <Suspense>
            <Modal />
          </Suspense>
        </ModalProvider>
      </Router>
    </>
  );
}
