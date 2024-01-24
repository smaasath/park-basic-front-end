import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/UserSlice.js";
import BookingSlice from "./reducers/BookingSlice.js";



const Store = configureStore({
    reducer: {
        user: userSlice,
        booking: BookingSlice

    },
});

export default Store;
