import { useRef } from 'react';
import { Form } from '@unform/web'
import { Input } from '../Input/Input'
import { FormStyled } from './Form.styled';

export function LoginForm() {
    const formRef = useRef(null)

    function handleSubmit(data, { reset }) {
        if (data.name === '') {
            formRef.current.setErros({
                email: 'O e-mail é obrigatório',
                password: 'A senha é obrigatória'
            })
        }
        console.log(data);

        reset();
    }

    return (
        <FormStyled>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <Input name='email' type='email' label={'Login'} placeholder='Digite seu e-mail aqui' />

                <Input name='password' type='email' label={'Senha'} placeholder='************' />

            </Form>
        </FormStyled>
    )
}