/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { getTeacherProfile } from '../../apis/api/teacherProfile';
import { CiLocationOn } from "react-icons/ci";
import { FiBook } from "react-icons/fi";
import { useParams, useSearchParams } from 'react-router-dom';
import * as s from "./style";


function TeacherProfile() {

    const [searchParams] = useSearchParams();
    const [ teacherProfile, setTeacherProfile] = useState();
    const userId = parseInt(searchParams.get("userId"))
    useEffect(()=> {
         
        getTeacherProfileData();
        console.log(teacherProfile)

    }, [])
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


    const getTeacherProfileData = async () => {
        try {
            const response = await getTeacherProfile({ userId: userId });
            setTeacherProfile(response.data);
            console.log(response);
        } catch (error) {
            console.log("에러", error);
        }
    }


    return (
        <>
            <div css={s.layout}>
                <div css={s.teacherProfileRootLayout}>
                    <div css={s.teacherProfile}>
                        <div css={s.profileHeader}>
                            <div css={s.imgBox}>
                                <img src={teacherProfile?.userImgUrl} alt="" />
                            </div>
                            <div css={s.profileContent}>
                                <div>{teacherProfile?.nickname}</div>
                                <div>{teacherProfile?.universityName}</div>
                                <div>
                                    <div>
                                        <CiLocationOn />
                                    </div>
                                    <div>
                                        <span>
                                            지역 : 
                                        </span>
                                        <span>
                                            {teacherProfile?.regionNames.map(regionName => regionName).join(", ")}
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
                                            {teacherProfile?.subjectNames.map(subjectName => subjectName).join(", ")}
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
                                        {teacherProfile?.genderType}
                                    </div>
                                </div>
                                <div css={s.teacherInfoContent}>
                                    <div>
                                        나이
                                    </div>
                                    <div>
                                        만 {age}세
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
                                        {teacherProfile?.universityName}
                                    </div>
                                </div>
                                <div css={s.teacherInfoContent}>
                                    <div>
                                        학과명
                                    </div>
                                    <div>
                                        {teacherProfile?.departmentName}
                                    </div>
                                </div>
                                <div css={s.teacherInfoContent}>
                                    <div>
                                        재학상태
                                    </div>
                                    <div>
                                        {teacherProfile?.graduateState}
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
                                    {teacherProfile?.regionNames.map(regionName => regionName).join(", ")}
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
                                        {teacherProfile?.subjectNames.map(subjectName => subjectName).join(", ")}
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