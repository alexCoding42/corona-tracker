import React from "react";
import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.loading}>
        <span>Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
