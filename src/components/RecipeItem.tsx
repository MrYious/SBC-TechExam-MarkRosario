import { Recipe } from '../slicers/RecipeSlicer'
import iconStarFilled from '../assets/star-filled.svg'
import iconStarOutlined from '../assets/star-outline.svg'

export const RecipeItem = (props: {recipe: Recipe}) => {

    const formatDate = (date: Date) => {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        const monthIndex = date.getMonth();
        const day = date.getDate();
        const year = date.getFullYear();

        return `${months[monthIndex]} ${day}, ${year}`;
    }

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
                <h1 className='recipeTitle'>{props.recipe.title}</h1>
                <p className='recipeDesc'>{props.recipe.description}</p>
                <p className='seeMore'>See More</p>
                <div className='footer'>
                    <p id='name'> Added by: {props.recipe.name}</p>
                    <p id='dateAdded'>Date: {formatDate(new Date(props.recipe.dateAdded))}</p>
                </div>
            </div>
        </div>
    )
}