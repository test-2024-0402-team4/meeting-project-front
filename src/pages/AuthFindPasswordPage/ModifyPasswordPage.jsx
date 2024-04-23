/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import AuthPageInput from "../../components/AuthPageInput/AuthPageInput";
import { useSignupInput } from "../../hooks/useSignupInput";
import * as s from "./style";
import { modifyPasswordRequest } from "../../apis/api/signin";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";


function ModifyPasswordPage(){

    const [ username, usernameChange ] = useSignupInput("username");
    const [ newPassword, newPasswordChange, newPasswordMessage ] = useSignupInput("newPassword");
    const [ newPasswordCheck, newPasswordCheckChange ] = useSignupInput();

    const [ checkMessage, setCheckMessage ] = useState();

    useEffect(() => {
        if(!newPassword || !newPasswordCheck) {
            setCheckMessage(() => null);
            return
        }else if(newPassword === newPasswordCheck) {
            setCheckMessage(() => {
                return {
                    type: "success",
                    text: ""
                }
            });
        }else {
            setCheckMessage(() => {
                return {
                    type: "error",
                    text: "비밀번호가 일치하지 않습니다."
                }
            });
        }
    },[newPassword, newPasswordChange]);

    const modifyPasswordMutation = useMutation({
        mutationKey: "modifyPasswordMutation",
        mutationFn: modifyPasswordRequest,
        onSuccess: response => {
            alert("비밀번호가 변경되었습니다.\n다시 로그인해주세요.");
            window.location.replace("/auth/signin");
        },
        onError: error => {
            console.log(error.response.data);
        }
    });

    const handleNewPasswordOnClick = () => {
        modifyPasswordMutation.mutate({
            username,
            newPassword,
            newPasswordCheck
        });
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
                <div css={s.modifyBox1}>
                    <span>변경하실 새로운 비밀번호를 입력해주세요.</span>
                </div>

                <div css={s.modifyBox2}>
                    <AuthPageInput type={"test"} name={"username"} placeholder={"아이디"} value={username} onChange={usernameChange}/>
                    <AuthPageInput type={"password"} name={"newPassword"} placeholder={"새 비밀번호"} value={newPassword} onChange={newPasswordChange} message={newPasswordMessage}/>
                    <AuthPageInput type={"password"} name={"newPasswordCheck"} placeholder={"새 비밀번호 확인"} value={newPasswordCheck} onChange={newPasswordCheckChange} message={checkMessage}/>
                </div>

                <div css={s.modifyBox3}>
                    <button onClick={handleNewPasswordOnClick} >변경하기</button>

                </div>
            </div>
        </div>
    );
}

export default ModifyPasswordPage;