/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { getTeacherProfile } from '../../apis/api/teacherProfile';
import { CiLocationOn } from "react-icons/ci";
import { FiBook } from "react-icons/fi";
import { useParams, useSearchParams } from 'react-router-dom';
import * as s from "./style";


function TeacherProfile() {

    const [searchParams] = useSearchParams();
    const [ teacherProfile, setTeacherProfile] = useState();

    const handleTeacherProfile = async () => {
        await getTeacherProfile(searchParams.get("userId"))
        .then(response => {
            setTeacherProfile(() => response.data)
        })
    }  
    // 만나이 계산기
    const birthDate = (teacherProfile?.birthDate)
    const year = birthDate?.substr(0, 4)
    const month = birthDate?.substr(4, 2)
    const day = birthDate?.substr(6, 2)

    const today = new Date();
    const birthDay = new Date(parseInt(year), parseInt(month), parseInt(day));

    let age = today.getFullYear() - birthDay.getFullYear();
    const m = today.getMonth() - birthDay.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDay.getDate())) {
        age--;
    }

    console.log(age)

    return (
        <>
            <div css={s.layout}>
                <div css={s.teacherProfileRootLayout}>
                    <div css={s.teacherProfile}>
                        <div css={s.profileHeader}>
                            <div css={s.imgBox}>
                                이미지
                            </div>
                            <div css={s.profileContent}>
                                <div>닉네임</div>
                                <div>db 대학 데이터</div>
                                <div>
                                    <div>
                                        <CiLocationOn />
                                    </div>
                                    <div>
                                        <span>
                                            지역 :
                                        </span>
                                        <span>
                                            db지역 데이터
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <FiBook />
                                    </div>
                                    <div>
                                        <span>
                                            과목 :
                                        </span>
                                        <span>
                                            db과목 데이터
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <button css={s.applyButton}>
                                과외 신청하기
                            </button>
                        </div>
                    </div>
                </div>
                    <div css={s.teacherInfoRootLayout}>
                        <div css={s.teacherInfoContainer}>
                            <div css={s.teacherInfotitle}>
                                <div>
                                    선생님 정보
                                </div>
                            </div>
                            <div css={s.teacherInfoLayout}>
                                <div css={s.teacherInfo}>
                                    선생님 정보
                                </div>
                                <div css={s.teacherInfoContent}>
                                    <div>
                                        성별
                                    </div>
                                    <div>
                                        남
                                    </div>
                                </div>
                                <div css={s.teacherInfoContent}>
                                    <div>
                                        나이
                                    </div>
                                    <div>
                                        만??세
                                    </div>
                                </div>
                            </div>
                            <div css={s.teacherInfoLayout}>
                                <div css={s.teacherInfo}>
                                    대학 정보
                                </div>
                                <div css={s.teacherInfoContent}>
                                    <div>
                                        대학명
                                    </div>
                                    <div>
                                        db대학교 이름
                                    </div>
                                </div>
                                <div css={s.teacherInfoContent}>
                                    <div>
                                        학과명
                                    </div>
                                    <div>
                                        db학과 이름
                                    </div>
                                </div>
                                <div css={s.teacherInfoContent}>
                                    <div>
                                        재학상태
                                    </div>
                                    <div>
                                        db 재학상태
                                    </div>
                                </div>
                            </div>
                            <div css={s.teacherInfoLayout}>
                                <div css={s.teacherInfo}>
                                    대면 수업 가능 지역
                                </div>
                                <div css={s.teacherInfoContent}>
                                    <div>
                                        지역
                                    </div>
                                    <div>
                                        db지역 리스트
                                    </div>
                                </div>
                            </div>
                            <div css={s.teacherInfoLayout}>
                                <div css={s.teacherInfo}>
                                    수업 과목
                                </div>
                                <div css={s.teacherInfoContent}>
                                    <div>
                                        과목
                                    </div>
                                    <div>
                                        db과목 리스트
                                    </div>
                                </div>
                            </div>
                            <div css={s.teacherInfoLayout}>
                                <div css={s.teacherInfo}>
                                    수업 소개
                                </div>
                                <div css={s.teacherInfoContent}>
                                    <div>
                                        한줄 소개
                                    </div>
                                    <div>
                                        수업방식 및 진행 방향 소개
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    );
}

export default TeacherProfile;