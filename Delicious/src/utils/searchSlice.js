import { createSlice } from "@reduxjs/toolkit";
import { restaurant_details } from '../utils/mockData';
import { useState, useEffect } from "react";

const searchSlice = createSlice({
    name: "search",       //name of the slice
    initialState: {
        searchResults: restaurant_details,   //initial state of the search results will be empty string
        searchKeyword: ""
    },
    // reducer containing action functions
    reducers: {
        searchRestaurants: (state, action) => {
            // console.log("IN Reducer func--------")
            console.log("action.payload:", action.payload);
            // console.log("State :", state);
            state.searchKeyword = action.payload;
            if (action.payload == "") {
                state.searchResults = restaurant_details;
            }
            // console.log("State.searchKeyword:", state.searchKeyword);
            // state.searchResults
            state.searchResults = state.searchResults.filter(res => res.name.toLowerCase().includes(state.searchKeyword.toLowerCase()));;
            console.log("State.searchResults:", state.searchResults);
            // console.log("filtered results:", filteredResturants);
            // state.searchResults = filteredResturants;
            // console.log("State.searchResults after pushing to state:", state.searchResults);
        }
    }
})


// exporting the action functions to use them anywhere in the appn. these will be available as the action functions of the slice.
export const { searchRestaurants } = searchSlice.actions;

export default searchSlice.reducer;   // it will be exported as a reducer