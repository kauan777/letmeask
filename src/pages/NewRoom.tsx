import { Link, useHistory } from 'react-router-dom'   //substitui o href na navegação de links
import { FormEvent,  useContext,  useState} from 'react' //Tipagem para o event do form

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'

import { Button } from '../components/Button'
import { useAuth } from '../hooks/useAuth'

import { PageAuth } from '../styles/auth'

import { database } from '../services/firebase'

import Switch from 'react-switch'
import {  ThemeContext } from 'styled-components'

interface Props {
    toggleTheme(): void;
}

export function NewRoom({toggleTheme}: Props){
    const {user} = useAuth()
    const history = useHistory();
    const [ newRoom, setNewRoom] = useState("");
    const {title, img} = useContext(ThemeContext)


    async function handleCreateRoom(event: FormEvent){ //função quando criar a sala
        event.preventDefault()

        if(newRoom.trim() == ''){ //trim é uma função que remove os espaços  Ex: "     kauan"
            return;
        }

        const roomRef = database.ref('rooms')

        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id

        })

        history.push(`/admin/rooms/${firebaseRoom.key}`) //depois que ele criou, eu redireciono ele para a sala com a key
    }

    return(
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
                <strong>Crie slas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>                
            </aside>
            <main>
                <div className="main-content">
                    <img src={img} alt="Letmeask"/>
                    <h2>Criar uma nova sala</h2>
                    <form onSubmit={handleCreateRoom}>   { /* o envio é feito pelo formulario pq se o user dar um enter no submit, também funciona */ }
                        <input 
                           type="text"
                           placeholder="Nome da sala"
                           onChange={event => setNewRoom(event.target.value)}
                           value={newRoom}
                        />
                        <Button type="submit">
                            Criar sala
                        </Button>
                        <p>
                            Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
                        </p>
                    </form>
                </div>
            </main>
        </PageAuth>
    )    
}
 