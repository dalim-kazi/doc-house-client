import { createSlice } from "@reduxjs/toolkit";
import { createUser, logOutUser, signInUser, updateProfileUser, } from "../Action/AuthAction/AuthAction";

const initialState = {
  user: null,
  isLoading:true,
  isError: null
}

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setUser: (state, action) => {
      state.user = action.payload
      state.isLoading = false
      state.isError = null
    },
    setError: (state, action) => {
      state.user = null
      state.isLoading = false
      state.isError = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isError = null
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null
        state.isError = action.payload;
      })
      .addCase(signInUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isError = null
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null
        state.isError = action.payload;
      })
      .addCase(logOutUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logOutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
      })
      .addCase(logOutUser.rejected, (state, action) => {
        // state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(updateProfileUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProfileUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isError = null
      })
      .addCase(updateProfileUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null
        state.isError = action.payload;
      });
  },
})
export const { setUser, setLoading, setError } = authSlice.actions
export default authSlice.reducer