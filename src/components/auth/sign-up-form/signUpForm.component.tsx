"use client";
import { ReactElement, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../signForm.module.css";
import InputComponent from "@/components/auth/input/input.component";
import ButtonComponent from "@/components/auth/button/button.component";

export default function SignUpForm(): ReactElement {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    username: "",
    email: "",
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

    if (!formData.fullName.trim()) {
      newErrors.fullName = "لطفا نام و نام خانوادگی خود را وارد کنید";
      isValid = false;
    }

    if (!formData.username.trim()) {
      newErrors.username = "لطفا نام کاربری را وارد کنید";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "لطفا ایمیل خود را وارد کنید";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "لطفا یک ایمیل معتبر وارد کنید";
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

    // logic for sign up
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <InputComponent
        label="نام و نام خانوادگی"
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        error={errors.fullName}
        placeholder="نام و نام خانوادگی خود را وارد کنید"
      />

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
        label="ایمیل"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        placeholder="ایمیل خود را وارد کنید"
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
        ثبت نام
      </ButtonComponent>
    </form>
  );
}
