import { createSlice } from "@reduxjs/toolkit"

const fetchStatusSlice = createSlice({
    name: 'fetchStatus',
    initialState: {
        fetchDone: false,
        currentlyFetching: false,
    },
    reducers: {
        markfetchDone: (state) => {
            state.fetchDone = true;
        },
        markfetchingStarted: (state) => {
            state.currentlyFetching = true;
        },
        markfetchingfinished: (state) => {
            state.currentlyFetching = false
        }
    }
})

export const fetchStatusActions = fetchStatusSlice.actions

export default fetchStatusSlice