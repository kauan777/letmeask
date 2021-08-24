import styled from 'styled-components'


export const RoomCodeStyle = styled.button`

    height: 40px;
    border-radius: 8px;
    overflow: hidden;

    background: ${props => props.theme.colors.background};
    border: 1px solid #835afc;
    color: ${props => props.theme.colors.text};
    cursor: pointer;
    
    display: flex;


    div {
        background: #835afc;
        height: 100%;
        padding: 0 12px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    span{
        display: block;
        align-self: center;
        flex: 1;
        padding: 0 16px 0 12px;
        width: 230px;
        font-size: 14px;
        font-weight: 500;
    }


@media (max-width: 654px){
    .room-code{
        height: 35px;
        border-radius: 8px;
        overflow: hidden;
        background: #fff;
        border: 1px solid #835afc;
        cursor: pointer;
        display: flex;
    
    
        div {
            background: #835afc;
            height: 100%;
            padding: 0 12px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    
        span{
            align-self: center;
            flex: 1;
            padding: 0 14px 0 8px;
            width: 200px;
            text-overflow: ellipsis;
            font-size: 12px;
            font-weight: 500;
        }
    }
}
`