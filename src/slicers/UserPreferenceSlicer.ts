import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type SortOrder = "ASC" | "DESC" | ""

export interface Preference {
    favorites: {
        show: boolean
        list: string[]
    }
    sortOrder: SortOrder
    searchString: string
}

const initialState: Preference = {
    favorites: {
        show: false,
        list: []
    },
    sortOrder: "",
    searchString: "",
}

const UserPreferenceSlicer =  createSlice({
    name: 'userPreference',
    initialState,
    reducers: {
        updateSortOrder: (state, action: PayloadAction<SortOrder>) => {
            state.sortOrder = action.payload;
        }
    }
});

// Actions
export const { updateSortOrder } = UserPreferenceSlicer.actions

// Reducer
export default UserPreferenceSlicer.reducer
