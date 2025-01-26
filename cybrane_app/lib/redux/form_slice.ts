import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface formData {
    supplierToWarehouse: any,
    supplierInventory: any,
    warehouseInventory: any,
    retailerInventory: any,
    warehouseToRetailer: any
}

const initialState: formData = {
    supplierInventory: [],
    warehouseInventory: [],
    supplierToWarehouse: [],
    warehouseToRetailer: [],
    retailerInventory: []
}

const formSlice = createSlice({
    name: "formData",
    initialState,
    reducers: {
        update: (state, action: PayloadAction<formData>) => {
            state = action.payload;
            return state;
        }
    }
})

export const { update } = formSlice.actions;
export default formSlice.reducer;