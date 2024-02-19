import {PayloadAction, createSlice} from "@reduxjs/toolkit";

interface ESignatureState{
    value: string;
}

const initialState: ESignatureState = {
    value: ""
}

const eSignatureSlice = createSlice({
    name: "eSignature",
    initialState,
    reducers: {
        setESignature: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        },
    }
})

export const {setESignature} = eSignatureSlice.actions;

export default eSignatureSlice.reducer;