import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";


function StudentPosterPage(props) {

    
    return (
        <div css={s.layout}>
            <div css={s.mypageLayout}>
                <div css={s.profileLayout}>
                    <div css={s.profile}>
                        <div css={s.profileImgLayout}>
                            포스터 유저 아이디 이미지
                        </div>
                        <div>
                            <span>
                                포스터닉네임
                            </span>
                            <span css={s.roleName}>
                                포스터유저권한
                            </span>
                        </div>
                        <div>
                            <span>
                                성별
                            </span>
                            <span>
                                지역
                            </span>
                        </div>
                    </div>
                </div>
                <div css={s.studentInfoRootLayout}>
                        <div css={s.studentInfoContainer}>
                            <div css={s.studentInfotitle}>
                                <div>
                                    학생 정보
                                </div>
                            </div>
                            <div css={s.studentInfoLayout}>
                                <div css={s.studentInfo}>
                                    학생 정보
                                </div>
                                <div css={s.studentInfoContent}>
                                    <div>
                                        성별
                                    </div>
                                    <div>
                                        남
                                    </div>
                                </div>
                                <div css={s.studentInfoContent}>
                                    <div>
                                        나이
                                    </div>
                                    <div>
                                        만??세
                                    </div>
                                </div>
                            </div>
                            <div css={s.studentInfoLayout}>
                                <div>
                                    <div css={s.studentPosterInfo}>
                                        대면 수업 가능 요일
                                    </div>
                                    <div css={s.studentInfoContent}>
                                        <div>
                                            요일
                                        </div>    
                                        <div>
                                            월, 화, 수
                                        </div>                                
                                    </div>
                                </div>
                                <div>
                                    <div css={s.studentPosterInfo}>
                                        대면 수업 가능 지역
                                    </div>
                                    <div css={s.studentInfoContent}>
                                        <div>
                                            지역
                                        </div>
                                        <div>
                                            db지역
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div css={s.studentPosterInfo}>
                                        원하는 수업 과목
                                    </div>
                                    <div css={s.studentInfoContent}>
                                        <div>
                                            과목
                                        </div>
                                        <div>
                                            db과목 리스트
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div css={s.studentPosterInfo}>
                                        수업 방식
                                    </div>
                                    <div css={s.studentInfoContent}>
                                        <div>
                                            대면, 비대면
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default StudentPosterPage;