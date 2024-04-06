import './Recipe.scss'

import { Recipe as RecipeInterface, updateRecipe } from '../../slicers/RecipeSlicer';
import { loadError, loadRecipe } from '../../slicers/SelectRecipeSlicer';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks';
import { useNavigate, useParams } from 'react-router-dom';

import { RecipePageForm } from '../../components/RecipePageForm';
import { useEffect } from 'react';

function Recipe() {

  const { title } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const recipeList = useAppSelector(state => state.recipes);
  const {loading, error} = useAppSelector(state => state.selectRecipe);

  useEffect(() => {
    const selectedRecipe = recipeList.find(recipe => recipe.title.toLowerCase() === title?.toLowerCase());
    if (selectedRecipe) {
      console.log(selectedRecipe);
      dispatch(loadRecipe(selectedRecipe));
    } else {
      dispatch(loadError());
    }
  }, [recipeList])

  const handleSave = (recipe: RecipeInterface) => {
		dispatch(updateRecipe(recipe));
	}

  if (loading) {
    return (
      <main id='recipe' className={`${loading && 'loading'}`}>
        <h2>Loading the recipe...</h2>
      </main>
    )
  }

  if (error) {
    return (
      <main id='recipe' className={`${error && 'error'}`}>
        <h2>Recipe Not Found!</h2>
        <button onClick={() => navigate(-1)}>Return to Previous Page</button>
      </main>
    )
  }

  return (
    <main id='recipe'>
      <RecipePageForm newRecipe={false} handleSave={handleSave}/>
    </main>
  )
}

export default Recipe;
