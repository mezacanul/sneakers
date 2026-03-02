import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        quantity: 0,
    },
    reducers: {
        setCart: (state, action) => {
            state.quantity = action.payload;
        },
        resetCart: (state) => {
            state.quantity = 0;
        },
    },
});

export const { setCart, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
