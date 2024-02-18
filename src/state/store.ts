import {configureStore} from "@reduxjs/toolkit";
import stringReducer from "./testString/testString";
import hadCreditCardLoanReducer from "./hadCreditCardLoan/hadCreditCardLoan";

export const store = configureStore({
    reducer: {
        testString: stringReducer,
        hadCreditCardLoan: hadCreditCardLoanReducer

    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;