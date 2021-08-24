import styled from "styled-components";


export const ButtonStyle = styled.button`



    height: 50px;
    border-radius: 8px;
    font-weight: 500;
    background: #835afd;
    color: #fff;
    padding: 0 32px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    border: 0;
    outline: none;
    transition: filter 0.2s ease-in-out;

    &.outlined{
       background-color: ${props => props.theme.colors.background};
       border: 1px solid #835afd;
       color: #835afd; 
    }

    img{
        margin-right: 8px;
    }

    //Só vou aplicar o hover se o button não estiver disabled(desativado)
    &:not(:disabled):hover{
        filter: brightness(0.9);
    }

    &:disabled{
        opacity: 0.6;
        cursor: not-allowed;
    }


@media (max-width: 654px){

    
        height: 40px;
        border-radius: 8px;
        font-weight: 500;
        background: #835afd;
        color: #fff;
        font-size: 14px;
        padding: 0 16px;
    
        display: flex;
        justify-content: center;
        align-items: center;
    
        cursor: pointer;
        border: 0;
        outline: none;
        transition: filter 0.2s ease-in-out;
    
        &.outlined{
           border: 1px solid #835afd;
           color: #835afd; 

        
    }
}
`