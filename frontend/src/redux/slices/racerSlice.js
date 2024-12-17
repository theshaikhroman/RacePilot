import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    racers: [],
};

const racerSlice = createSlice({
    name: "racers",
    initialState,
    reducers: {
        addRacer: (state, action) => {
            state.racers.push(action.payload);
        },
        deleteRacer: (state, action) => {
            state.racers = state.racers.filter((r) => r.id !== action.payload);
        },
    },
});

export const { addRacer, deleteRacer } = racerSlice.actions;
export default racerSlice.reducer;