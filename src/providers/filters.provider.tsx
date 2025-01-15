"use client";

import {
  createContext,
  Dispatch,
  PropsWithChildren,
  ReactElement,
  useContext,
  useReducer,
} from "react";
import { FiltersAction, filtersReducer } from "@/reducers/filters.reducer";
import { FiltersType } from "@/types/types";

type value = {
  filters: FiltersType;
  dispatch: Dispatch<FiltersAction>;
};

type props = PropsWithChildren & {
  defaultFilters: FiltersType;
};

const FiltersContext = createContext<value>({
  filters: {},
  dispatch: () => {},
});

export default function FiltersProvider({
  children,
  defaultFilters,
}: props): ReactElement {
  const [filters, dispatch] = useReducer(filtersReducer, defaultFilters);
  return (
    <FiltersContext.Provider value={{ filters, dispatch }}>
      {children}
    </FiltersContext.Provider>
  );
}

export const useFilters = () => useContext(FiltersContext);
