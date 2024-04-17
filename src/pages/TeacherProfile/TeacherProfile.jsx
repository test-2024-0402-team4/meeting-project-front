/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { getTeacherProfile } from '../../apis/api/teacherProfile';
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
            <button onClick={handleTeacherProfile}>
                요청확인
            </button>
            <div css={s.layout}>
                <div css={s.teacherSidebarLayout}>
                    <button>aaa</button>
                </div>
                <div css={s.teacherInfoLayout}>
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                </div>
            </div>
        </>
    );
}

export default TeacherProfile;