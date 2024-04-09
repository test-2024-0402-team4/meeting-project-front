import { useState } from "react";

export function useMaxValueValidateInput(maxSize) {
    const [inputValue, setInputValue] = useState("");

    const onChange = (e) => {
        const {value} = e.target;

        if(value.length <= maxSize){
            setInputValue(() => value);
        }
        
    }
    return [inputValue, onChange, setInputValue];
}