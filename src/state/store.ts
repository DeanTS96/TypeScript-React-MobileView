import {configureStore} from "@reduxjs/toolkit";
import stringReducer from "./banksUsed/banksUsed";
import hadCreditCardLoanReducer from "./hadCreditCardLoan/hadCreditCardLoan";
import foundAddressReducer from "./foundAddress/foundAddress";
import addressReducer from "./address/address";
import userDetailsReducer from "./userDetails/userDetails";
import emailAddressReducer from './emailAddress/emailAddress';
import phoneNumberReducer from './phoneNumber/phoneNumber';

export const store = configureStore({
    reducer: {
        banksUsed: stringReducer,
        hadCreditCardLoan: hadCreditCardLoanReducer,
        foundAddress: foundAddressReducer,
        address: addressReducer,
        userDetails: userDetailsReducer,
        emailAddress: emailAddressReducer,
        phoneNumber: phoneNumberReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;