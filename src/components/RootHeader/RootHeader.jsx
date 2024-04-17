/** @jsxImportSource @emotion/react */
import * as s from "./style";

function RootHeader({children}) {

    return (
        <div css={s.headerLayout}>
            <div css={s.header}>
                <div css={s.logoLayout}>
                    로고 권한
                </div>
                <div>
                    로그아웃 내 정보 고객센터
                </div>
            </div>
            {children}
        </div>
    );
}

export default RootHeader;