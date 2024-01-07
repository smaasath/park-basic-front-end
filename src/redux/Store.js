import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/UserSlice.js";




const Store = configureStore({
    reducer: {
        user: userSlice,
    },
});

export default Store;
