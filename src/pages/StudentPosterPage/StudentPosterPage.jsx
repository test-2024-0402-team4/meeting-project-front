import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useSearchParams } from 'react-router-dom';
import { useQuery, useQueryClient } from 'react-query';
import { getPrincipalRequest } from '../../apis/api/principal';
import { getTuteePoster, getTuteeProfile } from '../../apis/api/posterApi';
import { getStudentProfile } from '../../apis/api/profileApi';


function StudentPosterPage(props) {

    const [searchParams] = useSearchParams();
    const posterId = parseInt(searchParams.get("posterId"));
    const [poster, setPoster] = useState();
    const [userId, setUserId] = useState(0);

    const queryClient = useQueryClient();
    const [profile,setProfile] = useState({});

    useEffect(() => {

        getPosterStudentProfile();
        console.log(userId);
    }, [poster])
    console.log(profile);


    // 만나이 계산기
    const birthDate = (profile?.birthDate)
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

    const getStudentMyPoster = useQuery(
        ["getStudentMyPoster"],
        async () => await getTuteePoster({ posterId: posterId }),
        {
            retry: 0,
            refetchOnWindowFocusf: false,
            onSuccess: response => {
                console.log("학생 포스터 가져오기");
                setPoster(response.data);
                setUserId(response.data.userId)
            },
            onError: error => {
                console.log("에러");
            }
        }
    )

    const getPosterStudentProfile = async () => {
        try {
            const response = await getTuteeProfile({userId: userId})
            setProfile(response.data)
        } catch (error) {
            
        }
    }
    
    
    return (
        <div css={s.layout}>
            <div css={s.mypageLayout}>
                <div css={s.profileLayout}>
                    <div css={s.profile}>
                        <div css={s.profileImgLayout}>
                            {profile?.userImgUrl}
                        </div>
                        <div>
                            <span>
                                {profile?.nickname}
                            </span>
                            <span css={s.roleName}>
                                {profile?.roleNameKor}
                            </span>
                        </div>
                        <div>
                            <span>
                                {profile?.genderType}
                            </span>
                            <span>
                                {profile?.regionName}
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
                                        {poster?.genderType}
                                    </div>
                                </div>
                                <div css={s.studentInfoContent}>
                                    <div>
                                        나이
                                    </div>
                                    <div>
                                        만 {age}세
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
                                            {poster?.dateType.map(value => value).join(", ")}
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
                                            {poster?.regionName}   
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
                                            {poster?.subjectName.map(value => value).join(", ")}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div css={s.studentPosterInfo}>
                                        수업 방식
                                    </div>
                                    <div css={s.studentInfoContent}>
                                        <div>
                                            {poster?.classType.map(value => value).join(", ")}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div css={s.studentInfoLayout}>
                                <div>
                                    <div css={s.studentPosterInfo}>
                                        수업 요청 사항
                                    </div>
                                    <div css={s.Postercontent}>
                                        <div>
                                            {poster?.content}
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