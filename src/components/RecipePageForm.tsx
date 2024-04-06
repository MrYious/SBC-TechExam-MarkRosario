import { Recipe } from '../slicers/RecipeSlicer';
import iconBackArrow from '../assets/backArrow.svg';
import { useNavigate } from "react-router-dom";

export const RecipePageForm = (props: {recipe : Recipe, createNew: boolean}) => {

    const navigate = useNavigate();

    return (<form onSubmit={()=>{}}>
        <section id='leftImageContainer'>
            <button onClick={()=>navigate("/")} id='goBackButton'>
                <img src={iconBackArrow} alt="icon back arrow" className="icon"/>
                Back
            </button>
            <button onClick={()=>{}} id='recipeImage'>
                <img src={props.recipe.image} alt="recipe image" />
            </button>
        </section>
        <section id='rightInputContainer'>
            <div>
                {props.recipe?.title}
            </div>
        </section>
    </form>)
}