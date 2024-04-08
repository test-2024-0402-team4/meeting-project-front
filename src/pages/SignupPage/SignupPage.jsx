/** @jsxImportSource @emotion/react */

import Select from "react-select";
import { useEffect, useState } from "react";
import AuthPageInput from "../../components/AuthPageInput/AuthPageInput";
import { useSignupInput } from "../../hooks/useSignupInput";
import * as s from "./style";
import { validate } from "uuid";
import { signupRequest } from "../../apis/api/signup";

function SignupPage(props) {

    const [ name, nameChange, nameMessage ] = useSignupInput("name");
    const [ username, usernameChange, usernameMessage, setUsernameValue, setUsernameMessage ] = useSignupInput("username");
    const [ password, passwordChange, passwordMessage ] = useSignupInput("password");
    const [ nickname, nicknameChange, nicknameMessage ] = useSignupInput("nickname");
    const [ email, emailChange, emailMessage ] = useSignupInput("email");

    const [ birthDate, birthDateChange, birthDateMessage ] = useSignupInput("birthDate");
    const [ phoneNumber, phoneNumberChange, phoneNumberMessage ] = useSignupInput("phoneNumber");

    const [ roleId, setRole ] = useState();
    
    const [ addInfo, setAddInfo ] = useState(false);

    const handleAddInfo = () => {
        if(roleId == 1) {
            setAddInfo(() => true);
        }

        if(roleId == 2) {
            setAddInfo(() => true);
        }
    }

    const handleBackInfo = () => {
        setAddInfo(() => false);
    }


    const handleStudentOnClick = (e) => {   // 학생
        setRole(() => 1);
    }
    const handleTeacherOnClick = (e) => {   // 선생님
        setRole(() => 2);
    }


    const handleFirstSignup = () => {
        
        signupRequest({
            name,
            username,
            password,
            nickname,
            email,
            roleId
        }).then(response => {
            console.log(response);
        }).catch(error => {
            if(error.response.status === 500) {
                alert("입력창을 다시 확인해주십시오.");
            }
        })
    }


    return (
        <div css={s.background}>
            <>
                {
                    !addInfo === true 
                    ?
                    <>
                        <div css={s.layout}>
                            <div css={s.logo}>로고</div>
                            <div css={s.signupLayout}>
                                <div css={s.signupBox}>
                                    <AuthPageInput type={"text"} name={"name"} placeholder={"사용자이름"} value={name} onChange={nameChange} message={nameMessage}/>
                                    <AuthPageInput type={"text"} name={"username"} placeholder={"아이디"} value={username} onChange={usernameChange} message={usernameMessage}/>
                                    <AuthPageInput type={"password"} name={"password"} placeholder={"비밀번호"} value={password} onChange={passwordChange} message={passwordMessage}/>
                                    <AuthPageInput type={"text"} name={"nickname"} placeholder={"닉네임"} value={nickname} onChange={nicknameChange} message={nicknameMessage}/>
                                    <AuthPageInput type={"text"} name={"email"} placeholder={"이메일"} value={email} onChange={emailChange} message={emailMessage}/>
                                    <div css={s.buttonBox}>
                                        <input id="radio1" type="radio" name="Role" value="student" onClick={handleStudentOnClick}/>
                                        <label htmlFor="radio1">학생</label>
                                        <input id="radio2" type="radio" name="Role" value="teacher" onClick={handleTeacherOnClick}/>
                                        <label htmlFor="radio2">선생님</label>
                                    </div>

                                </div>
                            </div>
                            <div css={s.foot}>
                                <button css={s.signupButton} onClick={handleAddInfo}>다음</button>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div css={s.layout}>
                            <div css={s.logo}>로고</div>
                            <div css={s.signupLayout}>
                                <div css={s.signupBox}>
                                    <AuthPageInput type={"text"} name={"name"} placeholder={"사용자이름"} value={name} onChange={nameChange} message={nameMessage}/>
                                    <AuthPageInput type={"text"} name={"username"} placeholder={"아이디"} value={username} onChange={usernameChange} message={usernameMessage}/>
                                    <AuthPageInput type={"password"} name={"password"} placeholder={"비밀번호"} value={password} onChange={passwordChange} message={passwordMessage}/>
                                    <AuthPageInput type={"text"} name={"nickname"} placeholder={"닉네임"} value={nickname} onChange={nicknameChange} message={nicknameMessage}/>
                                    <AuthPageInput type={"text"} name={"email"} placeholder={"이메일"} value={email} onChange={emailChange} message={emailMessage}/>
                                    <div css={s.buttonBox}>
                                        <input id="radio1" type="radio" name="Role" value="student" onClick={handleStudentOnClick}/>
                                        <label htmlFor="radio1">학생</label>
                                        <input id="radio2" type="radio" name="Role" value="teacher" onClick={handleTeacherOnClick}/>
                                        <label htmlFor="radio2">선생님</label>
                                    </div>

                                </div>
                            </div>
                            <div css={s.foot}>
                                <button css={s.signupButton} onClick={handleAddInfo}>다음</button>
                            </div>
                        </div>
                        <div css={s.layout}>
                            <div css={s.logo}></div>
                            <div css={s.signupLayout}>
                                <div css={s.signupBox}>
                                    <AuthPageInput type={"text"} name={"birthDate"} placeholder={"생년월일"} value={birthDate} onChange={birthDateChange} message={birthDateMessage}/>
                                    <AuthPageInput type={"text"} name={"phoneNumber"} placeholder={"휴대폰번호"} value={phoneNumber} onChange={phoneNumberChange} message={phoneNumberMessage}/>
                                </div>
                            </div>
                            <div css={s.foot}>
                                <button css={s.signupButton} onClick={handleBackInfo}>뒤로</button>
                                <button css={s.signupButton} onClick={handleFirstSignup}>가입하기</button>
                            </div>
                        </div>
                    </>
                }
            </>
        </div>
    );
}

export default SignupPage;