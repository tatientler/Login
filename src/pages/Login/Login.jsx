import { Button } from '../../components/Button/Button'
import { LoginForm } from '../../components/Form/Form'
import { LoginImage } from '../../components/LoginImage/LoginImage'

import { Container, FormWrapper, LoginWrapper, TitleWrapper } from './Login.styled'

export function Login() {
    return (
        <Container>
            <LoginWrapper>
                <TitleWrapper>
                    <h1>Entrar</h1>
                    <p>Utilize seu e-mail e senha cadastrados para acessar a plataforma.</p>
                </TitleWrapper>

                <FormWrapper>

                    <LoginForm />

                    <p>Esqueci minha senha</p>

                    <Button 
                        backgroundColor={'#D6D6D6'} 
                        borderColor={'#63719D'}
                        color={'#63719D'}
                        text={'CADASTRE-SE'} 
                    />

                </FormWrapper>

            </LoginWrapper>

            <LoginImage />

        </Container>
    )
}
