import { createContext, ReactNode, useEffect, useState } from "react"
import { auth, firebase} from "../services/firebase"
// react node é qualquer conteudo JSX, pode ser uma DIV, BUTTON, COMPONENT

type User = {
    id: string;
    name: string;
    avatar: string;
    }
    
    type AuthContextType = {
      user: User | undefined;
      signInWithGoogle: () => Promise<void> //função q n tem retorno
    }

type AuthContextProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType) //iniciando o contexto com o valor de um objeto

export function AuthContextProvider(props: AuthContextProviderProps){

    const [user, setUser] = useState<User>() // criando estado para usar no contexto

  useEffect(()=>{
    //verifica se ele ja esta logado
    const usubscribe = auth.onAuthStateChanged(user =>{
      if(user){ // se sim, preenche no estado da aplicação
        const {displayName, photoURL, uid} = user

          if(!displayName || !photoURL){
            throw new Error("Missing information from Google Account. ")
          }

          setUser({
            id: uid,
            name: displayName,
            avatar: photoURL
          })
      }
    })

    return () => {
      usubscribe() //uma boa pratica é encerrar o hook, para caso eu for para outra pagina, ele não continuar executando
    }

  }, []) // se o array tiver vazio, quer dizer que esse hook só vai ser executado uma unica vez, sem dependencias

  async function signInWithGoogle(){
    
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(provider) // abir o logar como um popup, uma telinha

        if(result.user){
            const {displayName, photoURL, uid} = result.user

            if(!displayName || !photoURL){
              throw new Error("Missing information from Google Account. ")
            }

            setUser({
              id: uid,
              name: displayName,
              avatar: photoURL
            })
        }
  }


//children pode ser qualquer coisa
    return(
        <AuthContext.Provider value={{user, signInWithGoogle}}>
            {props.children}
        </AuthContext.Provider>

    )
}