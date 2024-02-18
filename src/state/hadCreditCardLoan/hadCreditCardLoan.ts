import {PayloadAction, createSlice} from "@reduxjs/toolkit";

interface HadCreditCardLoanState{
    value: boolean;
}

const initialState: HadCreditCardLoanState = {
    value: false
}

const hadCreditCareLoanSlice = createSlice({
    name: "hadCreditCardLoan",
    initialState,
    reducers: {
        setHadCreditCardLoan: (state, action: PayloadAction<boolean>) => {
            state.value = action.payload
        },
    }
})

export const {setHadCreditCardLoan} = hadCreditCareLoanSlice.actions;

export default hadCreditCareLoanSlice.reducer;