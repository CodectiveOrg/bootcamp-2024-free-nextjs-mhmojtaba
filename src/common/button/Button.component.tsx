import React, { PropsWithChildren } from "react";

import styles from "./button.module.css";

const ButtonComponent = ({ children }: PropsWithChildren) => {
  return <button className={styles.button}>{children}</button>;
};

export default ButtonComponent;
