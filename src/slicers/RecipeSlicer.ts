import { createSlice } from "@reduxjs/toolkit";

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
    name: 'recipe',
    initialState,
    reducers: {
        
    }
});

// Actions
export const { } = RecipeSlicer.actions

// Reducer
export default RecipeSlicer.reducer
