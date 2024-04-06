import { updateDescription, updateEmail, updateIngredients, updateInstructions, updateName, updateTitle } from '../slicers/SelectRecipeSlicer';

import { CustomFormButton } from './CustomFormButton';
import { CustomFormInput } from './CustomFormInput';
import { CustomFormTextArea } from './CustomFormTextArea';
import { Recipe } from '../slicers/RecipeSlicer';
import iconBackArrow from '../assets/backArrow.svg';
import { useNavigate } from "react-router-dom";

export const RecipePageForm = (props: {recipe : Recipe, newRecipe: boolean}) => {

    const navigate = useNavigate();

    const handleSubmit = () => {

    }

    const handleDelete = () => {

    }

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
            <CustomFormInput
                value={props.recipe.name}
                handleUpdate={updateName}
                placeholder='Text field data'
                label='YOUR NAME'
                type={"text"}
                readonly={false}
            />
            <CustomFormInput
                value={props.recipe.email}
                handleUpdate={updateEmail}
                placeholder='Text field data'
                label='EMAIL ADDRESS'
                type={"email"}
                readonly={false}
            />
            <CustomFormInput
                value={props.recipe.title}
                handleUpdate={updateTitle}
                placeholder='Text field data'
                label='TITLE'
                type={"text"}
                readonly
            />
            <CustomFormTextArea
                value={props.recipe.description}
                handleUpdate={updateDescription}
                placeholder='Description here'
                label='DESCRIPTION'
                readonly={false}
                rows={3}
            />
            <CustomFormTextArea
                value={props.recipe.ingredients}
                handleUpdate={updateIngredients}
                placeholder='Description here'
                label='INGREDIENTS'
                readonly={false}
                rows={4}
            />
            <CustomFormTextArea
                value={props.recipe.instructions}
                handleUpdate={updateInstructions}
                placeholder='Description here'
                label='INSTRUCTIONS'
                readonly={false}
                rows={4}
            />
            <div className='buttonGroup'>
                {
                    !props.newRecipe && <CustomFormButton text='Delete' type='delete' action={handleDelete}/>
                }
                <CustomFormButton text='Save' type='save' action={handleSubmit}/>
            </div>
        </section>
    </form>)
}