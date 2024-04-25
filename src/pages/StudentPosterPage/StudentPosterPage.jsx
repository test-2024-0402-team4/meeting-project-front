import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useSearchParams } from 'react-router-dom';
import { useQuery, useQueryClient } from 'react-query';
import { getPrincipalRequest } from '../../apis/api/principal';
import { getTuteePoster } from '../../apis/api/posterApi';


function StudentPosterPage(props) {

    const [searchParams] = useSearchParams();
    const posterId = parseInt(searchParams.get("posterId"))
    const [poster, setPoster] = useState();
    console.log(posterId)


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

    const getStudentMyPoster = useQuery(
        ["getStudentMyPoster"],
        async () => await getTuteePoster({ posterId: posterId }),
        {
            retry: 0,
            refetchOnWindowFocusf: false,
            onSuccess: response => {
                console.log("학생 포스터 가져오기")
                console.log(response.data)
                setPoster(response.data)
            },
            onError: error => {
                console.log("에러");
            }
        }
    )


    const test = () => {

    }
    
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