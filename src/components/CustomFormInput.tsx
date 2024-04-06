import iconError from "../assets/inputError.svg"
import iconSuccess from "../assets/inputSuccess.svg"
import iconWarning from "../assets/inputWarning.svg"
import { useState } from "react"

interface FormInput {
    label: string
    placeholder: string
    value: string
    readonly: boolean
    type: "text" | "email"
}

export const CustomFormInput = (props: FormInput) => {
    type State = 'Initial' | 'Success' | 'Warning' | 'Error'
    const [state, setState] = useState<State>('Initial')

    const displayState = () => {
        return <img
            src={state === 'Success' ? iconSuccess : state === 'Warning' ? iconWarning : iconError }
            alt="icon state"
        />
    }

    const handleValidateInput = (e: React.FocusEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    }

    return (
        <div className='formInput'>
            <label>{props.label}</label>
            <div className="customInput">
                <input
                    type={"text"}
                    required
                    placeholder={props.placeholder}
                    value={props.value}
                    readOnly={props.readonly}
                    onBlur={handleValidateInput}
                />
                {state && displayState()}
            </div>
        </div>
    )
}