import { useParams, useHistory } from 'react-router-dom';

import deleteImg from '../assets/images/delete.svg'
import checkImg from '../assets/images/check.svg'
import answerImg from '../assets/images/answer.svg'
import { PageRoom } from '../styles/room';

import { Button } from '../components/Button';
import { Question } from '../components/Question';
import { RoomCode } from '../components/RoomCode';
 import { useAuth } from '../hooks/useAuth';
import { useRoom } from '../hooks/useRoom';

import '../styles/room.ts'
import { database } from '../services/firebase';
import Switch from 'react-switch'
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';


type RoomParams = {
    id: string;
}

interface Props {
    toggleTheme(): void;
}


export function AdminRoom({toggleTheme}: Props) {

   const { user } = useAuth()
    const history = useHistory();
    const params = useParams<RoomParams>();
    const roomId = params.id
    const {title, img} = useContext(ThemeContext)

    async function handleTest(){
        const roomRef = await database.ref(`rooms/${roomId}`).get()
        const test = await roomRef.val().authorId

        if(user?.id !== test){
            history.push(`/`)
        }
    }

    if(user?.id){
        handleTest()
    }

    const { titleRoom, questions } = useRoom(roomId)

    async function handleEndRoom() {
        await database.ref(`rooms/${roomId}`).update({
            endedAt: new Date(),
        })

        history.push(`/`)
    }

    

    async function handleDeleteQuestion(questionId: string) {
        if (window.confirm('Tem certeza que deseja construir esta pergunta?')) {
            await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
        }
    }

    async function handleCheckQuestionAsAnswered(questionId: string) {
        await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
            isAnswered: true
        })

    }

    async function handleHighlightQuestion(questionId: string) {
        await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
            isHighLighted: true
        })
    }

    function HandleMenu(){
        const menu = document.getElementById("menu")
        menu?.classList.toggle("show")
    }


    return (
        <PageRoom id="page-room">
            <header>
                <div className="content">
                    <img src={img} alt="" />
                    <div id="menu"className="menu">
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
                        <svg id="open" onClick ={() => HandleMenu()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"/></svg>
                        <RoomCode code={roomId} />
                        <Button isOutlined onClick={handleEndRoom}>Encerrar sala</Button>
                        <svg id="close" onClick ={() => HandleMenu()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/></svg>
                    </div>
                </div>
            </header>
            <main>
                <div className="room-title">
                    <h1>Sala {titleRoom}</h1>
                    {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
                </div>


                <div className="question-list">
                    {questions.map(question => {
                        return (
                            <Question
                                key={question.id}
                                content={question.content}
                                author={question.author}
                                isAnswered={question.isAnswered}
                                isHightLighted={question.isHighLighted}
                            >

                                {!question.isAnswered && (
                                    <>
                                    <button
                                        type= "button"
                                        onClick = {() => handleCheckQuestionAsAnswered(question.id)}
                                    >
                                    <img src={checkImg} alt="Marcar pergunta como respondida" />
                                    </button>
                                    <button
                                    type= "button"
                                    onClick = {() => handleHighlightQuestion(question.id)}
                                    >
                                    <img src={answerImg} alt="Dar destaque à pergunta" />
                                    </button>
                                    </>
                                )}

                                <button
                                    type="button"
                                    onClick={() => handleDeleteQuestion(question.id)}
                                >
                                    <img src={deleteImg} alt="Remover pergunta" />
                                </button>
                            </Question>
                        );
                    })}
                </div>
            </main>
        </PageRoom>
    )
}
