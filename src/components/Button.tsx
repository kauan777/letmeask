import {ButtonHTMLAttributes} from 'react'

import '../styles/Button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?: boolean;
}

export function Button({isOutlined = false, ...props}: ButtonProps) {
    return(
        <button className={`button ${isOutlined ? 'outlined' : ''} `}
        {...props}
        />  //passando uma propriedade criada por mim & todas as props do componente Button para esse elemento
    )
}