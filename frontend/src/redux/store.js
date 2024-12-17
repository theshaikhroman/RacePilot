import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import racerReducer from "./slices/racerSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        racers: racerReducer,
    },
});

export default store;