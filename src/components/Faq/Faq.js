import React, { lazy, Suspense } from "react";
import common from "../../styles/common.module.scss";
import clsx from "clsx";
const FaqList = lazy(() => import("./FaqList"));
export const Faq = () => {
  return (
    <div className={clsx(common.section)}>
      <div className={clsx(common.content)}>
        <div className={common.title}>
          <h2>F.A.Q.</h2>
          <div className={common.divider} />
        </div>
        <Suspense>
          <FaqList />
        </Suspense>
      </div>
    </div>
  );
};
