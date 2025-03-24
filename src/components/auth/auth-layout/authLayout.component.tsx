import { ReactElement, ReactNode } from "react";
import Image from "next/image";
import AuthImage from "@/assets/images/auth-image.png";
import styles from "./authLayout.module.css";
import clsx from "clsx";

interface AuthLayoutProps {
  children: ReactNode;
  title: ReactElement;
  subtitle: ReactElement;
  imagePosition: "left" | "right";
}

export default function AuthLayout({
  children,
  title,
  subtitle,
  imagePosition = "left",
}: AuthLayoutProps): ReactElement {
  return (
    <div className={styles.container}>
      <div
        className={clsx(
          styles.authContainer,
          imagePosition === "right" ? styles.imageRight : styles.imageLeft,
        )}
      >
        <div className={styles.formSection}>
          <div className={styles.formHeader}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
          </div>
          {children}
        </div>

        <div className={styles.imageSection}>
          <Image
            src={AuthImage}
            alt="تصویر ثبت نام"
            className={styles.authImage}
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
