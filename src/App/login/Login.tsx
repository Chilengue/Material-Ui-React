import React, { useEffect, useState, useMemo, useCallback, useRef } from 'react'
import { InputLogin } from './components/InputLogin';
import { ButtonLogin } from './components/ButtonLogin';

export default function Login() {
    const inputPasswordRef = useRef<HTMLInputElement>(null);

    const [email, setEmail] = useState('jose');
    const [password, setPassword] = useState('');

    const emailLength = useMemo(() => {
        console.log('executou');

        return email.length * 1000;
    }, [email.length]);

    const handleEntrari = useCallback(() => {
        console.log(email);
        console.log(password);
    }, [email, password])

    useEffect(() => {
        if (window.confirm('voce e homem?')) {
            console.log('Homem')
        } else {
            console.log('Mulher')
        }
    }, []);

    useEffect(() => {
        console.log(email);
        console.log(password);


    }, [email, password])

    const handleEntrar = () => {
        console.log(email);
        console.log(password);

        if (inputPasswordRef.current !== null) {
            inputPasswordRef.current.focus()
        }
    }

    return (
        <form>
            <p> quantidade de email: {emailLength} </p>

            <InputLogin
                label='Email'
                value={email}
                onChange={newValue => setEmail(newValue)}
                onPressEnter={() => inputPasswordRef.current?.focus()}
            />
               <InputLogin
                label='Senha'
                type='password'
                value={password}
                ref={inputPasswordRef}
                onChange={newValue => setEmail(newValue)}
            />
            
          <ButtonLogin type='button' onClick={handleEntrar} >
            Entrar
          </ButtonLogin>
        </form>
    )
}


