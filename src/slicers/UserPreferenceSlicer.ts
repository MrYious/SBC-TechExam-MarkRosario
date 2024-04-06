import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type SortOrder = "ASC" | "DESC" | null

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
    sortOrder: null,
    searchString: "",
}

const UserPreferenceSlicer =  createSlice({
    name: 'userPreference',
    initialState,
    reducers: {
        updateSortOrder: (state, action: PayloadAction<SortOrder>) => {
            state.sortOrder = action.payload
        },
        toggleShowFavorites: (state) => {
            state.favorites.show = !state.favorites.show
        },
        toggleFavoriteRecipe: (state, action: PayloadAction<string>) => {
            if (state.favorites.list.find(title => title.toLowerCase() === action.payload.toLowerCase())) {
                state.favorites.list = state.favorites.list.filter(title => title.toLowerCase() !== action.payload.toLowerCase() );
            } else {
                state.favorites.list.push(action.payload);
            }
        },
        updateSearchString: (state, action: PayloadAction<string>) => {
            state.searchString = action.payload
        }
    }
});

// Actions
export const {
    updateSortOrder,
    toggleShowFavorites,
    toggleFavoriteRecipe,
    updateSearchString
} = UserPreferenceSlicer.actions

// Reducer
export default UserPreferenceSlicer.reducer
