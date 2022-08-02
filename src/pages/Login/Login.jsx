import { LoginForm } from '../../components/Form/Form'
import { Container, LoginWrapper } from './Login.styled'

export function Login() {
    return (
        <Container>
            <LoginWrapper>

                <h1>Entrar</h1>
                <p>Utilize seu e-mail e senha cadastrados para acessar a plataforma.</p>

                <LoginForm />

            </LoginWrapper>
        </Container>
    )
}
