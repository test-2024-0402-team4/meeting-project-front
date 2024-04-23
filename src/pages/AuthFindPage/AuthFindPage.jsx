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
            alert(error.response.data.name);
        })
    }

    const handleBack = () => {
        window.location.replace("/auth/signin");
    }

    useEffect(() => {
        console.log(username)
    }, [username])

    return (
        <div css={s.layout}>
            <div css={s.header}>
                <span>아이디 찾기</span>
                <div css={s.headerBox1}>
                    <span>비밀번호를 잊으셨나요?</span>
                    <Link to={"/auth/findPassword"}>비밀번호 찾기</Link>
                </div>
            </div>

            <div css={s.body}>
                <div css={s.inputBox}>
                    <AuthPageInput type={"text"} name={"name"} placeholder={"이름"} value={name} onChange={nameChange}/>
                    <AuthPageInput type={"text"} name={"email"} placeholder={"이메일"} value={email} onChange={emailChange}/>
                </div>
                <div css={s.buttonBox}>
                    <button onClick={handleBack}>뒤로</button>
                    <button onClick={handleFindId}>다음</button>
                </div>
            </div>
        </div>
    );
}

export default AuthFindPage;