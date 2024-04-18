/** @jsxImportSource @emotion/react */
import { Route, Routes } from "react-router-dom";
import * as s from "./style";

function Homepage(props) {
    return (
        <div css={s.layout}>
            <div css={s.mainLeftItem}>
                <div css={s.dataInputBox}>
                    <div css={s.dataInputItem}>
                        <div >
                            1
                        </div>
                        <div>
                            <span>
                                필수 정보 입력하기
                            </span> 
                            <span>
                                매칭에 필요한 정보들을 입력해주세요!
                            </span> 
                            <span>
                                -&#62; 지금 바로 입력하기
                            </span> 
                        </div>
                    </div>
                </div>
            </div>
            <div css={s.mainRightItem}>
                asd
            </div>
        </div>
    );
}

export default Homepage;