import styled from "styled-components"


export const QuestionStyle = styled.div`

    background: ${props => props.theme.colors.textarea};
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    padding: 24px;
    overflow-wrap: break-word;
    
    //& referencia ao proprio elemento, no caso aqui (.question)
    // faz com que todas questions recebam esse M.T, menos a primeira
    & + .question{
        margin-top: 8px;
    }

    
    &.highLighted{
        background-color:  ${props => props.theme.colors.questionHigh};
        border: 1px solid #835afd;
        
        footer .user-info span{
            color: ${props => props.theme.colors.text};
        }
    }
    
    &.answered{
        background-color: ${props => props.theme.colors.questionAnswer };

    }
    
    
    p{
        color: ${props => props.theme.colors.text};
    }

    footer{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 24px;
    

        .user-info{
            display: flex;
            align-items: center;

            img{
                width: 32px;
                height: 32px;
                border-radius: 50%;
            }

            span{
                margin-left: 8px;
                color: ${props => props.theme.colors.questionUser};
                font-size: 14px;
            }
        }

        > div{
            display: flex;
            gap: 8px;
        }

        button{
            border: 0;
            background: transparent;
            cursor: pointer;
            transition: filter 0.2s;

            &.like-button{
                display: flex;
                align-items: flex-end;
                color: #737380;
                gap: 8px;

                &.liked{
                    color: #835afd;

                    svg path{
                        stroke: #835afd;
                    }
                }
            }

            &:hover{
                filter: brightness(0.7);
            }
        }
    }



@media (max-width:400px){
        border-radius: 8px;
        overflow-wrap: break-word;
        margin: 0 16px;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        padding: 24px;
        //& referencia ao proprio elemento, no caso aqui (.question)
        // faz com que todas questions recebam esse M.T, menos a primeira
        & + .question{
            margin-top: 8px;
        }
    
        
        &.highLighted{
            background-color:  ${props => props.theme.colors.questionHigh };
            border: 1px solid #835afd;
            

        }
        
        
        p{
            text-overflow: ellipsis;
            font-size: 12px;
        }
    
        footer{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 24px;
        
    
            .user-info{
                display: flex;
                align-items: center;
    
                img{
                    width: 26px;
                    height: 26px;
                    border-radius: 50%;
                }
    
                span{
                    margin-left: 2px;
                    font-size: 13px;
                }
            }
    
            > div{
                display: flex;
                gap: 8px;
            }
    
            button{
                border: 0;
                background: transparent;
                cursor: pointer;
                transition: filter 0.2s;
    
                &.like-button{
                    display: flex;
                    align-items: flex-end;
                    color: #737380;
                    gap: 8px;
    
                    &.liked{
                        color: #835afd;
    
                        svg path{
                            stroke: #835afd;
                        }
                    }
                }
    
                &:hover{
                    filter: brightness(0.7);
                }
            }
        }
    }
`