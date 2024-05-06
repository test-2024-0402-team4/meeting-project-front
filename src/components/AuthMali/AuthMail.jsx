/** @jsxImportSource @emotion/react */
import { sendAuthEmail } from "../../apis/api/emailApi";
import { useAuthCheck } from "../../hooks/useAuthCheck";
import * as s from "./style";
import React, { useEffect, useState } from 'react';
import { CiCircleCheck } from "react-icons/ci";

function AuthMail({email, auth}) {
    
    const [timer, setTimer] = useState(0); 
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [emailSent, setEmailSent] = useState(false);

    useEffect(() => {
        let intervalId;
        if (timer > 0) {
            intervalId = setInterval(() => {
                setTimer(prevTimer => prevTimer - 1);
            }, 1000);
        }
        return () => clearInterval(intervalId);
    }, [timer, auth]);


    const handleAuthEmailSend = () => {
        sendAuthEmail();
        alert("이메일 전송이 완료되었습니다!")
        setTimer(180); 
        setButtonDisabled(true); 
        setEmailSent(true);
    };

    useEffect(() => {
        if (timer === 0 && emailSent) {
            setButtonDisabled(false);
        }
    }, [timer, emailSent]);

    return (
        <div css={s.bodyBox}>
            <div css={s.box2}>
                <div css={s.spanBox}>
                    <span>이메일</span>
                </div>
                <div css={s.selectBox}>
                    <input type={"text"} placeholder={"이메일"} value={email} disabled />
                    {
                        auth === 1 ? (
                            <button onClick={handleAuthEmailSend} disabled={buttonDisabled}>
                                {buttonDisabled ? `재전송 : ${timer}초` : '이메일 인증'}
                            </button>
                        ) : (
                            auth === 2 ? ( // auth가 2일 때 새로운 아이콘으로 변경
                                <div css={s.circleCheck}>
                                    <CiCircleCheck />
                                </div>
                            ) : null
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default AuthMail;