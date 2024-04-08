import { useState } from "react"


export const useSelect = (defaultValue) => {

    const [ option, setOption ] = useState(defaultValue); 

    const handleOnChange = () => {
        setOption(() => option);
    }
    return {option, setOption, handleOnChange, defaultValue};
}