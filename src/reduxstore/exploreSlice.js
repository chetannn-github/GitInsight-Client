import { createSlice } from "@reduxjs/toolkit";


const exploreSlice = createSlice({
    name:"explore",
    initialState:{
        selectedLanguage:"Javascript",
        repos:null
    },
    reducers:{
        addExplore: (state, action) =>{
            state.repos=  action.payload;
        },
        changeLanguage:(state,action)=>{
            state.selectedLanguage = action.payload;
        },
        removeExplore:(state,action) =>{
            state.repos = null;
        }

        
    }
})

export const {addExplore,removeExplore,changeLanguage} = exploreSlice.actions;

export default exploreSlice.reducer