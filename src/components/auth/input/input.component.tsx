import { ReactElement, ChangeEvent, useState } from "react";
import styles from "./input.module.css";
import clsx from "clsx";
import EyeIcon from "@/icons/Eye";
import EyeCloseIcon from "@/icons/EyeClose";

interface InputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
  required?: boolean;
}

export default function InputComponent({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  error,
  required = true,
}: InputProps): ReactElement {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.inputGroup}>
      <label className={styles.label} htmlFor={name}>
        {label}
        {required && <span className={styles.required}>*</span>}
      </label>
      <div className={styles.inputWrapper}>
        <input
          id={name}
          type={isPassword && showPassword ? "text" : type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={clsx(styles.input, error && styles.inputError)}
          required={required}
        />
        {isPassword && (
          <button
            type="button"
            className={styles.togglePassword}
            onClick={togglePasswordVisibility}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <span className={styles.eyeIcon}>
                <EyeIcon />
              </span>
            ) : (
              <span className={styles.eyeIcon}>
                <EyeCloseIcon />
              </span>
            )}
          </button>
        )}
      </div>
      {error && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );
}
