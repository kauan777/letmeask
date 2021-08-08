import copyImg from '../assets/images/copy.svg'
import toast, { Toaster } from 'react-hot-toast';

import '../styles/room-code.scss'

type RoomCodeProps = {
    code: string;
}


export function RoomCode(props: RoomCodeProps){

    function copyRoomCodeToClipBoard(){
        navigator.clipboard.writeText(props.code)
        toast.success("Mensagem copiada",{
            duration: 2000,
        })
    }

    return(
        <>
        <div><Toaster/></div>
        <button className="room-code" onClick={copyRoomCodeToClipBoard}>
            <div>
                <img src={copyImg} alt="Copy room code" />
            </div>
            <span>Sala #{props.code}</span>
        </button>
        </>
    )
}