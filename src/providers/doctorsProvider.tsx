"use client";

import {
  createContext,
  PropsWithChildren,
  ReactElement,
  useReducer,
  useEffect,
  useContext,
} from "react";

import { DoctorModel, FiltersType } from "@/types/types";

import { useFilters } from "./filters.provider";
import { doctorsReducer } from "@/reducers/doctors.reducer";

type ContextValue = {
  filteredDoctors: DoctorModel[];
  loading: boolean;
};

type Props = PropsWithChildren & {
  doctors: DoctorModel[];
};

export const DoctorsContext = createContext<ContextValue>({
  filteredDoctors: [],
  loading: true,
});

export default function DoctorsProvider({
  children,
  doctors,
}: Props): ReactElement {
  const { filters } = useFilters();

  const [state, dispatch] = useReducer(doctorsReducer, {
    allDoctors: doctors,
    filteredDoctors: [],
    filters: {},
    loading: true,
  });

  useEffect(() => {
    dispatch({ type: "SET_DOCTORS", payload: doctors });
  }, [doctors]);

  useEffect(() => {
    dispatch({ type: "SET_FILTERS", payload: filters });
  }, [filters]);

  return (
    <DoctorsContext.Provider
      value={{ filteredDoctors: state.filteredDoctors, loading: state.loading }}
    >
      {children}
    </DoctorsContext.Provider>
  );
}

export const useDoctors = () => useContext(DoctorsContext);
