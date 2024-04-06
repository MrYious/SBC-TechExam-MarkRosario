import '../Recipe/Recipe.scss'

import { Recipe, createNewRecipe } from '../../slicers/RecipeSlicer';
import { useEffect, useState } from 'react';

import { RecipePageForm } from '../../components/RecipePageForm';
import { startNewRecipe } from '../../slicers/SelectRecipeSlicer';
import { useAppDispatch } from '../../hooks/useReduxHooks';

function NewRecipe() {

	const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true)

	const handleSave = (recipe: Recipe) => {
		dispatch(createNewRecipe(recipe));
	}

  useEffect(() => {
    // Resets the state incase it contains state of accessed recipes
    dispatch(startNewRecipe());
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <main id='recipe' className={`${loading && 'loading'}`}>
        <h2>Loading the recipe...</h2>
      </main>
    )
  }

  return (
    <main id='newRecipe'>
      <RecipePageForm newRecipe={false} handleSave={handleSave}/>
    </main>
  )
}

export default NewRecipe;
