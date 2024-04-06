
interface FormButton {
    text: string
    type: 'save' | 'delete'
    action: () => void
}

export const CustomFormButton = (props: FormButton) => {

    return (
        <button
            className={`formButton ${props.type}`}
            onClick={props.action}
        >
            {props.text}
        </button>
    )
}