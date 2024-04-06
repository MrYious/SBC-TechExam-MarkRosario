import { useEffect, useState } from "react"

import { SelectRecipeSlicerAction } from "../slicers/SelectRecipeSlicer"
import iconError from "../assets/inputError.svg"
import iconSuccess from "../assets/inputSuccess.svg"
import iconWarning from "../assets/inputWarning.svg"
import { useAppDispatch } from "../hooks/useReduxHooks"

interface FormInput {
    label: string
    placeholder: string
    value: string
    readonly: boolean
    type: "text" | "email"
    handleUpdate:  SelectRecipeSlicerAction | any
}

export const CustomFormInput = (props: FormInput) => {
    type State = 'Initial' | 'Success' | 'Warning' | 'Error'
    const [state, setState] = useState<State>('Initial')
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
        if (e.target.value.length === 0) {
            setState('Error');
        } else {
            setState('Success')
        }
    }

    const handleUpdateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(props.handleUpdate(e.target.value))
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
                    onChange={handleUpdateValue}
                    onBlur={handleValidateInput}
                    onFocus={()=>setState(props.value.length === 0 ? 'Warning' : 'Initial')}
                />
                {state !== 'Initial' && displayState()}
            </div>
        </div>
    )
}