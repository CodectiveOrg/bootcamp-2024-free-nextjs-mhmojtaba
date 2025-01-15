"use client";

import { ReactElement } from "react";
import RadioFilterComponent from "@/components/radio-filter/radio-filter.component";
import { genderOptions } from "@/constants/constants";
import { useFilters } from "@/providers/filters.provider";

export default function GenderFilterComponent(): ReactElement {
  const { filters, dispatch } = useFilters();

  const changeHandler = (value: string): void => {
    dispatch({ type: "updated_filter", key: "gender", value });
  };

  return (
    <RadioFilterComponent
      title="جنسیت دکتر"
      name="gender"
      options={genderOptions}
      value={filters.gender}
      onChange={changeHandler}
    />
  );
}
