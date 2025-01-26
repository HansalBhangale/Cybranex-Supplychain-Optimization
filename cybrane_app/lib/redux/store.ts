import { configureStore } from "@reduxjs/toolkit";
import visualisationReducer from "./visualisation_slice";
import formDataReducer from "./form_slice"

export const store = configureStore({
    reducer: {visualisation: visualisationReducer, formData: formDataReducer}
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;