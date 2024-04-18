/** @jsxImportSource @emotion/react */

import * as s from "./style";
import { useSignupInput } from '../../hooks/useSignupInput';
import { findIdRequest, signinRequest } from "../../apis/api/signin";
import AuthPageInput from "../../components/AuthPageInput/AuthPageInput";
import { Link } from "react-router-dom";
import { useQueryClient } from "react-query";

function SigninPage() {

    const [ username, usernameChange ] = useSignupInput();
    const [ password, passwordChange ] = useSignupInput();

    const queryClient = useQueryClient();

    const handleSignin = () => {
        signinRequest({
            username,
            password
        }).then(response => {
            console.log(response.data);
            const accessToken = response.data;
            localStorage.setItem("AccessToken", accessToken)
            alert("로그인 성공");
            // window.location.replace("/");
        }).catch(error => {
            alert(error.response.data);
            console.log(error.response.data);
        })
    }


    return (
        <>
            <div css={s.background}>
                <div css={s.layout}>
                    <AuthPageInput type={"text"} name={"username"} placeholder={"아이디"} value={username} onChange={usernameChange}/>
                    <AuthPageInput type={"password"} name={"password"} placeholder={"비밀번호"} value={password} onChange={passwordChange}/>

                    <div css={s.buttonBox1}>
                        <button onClick={handleSignin}>로그인</button>
                    </div>
                    <div css={s.buttonBox2}>
                        <Link to={"/auth/findId"}>아이디 찾기</Link>
                        <Link to={"/auth/findPassword"}>비밀번호 찾기</Link>

                    </div>
                    <div css={s.buttonBox3}>
                        <Link to={"/auth/signup"}>회원가입</Link>

                    </div>
                </div>

                <div css={s.oauth2box}>
                    <ul css={s.oauth2Site}>
                        <li>
                            <a href="http://localhost:8080/oauth2/authorization/kakao" target="_blank" rel="noopener noreferrer">
                                <img src="" alt="" />
                                <span>카카오계정 로그인</span>
                            </a>
                        </li>
                        <li>
                            <a href="http://localhost:8080/oauth2/authorization/naver" target="_blank" rel="noopener noreferrer">
                                <img src="" alt="" />
                                <span>네이버 로그인</span>
                            </a>
                        </li>
                        <li>
                            <a href="http://localhost:8080/oauth2/authorization/google" target="_blank" rel="noopener noreferrer">
                                <img src="" alt="" />
                                <span>구글 로그인</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
        
    );
}

export default SigninPage;