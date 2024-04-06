import iconError from "../assets/inputError.svg"
import iconSuccess from "../assets/inputSuccess.svg"
import iconWarning from "../assets/inputWarning.svg"

interface FormInput {
    label: string
    placeholder: string
    value: string
    readonly: boolean
    type: "text" | "email"
}

export const CustomFormInput = (props: FormInput) => {

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