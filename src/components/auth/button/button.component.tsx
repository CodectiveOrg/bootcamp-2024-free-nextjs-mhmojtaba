import { ReactElement, ButtonHTMLAttributes } from "react";
import styles from "./button.module.css";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  fullWidth?: boolean;
  isLoading?: boolean;
}

export default function ButtonComponent({
  children,
  variant = "primary",
  fullWidth = false,
  isLoading = false,
  className,
  ...props
}: ButtonProps): ReactElement {
  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        fullWidth && styles.fullWidth,
        isLoading && styles.loading,
        className,
      )}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <div className={styles.spinner}>
          <div className={styles.spinnerDot}></div>
          <div className={styles.spinnerDot}></div>
          <div className={styles.spinnerDot}></div>
        </div>
      ) : (
        children
      )}
    </button>
  );
}
