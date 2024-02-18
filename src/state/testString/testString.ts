import {PayloadAction, createSlice} from "@reduxjs/toolkit";

interface StringState{
    value: string;
}

const initialState: StringState = {
    value: "Hi"
}

const stringSlice = createSlice({
    name: "mystring",
    initialState,
    reducers: {
        goodbye: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        }
    }
})

export const {goodbye} = stringSlice.actions;

export default stringSlice.reducer;