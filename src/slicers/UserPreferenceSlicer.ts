import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type SortOrder = "ASC" | "DESC" | ""

export interface Preference {
    favorites: {
        show: boolean
        list: string[]
    }
    sort: SortOrder
    searchString: string
}

const initialState: Preference = {
    favorites: {
        show: false,
        list: []
    },
    sort: "",
    searchString: "",
}

const UserPreferenceSlicer =  createSlice({
    name: 'userPreference',
    initialState,
    reducers: {
        
    }
});

// Actions
export const { } = UserPreferenceSlicer.actions

// Reducer
export default UserPreferenceSlicer.reducer
