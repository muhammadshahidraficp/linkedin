// authSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "./store";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import auth from "./firebase";

interface SerializableUser {
  uid: string | null;
  email: string | null;
}

interface AuthState {
  user: SerializableUser | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setUser: (state, action: PayloadAction<SerializableUser>) => {
      state.user = action.payload;
    },
  },
});

export const { setLoading, setError, setUser } = authSlice.actions;

export default authSlice.reducer;

// Async actions
export const signup =
  (email: string, password: string): AppThunk =>
  async (dispatch: any) => {
    try {
      dispatch(setLoading(true));
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
      const user = auth.currentUser;
      if (user) {
        dispatch(setUser({ uid: user.uid, email: user.email }));
      }
    } catch (error: any) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

export const login =
  (email: string, password: string): AppThunk =>
  async (dispatch: any) => {
    try {
      dispatch(setLoading(true));
      await signInWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        dispatch(setUser(user));
      }
    } catch (error: any) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

export const logout = (): AppThunk => async (dispatch: any) => {
  try {
    dispatch(setLoading(true));
    await auth.signOut();
    dispatch(setUser({ uid: null, email: null }));
  } catch (error: any) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};
