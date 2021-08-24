import { useState, FormEvent, useContext } from 'react';
import { useParams, useHistory} from 'react-router-dom';

import { PageRoom } from '../styles/room';
import { Button } from '../components/Button';
import { Question } from '../components/Question';
import { RoomCode } from '../components/RoomCode';
import { useAuth } from '../hooks/useAuth';
import { useRoom } from '../hooks/useRoom';
import { database } from '../services/firebase';
import Switch from 'react-switch'


import '../styles/room.ts'
import { ThemeContext } from 'styled-components';

type RoomParams = {
    id: string;
}

interface Props {
    toggleTheme(): void;
}


export function Room({toggleTheme}: Props){
    const { user } = useAuth()
    const params = useParams<RoomParams>();
    const [newQuestion, setNewQuestion] = useState('')
    const roomId = params.id
    const history = useHistory();
    const {title, img} = useContext(ThemeContext)



    
    const {titleRoom, questions} = useRoom(roomId)

    async function handleSendQuestion(event: FormEvent) {
        event.preventDefault()

        if(newQuestion.trim() == ""){
            return;
        }

        if(!user){
            throw new Error('You musc be logged in')
            }            
    
        const question = {
            content: newQuestion,
            author: {
                name: user?.name,
                avatar: user?.avatar,
            },
            isHighLighted: false,
            isAnswered: false,
        };
        //aqui eu to pegando o nosso bd, referenciando a rota e adicionando dentro de question la q foi criada, uma 'question' que é um objeto
        await database.ref(`rooms/${roomId}/questions`).push(question)

        setNewQuestion('');
    }

    async function handleLikedQuestion(questionId: string, likeId: string | undefined){
  
        if(likeId){
            //remover like
            await database.ref(`rooms/${roomId}/questions/${questionId}/likes/${likeId}`).remove()
        }else{
            //cadastrar like
            await database.ref(`rooms/${roomId}/questions/${questionId}/likes`).push({
                authorId: user?.id,
            })
        }
    }

    function HandleMenu(){
        const menu = document.getElementById("menu")
        menu?.classList.toggle("show")
    }

    function ReturnToLogin(){
        history.push(`/`)
    }
    
    return(
        
        <PageRoom id="page-room">
            <header>
                <div className="content">
                    <img src={img} alt="Letmeask"/>
                    <div id="menu" className="menu">
                        <RoomCode code={roomId}/>
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
                        <svg id="close" onClick ={() => HandleMenu()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/></svg>
                    </div>
                </div>
            </header>
            <main>
                <div className="room-title">
                    <h1>Sala {titleRoom}</h1>
                    {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
                </div>

                <form onSubmit={handleSendQuestion}>
                    <textarea
                      placeholder="O que você quer perguntar?"
                      onChange={event => setNewQuestion(event.target.value)}
                      value={newQuestion}
                    />

                    <div className="form-footer">
                        {user ? (
                            <div className="user-info">
                                <img src={user.avatar} alt={user.name} />
                                <span>{user.name}</span>
                            </div>
                        ) : (
                        <span>Para enviar uma pergunta, <button onClick={ReturnToLogin}> faça seu login</button>.</span>

                        )}
                        <Button disabled={!user} type="submit">Enviar pergunta</Button>
                    </div>
                </form>

                <div className="question-list">
                    {questions.map(question => {
                        return(
                            <Question 
                                key={question.id}
                                content= {question.content}
                                author={question.author}
                                isAnswered={question.isAnswered}
                                isHightLighted={question.isHighLighted}
                            >
                              {!question.isAnswered && (
                                  <button
                                  className={`like-button ${question.likeId ? 'liked' : ''}`}
                                  type="button"
                                  aria-label="Marcar como gostei"
                                  onClick={() => handleLikedQuestion(question.id, question.likeId)}
                                  //quando eu passo uma função que ela precisa de um parametro, eu crio uma nova arrow function
                                  //por que ai voce não passa a execução da função e sim a função
                                >
                                 {question.likeCount > 0 && <span>{question.likeCount}</span>}
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </button>
                              )}  
                            </Question>
                        );
                    })}
                </div>
            </main>
        </PageRoom>
    
        )
}