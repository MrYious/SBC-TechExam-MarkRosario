import { Recipe } from '../slicers/RecipeSlicer'
import iconStarFilled from '../assets/star-filled.svg'
import iconStarOutline from '../assets/star-outline.svg'

export const RecipeItem = (props: {recipe: Recipe}) => {

    return (
        <div className='recipeItem'>
            {props.recipe.title}
        </div>
    )
}