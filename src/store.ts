import RecipeSlicer from "./slicers/RecipeSlicer";
import UserPreferenceSlicer from "./slicers/UserPreferenceSlicer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        recipes: RecipeSlicer,
        userPreference: UserPreferenceSlicer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch