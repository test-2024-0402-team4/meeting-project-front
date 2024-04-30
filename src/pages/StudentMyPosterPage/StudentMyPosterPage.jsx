/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useQuery, useQueryClient } from "react-query";
import React, { useState } from 'react';
import { getPrincipalRequest } from "../../apis/api/principal";
import { getStudentProfile } from "../../apis/api/profileApi";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getMyPoster, getMyposter, studentMyPosterDeleteRequest } from "../../apis/api/posterApi";

function StudentMyPosterPage(props) {

    const navigate = useNavigate();
    
    const [searchParams] = useSearchParams();
    const posterId = parseInt(searchParams.get("posterId"))
    const [poster, setPoster] = useState();
    const [ userId, setUserId ] = useState();

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

    const studentProfileQuery = useQuery(
        ["studentProfileQuery"],
        async() => await getStudentProfile(principalQuery.data.data.userId),
        {
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: response => {
                // console.log("프로필 가져오기");
                // console.log(response);
                setProfile(response);
            },
            onError: error => {
                console.log("에러");
            },
            enabled: !!principalQuery?.data?.data
        }
    )
    const getStudentMyPoster = useQuery(
        ["getStudentMyPoster"],
        async () => await getMyPoster({ posterId: posterId}),
        {
            retry: 0,
            refetchOnWindowFocusf: false,
            onSuccess: response => {
                // console.log("마이포스터 가져오기")
                // console.log(response.data)
                // console.log(response.data.userId)
                setUserId(response.data.userId);
                setPoster(response.data)
            },
            onError: error => {
                console.log("에러");
            }
        }
    )

    const handleModifyOnClick = () => {
        window.location.replace(`/student/myposter/modify?posterId=${poster.posterId}`);
    }

    const handleDeleteOnClick = () => {
        studentMyPosterDeleteRequest(posterId)
        .then(response => {
            alert("삭제가 완료되었습니다");
            navigate(`/student/myposters?userId=${userId}`);
        })
    }

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
                            <button onClick={handleModifyOnClick}>수정</button>
                            <button onClick={handleDeleteOnClick}>삭제</button>
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
                                학생 타입
                            </div>
                            <div>
                                {poster?.studentType}
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
                </div>
            </div>
        </div>
    );
}

export default StudentMyPosterPage;