import {PayloadAction, createSlice} from "@reduxjs/toolkit";

interface UserDetailsState{
    value: {
        title: string,
        firstName: string,
        lastName: string,
        previousName: string | null | undefined,
        dateOfBirth: string,
    }
}

const initialState: UserDetailsState = {
    value: {
        title: "",
        firstName: "",
        lastName: "",
        previousName: "",
        dateOfBirth: "",
    }
}

const userDetailsSlice = createSlice({
    name: "userDetails",
    initialState,
    reducers: {
        setUserDetails: (state, action: PayloadAction<UserDetailsState["value"]>) => {
            state.value = action.payload
        },
    }
})

export const {setUserDetails} = userDetailsSlice.actions;

export default userDetailsSlice.reducer;