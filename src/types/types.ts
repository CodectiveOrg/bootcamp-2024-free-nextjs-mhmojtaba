export interface DoctorModel {
  id: string;
  name: string;
  image: string;
  isVerified: boolean;
  averageRating: number;
  totalVotes: number;
  address: string;
  firstAvailableAppointment: string;
  brief: string;
  badges: (string | string[])[];
}

export interface initialStateType {
  isLoading: boolean;
  doctors: DoctorModel[];
  error?: string | null;
}

export type actionType = {
  type: string;
  payload?: DoctorModel[];
};

export interface DataContextType {
  isLoading: boolean;
  doctors: DoctorModel[];
  error?: any;
  filterDoctors: ({
    keys,
    value,
  }: {
    keys: keyof DoctorModel;
    value: string;
  }) => void;
  getDoctors?: () => void;
}

export type filterType = {
  query?: string;
  specialty?: string;
  location?: string;
  degree?: string;
  gender?: "male" | "female" | "both";
};

export type selectOptionsType = {
  value?: string;
  label?: string;
};

export type FiltersType = {
  query?: string;
  expertise?: string;
  gender?: string;
  degree?: string;
  option1?: string;
  option2?: string;
  option3?: string;
};

export type SearchParams = { [key: string]: string | string[] | undefined };
