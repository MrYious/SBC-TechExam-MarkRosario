import iconError from "../assets/inputError.svg"
import iconSuccess from "../assets/inputSuccess.svg"
import iconWarning from "../assets/inputWarning.svg"

interface FormTextArea {
    label: string
    placeholder: string
    value: string
    disabled: boolean
    rows: number
}

export const CustomFormInput = (props: FormTextArea) => {

    return (
        <div className='formInput'>
            <label>{props.label}</label>
            <div className="customInput">
                <textarea
                    placeholder={props.placeholder}
                    value={props.value}
                    disabled={props.disabled}
                    rows={props.rows}
                />
                <img
                    src={iconError}
                    alt="icon"
                />
                {/* <img
                    src={iconSuccess}
                    alt="icon"
                />
                <img
                    src={iconWarning}
                    alt="icon"
                /> */}
            </div>
        </div>
    )
}