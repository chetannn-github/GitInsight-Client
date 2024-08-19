import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice";
import exploreSlice from "./exploreSlice";

const appStore = configureStore({
    reducer:{
        user:userReducer,
        explore:exploreSlice,
    }
});

export default appStore