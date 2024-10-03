import React from 'react'
import { useUsuarioLogado } from '../../../shared/hooks';

interface IButtonLoginProps {
    onClick: () => void;
    type?: "button" | "submit" | "reset"

    children: React.ReactNode;
}

export const ButtonLogin: React.FC<IButtonLoginProps> = ({ type, onClick, children }) => {
    const usuarioLogadoContext = useUsuarioLogado(); //partilhr informaoes entre os componnts
    return (
        <button
            type={type}
            onClick={onClick}>
            {children}
            {usuarioLogadoContext.emailDoUsuario}
            {usuarioLogadoContext.nomeDoUsuario}
        </button>
    )
}
