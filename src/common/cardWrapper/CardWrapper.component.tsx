import React, { PropsWithChildren } from "react";

import styles from "./cardWrapper.module.css";

const CardWrapperComponent = ({
  title,
  children,
}: PropsWithChildren<{ title: string }>) => {
  return (
    <section className={styles.container}>
      {title && <div className={styles.title}>{title}</div>}
      <div className={styles.content}>{children}</div>
    </section>
  );
};

export default CardWrapperComponent;
