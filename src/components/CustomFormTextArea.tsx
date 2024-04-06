import { State, updateSelectedRecipe } from "../slicers/SelectRecipeSlicer"
import { useAppDispatch, useAppSelector } from "../hooks/useReduxHooks"
import { useEffect, useState } from "react"

import iconError from "../assets/inputError.svg"
import iconSuccess from "../assets/inputSuccess.svg"
import iconWarning from "../assets/inputWarning.svg"

interface FormTextAreaProps {
    label: string
    placeholder: string
    value: string
    readonly: boolean
    rows: number
    state: State
    objKey: string
}

export const CustomFormTextArea = (props: FormTextAreaProps) => {
    const [state, setState] = useState<State>('Initial');
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

    const handleValidateInput = (e: React.FocusEvent<HTMLTextAreaElement>) => {
        if (e.target.value.length === 0) {
            setState('Error');
        } else {
            setState('Success');
        }
    }

    const handleUpdateValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateSelectedRecipe({...recipe, [props.objKey]: e.target.value}))
    }

    return (
        <div className='formInput'>
            <label>{props.label}</label>
            <div className="customInput">
                <textarea
                    placeholder={props.placeholder}
                    name={props.label}
                    readOnly={props.readonly}
                    rows={props.rows}
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