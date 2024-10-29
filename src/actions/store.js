import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { dCandidatesReducer } from "../reducers/dCandidateReducer"; // Update this import path if needed

export const store = configureStore({
    reducer: {
        dCandidatesReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
