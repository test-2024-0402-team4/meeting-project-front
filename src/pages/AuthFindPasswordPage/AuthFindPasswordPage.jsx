/** @jsxImportSource @emotion/react */

import * as s from "./style";
import { findPasswordRequest } from '../../apis/api/signin';
import { useSignupInput } from '../../hooks/useSignupInput';
import AuthPageInput from "../../components/AuthPageInput/AuthPageInput";
import { Link } from "react-router-dom";

function AuthFindPasswordPage() {

    const [ username, usernameChange ] = useSignupInput();
    const [ email, emailChange ] = useSignupInput();
    
    const handleFindId = () => {
        findPasswordRequest({
            username,
            email
        }).then(response => {
            console.log(response.data)
            alert("확인되었습니다!");
            window.location.replace("/auth/modifyPassword");
        }).catch(error => {
            console.log(error.data)
            alert("정보를 다시 확인해주세요!");
        })
    }

    const handleBack = () => {
        window.location.replace("/auth/signin");
    }


    return (
        <div css={s.layout}>
            <div css={s.header}>
                <span>비밀번호 찾기</span>
                <div css={s.headerBox1}>
                    <span>아이디를 잊으셨나요?</span>
                    <Link to={"/auth/findId"}>아이디 찾기</Link>
                </div>
            </div>

            <div css={s.body}>
                <div css={s.inputBox}>
                    <AuthPageInput type={"text"} name={"username"} placeholder={"아이디"} value={username} onChange={usernameChange}/>
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

export default AuthFindPasswordPage;