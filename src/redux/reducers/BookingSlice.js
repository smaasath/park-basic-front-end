import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    bookingData: null,
};

const BookingSlice = createSlice({
    name: 'BookingSlice',
    initialState,
    reducers: {
        bookingData: (state, action) => {
            state.bookingData = action.payload
        },

    }
})


export const { bookingData } = BookingSlice.actions

export default BookingSlice.reducer

