/** @jsxImportSource @emotion/react */
import { Route, Routes } from "react-router-dom";
import * as s from "./style";
import { BsPatchCheck } from "react-icons/bs";

function Homepage(props) {
    return (
        <div css={s.layout}>
            <div css={s.mainLeftItem}>
                <div css={s.leftTitle}>
                    새로운 소식
                </div>
                <div css={s.dataInputBox}>
                    
                    <div css={s.dataInputItem}>
                        <div 
                            style={{backgroundColor: "rgb(248 248 248)"}} 
                            css={s.leftItemTitle}
                            >
                                <BsPatchCheck />
                        </div>
                        <div css={s.leftItemContent}>
                            <div>
                                필수 정보 입력하기
                            </div> 
                            <div>
                                과외에 필요한 정보들을 입력해주세요!
                            </div> 
                            <div>
                                 지금 바로 입력하기 &#62;
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            <div css={s.mainRightLayout}>
                <div css={s.serviceTitle}>
                    서비스 바로가기
                </div>
                <div css={s.mainRightButton}>
                    <div css={s.searchTeacherButton}>
                        과외선생님 찾기
                    </div>
                    <div css={s.searchMypageButton}>
                        마이페이지
                    </div>
                    <div css={s.searchCommunityButton}>
                        학생 광장
                    </div>
                    <div css={s.searchStudyButton}>
                        공부방
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Homepage;