import { State, updateSelectedRecipe } from "../slicers/SelectRecipeSlicer"
import { useAppDispatch, useAppSelector } from "../hooks/useReduxHooks"
import { useEffect, useState } from "react"

import iconError from "../assets/inputError.svg"
import iconSuccess from "../assets/inputSuccess.svg"
import iconWarning from "../assets/inputWarning.svg"

interface FormInputProps {
    label: string
    placeholder: string
    value: string
    readonly: boolean
    type: "text" | "email"
    state: State
    objKey: string
}

export const CustomFormInput = (props: FormInputProps) => {
    const [state, setState] = useState<State>('Initial')
    const { recipe } = useAppSelector(state => state.selectRecipe)
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (props.value.length === 0) {
          setState('Warning')
        }
    }, [props.value])

    const displayState = () => {
        return <img
            src={state === 'Success' ? iconSuccess : state === 'Warning' ? iconWarning : iconError }
            alt="icon state"
        />
    }

    const handleValidateInput = (e: React.FocusEvent<HTMLInputElement>) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const value = e.target.value;
        if (value.length === 0 || (props.type === 'email' && !emailRegex.test(value))) {
            setState('Error');
        } else {
            setState('Success')
        }
    }

    const handleUpdateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateSelectedRecipe({...recipe, [props.objKey]: e.target.value}))
    }

    return (
        <div className='formInput'>
            <label>{props.label}</label>
            <div className="customInput">
                <input
                    type={"text"}
                    placeholder={props.placeholder}
                    readOnly={props.readonly}
                    value={props.value}
                    name={props.label}
                    onChange={handleUpdateValue}
                    onBlur={handleValidateInput}
                    onFocus={()=>setState(props.value.length === 0 ? 'Warning' : 'Initial')}
                />
                {state !== 'Initial' && displayState()}
            </div>
        </div>
    )
}