import {configureStore} from "@reduxjs/toolkit";
import stringReducer from "./banksUsed/banksUsed";
import hadCreditCardLoanReducer from "./hadCreditCardLoan/hadCreditCardLoan";

export const store = configureStore({
    reducer: {
        banksUsed: stringReducer,
        hadCreditCardLoan: hadCreditCardLoanReducer

    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;