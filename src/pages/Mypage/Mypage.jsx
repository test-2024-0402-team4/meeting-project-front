/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useState } from 'react';

function Mypage(props) {
    const [ content, setContent ] = useState(0);

    const handleApplyReadButtone = () => {
        setContent(() => 0)
    }
 
    const handleBoardReadButtone = () => {
        setContent(() => 1)
    }



    return (
        <div css={s.layout}>
            <div css={s.mypageLayout}>
                <div css={s.profileLayout}>
                    <div css={s.profile}>
                        <div css={s.profileUpdateButton}>
                            <button>
                                정보 수정
                            </button> 
                        </div>
                        <div css={s.profileImgLayout}>
                            asd
                        </div>
                        <div>
                            <span>
                                닉네임
                            </span>
                            <span css={s.roleName}>
                                권한
                            </span>
                        </div>
                        <div>
                            <span>
                                남학생
                            </span>
                            <span>
                                진구
                            </span>
                        </div>
                    </div>
                </div>
                <div css={s.mypageContentLayout}>
                    <div css={s.mypageContentTitle(content)}>
                        <div onClick={() => handleApplyReadButtone}>
                            신청 내역
                        </div>
                        <div onClick={() => handleBoardReadButtone}>
                            내가 쓴 글
                        </div>
                    </div>
                    <div css={s.mypageContent}>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mypage;