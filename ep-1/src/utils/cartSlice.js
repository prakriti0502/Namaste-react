import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        //addItem is action, and the function is the reducer function.
        addItem: (state, action) => {
            //it will modify our "state" based on the "action".

            // we're mutating the existing state here.
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.splice(action.payload,1);
        },
        clearCart: (state) => {
            state.items.length = 0;
            // state.items=[]; => this will not work
        }
    }
})

export default cartSlice.reducer;

export const { addItem, removeItem, clearCart } = cartSlice.actions;