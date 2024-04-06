import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Recipe } from "./RecipeSlicer";

interface SelectRecipe {
    recipe: Recipe
    loading: boolean
    error: boolean
}

const initialState: SelectRecipe = {
    recipe: {
        name: "",
        email: "",
        title: "",
        description: "",
        ingredients: "",
        instructions: "",
        image: "",
        dateAdded: "",
    },
    loading: true,
    error: false
}

const SelectRecipeSlicer =  createSlice({
    name: 'selectRecipe',
    initialState,
    reducers: {
        loadRecipe: (state, action: PayloadAction<Recipe>) => {
            state.recipe = action.payload
            state.loading = false
            state.error = false
        },
        loadError: (state) => {
            state.error = true
            state.loading = false
        }
    }
});

// Actions
export const { loadRecipe, loadError } = SelectRecipeSlicer.actions

// Reducer
export default SelectRecipeSlicer.reducer
