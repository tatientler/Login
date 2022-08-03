import { StyledButton } from './Button.styled'

export function Button({ backgroundColor, borderColor, color, text }) {
    return (
        <StyledButton 
            backgroundColor={backgroundColor} 
            borderColor={borderColor}
            color={color}
        >
            {text}
       
        </StyledButton>
    )
}