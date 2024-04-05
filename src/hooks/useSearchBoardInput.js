import { useState } from "react"

export const useSearchBoardInput = (enterFn , ref) => {
    const [value , setValue] = useState("");

    const handleOnChange = (e) => {
        if(!!e.target){
            setValue(() => e.target.value);
        }else{
            setValue(() => e);
        }
    }

    const handleOnKeyDown = (e) => {
        if(e.keyCode === 13){
            enterFn(ref);
        }
    }
    return {value,setValue, handleOnChange , handleOnKeyDown}
}