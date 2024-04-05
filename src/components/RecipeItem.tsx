import { Recipe } from '../slicers/RecipeSlicer'
import iconStarFilled from '../assets/star-filled.svg'
import iconStarOutlined from '../assets/star-outline.svg'

export const RecipeItem = (props: {recipe: Recipe}) => {

    return (
        <div className='recipeItem'>
            <div className='imageHolder'>
                <img src={props.recipe.image} alt="recipe image" id="cover" />
                <button onClick={() => {}}>
                    {
                        false ?
                            <img src={iconStarFilled} alt="icon star filled " className='icon' />
                        :
                            <img src={iconStarOutlined} alt="icon star outlined" className='icon'/>
                    }
                </button>
            </div>
            <div className='recipeDetails'>
                <h1 className='recipeTitle'>Hello</h1>
                <p className='recipeDesc'>{props.recipe.description}</p>
                <p className='seeMore'>See More</p>
                <div className='footer'>
                    <p id='name'> Added by: {props.recipe.name}</p>
                    <p id='dateAdded'>Date: {props.recipe.dateAdded}</p>
                </div>
            </div>
        </div>
    )
}