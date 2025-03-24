"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./dashboard.module.css";

export default function Dashboard() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    //
  };

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}></div>
      </div>
    );
  }

  return (
    <div className={styles.dashboardContainer} dir="rtl">
      <header className={styles.header}>
        <h1 className={styles.title}>داشبورد</h1>
        <button onClick={handleLogout} className={styles.logoutButton}>
          خروج
        </button>
      </header>

      <main className={styles.main}>
        <div className={styles.welcomeMessage}>
          <h2>خوش آمدید کاربر</h2>
          <p>به داشبورد خود خوش آمدید</p>
        </div>

        <div className={styles.dashboardContent}>
          <div className={styles.card}>
            <h3>آمار</h3>
            <p>اطلاعات آماری شما در اینجا نمایش داده می‌شود</p>
          </div>

          <div className={styles.card}>
            <h3>فعالیت‌های اخیر</h3>
            <p>فعالیت‌های اخیر شما در اینجا نمایش داده می‌شود</p>
          </div>

          <div className={styles.card}>
            <h3>تنظیمات</h3>
            <p>تنظیمات حساب کاربری خود را مدیریت کنید</p>
          </div>
        </div>
      </main>
    </div>
  );
}
