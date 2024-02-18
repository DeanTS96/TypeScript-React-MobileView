import {PayloadAction, createSlice} from "@reduxjs/toolkit";

interface BanksUsedState{
    value: string[];
}

const initialState: BanksUsedState = {
    value: []
}

const banksUsedSlice = createSlice({
    name: "banksUsed",
    initialState,
    reducers: {
        setBanksUsed: (state, action: PayloadAction<string[]>) => {
            state.value = action.payload
        }
    }
})

export const {setBanksUsed} = banksUsedSlice.actions;

export default banksUsedSlice.reducer;