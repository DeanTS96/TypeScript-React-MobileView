import {PayloadAction, createSlice} from "@reduxjs/toolkit";

interface PhoneNumberState{
    value: string;
}

const initialState: PhoneNumberState = {
    value: ""
}

const phoneNumberSlice = createSlice({
    name: "phoneNumber",
    initialState,
    reducers: {
        setPhoneNumber: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        },
    }
})

export const {setPhoneNumber} = phoneNumberSlice.actions;

export default phoneNumberSlice.reducer;