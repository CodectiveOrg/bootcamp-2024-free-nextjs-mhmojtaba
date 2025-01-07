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
