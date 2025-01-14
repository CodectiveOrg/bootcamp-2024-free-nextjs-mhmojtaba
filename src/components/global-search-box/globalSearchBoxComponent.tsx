"use client";
import { ReactElement, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import MingcuteSearch2Fill from "@/icons/MingcuteSearch2Fill";
import MingcuteLocation2Line from "@/icons/MingcuteLocation2Line";

import styles from "./globalSearchBox.module.css";
import { useFilters } from "@/providers/filters.provider";

export default function GlobalSearchBoxComponent(): ReactElement {
  const router = useRouter();
  const pathname = usePathname();

  const [query, setQuery] = useState<string>("");

  const { filters, dispatch } = useFilters();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (pathname === "/search") {
      if (query) {
        dispatch({
          type: "updated_filter",
          key: "query",
          value: query,
        });
      } else {
        dispatch({
          type: "removed_filter",
          key: "query",
        });
      }
    } else {
      const href = query ? `/search/?query=${query}` : "/search";
      router.push(href);
    }
  };

  useEffect(() => {
    if (pathname !== "/search") {
      return;
    }

    const filterQuery = filters.query || "";
    setQuery(filterQuery);

    const href = filterQuery ? `/search/?query=${filterQuery}` : "/search";
    router.replace(href);
  }, [filters, pathname, router]);

  return (
    <form className={styles.globalSearchBox} onSubmit={submitHandler}>
      <div className={styles.searchIcon}>
        <MingcuteSearch2Fill />
      </div>
      <input type="text" placeholder="نام بیماری، پزشک، تخصص و..." />

      <div className={styles.divider}></div>
      <div className={styles.location}>
        <button>
          <MingcuteLocation2Line />
          همه شهرها
        </button>
      </div>
    </form>
  );
}
