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

    

    return (
        <>
            <div css={s.background}>
                <div css={s.inputBox}>
                    <div css={s.layout}>
                        <li>{username}</li>
                        <Link to={"/auth/signin"}>로그인 하기</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AuthFindCheckPage;