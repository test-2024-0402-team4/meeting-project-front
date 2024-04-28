/** @jsxImportSource @emotion/react */

import * as s from "./style";
import { useSignupInput } from '../../hooks/useSignupInput';
import { signinRequest } from "../../apis/api/signin";
import AuthPageInput from "../../components/AuthPageInput/AuthPageInput";
import { Link } from "react-router-dom";
import { useQueryClient } from "react-query";
import { SiNaver } from "react-icons/si";
import { SiKakaotalk } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";

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

            localStorage.setItem("AccessToken", accessToken);
            window.location.replace("/");

        }).catch(error => {
            alert(error.response.data);
            console.log(error.response.data);
        })
    }


    return (
        <div css={s.layout}>
            <div css={s.header}>
                <span>로그인</span>
                <div css={s.headerBox1}>
                    <span>아직 계정이 없으신가요? </span>
                    <Link to={"/auth/signup"}>가입하기</Link>
                </div>
            </div>

            <div css={s.body}>
                <div css={s.bodyBox1}>
                    <div>
                        <AuthPageInput type={"text"} name={"username"} placeholder={"아이디"} value={username} onChange={usernameChange}/>
                        <AuthPageInput type={"password"} name={"password"} placeholder={"비밀번호"} value={password} onChange={passwordChange}/>
                       
                        <button onClick={handleSignin}>로그인하기</button>

                        <div css={s.linkBox}>
                            <Link to={"/auth/findId"}>아이디 찾기</Link>
                            <Link to={"/auth/findPassword"}>비밀번호 찾기</Link>
                        </div>
                    </div>
                </div>

                <div css={s.bodyLine}>
                    <div css={s.line1}></div>
                    <div css={s.line2}>
                        <span>또는</span>
                    </div>
                    <div css={s.line3}></div>
                </div>

                <div css={s.bodyBox2}>
                    <div >

                        <div css={s.kakao}>
                            <div css={s.kakaoBox1}>
                                <a href="http://localhost:8080/oauth2/authorization/kakao" css={s.kakaoImgBox}>
                                    <SiKakaotalk />
                                </a>
                            </div>
                            <div css={s.kakaoBox2}>
                                <a href="http://localhost:8080/oauth2/authorization/kakao">
                                <button>Kakao 로그인</button>
                                </a>
                            </div>
                        </div>


                        <div css={s.naver}>
                            <div css={s.naverBox1}>
                                <a href="http://localhost:8080/oauth2/authorization/naver" css={s.naverImgBox}>
                                    <SiNaver />
                                </a>
                            </div>
                            <div css={s.naverBox2}>
                                <a href="http://localhost:8080/oauth2/authorization/naver">
                                <button>Naver 로그인</button>
                                </a>
                            </div>
                        </div>

                        <div css={s.google}>
                            <div css={s.googleBox1}>
                                <a href="http://localhost:8080/oauth2/authorization/google" css={s.googleImgBox}>
                                    <FcGoogle />
                                </a>
                            </div>
                            <div css={s.googleBox2}>
                                <a href="http://localhost:8080/oauth2/authorization/google">
                                <button>Google 로그인</button>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>  
    );
}

export default SigninPage;