"use client";

import { ReactElement } from "react";
import RadioFilterComponent from "../radio-filter/radio-filter.component";
import { degreeOptions } from "@/constants/constants";
import { useFilters } from "@/providers/filters.provider";

export default function DegreeFilterComponent(): ReactElement {
  const { dispatch, filters } = useFilters();

  const changeHandler = (value: string): void => {
    dispatch({ type: "updated_filter", key: "degree", value });
  };

  return (
    <RadioFilterComponent
      title="درجه علمی"
      name="degree"
      options={degreeOptions}
      value={filters.degree}
      onChange={changeHandler}
    />
  );
}
