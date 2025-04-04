import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loginData : {
        email : '',
        password : ''
    },
    signupData : {
        email : '',
        password : '',
        username : ''
    }
}

const appSlice = createSlice({
    name : 'userProfile',
    initialState,
    reducers : {
        updateloginData : (state, action) => {
            state.loginData = {...state.loginData, ...action.payload}
        },
        emptylogins : (state, action) => {
            state.loginData = {
                email : '',
                password : ''
            }
        },
        updatesignupData : (state, action) => {
            state.signupData = {...state.signupData, ...action.payload}
        },
        emptysignups : (state, action) => {
            state.signupData = {
                email : '',
                password : '',
                username : ''
            }
        }
    }
})

export const {updateloginData, emptylogins, updatesignupData, emptysignups} = appSlice.actions
export default appSlice.reducer