import iconError from "../assets/inputError.svg"
import iconSuccess from "../assets/inputSuccess.svg"
import iconWarning from "../assets/inputWarning.svg"
import { useState } from "react"

interface FormTextArea {
    label: string
    placeholder: string
    value: string
    readonly: boolean
    rows: number
}

export const CustomFormTextArea = (props: FormTextArea) => {

    type State = 'Initial' | 'Success' | 'Warning' | 'Error';
    const [state, setState] = useState<State>('Initial');

    const displayState = () => {
        return <img
            src={state === 'Success' ? iconSuccess : state === 'Warning' ? iconWarning : iconError }
            alt="icon state"
        />
    }

    const handleValidateInput = (e: React.FocusEvent<HTMLTextAreaElement>) => {
        console.log(e.target.value);
    }

    return (
        <div className='formInput'>
            <label>{props.label}</label>
            <div className="customInput">
                <textarea
                    placeholder={props.placeholder}
                    value={props.value}
                    readOnly={props.readonly}
                    rows={props.rows}
                    onBlur={handleValidateInput}
                    onFocus={()=>setState('Initial')}
                />
                {state === 'Initial' ?? displayState()}
            </div>
        </div>
    )
}