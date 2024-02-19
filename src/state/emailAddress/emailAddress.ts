import {PayloadAction, createSlice} from "@reduxjs/toolkit";

interface EmailAddressState{
    value: string;
}

const initialState: EmailAddressState = {
    value: ""
}

const emailAddressSlice = createSlice({
    name: "emailAddress",
    initialState,
    reducers: {
        setEmailAddress: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        },
    }
})

export const {setEmailAddress} = emailAddressSlice.actions;

export default emailAddressSlice.reducer;