import { useState } from "react";

export function useQuill(){
    const [quillValue , setQuillValue] = useState("");
    const onChange = (value) => {
        setQuillValue(() => value);

    }
    return [quillValue,onChange, setQuillValue];
}