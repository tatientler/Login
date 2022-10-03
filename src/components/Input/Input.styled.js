import styled from 'styled-components'

export const StyledInput = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    height: 93px;
    padding: 0px;
    width: 309px;

    @media screen and (max-width: 940px) {
        height: 76px;
        width: 245px;
    }

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

        @media screen and (max-width: 940px) {
            height: 33px;
            padding: 6px 12px;
            width: 245px;
        }
    }

    label::after {
        content: ' *';
        color: red;
    }

    span {
        color: #DC4242;
        font-size: 12px;
        gap: 10px;
        line-height: 15px;
        padding: 4px 4px 0px;
    }
`

export const InputGroup = styled.div`
    display: flex;
    flex-wrap: nowrap;
    position: relative;

    img {
        position: absolute;
        right: 9px;
        top: 11px;

        @media screen and (min-width: 940px) {
            top: 15px;
        }
    }
`
