import styled from 'styled-components'

export const ButtonYellow = styled.button`
    align-items: center;
    background: #FFD175;
    border: 1px solid #FFD175;
    border-radius: 100px;
    color: #323133;
    display: flex;
    flex-direction: row;
    font-weight: 700;
    font-size: 16px;
    gap: 4px;
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
