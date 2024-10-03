import { createContext, useCallback, useEffect, useState } from "react";

interface UsuarioLogadoContextData {
  nomeDoUsuario: string,
  emailDoUsuario: string,
  logout:()=>void;
}

export const UsuarioLogadoContext = createContext<UsuarioLogadoContextData>({} as UsuarioLogadoContextData); //mascarar objecto vazio

interface IUsuarioLogadoProviderProps{
    children: React.ReactNode
}
export const UsuarioLogadoPovider: React.FC<IUsuarioLogadoProviderProps> = ({children}) => 
  {

    // corpatilhar um useState atravez de um contexto

    const [name, setname]=useState('');

    useEffect(()=>{
      setTimeout(()=>{
        setname('jose');
      },1000)
    })

    // usar usecallback para partilhar contexto
    const hadleLogout=useCallback(()=>{
      console.log('logout com sucesso');
      
        },[])
      



  return (
    <UsuarioLogadoContext.Provider value={{ nomeDoUsuario:name ,emailDoUsuario:'jose@gmail.com' , logout: hadleLogout }} >
        {children}
    </UsuarioLogadoContext.Provider>
  );
}

//partilhae evento atravez do contexto

