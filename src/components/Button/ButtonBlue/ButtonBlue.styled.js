import styled from 'styled-components'

export const ButtonBlue = styled.button`
    align-items: center;
    background: #D6D6D6;
    border: 2px solid #63719D;
    border-radius: 100px;
    color: #63719D;
    display: flex;
    flex-direction: row;
    font-weight: 700;
    font-size: 16px;
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