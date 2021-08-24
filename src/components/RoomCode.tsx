import copyImg from '../assets/images/copy.svg'
import toast, { Toaster } from 'react-hot-toast';
import { RoomCodeStyle } from '../styles/room-code';
import '../styles/room-code.ts'

type RoomCodeProps = {
    code: string;
}


export function RoomCode(props: RoomCodeProps){

    function copyRoomCodeToClipBoard(){
        navigator.clipboard.writeText(props.code)
        toast.success("Código copiado",{
            duration: 2000,
        })
    }

    return(
        <>
        <div><Toaster/></div>
        <RoomCodeStyle className="room-code" onClick={copyRoomCodeToClipBoard}>
            <div>
                <img src={copyImg} alt="Copy room code" />
            </div>
            <span>Sala #{props.code}</span>
        </RoomCodeStyle>
        </>
    )
}