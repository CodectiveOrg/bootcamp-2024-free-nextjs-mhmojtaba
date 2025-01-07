"use client";
import { createContext, useContext, useEffect, useReducer, ReactNode, PropsWithChildren } from "react";

import { doctorData } from "@/constants/doctors";
import { actionType, DoctorModel, initialStateType, DataContextType } from "@/types/types";

const DataContext = createContext<DataContextType>({} as DataContextType);

const initialState: initialStateType = {
  isLoading: false,
  doctors: [],
  error: null,
};

const doctorReducer = (state: initialStateType = initialState, action: actionType): initialStateType => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_DOCTORS":
      return {
        ...state,
        isLoading: false,
        doctors: action.payload!,
      };
    case "Filter_DOCTORS":
      return {
        ...state,
        isLoading: false,
        doctors: action.payload!,
      };
    default:
      return state;
  }
};

type Props = PropsWithChildren;


function DoctorProvider({ children }: Props) {

  const [{ isLoading, doctors, error }, dispatch] = useReducer<React.Reducer<initialStateType, actionType>>(doctorReducer, initialState);

  useEffect(() => {
    function getDoctors() {
      dispatch({ type: "LOADING" });

      const data = doctorData;
      dispatch({ type: "GET_DOCTORS", payload: data });
    }
    getDoctors();
  }, []);

  function filterDoctors({ keys, value }: { keys: keyof DoctorModel; value: string; }) {
    dispatch({ type: "LOADING" });

    const data = doctorData.filter((item) => item[keys].toString().includes(value));
    dispatch({ type: "Filter_DOCTORS", payload: data });
  }

  return (
    <DataContext.Provider
      value={{
        isLoading,
        doctors,
        error,
        filterDoctors,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DoctorProvider;

export function useDoctor() {
  return useContext(DataContext);
}
