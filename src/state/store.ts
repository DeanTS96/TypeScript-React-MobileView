import {configureStore} from "@reduxjs/toolkit";
import stringReducer from "./banksUsed/banksUsed";
import hadCreditCardLoanReducer from "./hadCreditCardLoan/hadCreditCardLoan";
import foundAddressReducer from "./foundAddress/foundAddress";
import addressReducer from "./address/address";

export const store = configureStore({
    reducer: {
        banksUsed: stringReducer,
        hadCreditCardLoan: hadCreditCardLoanReducer,
        foundAddress: foundAddressReducer,
        address: addressReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;