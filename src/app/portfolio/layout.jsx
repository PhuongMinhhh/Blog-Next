import React from "react";
import Styles from "./page.module.css";
const layout = ({children}) => {
  return (
    <div>
      <h1 className={Styles.mainTitle}>Our Works</h1>
      {children}
    </div>
  );
};

export default layout;
