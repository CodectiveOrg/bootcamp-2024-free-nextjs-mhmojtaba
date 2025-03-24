import { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import SignUpForm from "@/components/auth/sign-up-form/signUpForm.component";
import AuthLayout from "@/components/auth/auth-layout/authLayout.component";
import styles from "./sign-up.module.css";

export default function SignUpPage(): ReactElement {
  return (
    <AuthLayout
      title={
        <div>
          ثبت نام در <span className={styles.subtitle}>DocBook</span>
        </div>
      }
      subtitle={
        <div>
          برای استفاده از خدمات <span className={styles.subtitle}>DocBook</span>{" "}
          ، لطفا ثبت نام کنید
        </div>
      }
      imagePosition="right"
    >
      <SignUpForm />
      <div className={styles.loginLink}>
        قبلاً ثبت نام کرده‌اید؟{" "}
        <Link href="/sign-in" className={styles.link}>
          ورود به حساب کاربری
        </Link>
      </div>
    </AuthLayout>
  );
}
