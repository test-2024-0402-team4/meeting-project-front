/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useQuery, useQueryClient } from "react-query";
import React, { useState } from 'react';
import { getPrincipalRequest } from "../../apis/api/principal";
import { getStudentProfile } from "../../apis/api/profileApi";
import { useNavigate } from "react-router-dom";

function StudentMyPosterPage(props) {
    const navigate = useNavigate();

    const queryClient = useQueryClient();
    const [profile,setProfile] = useState({});
    const principalQuery = useQuery(
        ["principalQuery"],
        getPrincipalRequest,
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                console.log("principal Success");
            },
            onError: error => {
                console.log("principal Error");
            }
        }
    );
    const handelPageMove = (page) => {
        navigate(`/${page}`);
    }

   
    
    const studentProfileQuery = useQuery(
        ["studentProfileQuery"],
        async() => await getStudentProfile(principalQuery.data.data.userId),
        {
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: response => {
                console.log("프로필 가져오기");
                console.log(response);
                setProfile(response);
            },
            onError: error => {
                console.log("에러");
            },
            enabled: !!principalQuery?.data?.data
        }
    )

    return (
        <div css={s.layout}>
            <div css={s.profileLayout}>
                <div css={s.profile}>
                    <div css={s.profileUpdateButton}>
                        <button>
                            정보 수정
                        </button> 
                    </div>
                    <div css={s.profileImgLayout}>
                        <img src={profile?.data?.userImgUrl} />
                    </div>
                    <div>
                        <span>
                            {profile.data?.nickname}
                        </span>
                            {profile.data?.roleNameKor}
                        <span css={s.roleName}>
                            {profile.data?.roleNameKor}
                        </span>
                    </div>
                    <div>
                        <span>
                            {profile.data?.genderType}학생
                        </span>
                        <span>
                            {profile.data?.regionName}
                        </span>
                    </div>
                </div>
            </div>
            <div  css={s.studentInfoRootLayout}>
                <div css={s.studentInfoContainer}>
                    <div css={s.studentInfotitle}>
                        <div>
                            학생 정보
                        </div>
                        <div css={s.buttonLayout}>
                            <button>수정</button>
                            <button>삭제</button>
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
    );
}

export default StudentMyPosterPage;