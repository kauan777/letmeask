import styled from 'styled-components'



export const PageAuth = styled.div`
    display: flex;
    align-items: stretch;
    height: 100vh;
    background-color: ${props => props.theme.colors.background};

    header{
        position: absolute;
        top: 30px;
        right: 30px;
    }
    
    aside{
        background-color: #835afd;
        color: #fff;
        
        flex: 7;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 120px 80px;

        img{
            max-width: 320px;
        }

        strong{
            font: 700 32px 'Poppins', sans-serif;
            line-height: 42px;
            margin-top: 16px;
        }

        p{
            font-size: 20px;
            line-height: 32px;
            margin-top: 16px;
            color: #f8f8f8;
        }
    }

    main{
        
        padding: 0 32px;
        flex: 8;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .main-content {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 320px;
        align-items: stretch; //Eesticar
        text-align: center;



        .switch{
            position: absolute;
            top: 0;
            right: 0;
        }

        h2{
            font-size: 24px;
            margin: 64px 0 24px;
            color: ${props => props.theme.colors.text};
            font-family: 'Poppins', sans-serif;
        }

        > img{
            align-self: center;
        }

        P{
            font-size: 14px;
            color: #737380;
            margin-top: 16px;

            a{
                color: #e559f9;
        }
    }

        form{
            input{
                height: 50px;
                border-radius: 8px;
                padding: 0 16px;
                background: #fff;
                border: 2px solid #a8a8b3;
                outline: none;
                transition: 0.2s ease-in-out;

                &:focus{
                    border: 2px solid #835afd;
                }
            }

            button{
                margin-top: 16px;
            }

            button, input{
                width: 100%;
            }
        }
    }

    .create-room{
        margin-top: 64px;
        height: 50px;
        border-radius: 8px;
        font-weight: 500;
        background: #ea4335;
        color: #fff;

        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;
        border: 0;
        outline: none;
        transition: filter 0.2s ease-in-out;

        img{
            margin-right: 8px;
        }

        &:hover{
            filter: brightness(0.9);
        }
    }

    .separator{
        font-size: 14px;
        color: #a8a8b3;

        margin: 32px 0;
        display: flex;
        align-items: center;

        &::before{
            content: "";
            flex: 1;
            height: 1px;
            background: #a8a8b3;
            margin-right: 14px;
        }

        &::after{
            content: "";
            flex: 1;
            height: 1px;
            background: #a8a8b3;
            margin-left: 14px;
        }
    }


@media (max-width: 975px){


        display: flex;
        align-items: stretch;
        height: 100vh;
    
        aside{
            display: none;
        }
    
        main{
            
            padding: 0 32px;
            
            flex: 8;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    
        .main-content {
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: 320px;
            align-items: stretch; //Eesticar
            text-align: center;
    
            h2{
                font-size: 24px;
                margin: 64px 0 24px;
                font-family: 'Poppins', sans-serif;
            }
    
            > img{
                align-self: center;
            }
    
            P{
                font-size: 14px;
                color: #737380;
                margin-top: 16px;
    
                a{
                    color: #e559f9;
                }
            }
    
            form{
                input{
                    height: 50px;
                    border-radius: 8px;
                    padding: 0 16px;
                    background: #fff;
                    border: 2px solid #a8a8b3;
                    outline: none;
                    transition: 0.2s ease-in-out;
    
                    &:focus{
                        border: 2px solid #835afd;
                    }
                }
    
                button{
                    margin-top: 16px;
                }
    
                button, input{
                    width: 100%;
                }
            }
        }
    
        .create-room{
            margin-top: 64px;
            height: 50px;
            border-radius: 8px;
            font-weight: 500;
            background: #ea4335;
            color: #fff;
    
            display: flex;
            justify-content: center;
            align-items: center;
    
            cursor: pointer;
            border: 0;
            outline: none;
            transition: filter 0.2s ease-in-out;
    
            img{
                margin-right: 8px;
            }
    
            &:hover{
                filter: brightness(0.9);
            }
        }
    
        .separator{
            font-size: 14px;
            color: #a8a8b3;
    
            margin: 32px 0;
            display: flex;
            align-items: center;
    
            &::before{
                content: "";
                flex: 1;
                height: 1px;
                background: #a8a8b3;
                margin-right: 14px;
            }
    
            &::after{
                content: "";
                flex: 1;
                height: 1px;
                background: #a8a8b3;
                margin-left: 14px;
            }
        }
        
    }

@media (max-width: 655px ){

    .create-room{
        font-size: 14px;

        img{
            width: 20px;
            margin-right: 8px;
        }
    }

}
`
