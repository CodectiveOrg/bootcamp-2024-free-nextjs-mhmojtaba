"use client";

import { ReactElement, useMemo } from "react";

import CardComponent from "@/components/card/card.component";
import { FiltersType } from "@/types/types";
import { useFilters } from "@/providers/filters.provider";

import styles from "./filtersCard.module.css";

export default function FiltersCardComponent(): ReactElement | null {
  const { filters, dispatch } = useFilters();

  const isEmpty = useMemo(() => {
    return (
      !filters.query &&
      !filters.expertise &&
      !filters.gender &&
      !filters.degree &&
      !filters.option1 &&
      !filters.option2 &&
      !filters.option3
    );
  }, [filters]);

  const removeAllButtonClickHandler = (): void => {
    dispatch({ type: "removed_all" });
  };

  const filterClickHandler = (key: keyof FiltersType): void => {
    dispatch({ type: "removed_filter", key });
  };

  if (isEmpty) {
    return null;
  }

  return (
    <CardComponent>
      <div className={styles["filters-summary"]}>
        <div className={styles.title}>فیلترهای انتخاب‌شده</div>

        <button type="button" onClick={removeAllButtonClickHandler}>
          حذف همه
        </button>

        <ul className={styles.filters}>
          {filters.query && (
            <li onClick={() => filterClickHandler("query")}>{filters.query}</li>
          )}
          {filters.expertise && (
            <li onClick={() => filterClickHandler("expertise")}>
              {filters.expertise}
            </li>
          )}
          {filters.gender && (
            <li onClick={() => filterClickHandler("gender")}>
              {filters.gender}
            </li>
          )}
          {filters.degree && (
            <li onClick={() => filterClickHandler("degree")}>
              {filters.degree}
            </li>
          )}
          {filters.option1 && (
            <li onClick={() => filterClickHandler("option1")}>
              {filters.option1}
            </li>
          )}
          {filters.option2 && (
            <li onClick={() => filterClickHandler("option2")}>
              {filters.option2}
            </li>
          )}
          {filters.option3 && (
            <li onClick={() => filterClickHandler("option3")}>
              {filters.option3}
            </li>
          )}
        </ul>
      </div>
    </CardComponent>
  );
}
