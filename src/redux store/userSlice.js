import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name:"user",
    initialState:{
        userInfo:null,
        searchedUser :"chetannn-github"
    },
    reducers:{
        addUser: (state, action) =>{
            state.userInfo=  action.payload;
        },
        removeUser:(state,action) =>{
            state.userInfo = null;
        },
        changeSearchedUser : (state,action) =>{
            state.searchedUser = action.payload;
        }

        
    }
})

export const {addUser,removeUser,changeSearchedUser} = userSlice.actions;

export default userSlice.reducer