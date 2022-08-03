import styled from 'styled-components'

export const StyledButton = styled.button`
    align-items: center;
    background-color: ${(props) => props.backgroundColor ? props.backgroundColor : ''};
    border: ${(props) => props.borderColor ? "2px solid " + props.borderColor : '0px'};
    border-radius: 100px;
    color: ${(props) => props.color ? props.color : ''};
    cursor: pointer;
    display: flex;
    flex-direction: row;
    font-size: 16px;
    font-weight: 700;
    gap: 10px;
    height: 40px;
    justify-content: center;
    line-height: 24px;
    padding: 8px 16px;
    width: 309px;

    @media screen and (max-width: 640px) {
        font-size: 14px;
        height: 33px;
        line-height: 21px;
        padding: 6px 14px;
    }
`
