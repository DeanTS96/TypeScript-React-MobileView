import {PayloadAction, createSlice} from "@reduxjs/toolkit";

interface AddressState{
    value: {
        line1: string,
        line2: string,
        town: string,
        county: string,
        country: string,
        postcode: string
    }
}

const initialState: AddressState = {
    value: {
        line1: "",
        line2: "",
        town: "",
        county: "",
        country: "",
        postcode: ""
    }
}

const addressSlice = createSlice({
    name: "address",
    initialState,
    reducers: {
        setAddress: (state, action: PayloadAction<AddressState["value"]>) => {
            state.value = action.payload
        },
    }
})

export const {setAddress} = addressSlice.actions;

export default addressSlice.reducer;