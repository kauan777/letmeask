import { useState } from "react"

type ButtonProps = {
    name?: string;   //Esse ? indica que a propriedade é opcional em um componente
    children?: string; 
}

//Se eu tenho o valor do tipo array, eu preciso falar que ele é um Array de q?  string[] || Array<string>

export function Button(props: ButtonProps){
    return (
        <button>{props.children || props.name}</button>
    )
}

export function ButtonState(){

    let[counter, setCounter] = useState(0)

    function handleClick(){
        setCounter(counter + 1)
    }

    return(
    <button onClick={handleClick}>{counter}</button>
    )
}

// conceito imutabilidade = cria uma nova informação baseada na informação anterior

                //Teste App
// function App() {
//     return (
//       <>
//       <Button name="Exemplo props"/>
//       <Button>Exemplo children</Button>
//       <ButtonState/>
//       </>   
//     );



 