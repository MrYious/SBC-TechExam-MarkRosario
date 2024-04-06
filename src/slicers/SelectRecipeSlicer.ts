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
        loadNewRecipe: (state) => {
            state.loading = false,
            state.error = false
        },
        loadRecipe: (state, action: PayloadAction<Recipe>) => {
            state.recipe = action.payload
            state.loading = false
            state.error = false
        },
        loadError: (state) => {
            state.error = true
            state.loading = false
        },
        updateName: (state, action: PayloadAction<string>) => {
            state.recipe.name = action.payload
        },
        updateEmail: (state, action: PayloadAction<string>) => {
            state.recipe.email = action.payload
        },
        updateTitle: (state, action: PayloadAction<string>) => {
            state.recipe.title = action.payload
        },
        updateDescription: (state, action: PayloadAction<string>) => {
            state.recipe.description = action.payload
        },
        updateIngredients: (state, action: PayloadAction<string>) => {
            state.recipe.ingredients = action.payload
        },
        updateInstructions: (state, action: PayloadAction<string>) => {
            state.recipe.instructions = action.payload
        },
        updateImage: (state, action: PayloadAction<string>) => {
            state.recipe.image = action.payload
        },
        updateDateAdded: (state, action: PayloadAction<string>) => {
            state.recipe.dateAdded = action.payload
        },
    }
});

// Actions
export const {
    loadRecipe,
    loadError,
    loadNewRecipe,
    updateDateAdded,
    updateDescription,
    updateEmail,
    updateImage,
    updateIngredients,
    updateInstructions,
    updateName,
    updateTitle,
} = SelectRecipeSlicer.actions

export type SelectRecipeSlicerAction =
    | typeof loadRecipe
    | typeof loadError
    | typeof loadNewRecipe
    | typeof updateDateAdded
    | typeof updateDescription
    | typeof updateEmail
    | typeof updateImage
    | typeof updateIngredients
    | typeof updateInstructions
    | typeof updateName
    | typeof updateTitle;

// Reducer
export default SelectRecipeSlicer.reducer
