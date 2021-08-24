import {ReactNode} from 'react'
import { QuestionStyle } from './styles'


type QuestionProps = {
    content: string;
    author: {
        name: string;
        avatar: string;
    };
    children?: ReactNode;
    isAnswered?: boolean;
    isHightLighted?: boolean;
}

export function Question({
    content, 
    author,
    isAnswered = false,
    isHightLighted = false,
    children,
}: QuestionProps){

    return(
        <QuestionStyle className={`question 
            ${isAnswered ? 'answered' : '' } 
            ${isHightLighted && !isAnswered ? 'highLighted' : ''} `}
        >
            <p>{content}</p>
            <footer>
                <div className="user-info">
                    <img src={author.avatar} alt={author.name}/>
                    <span>{author.name}</span>
                </div>
                <div>
                    {children}
                </div>
            </footer>
        </QuestionStyle>
    )
}