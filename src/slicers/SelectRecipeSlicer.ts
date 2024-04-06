import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Recipe } from "./RecipeSlicer";

export type State = 'Initial' | 'Warning' | 'Error' | 'Success'

export interface RecipeValidation {
    name: State,
    email: State,
    title: State,
    description: State,
    ingredients: State,
    instructions: State,
    image: State,
}

interface SelectRecipe {
    recipe: Recipe
    validation: RecipeValidation
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
    validation: {
        name: 'Initial',
        email: 'Initial',
        title: 'Initial',
        description: 'Initial',
        ingredients: 'Initial',
        instructions: 'Initial',
        image: 'Initial',
    },
}

const SelectRecipeSlicer =  createSlice({
    name: 'selectRecipe',
    initialState,
    reducers: {
        startNewRecipe: (state) => {
            state.recipe = initialState.recipe
            state.validation = initialState.validation
        },
        loadRecipe: (state, action: PayloadAction<Recipe>) => {
            state.recipe = action.payload
            state.validation = initialState.validation
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
    startNewRecipe,
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
