/** @jsxImportSource @emotion/react */

import { Link, useSearchParams } from "react-router-dom";
import { findIdRequest } from "../../apis/api/signin";
import AuthPageInput from "../../components/AuthPageInput/AuthPageInput";
import { useSignupInput } from "../../hooks/useSignupInput";
import * as s from "./style";
import { useEffect, useState } from "react";
import AuthFindCheckPage from "./AuthFindCheckPage";
import { useRecoilState } from "recoil";
import { usernameState } from "../../atoms/usernameAtom";

function AuthFindPage() {

    const [ name, nameChange ] = useSignupInput();
    const [ email, emailChange ] = useSignupInput();

    const [username, setUsername] = useState("");
    
    const handleFindId = () => {
        findIdRequest({
            name,
            email
        }).then(response => {
            // alert(response.data);
            setUsername(response.data);
            // setUsername({
            //     username: response.data
            // });
            window.location.replace(`/auth/findId/check?username=${response.data}`);
            
        }).catch(error => {
            console.log(error.response.data);
            alert("입력된 정보를 다시 확인하세요.");
            // alert(error.response.data);
        })
    }

    const handleBack = () => {
        window.location.replace("/auth/signin");
    }

    useEffect(() => {
        console.log(username)
    }, [username])

    return (
        <>
            <div css={s.background}>
                <div css={s.inputBox}>
                    <div css={s.layout}>
                        <AuthPageInput type={"text"} name={"name"} placeholder={"이름"} value={name} onChange={nameChange}/>
                        <AuthPageInput type={"text"} name={"email"} placeholder={"이메일"} value={email} onChange={emailChange}/>
                        <button onClick={handleBack}>뒤로</button>
                        <button onClick={handleFindId}>다음</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AuthFindPage;