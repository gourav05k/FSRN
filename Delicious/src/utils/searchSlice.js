import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { restaurant_details } from '../utils/mockData';
import { useState, useEffect } from "react";

// create a thunk: to perform asynchronous operations: fetching API data.
export const fetchRestaurants = createAsyncThunk(
    'search/fetchRestaurants',          //Action type: unique string that represents this particular async operation. It's used in reducers to identify which action is being handled.
    async (_, { getState, requestId, rejectWithValue }) => {    // Payload creator function. performs the actual async operation (in this case, fetching data from an API)

        /**
         * _: An underscore is used here as a placeholder since we're not using the first argument, which would typically be the payload passed when dispatching the thunk.
         * getState: A function that returns the current state of the Redux store.
         * requestId: A unique ID for this request.
         * rejectWithValue: A function used to return a custom error payload when the request fails.
         */

        try {
            console.log("coming in try============")
            const response = await fetch('http://localhost:5100/api/restaurants', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    // "Authorization": `JWT ${sessionStorage.getItem("accessToken")}`
                }
            });
            const data = await response.json();         //Waits for the response and converts it to JSON.
            console.log("API response data:", data);
            if (response.ok) {          //it checks reponse and returns the data, which resolves the promise and triggers the fulfilled action with the data as payload.
                console.log("API response OK");
                return data;        // Fulfilled case: the resolved value is returned
            } else {
                return rejectWithValue(data);   // Rejected case: the error payload is returned
            }
        } catch (err) {
            console.log("API error:", err.message);
            return rejectWithValue(err.message);    // Rejected case: the error message is returned
        }
    }
);
// create a slice for Search operations
const searchSlice = createSlice({
    name: "search",       //name of the slice
    initialState: {
        searchResults: [],   //initial state of the search results will be empty string
        searchKeyword: "",
        status: "idle",
        err: null
    },
    // reducer containing action functions
    reducers: {
        searchRestaurants: (state, action) => {
            console.log("IN Reducer func--------")
            console.log("action.payload:", action.payload);
            state.searchKeyword = action.payload;
            console.log("status: ", state.status);
            state.searchResults = state.searchResults.filter(res => res.name.toLowerCase().includes(state.searchKeyword.toLowerCase()));;
            console.log("State.searchResults:", state.searchResults);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRestaurants.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchRestaurants.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.searchResults = action.payload;
            })
            .addCase(fetchRestaurants.rejected, (state, action) => {
                state.status = 'failed';
                state.err = action.payload;
            });
    }
})


// exporting the action functions to use them anywhere in the appn. these will be available as the action functions of the slice.
export const { searchRestaurants } = searchSlice.actions;

export default searchSlice.reducer;   // it will be exported as a reducer