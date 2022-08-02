import { Container, LoginWrapper } from './Login.styled'

export function Login() {
    return (
        <Container>
            <LoginWrapper>
                <h1>Entrar</h1>
                <p>Utilize seu e-mail e senha cadastrados para acessar a plataforma.</p>

                <div>

                    INPUT login e senha

                    <div>
                        Botão, esqueci a senha e botão cadastre-se
                    </div>
                </div>
            </LoginWrapper>
        </Container>
    )
}