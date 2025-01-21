import { DoctorModel, FiltersType } from "@/types/types";
import { filterDoctors } from "@/utils/utils";

export type Action =
  | { type: "SET_DOCTORS"; payload: DoctorModel[] }
  | { type: "SET_FILTERS"; payload: FiltersType }
  | { type: "SET_LOADING"; payload: boolean };

type State = {
  allDoctors: DoctorModel[];
  filteredDoctors: DoctorModel[];
  filters: FiltersType;
  loading: boolean;
};

export function doctorsReducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_DOCTORS":
      return {
        ...state,
        allDoctors: action.payload,
        filteredDoctors: filterDoctors(action.payload, state.filters),
        loading: false,
      };

    case "SET_FILTERS":
      return {
        ...state,
        filters: action.payload,
        filteredDoctors: filterDoctors(state.allDoctors, action.payload),
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
}
