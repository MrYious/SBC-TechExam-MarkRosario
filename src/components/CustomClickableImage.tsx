import imgPlaceholder from '../assets/placeholderImage.svg'

interface CustomClickableImageProps {
    imagePath: string
}

export const CustomClickableImage = (props: CustomClickableImageProps) => {

    return (
        <button
            type='button'
            onClick={()=>{}}
            id='recipeImageHolder'
            style={{backgroundImage: `url('${props.imagePath || imgPlaceholder}')`}}
        />
    )
}