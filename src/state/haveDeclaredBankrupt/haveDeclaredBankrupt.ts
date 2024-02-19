import {PayloadAction, createSlice} from "@reduxjs/toolkit";

interface HaveDeclaredBankruptState{
    value: boolean;
}

const initialState: HaveDeclaredBankruptState = {
    value: false
}

const haveDeclaredBankruptSlice = createSlice({
    name: "haveDeclaredBankrupt",
    initialState,
    reducers: {
        setHaveDeclaredBankrupt: (state, action: PayloadAction<boolean>) => {
            state.value = action.payload
        },
    }
})

export const {setHaveDeclaredBankrupt} = haveDeclaredBankruptSlice.actions;

export default haveDeclaredBankruptSlice.reducer;