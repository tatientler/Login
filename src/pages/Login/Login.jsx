import { LoginForm } from '../../components/Form/Form'
import { Container, FormWrapper, LoginWrapper, TitleWrapper } from './Login.styled'
import { BtnYellow } from '../../components/Button/ButtonYellow/BtnYellow'
import { BtnBlue } from '../../components/Button/ButtonBlue/BtnBlue'
import { LoginImage } from '../../components/LoginImage/LoginImage'

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

                    <BtnYellow text={'ENTRAR >'} />

                    <p>Esqueci minha senha</p>

                    <BtnBlue text={'CADASTRE-SE'} />
                </FormWrapper>

            </LoginWrapper>

            <LoginImage />

        </Container>
    )
}
