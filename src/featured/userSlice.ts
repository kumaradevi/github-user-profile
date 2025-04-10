import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store"; // make sure this path matches your project structure

// Define types
interface User {
  login?: string;
  name?: string;
  avatar_url?: string;
  [key: string]: any;
}

interface Repo {
  id: number;
  name: string;
  [key: string]: any;
}

interface UserState {
  user: User;
  profileDetails: Repo[];
  loading: boolean;
}

// Initial state
const initialState: UserState = {
  user: {},
  profileDetails: [],
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    getProfileDetails: (state, action: PayloadAction<Repo[]>) => {
      state.profileDetails = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { getUser, getProfileDetails, setLoading } = userSlice.actions;

// Selectors
export const selectUser = (state: RootState) => state.user.user;
export const selectProfile = (state: RootState) => state.user.profileDetails;
export const selectLoading = (state: RootState) => state.user.loading;

export default userSlice.reducer;
