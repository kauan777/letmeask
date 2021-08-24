import React from 'react';
import 'styled-components'

declare module 'styled-components'{
    export interface DefaultTheme{
        
            title: string,
            img: string,
            colors: {
                background: string,
                text: string,
                textarea: string,
                questionUser: string,
                questionHigh: string,
                questionAnswer: string
            },
        
        
    }
}
