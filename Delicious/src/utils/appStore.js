import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";


// create a store
const appStore = configureStore({ 
    reducer: {          //add slice to the cart. it was exported as a reducer.
        cart: cartSlice
    }
})

export default appStore;