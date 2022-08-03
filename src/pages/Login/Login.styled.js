import styled from 'styled-components'

export const Container = styled.div`
    background-color: #000;
    display: flex;
    margin: 0 auto;

    @media screen and (max-width: 640px) {
        flex-direction: column-reverse;
    }
`

export const LoginWrapper = styled.div`
    align-items: center;
    background: #D6D6D6;
    display: flex;
    flex-direction: column;
    gap: 30px;
    height: 100vh;
    justify-content: center;
    padding: 10px 50px;
    width: 529px;

    @media screen and (max-width: 940px) {
        width: 425px;
    }

    @media screen and (max-width: 640px) {
        gap: 38px;
        height: auto;
        min-height: 437px;
        min-width: 360px;
        padding: 0px;
        width: auto;
    }
`

export const TitleWrapper = styled.div`
    align-items: center;
    color: #4C5980;
    display: flex;
    flex-direction: column;
    height: 86px;
    padding: 0px 60px;
    width: 429px;

    @media screen and (max-width: 940px) {
        height: 80px;
        padding: 0px;
        width: 325px;
    }

    @media screen and (max-width: 640px) {
        height: 69px;
        padding: 0px;
        width: 306px;
    }
    
    h1 {
        font-size: 36px;
        font-weight: 700;
        line-height: 38px;
        text-align: center;
        text-transform: uppercase;

        @media screen and (max-width: 940px) {
            font-size: 34px;
        }

        @media screen and (max-width: 640px) {
            font-size: 24px;
            line-height: 33px;
        }
    }

    p {
        font-size: 16px;
        font-weight: 400;
        height: 48px;
        line-height: 24px;
        text-align: center;
        width: 309px;

        @media screen and (max-width: 940px) {
            font-size: 14px;
            height: 42px;
            line-height: 21px;
            width: 325px;
        }

        @media screen and (max-width: 640px) {
            font-size: 13px;
            line-height: 18px;
        }
    }

`

export const FormWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 321px;
    justify-content: center;
    padding: 0px 60px;
    width: 429px;

    @media screen and (max-width: 940px) {
        height: 272px;
        padding: 0px 40px;
        width: 325px;
    }

    p {
        align-items: center;
        color: #4C5980;
        cursor: pointer;
        display: flex;
        font-size: 12px;
        font-weight: 400;
        height: 15px;
        line-height: 15px;
        text-align: center;

        @media screen and (max-width: 940px) {
            font-size: 10px;
            line-height: 12px;
        }

        @media screen and (max-width: 640px) {
            font-size: 12px;
        }
    }
`
