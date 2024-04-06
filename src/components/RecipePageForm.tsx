import { CustomFormButton } from './CustomFormButton';
import { CustomFormInput } from './CustomFormInput';
import { CustomFormTextArea } from './CustomFormTextArea';
import { Recipe } from '../slicers/RecipeSlicer';
import iconBackArrow from '../assets/backArrow.svg';
import { useNavigate } from "react-router-dom";

export const RecipePageForm = (props: {recipe : Recipe, createNew: boolean}) => {

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
                placeholder='Text field data'
                label='YOUR NAME'
                type={"text"}
                readonly={false}
            />
            <CustomFormInput
                value={props.recipe.email}
                placeholder='Text field data'
                label='EMAIL ADDRESS'
                type={"email"}
                readonly={false}
            />
            <CustomFormInput
                value={props.recipe.title}
                placeholder='Text field data'
                label='TITLE'
                type={"text"}
                readonly
            />
            <CustomFormTextArea
                value={props.recipe.description}
                placeholder='Description here'
                label='DESCRIPTION'
                readonly={false}
                rows={5}
            />
            <div className='buttonGroup'>
                <CustomFormButton text='Save' type='save' action={handleSubmit}/>
                <CustomFormButton text='Delete' type='delete' action={handleDelete}/>
            </div>
        </section>
    </form>)
}