import { Recipe, deleteRecipe } from '../slicers/RecipeSlicer';
import { Toast as ToastInterface, openToast } from "../slicers/ToastSlicer"
import { useAppDispatch, useAppSelector } from '../hooks/useReduxHooks';

import { CustomFormButton } from './CustomFormButton';
import { CustomFormInput } from './CustomFormInput';
import { CustomFormTextArea } from './CustomFormTextArea';
import { Toast } from './Toast';
import iconBackArrow from '../assets/backArrow.svg';
import { useNavigate } from "react-router-dom";

interface RecipeFormProps {
    newRecipe: boolean
    handleSave: (recipe: Recipe) => void
}

export const RecipePageForm = (props: RecipeFormProps) => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const toast = useAppSelector(state => state.toast);
    const { recipe, validation } = useAppSelector(state => state.selectRecipe)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        var newToast: ToastInterface;

        if(isAllInputValid(recipe)){
            props.handleSave(recipe)
            newToast = {
                show: true,
                message: 'Success: Recipe Saved',
                type: 'SUCCESS'
            }
        } else {
            newToast = {
                show: true,
                message: 'Error: Invalid Field(s)',
                type: 'ERROR'
            }
        }
        dispatch(openToast(newToast));
    }

    const handleDelete = () => {
        dispatch(deleteRecipe(recipe.title));
        returnHomePage()
    }

    const returnHomePage = () => {
        navigate("/")
    }

    function isAllInputValid(recipe: Recipe) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var isValidEmail = emailRegex.test(recipe.email);
        if (
            !recipe.title
            || !recipe.name
            || !recipe.email
            || !isValidEmail
            || !recipe.description
            || !recipe.ingredients
            || !recipe.instructions
        ) {
            return false;
        }
        return true;
    }

    return (<form onSubmit={handleSubmit}>
        {
            toast.show && <Toast toast={toast}/>
        }
        <section id='leftImageContainer'>
            <button onClick={returnHomePage} id='goBackButton'>
                <img src={iconBackArrow} alt="icon back arrow" className="icon"/>
                Back
            </button>
            <button type='button' onClick={()=>{}} id='recipeImage'>
                <img src={recipe.image} alt="recipe image" />
            </button>
        </section>
        <section id='rightInputContainer'>
            <CustomFormInput
                objKey={'name'}
                state={validation.name}
                value={recipe.name}
                placeholder='Text field data'
                label='YOUR NAME'
                type={"text"}
                readonly={false}
            />
            <CustomFormInput
                objKey={'email'}
                state={validation.email}
                value={recipe.email}
                placeholder='Text field data'
                label='EMAIL ADDRESS'
                type={"email"}
                readonly={false}
            />
            <CustomFormInput
                objKey={'title'}
                state={validation.title}
                value={recipe.title}
                placeholder='Text field data'
                label='TITLE'
                type={"text"}
                readonly
            />
            <CustomFormTextArea
                objKey={'description'}
                state={validation.description}
                value={recipe.description}
                placeholder='Description here'
                label='DESCRIPTION'
                readonly={false}
                rows={3}
            />
            <CustomFormTextArea
                objKey={'ingredients'}
                state={validation.ingredients}
                value={recipe.ingredients}
                placeholder='Description here'
                label='INGREDIENTS'
                readonly={false}
                rows={4}
            />
            <CustomFormTextArea
                objKey={'instructions'}
                state={validation.instructions}
                value={recipe.instructions}
                placeholder='Description here'
                label='INSTRUCTIONS'
                readonly={false}
                rows={4}
            />
            <div className='buttonGroup'>
                {
                    !props.newRecipe && <CustomFormButton text='Delete' type='delete' action={handleDelete}/>
                }
                <CustomFormButton text='Save' type='save' action={()=>{}}/>
            </div>
        </section>
    </form>)
}