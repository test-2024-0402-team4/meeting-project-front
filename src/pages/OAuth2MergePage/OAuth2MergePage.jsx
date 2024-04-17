/** @jsxImportSource @emotion/react */

import { useMutation } from "react-query";
import { useSignupInput } from "../../hooks/useSignupInput";
import * as s from "./style";
import { oAuth2MergeRequest } from "../../apis/api/signup";
import AuthPageInput from "../../components/AuthPageInput/AuthPageInput";
import { useSearchParams } from "react-router-dom";

function OAuth2MergePage() {

    const [ username, usernameChange ] = useSignupInput();
    const [ password, passwordChange ] = useSignupInput();

    const [ searchParams ] = useSearchParams();

    const oAuth2MergeMutation = useMutation({
        mutationKey: "oAuth2MergeMutation",
        mutationFn: oAuth2MergeRequest,
        onSuccess: response => {
            alert("계정 통합이 완료되었습니다.\n다시 로그인 해주세요.");
            window.location.replace("/auth/signin");
        },
        onError: error => {
            alert(error.response.data);
        }
    });

    const handleSignin = () => {
        oAuth2MergeMutation.mutate({
            username,
            password,
            oauth2Name: searchParams.get("name"),
            providerName: searchParams.get("provider")
        });
    }


    return (
        <>
            <div>
                <h2>계정 통합로그인</h2>
                <button onClick={handleSignin}>로그인 하기</button>
            </div>
            <AuthPageInput type={"text"} name={"username"} placeholder={"아이디"} value={username} onChange={usernameChange}/>
            <AuthPageInput type={"password"} name={"password"} placeholder={"비밀번호"} value={password} onChange={passwordChange}/>
        </>
    );
}

export default OAuth2MergePage;