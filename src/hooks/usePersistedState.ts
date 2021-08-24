import { useState, useEffect, Dispatch, SetStateAction  } from "react";

//dispach e p setStateAction são interfaces que o react cede para tipar o useState

type Response<T> = [
    T,
    Dispatch<SetStateAction<T>>,
];

 function usePersistedState<T>(key: string, initialState: T): Response<T> {
    const [state, setState] = useState(() =>{
        const storageValue = localStorage.getItem(key)

        if(storageValue){
            return JSON.parse(storageValue)
        }else{
            return initialState
        }
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    },
    [key, state])
    return [state, setState]
}

export default usePersistedState
