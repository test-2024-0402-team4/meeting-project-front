/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useState } from 'react';
import { FaChevronRight } from "react-icons/fa";
import { useQuery, useQueryClient } from "react-query";
import { getStudentProfile } from "../../apis/api/profileApi";
import { getPrincipalRequest } from "../../apis/api/principal";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getMyPosters } from "../../apis/api/posterApi";
import { useAuthCheck } from "../../hooks/useAuthCheck";
import { useStudentCheck } from "../../hooks/useStudentCheck";
import { useAuthEmailCheck } from "../../hooks/useAuthEmailCheck";
import { IoPersonSharp } from "react-icons/io5";
import { BiSolidBookAlt } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";




function StudentMyPostersPage(props) {
    useAuthCheck();
    useStudentCheck();
    useAuthEmailCheck("student");


    const [searchParams] = useSearchParams();
    const userId = parseInt(searchParams.get("userId"))
    const [posters, setPosters] = useState([]);

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

    const getMyPoster = useQuery(
        ["getMyPoster"],
        async() => await getMyPosters({ userId: userId}),
        {
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: response => {
                console.log("my poster 가져오기");
                console.log(response);
                setPosters(() => response.data)
            },
            onError: error => {
                console.log("에러");
            }
        }
    )

    const handelPageMove = (page) => {
        navigate(`/${page}`);
    }

    return (
        <>
        <div css={s.layout}>
            <div css={s.profileLayout}>
                <div css={s.profile}>
                    <div css={s.profileImgLayout}>
                        <img src={profile?.data?.userImgUrl} />
                    </div>
                    <div>
                        <span>
                            {profile.data?.nickname}
                        </span>
                        <span css={s.roleName}>
                            {profile.data?.roleNameKor}
                        </span>
                    </div>
                    <div>
                        <span css={s.gender}>
                            {profile.data?.genderType}학생
                        </span>
                        <span>
                            {profile.data?.regionName}
                        </span>
                        <div css={s.email}>
                            이메일 : {profile.data?.email}
                        </div>
                    </div>
                </div>
            </div>
            {
                posters?.map(
                    poster => 
                    <div key={poster.posterId} css={s.studentPosterLayout}>
                    <div onClick={() => handelPageMove(`student/myposter?posterId=${poster.posterId}`)} css={s.studentPosters}>
                        <div css={s.studentPosterContainer}>
                            
                            <div css={s.studentPoster}>
                                <div css={s.studentPosterContent}>
                                    <div>{poster.title}</div>

                                    <div>
                                        <span><IoPersonSharp /> </span>
                                        <span>{poster.studentType}</span>
                                        <span> | </span>
                                        <span>{poster.genderType}학생</span>
                                    </div>

                                    <div css={s.subjects}>
                                        <span>
                                            <span><BiSolidBookAlt /> </span>
                                            {poster.subjectName.map((value, index) => (
                                                <span key={index}>
                                                    {value}
                                                    {index !== poster.subjectName.length - 1 && ", "}
                                                </span>
                                            ))}
                                        </span>
                                    </div>

                                    <div>
                                        <span key={"logo"}><IoLocationSharp /> </span>
                                        <span key={"region"}>{poster.regionName}</span>
                                    </div>

                                    <div css={s.studnetinfo}>
                                        {
                                            poster.classType.map((value, index) => <span key={index}>{value}</span>)
                                        }
                                    </div>

                                    {/* <div css={s.buttonLayout}>
                                        <button onClick={() => handelPageMove(`/student/myposter/modify?posterId=${poster.posterId}`)}>수정</button>
                                        <button>삭제</button>
                                    </div> */}
                                </div>

                            </div>
    
                        </div>
                    </div>
                    
                </div>
                )
            }
            
        </div>
    </>

    );
}

export default StudentMyPostersPage;