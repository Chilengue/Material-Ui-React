import {  useContext } from "react"
import { UsuarioLogadoContext } from "../context";



export const useUsuarioLogado=()=>{
    const context=useContext(UsuarioLogadoContext); //partilhr informaoes entre os componnts
    //hooks devolve um contexto da app react
    return context;
}

// export const useUsuarioLogado2=()=>{}
// nao e nada e nada menos funcoes que tem nome chamado e use partilhar hooks 