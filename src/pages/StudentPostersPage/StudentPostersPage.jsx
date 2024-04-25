/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React from 'react';
import { RiSearchLine } from "react-icons/ri";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


function StudentPostersPage(props) {

    const navigate = useNavigate();


    return (
        <>
        <div css={s.layout}>
            <div css={s.studentPosterRootLayout}>
                <div css = {s.filterLayout}>
                    <div css={s.filterContentLayout}>
                        필터로 검색
                        <div css={s.filterBox}>
                            <div>
                                과목
                            </div>
                            <FaChevronRight/>
                        </div>
                        <div css={s.filterBox}>
                            <div>
                                지역
                            </div>
                            <FaChevronRight/>
                        </div>
                        <div css={s.filterBox}>
                            <div>
                                요일
                            </div>
                            <FaChevronRight/>
                        </div >
                        <div css={s.filterBox}>
                            <div>
                                수업방식
                            </div>
                            <FaChevronRight/>
                        </div>
                    </div>
                </div>

            </div>
            <div onClick={() => navigate(`/teacher/tutee/poster?posterId=7`)} css={s.studentPosterLayout}>
                <div css={s.studentPosters}>
                    <div css={s.studentPosterContainer}>
                        <div css={s.studentPoster}>
                            <div css={s.studentPosterContent}>
                                <div>포스터 제목</div>
                                <div css={s.subjects}>
                                    <span>과목</span>
                                    <span>과목</span>
                                    <span>과목</span>
                                </div>
                                <div css={s.studnetinfo}>
                                    <span>대학생</span>
                                    <span>성별</span>
                                    <span>지역</span>
                                    <span>수업방식</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                
            </div>
        </div>
    </>
    );
}

export default StudentPostersPage;