/** @jsxImportSource @emotion/react */

import { Link, useSearchParams } from "react-router-dom";
import * as s from "./style";
import { useEffect, useState } from "react";

function AuthFindCheckPage() {

    const [searchParams, setSearchParams] = useSearchParams();

    const [ username, setUsername ] = useState();

    // console.log(searchParams.get("username"))

    useEffect(() => {
        setUsername(searchParams.get("username"));
    },[searchParams]);

    const handleOnClick = () => {
        window.location.replace("/auth/signin");
    }

    

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
                <div css={s.checkBox1}>
                    <span>고객님의 정보와 일치하는 아이디입니다.</span>
                </div>

                <div css={s.checkBox2}>
                    <span>ID: {username}</span>
                </div>

                <div css={s.checkBox3}>
                    <button onClick={handleOnClick}>로그인 하기</button>
                </div>
            </div>
        </div>
    );
}

export default AuthFindCheckPage;