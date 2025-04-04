"use client";
import { ReactElement } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";

import { headerMenuItems } from "@/constants/constants";
import styles from "./header.module.css";

export default function HeaderComponent(): ReactElement {
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          {headerMenuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className={clsx(pathname === item.href && styles.active)}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.rightSection}>
        <Link href={"/sign-in"} className={styles.btnLogin}>
          ورود | ثبت نام
        </Link>
      </div>
    </header>
  );
}
