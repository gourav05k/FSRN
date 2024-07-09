import { createSlice } from "@reduxjs/toolkit";

// create a slice for cart
const cartSlice = createSlice({
    name: "cart",       //name of the slice
    initialState: {
        items: []   //initial state of the cart will be empty list
    },
    // reducer containing action functions
    reducers: {
        addItem: (state, action) => {           //action function to add items to the cart
            console.log("adding item: ", action.payload);
            console.log("State of cart slice:", state);
            // check if the item id already exists in cart, else return undefined.
            const item = state.items.find(item => item._id == action.payload._id);
            console.log("item found in cart earlier?", item);
            const data = { ...action.payload, quantity: 1 }
            console.log("item added to cart:", data);
            // if item already present in cart, then increase the quantity. else add item to cart
            !item ? state.items.push(data) : item.quantity++;
        },
        removeItem: (state, action) => {         // remove action function to remove items from the cart.
            //find item id already in cart and decrease quantity
            console.log("removing the item:", action.payload);
            const item = state.items.find(item => item._id == action.payload._id);
            if (item) {
                item.quantity--;
                if (item.quantity == 0) {
                    const newCart = state.items.filter(item => (item._id !== action.payload._id));
                    state.items = newCart;
                }
            }
        },
        emptyItem: (state, action) => {
            const item = state.items.find(item => item._id == action.payload._id);
            item.quantity = 0;
            const newCart = state.items.filter(item => (item._id !== action.payload._id));
            state.items = newCart;
        }
    }
})

// exporting the action functions to use them anywhere in the appn. these will be available as the action functions of the slice.
export const { addItem, removeItem, emptyItem } = cartSlice.actions;

export default cartSlice.reducer;   // it will be exported as a reducer