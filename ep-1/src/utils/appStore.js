import {configureStore} from '@reduxjs/toolkit';
import cartReducer from "./cartSlice";

const appStore = configureStore({
    reducer: {
        // big reducer of our app, that combines all reducers of different slices.
        cart: cartReducer,
    }
});

export default appStore;