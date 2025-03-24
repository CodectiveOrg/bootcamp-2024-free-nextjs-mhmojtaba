"use client";
import { ReactElement, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../signForm.module.css";
import InputComponent from "@/components/auth/input/input.component";
import ButtonComponent from "@/components/auth/button/button.component";

export default function SignInForm(): ReactElement {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!formData.username.trim()) {
      newErrors.username = "لطفا نام کاربری را وارد کنید";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "لطفا رمز عبور را وارد کنید";
      isValid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = "رمز عبور باید حداقل ۸ کاراکتر باشد";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    // logic for sign in
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <InputComponent
        label="نام کاربری"
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        error={errors.username}
        placeholder="نام کاربری خود را وارد کنید"
      />

      <InputComponent
        label="رمز عبور"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
        placeholder="رمز عبور خود را وارد کنید"
      />

      <ButtonComponent type="submit" isLoading={isLoading} fullWidth>
        ورود
      </ButtonComponent>
    </form>
  );
}
