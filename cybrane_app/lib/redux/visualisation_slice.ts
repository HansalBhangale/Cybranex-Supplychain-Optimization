import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface VisualisationState{
    optimal_bitstring: string;
    total_cost: number | null,
    bitstrings: any,
}

const visualisationState: VisualisationState = {
    optimal_bitstring: "",
    total_cost: 0,
    bitstrings: {}
}

const visualisationDataSlice = createSlice({
    name: "visualisation",
    initialState: visualisationState,
    reducers: {
        update: (state, action: PayloadAction<VisualisationState>) => {
            state = action.payload;
            return state;
        }
    }
});

export const { update } = visualisationDataSlice.actions;
export default visualisationDataSlice.reducer;