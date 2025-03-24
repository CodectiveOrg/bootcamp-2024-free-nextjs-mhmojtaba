import { ReactElement } from "react";
import Link from "next/link";
import SignInForm from "@/components/auth/sign-in-form/signInForm.component";
import AuthLayout from "@/components/auth/auth-layout/authLayout.component";
import styles from "../sign-up/sign-up.module.css";

export default function SignInPage(): ReactElement {
  return (
    <AuthLayout
      title={
        <div>
          ورود به <span className={styles.subtitle}>DocBook</span>
        </div>
      }
      subtitle={
        <div>
          برای استفاده از خدمات <span className={styles.subtitle}>DocBook</span>{" "}
          ، لطفا وارد شوید
        </div>
      }
      imagePosition="left"
    >
      <SignInForm />
      <div className={styles.loginLink}>
        قبلاً ثبت نام نکرده‌اید؟{" "}
        <Link href="/sign-up" className={styles.link}>
          ثبت نام
        </Link>
      </div>
    </AuthLayout>
  );
}
