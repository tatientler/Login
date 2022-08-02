import styled from 'styled-components'

export const Container = styled.div`
    background-color: #000;
    display: flex;
    margin: 0 auto;
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
`
export const TitleWrapper = styled.div`
    align-items: center;
    color: #4C5980;
    display: flex;
    flex-direction: column;
    height: 86px;
    padding: 0px 60px;
    width: 429px;
    
    h1 {
        font-size: 36px;
        font-weight: 700;
        font-size: 36px;
        line-height: 38px;
        text-align: center;
        text-transform: uppercase;
    }

    p {
        font-weight: 400;
        font-size: 16px;
        height: 48px;
        line-height: 24px;
        text-align: center;
        width: 309px;
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

    p {
        align-items: center;
        color: #4C5980;
        display: flex;
        font-size: 12px;
        font-weight: 400;
        line-height: 15px;
        text-align: center;
    }
`
