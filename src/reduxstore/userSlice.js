import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name:"user",
    initialState:{
        userInfo:null,
        searchedUser :JSON.parse(localStorage.getItem("authUser"))?.username || "git",
        loggedInUser:JSON.parse(localStorage.getItem("authUser"))
    },
    reducers:{
        addUser: (state, action) =>{
            state.userInfo=  action.payload;
        },
        removeUser:(state,action) =>{
            state.userInfo = null;
        },
        addLoggedInUser:(state,action )=>{
            state.loggedInUser = action.payload;
        },
        changeSearchedUser : (state,action) =>{
            state.searchedUser = action.payload;
        },
        addSortRepo:(state,action) =>{
            state.userInfo = action.payload;
        }

        
    }
})

export const {addUser,removeUser,changeSearchedUser,addSortRepo, addLoggedInUser} = userSlice.actions;

export default userSlice.reducer