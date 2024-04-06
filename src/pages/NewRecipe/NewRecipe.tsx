import './NewRecipe.scss'

import { Recipe, createNewRecipe } from '../../slicers/RecipeSlicer';

import { RecipePageForm } from '../../components/RecipePageForm';
import { useAppDispatch } from '../../hooks/useReduxHooks';

function NewRecipe() {

	const dispatch = useAppDispatch();

	const handleSave = (recipe: Recipe) => {
		dispatch(createNewRecipe(recipe));
	}

  return (
    <main id='newRecipe'>
      <RecipePageForm newRecipe={false} handleSave={handleSave}/>
    </main>
  )
}

export default NewRecipe;
