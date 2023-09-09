import {createSlice} from "@reduxjs/toolkit";
import { login, register} from "../../service/userService";


const initialState = {
    user:  JSON.parse(localStorage.getItem('user')) || null
}
console.log(initialState)

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.user = action.payload.data;
            localStorage.setItem('user', JSON.stringify(action.payload.data))
        })
        builder.addCase(register.fulfilled, (state, action,) => {
            state.user = action.payload;
        });
    },
    reducers: {
        loginSuccess :(state,action)=>{
            state.user = action.payload.user;
            localStorage.setItem('token',action.payload.user.accessToken)
        },
        logoutSuccess : (state,action)=>{
            localStorage.removeItem("token")
        }

    }
})
export const {
    loginSuccess,
    logoutSuccess} = userSlice.actions

export default userSlice.reducer