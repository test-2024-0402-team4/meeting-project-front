/** @jsxImportSource @emotion/react */

import * as s from "./style";
import { findPasswordRequest } from '../../apis/api/signin';
import { useSignupInput } from '../../hooks/useSignupInput';
import AuthPageInput from "../../components/AuthPageInput/AuthPageInput";

function AuthFindPasswordPage() {

    const [ username, usernameChange ] = useSignupInput();
    const [ email, emailChange ] = useSignupInput();
    
    const handleFindId = () => {
        findPasswordRequest({
            username,
            email
        }).then(response => {
            console.log(response.data)
            alert(response.data.name)
            
        }).catch(error => {
            alert(error.response.data.name);
        })
    }

    const handleBack = () => {
        window.location.replace("/auth/signin");
    }


    return (
        <>
            <div css={s.background}>
                <div css={s.inputBox}>
                    <div css={s.layout}>
                        <AuthPageInput type={"text"} name={"username"} placeholder={"아이디"} value={username} onChange={usernameChange}/>
                        <AuthPageInput type={"text"} name={"email"} placeholder={"이메일"} value={email} onChange={emailChange}/>
                        <button onClick={handleBack}>뒤로</button>
                        <button onClick={handleFindId}>다음</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AuthFindPasswordPage;