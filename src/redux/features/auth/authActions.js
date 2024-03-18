import {createAsyncThunk} from "@reduxjs/toolkit";
import {toast} from "react-toastify";
import API from "../../../services/API";
import axios from "axios";
// import {useNavigate} from "react-router-dom";

// const navigate = useNavigate();
// login
export const userLogin = createAsyncThunk(
    "auth/login",
    async ({role, email, password}, {rejectWithValue}) => {
        try {
            const {data} = await API.post(`auth/login`,{role, email, password});
            // const {data} = await axios.post(`${import.meta.env.VITE_BASEURL}auth/login`,{role, email, password});
            // store token
            if (data.status) {
                localStorage.setItem("token",data.token);
                toast.success(data.message);
                setTimeout(() => {
                    window.location.replace("/");
                }, 1000);
            }
            return data;
        } catch (error) {
            console.log("error",error);
            if (error.response && error.response.data.message) {
                toast.error(error.response.data.message);
                return rejectWithValue(error.response.data.message);
            }else{
                // console.log("error else",error);
                return rejectWithValue(error.response);
            }
        }
    }
);

// register
export const userRegister = createAsyncThunk(
    "auth/register",
    async ({role, name, organisationName, hospitalName, email, password, website, address, phone}, {rejectWithValue}) => {
        try {
            const {data} = await API.post(`auth/register`,{role, name, organisationName, hospitalName, email, password, website, address, phone});
            // store token
            if (data.status) {
                toast.success(data.message);
                setTimeout(() => {
                    window.location.replace("/auth/login");
                }, 1000);
                // navigate("/auth/login");
            }
            return data;
        } catch (error) {
            console.log("error",error);
            if (error.response && error.response.data.message) {
                toast.error(error.response.data.message);
                return rejectWithValue(error.response.data.message);
            }else{
                // console.log("error else",error);
                return rejectWithValue(error.response);
            }
        }
    }
);

// get current user
export const getCurrentUser = createAsyncThunk(
    "auth/getCurrentUser",
    async ({rejectWithValue}) => {
        try {
            const res = await API.get('auth/current-user');
            if (res.status) {
                return res.data;
            }
        } catch (error) {
            console.log("error",error);
            if (error.response && error.response.data.message) {
                toast.error(error.response.data.message);
                return rejectWithValue(error.response.data.message);
            }else{
                // console.log("error else",error);
                return rejectWithValue(error.response);
            }
        }
    }
);