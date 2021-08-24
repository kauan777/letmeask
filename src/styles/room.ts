import styled from 'styled-components'


export const PageRoom = styled.div`
    min-height: 100vh;
    background-color:  ${props => props.theme.colors.background};
    header{
        padding: 24px;
        border-bottom: 1px solid #e2e2e2;

        .content{
            max-width: 1120px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;

            > img{
                max-height: 45px;
            }

            #menu{
                display: flex;
                gap: 16px;

                .switch{
                    position: absolute;
                    top: 7px;
                }
                button{
                    height: 40px;
                }

                svg{
                    display:none;
                }
            }
        }
    }

    main{
        max-width: 800px;
        margin: 0 auto;

        .room-title{
            margin: 32px 0 24px;
            display: flex;
            align-items: center;

            h1{
                font-family: 'Poppins', sans-serif;
                font-size: 24px;
                color: ${props => props.theme.colors.text};
            }

            span{
                margin-left: 16px;
                background-color: #e559f9;
                border-radius: 9999px;
                padding: 8px 16px;
                color: #fff;
                font-weight: 500;
                font-size: 14px;
            }
        }

        form{
            textarea{
                width: 100%;
                border: 1px solid transparent;
                padding: 16px;
                border-radius: 8px;
                background: ${props => props.theme.colors.textarea};
                box-shadow: 0 2px 12px rgba(0,0,0, 0.04);
                resize: vertical;
                color: ${props => props.theme.colors.text};
                outline: none;
                min-height: 130px;
                transition: border 0.1s ease-in;

                &:focus{
                    border: 1px solid #835afd;
                }
            }

            .form-footer{
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 16px;

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
                        color: ${props => props.theme.colors.text};
                        font-weight: 500;
                        font-size: 14px;
                    }
                }


                > span{
                    font-size: 14px;
                    color: ${props => props.theme.colors.questionUser};
                    font-weight:500;

                    button{
                        background: none;
                        border: none;
                        color: #835afd;
                        text-decoration: underline;
                        font-size: 14px;
                        cursor: pointer;
                        font-weight:500;

                    }
                }
            }

        }
        .question-list{
            margin-top: 32px;
        }
    }
}



@media(max-width: 975px){

    
        header{
            padding: 24px;
            border-bottom: 1px solid #e2e2e2;
    
            .content{
                max-width: 1120px;
                margin: 0 auto;
                display: flex;
                justify-content: space-between;
                align-items: center;
    
                > img{
                    max-height: 45px;
                }
    
                > div{
                    display: flex;
                    gap: 16px;
                    button{
                        height: 40px;
                    }
                }
            }
        }
    
        main{
            max-width: 600px;
            margin: 0 auto;
    
            .room-title{
                margin: 32px 0 24px;
                display: flex;
                align-items: center;
    
                h1{
                    font-family: 'Poppins', sans-serif;
                    font-size: 24px;
                    color: #29292e;
                }
    
                span{
                    margin-left: 16px;
                    background-color: #e559f9;
                    border-radius: 9999px;
                    padding: 8px 16px;
                    color: #fff;
                    font-weight: 500;
                    font-size: 14px;
                }
            }
    
            form{
                textarea{
                    width: 100%;
                    border: 1px solid transparent;
                    padding: 16px;
                    border-radius: 8px;
                    box-shadow: 0 2px 12px rgba(0,0,0, 0.04);
                    resize: vertical;
                    outline: none;
                    min-height: 130px;
                    transition: border 0.1s ease-in;
    
                    &:focus{
                        border: 1px solid #835afd;
                    }
                }
    
                .form-footer{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 16px;
    
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
                            font-weight: 500;
                            font-size: 14px;
                        }
                    }
    
    
                    > span{
                        font-size: 14px;
                        font-weight:500;
    
                        button{
                            background: none;
                            border: none;
                            color: #835afd;
                            text-decoration: underline;
                            font-size: 14px;
                            cursor: pointer;
                            font-weight:500;
    
                        }
                    }
                }
    
            }
            .question-list{
                margin-top: 32px;
            }
        }
    
    }


@media (max-width:700px){
    
        header{
            padding: 24px;
            border-bottom: 1px solid #e2e2e2;
    
            .content{
                max-width: 1120px;
                margin: 0 auto;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .menu.show{
                    opacity: 1;
                    visibility: visible;
                    background-color: ${props => props.theme.colors.background};
                    height: 100vh;
                    width: 100vw;
                    position: fixed;
                    text-align: center;
                    top: 0;
                    left: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    place-content: center;

                    button{
                        display: flex;
                    }

                    .switch{
                        position: relative;
                        display: block;
                        visibility: visible;
                        opacity: 1;
                    }

                    svg#open{
                        display: none;
                    }
                    svg#close{
                        visibility: visible;
                        opacity: 1;
                        position: absolute;
                        top: 26px;
                        right: 34px;
                    }
                }
    
                > img{
                    max-height: 45px;
                }
    
                > div{
                    display: flex;
                    gap: 16px;

                    button{
                        display: none;
                    }

                    .switch{
                        display: none;
                        visibility: hidden;
                        opacity: 0;
                    }

                    svg{
                        width: 32px;
                        height: 32px;
                        cursor: pointer;
                        fill: #835afd;
                    }
                    svg#open{
                       display: block;
                    }
                    svg#close{
                        display: block;
                        visibility: hidden;
                        opacity: 0;
                        position: absolute;
                        top: 15px;
                        right: 34px;
                        transition: 0.2s;
                    }
                }
            }
        }
    
        main{
            max-width: 450px;
            margin: 0 auto;
    
            .room-title{
                margin: 32px 0 24px;
                display: flex;
                align-items: center;
                flex-direction: column;
    
                h1{
                    font-family: 'Poppins', sans-serif;
                    font-size: 24px;
                    color: #29292e;
                }
    
                span{
                    margin-left: 16px;
                    background-color: #e559f9;
                    border-radius: 9999px;
                    padding: 8px 16px;
                    color: #fff;
                    font-weight: 500;
                    font-size: 14px;
                }
            }
    
            form{
                textarea{
                    width: 100%;
                    border: 1px solid transparent;
                    padding: 16px;
                    border-radius: 8px;
                    box-shadow: 0 2px 12px rgba(0,0,0, 0.04);
                    resize: vertical;
                    outline: none;
                    min-height: 130px;
                    transition: border 0.1s ease-in;
    
                    &:focus{
                        border: 1px solid #835afd;
                    }
                }
    
                .form-footer{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 16px;
    
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
                            font-weight: 500;
                            font-size: 14px;
                        }
                    }
    
    
                    > span{
                        font-size: 14px;
                        font-weight:500;
    
                        button{
                            background: none;
                            border: none;
                            color: #835afd;
                            text-decoration: underline;
                            font-size: 14px;
                            cursor: pointer;
                            font-weight:500;
                        }
                    }
                }
    
            }
            .question-list{
                margin-top: 32px;
            }
        }
    
    }



@media (max-width: 654px){

    
        header{
            padding: 20px;
            border-bottom: 1px solid #e2e2e2;

            
    
            .content{
                max-width: 1120px;
                margin: 0 auto;
                display: flex;
                justify-content: space-between;
                align-items: center;

                
    
                > div{
                    display: flex;
                    gap: 16px;


                    button{
                        height: 40px;
                    }

                }
            }
        }
    
        main{
            max-width: 350px;
            margin: 0 auto;
    
            .room-title{
                margin: 32px 0 24px;
                display: flex;
                align-items: center;
    
                h1{
                    font-family: 'Poppins', sans-serif;
                    font-size: 20px;
                    padding-left: 16px;
                    color: #29292e;
                }
    
                span{
                    margin-left: 16px;
                    background-color: #e559f9;
                    border-radius: 9999px;
                    padding: 8px 16px;
                    margin-right: 16px;
                    color: #fff;
                    font-weight: 500;
                    font-size: 11px;
                }
            }
    
            form{
                padding: 16px;
                textarea{
                    width: 100%;
                    border: 1px solid transparent;
                    padding: 16px;
                    border-radius: 8px;
                    box-shadow: 0 2px 12px rgba(0,0,0, 0.04);
                    resize: vertical;
                    outline: none;
                    min-height: 110px;
                    transition: border 0.1s ease-in;
    
                    &:focus{
                        border: 1px solid #835afd;
                    }
                }
    
                .form-footer{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 16px;
    
                    .user-info{
                        display: flex;
                        align-items: center;
    
                        img{
                            width: 24px;
                            height: 24px;
                            border-radius: 50%;
                        }
    
                        span{
                            margin-left: 8px;
                            font-weight: 500;
                            font-size: 12px;
                        }
                    }
    
    
                    > span{
                        font-size: 14px;
                        font-weight:500;
    
                        button{
                            background: none;
                            border: none;
                            color: #835afd;
                            text-decoration: underline;
                            font-size: 12px;
                            cursor: pointer;
                            font-weight:500;
    
                        }
                    }
                }
    
            }
            .question-list{
                margin-top: 32px;
            }
        }
    
    
    
`
