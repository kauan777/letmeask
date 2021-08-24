import {ButtonHTMLAttributes} from 'react'
import { ButtonStyle } from '../styles/Button';

import '../styles/Button.ts';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?: boolean;
}

export function Button({isOutlined = false, ...props}: ButtonProps) {
    return(
        <ButtonStyle className={`button ${isOutlined ? 'outlined' : ''} `}
        {...props}
        />  //passando uma propriedade criada por mim & todas as props do componente Button para esse elemento
    )
}