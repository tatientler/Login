import styled from 'styled-components'

export const StyledInput = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    height: 93px;
    padding: 0px;
    width: 309px;

    input {
        align-items: center;
        background-color: ${(props) => props.backgroundColor ? props.backgroundColor : ''};
        border: ${(props) => props.borderColor ? "1px solid " + props.borderColor : '0px'};
        border-radius: 100px;
        display: flex;
        flex-direction: row;
        gap: 10px;
        height: 40px;
        margin-top: 5px;
        outline: none;
        padding: 8px 16px;
        width: 309px;
    }

    label::after {
        content: ' *';
        color: red;
    }
`

export const InputGroup = styled.div`
    display: flex;
    flex-wrap: nowrap;
    position: relative;

    img {
        position: absolute;
        right: 15px;
        top: 13px;
    }
`
