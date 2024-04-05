import RecipeSlicer from "./slicers/RecipeSlicer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        recipes: RecipeSlicer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch