import { useRef } from 'react';

import { Button } from '../Button/Button';
import { Input } from '../Input/Input'

import { StyledForm } from './Form.styled';

export function LoginForm() {
    const formRef = useRef(null)
    
    function handleSubmit(data, { reset }) {
        console.log(data)

        if (data.email === '') {
            formRef.current.setErrors({
                email: 'Campo obrigatório!'
            })
        } 
        if (data.password === '') {
            formRef.current.setErrors({
                password: 'Campo obrigatório!'
            })
        }
        if (data.email === '' && data.password === '' ) {
            formRef.current.setErrors({
                email: 'Campo obrigatório!',
                password: 'Campo obrigatório!'
            })
        }

        reset();  
    }

    return (
        <StyledForm ref={formRef} onSubmit={handleSubmit}>

            <Input
                name='email'
                type='email'
                label='Login'
                placeholder='Digite seu e-mail aqui'
                backgroundColor={'#FAFAFA'}
                borderColor={'#ADADAD'}
            />

            <Input
                name='password'
                type='password'
                label='Senha'
                placeholder='*****************'
                backgroundColor={'#FAFAFA'}
                borderColor={'#ADADAD'}
                showEyeSlash={true}
            />

            <Button
                backgroundColor={'#FFD175'}
                borderColor={'#FFD175'}
                color={'#323133'}
                text={'ENTRAR >'}
                type='submit'
            />

        </StyledForm>
    )
}
