"use client";

import { ReactElement } from "react";
import CardComponent from "@/components/card/card.component";
import { expertiseOptions } from "@/constants/constants";

import styles from "./expertise-filter.module.css";
import { useFilters } from "@/providers/filters.provider";

export default function ExpertiseFilterComponent(): ReactElement {

  const { dispatch } = useFilters();

  const buttonClickHandler = (value: string): void => {
    dispatch({ type: "updated_filter", key: "expertise", value });
  };

  return (
    <CardComponent>
      <ul className={styles["expertise-filter"]}>
        {expertiseOptions.map((item, index) => (
          <li key={index}>
            <button type="button" onClick={() => buttonClickHandler(item)}>
              {item}
            </button>
          </li>
        ))}
      </ul>
    </CardComponent>
  );
}
