import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Recipe {
    name: string
    email: string
    title: string
    instructions: string
    image: string
    dateAdded: string
}

const initialState: Recipe[] = []

const RecipeSlicer =  createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        loadRecipes: (_state, action: PayloadAction<Recipe[]>) => action.payload,
    }
});

// Actions
export const { loadRecipes } = RecipeSlicer.actions

// Reducer
export default RecipeSlicer.reducer
