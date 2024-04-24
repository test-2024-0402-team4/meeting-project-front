/** @jsxImportSource @emotion/react */

import * as s from "./style";
import { Link, useSearchParams } from 'react-router-dom';
import instance from '../../apis/utils/instance';
import { useQueryClient } from 'react-query';

function OAuth2Page() {

    const [ searchParams ] = useSearchParams();
    const name = searchParams.get("name");
    const provider = searchParams.get("provider");

    return (
        <div css={s.layout}>
            <div css={s.header}>
                <span>계정 통합하기</span>
                <div css={s.headerBox1}>
                    <span>아직 계정이 없으신가요?</span>
                    <Link to={"/auth/signup"}>가입하기</Link>
                </div>
            </div>

            <div css={s.body}>
                <div css={s.bodyBox1}>
                    <h1>계정 통합로그인</h1>
                    <div css={s.linkBox}>
                        <Link to={`/auth/oauth2/merge?name=${name}&provider=${provider}`}>계정 통합하기</Link>
                    </div>
                </div>

                <div css={s.bodyBox2}>
                    <h1>회원가입</h1>
                    <div css={s.linkBox}>
                        <Link to={`/auth/oauth2/signup?name=${name}&provider=${provider}`}>회원가입하기</Link>
                    </div>
                </div>


            </div>

        </div>
    );
}

export default OAuth2Page;