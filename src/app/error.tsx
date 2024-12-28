"use client";
import { ReactElement } from "react";
import Image from "next/image";
import ErrorImage from "@/assets/Images/man-gets-punch-on-his-face.svg";
import styles from "@/app/error.module.css";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: Props): ReactElement {
  return (
    <div className={styles.error}>
      <div className={styles.writing}>
        <div className={styles.status}>معلومه داری چیکار میکونی؟؟؟؟</div>
        <h1>خطا!!!!!!!!!!!!!!!!!!!!!!!</h1>
        <p> یالا وخی زنگ بزن پشتیبانی!</p>
      </div>
      <div className={styles.visual}>
        <Image src={ErrorImage} alt="" layout="responsive" />
      </div>
      <div className={styles.action}>
        <button onClick={reset}>رفرش کن</button>
      </div>
      <div className={styles.trace}>
        <details>
          <summary>خطا</summary>
          <pre dir="ltr">{error.stack}</pre>
        </details>
      </div>
    </div>
  );
}
