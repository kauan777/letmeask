
import illustrationImg from '../assets/images/illustration.svg'
//import logoImg from '../assets/images/logo.svg'
//import logoImgDark from '../assets/images/logodark.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import { Button } from '../components/Button'

import {useHistory} from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { FormEvent,useContext,useState } from 'react'
import { database } from '../services/firebase'
import toast, { Toaster } from 'react-hot-toast';
import Switch from 'react-switch'
import {  ThemeContext } from 'styled-components'
import { PageAuth } from '../styles/auth'

interface Props {
    toggleTheme(): void;
}

export function Home({toggleTheme}: Props){

    const {title, img} = useContext(ThemeContext)
    const history = useHistory();
    const {user, signInWithGoogle} = useAuth()
    const [roomCode, setRoomCode] = useState("")
    
    async function handleCreateRoom(){

        if(!user){
            await signInWithGoogle() // o restante do código da função só vai executar se essa promessa for cumprida
        }

        history.push('/rooms/new')
    }


    async function handleJoinRoom(event: FormEvent){
        event.preventDefault()

        if(roomCode.trim() == ''){
            return;
        }

        const roomRef = await database.ref(`rooms/${roomCode}`).get()

        if(!roomRef.exists()){
            toast.error("Sala não encontrada",{
                duration: 4000,
            })
            return;
        }

        const promisse = new Promise((resolve,reject) => {
            if(roomRef.val().endedAt){
                setTimeout(() => reject(true), 1000)
            }
        })
      
        if(roomRef.val().endedAt){
            toast.promise(
                promisse,
                 {
                   loading: 'Procurando...',
                   success: <b></b>,
                   error: <b>Esta sala foi fechada</b>,
                 }
               );
            return;
        }

            if(user?.id == roomRef.val().authorId){
                history.push(`/admin/rooms/${roomCode}`)
            }

            if(user?.id != roomRef.val().authorId){
                history.push(`/rooms/${roomCode}`)
            }
        
    }

    return(
        <>
        <div><Toaster/></div>
        <PageAuth>
            <header>
            <Switch
                    className="switch"
                    onChange ={toggleTheme}
                    checked={title == 'dark'}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={10}
                    width= {40}
                    handleDiameter={20}
                    offHandleColor="#a3a3a3"
                    onHandleColor="#cfcfcf"
                    offColor="#c4c4c4"
                    onColor="#835afd"
                    />
            </header>
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas"/>
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>                
            </aside>
            <main>
                <div className="main-content">
                    <img id="logo" src={ img } alt="Letmeask"/>
                    <button  onClick={handleCreateRoom}  className="create-room">
                        <img src={googleIconImg} alt="Icone do Google"/>
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">ou entre em uma sala</div>
                    <form onSubmit={handleJoinRoom}>
                        <input 
                           type="text"
                           placeholder="Digite o código da sala"
                           onChange={event => setRoomCode(event.target.value)}
                           value={roomCode}
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </PageAuth>
    </>
    )    
}
