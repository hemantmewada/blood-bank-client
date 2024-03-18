import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUser, userLogin, userRegister } from "./authActions";

const token = localStorage.getItem("token") ? localStorage.getItem("token") : null;

const initialState = {
    loading: false,
    user: null,
    token,
    error: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        // login user
        builder.addCase(userLogin.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(userLogin.fulfilled, (state, {payload}) => {
            state.loading = false;
            state.user = payload.data;
            state.token = payload.token;
        })
        builder.addCase(userLogin.rejected, (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        })
        // current user
        builder.addCase(getCurrentUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getCurrentUser.fulfilled, (state, {payload}) => {
            state.loading = false;
            state.user = payload.data;
        })
        builder.addCase(getCurrentUser.rejected, (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        })
    }
});

export default authSlice;