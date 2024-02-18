import {PayloadAction, createSlice} from "@reduxjs/toolkit";

interface FoundAddressState{
    value: boolean;
}

const initialState: FoundAddressState = {
    value: false
}

const foundAddressSlice = createSlice({
    name: "foundAddress",
    initialState,
    reducers: {
        setFoundAddress: (state, action: PayloadAction<boolean>) => {
            state.value = action.payload
        },
    }
})

export const {setFoundAddress} = foundAddressSlice.actions;

export default foundAddressSlice.reducer;