import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    bookingData: null,
    selectedTime: null
};

const BookingSlice = createSlice({
    name: 'BookingSlice',
    initialState,
    reducers: {
        bookingData: (state, action) => {
            state.bookingData = action.payload
        },

        selectedTime: (state, action) => {
            state.selectedTime = action.payload
        },


    }
})


export const { bookingData, selectedTime } = BookingSlice.actions

export default BookingSlice.reducer

